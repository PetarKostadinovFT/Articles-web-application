

import { Member, MemberObject, IArticle } from "../interfaces/artticleInterface";

export function getImageUrl(article: IArticle): string {
  let imageUrl = "";

  if (Array.isArray(article.mainImage.members)) {
    if (article.mainImage.members.length > 0) {
      imageUrl = (article.mainImage.members[0] as Member).binaryUrl;
    }
  } else if (article.mainImage.members) {
    imageUrl = (article.mainImage.members as MemberObject).binaryUrl;
  }

  return imageUrl;
}
