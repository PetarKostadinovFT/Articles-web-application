import { Member, MemberObject, IArticle } from "../interfaces/artticleInterface";

export function getImageUrl(article: IArticle): string {
  let imageUrl = "";

  if (article &&article.mainImage && article.mainImage.members) {
    // Check if members is an array and has at least one element
    if (Array.isArray(article.mainImage.members) && article.mainImage.members.length > 0) {
      imageUrl = (article.mainImage.members[0] as Member).binaryUrl;
    }
    // Check if members is an object
    else if (typeof article.mainImage.members === 'object') {
      imageUrl = (article.mainImage.members as MemberObject).binaryUrl;
    }
  }

  return imageUrl;
}
