import { getImageUrl } from "./getImageUrl";
import { fetchDetails } from "./fetchDetails";
import { IArticle } from "../interfaces/artticleInterface";

export async function fetchArticleDetails(id: string): Promise<IArticle[]> {
  try {
    const response = await fetchDetails(id);
    return response;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export function extractTextFromXML(node: Node, count: number): string {
  let text = "";

  if (node.nodeType === Node.TEXT_NODE) {
    text += node.textContent;
  }

  if (node.childNodes.length > 0) {
    for (let i = 0; i < node.childNodes.length; i++) {
      text += extractTextFromXML(node.childNodes[i], count);
    }
  }
  return text;
}

export function prepareBodyText(selectedArticle: IArticle | null): { [key: string]: string } {
  const bodyText: { [key: string]: string } = {};

  if (selectedArticle && selectedArticle.bodyXML) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(selectedArticle.bodyXML, "application/xml");

    let tagCount = 1;

    const rootNode = xmlDoc.documentElement;
    for (let i = 0; i < rootNode.childNodes.length; i++) {
      const tagText = extractTextFromXML(rootNode.childNodes[i], tagCount);
      if (tagText) {
        bodyText[`bodyText${tagCount}`] = tagText.trim();
        tagCount++;
      }
    }
  }

  return bodyText;
}

export function getImageUrlOrDefault(selectedArticle: IArticle | null): string {
  return selectedArticle ? getImageUrl(selectedArticle) : "/images/screenshot.png";
}
