import { Member, MemberObject, IArticle } from "../interfaces/artticleInterface";

export function getImageUrl(article: IArticle): string {
  let imageUrl = "";

  if (article &&article.mainImage && article.mainImage.members) {
   
    if (Array.isArray(article.mainImage.members) && article.mainImage.members.length > 0) {
      imageUrl = (article.mainImage.members[0] as Member).binaryUrl;
    }
  
    else if (typeof article.mainImage.members === 'object') {
      imageUrl = (article.mainImage.members as MemberObject).binaryUrl;
    }
  }

  return imageUrl;
}
