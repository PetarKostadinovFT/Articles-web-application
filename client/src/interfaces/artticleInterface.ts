export interface IArticle {
        id: string;
        type: string;
        bodyXML: string;
        title: string;
        standfirst: string;
        byline: string;
        mainImage: {
          brands: string[];
          canBeSyndicated: string;
          description: string;
          id: string;
          members?: (Member[] | MemberObject)[] | MemberObject; 
        };
        requestUrl: string;
        brands: string[];
        types: string[];
        annotations: string[];
        curatedRelatedContent: string[];
        webUrl: string;
      }
      
     export interface Member {
        binaryUrl: string;
      }
      
     export interface MemberObject {
        binaryUrl: string;
      }
      