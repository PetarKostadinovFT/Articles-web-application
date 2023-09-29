import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticleDetails } from "../utils/fetchArticleDetails";
import { getImageUrl } from "../utils/getImageUrl";
import { IArticle } from "../interfaces/artticleInterface";

function Details() {
  const [article, setArticle] = useState<IArticle[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await fetchArticleDetails(id);

        setArticle(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchArticle();
  }, [id]);

  const selectedArticle = article.length > 0 ? article[0] : null;
  const imageUrl = selectedArticle ? getImageUrl(selectedArticle) : "";
  const title = selectedArticle ? selectedArticle.title : "";
  return (
    <>
      <div
        className="o-teaser o-teaser--package o-teaser--hero o-teaser--centre o-teaser--has-image js-teaser"
        data-id=""
      >
        <div className="o-teaser__content">
          <div className="o-teaser__meta">
            <Link
              className="o-teaser__tag"
              data-trackable="teaser-tag"
              to="https://www.ft.com/magazine"
              aria-label="Category: FT Magazine"
            >
              FT Magazine
            </Link>
          </div>
          <div className="o-teaser__heading">
            <p>{title}</p>
            <p className="o-layout__main o-layout-typography">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit
              beatae saepe adipisci consectetur. Alias nesciunt aliquam saepe?
              Itaque ratione delectus hic dignissimos ad. Quaerat consectetur
              quam incidunt odit unde natus, quos recusandae quo? Cum adipisci
              ex rem maxime beatae quos autem magni. Dignissimos, consequuntur
              debitis fuga hic deserunt natus ducimus ad culpa vero? Voluptatum,
              similique accusamus aut, quidem nemo veniam amet est repellendus
              corporis dolor odio tempore placeat impedit odit officiis id
              quibusdam labore, reiciendis autem vero eaque quod quam fuga
              assumenda! Ad error unde dolorum quaerat ipsa quae odit delectus
              omnis illum voluptatibus. Explicabo perferendis voluptas
              consequuntur ea.
            </p>
          </div>
        </div>
        <div className="o-teaser__image-container js-teaser-image-container">
          <div
            className="o-teaser__image-placeholder"
            style={{ paddingBottom: "56.2500%" }}
          >
            <img className="o-teaser__image" src={imageUrl} alt="" />
          </div>
        </div>
      </div>

      <div className="o-layout" data-o-component="o-layout">
        <div className="o-layout__main o-layout-typography">
          <div data-o-component="o-syntax-highlight"></div>
          <div className="o-layout__main o-layout-typography">
            <div data-o-component="o-syntax-highlight">
              <h1 id="an-example-documentation-layout">Documentation Layout</h1>
              <div className="o-editorial-layout-wrapper">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  velit beatae saepe adipisci consectetur. Alias nesciunt
                  aliquam saepe? Itaque ratione delectus hic dignissimos ad.
                  Quaerat consectetur quam incidunt odit unde natus, quos
                  recusandae quo? Cum adipisci ex rem maxime beatae quos autem
                  magni. Dignissimos, consequuntur debitis fuga hic deserunt
                  natus ducimus ad culpa vero? Voluptatum, similique accusamus
                  aut, quidem nemo veniam amet est repellendus corporis dolor
                  odio tempore placeat impedit odit officiis id quibusdam
                  labore, reiciendis autem vero eaque quod quam fuga assumenda!
                  Ad error unde dolorum quaerat ipsa quae odit delectus omnis
                  illum voluptatibus. Explicabo perferendis voluptas
                  consequuntur ea.
                </p>
                <p>
                  Quas dolorem harum tempora omnis veniam ut libero laboriosam
                  fugiat accusamus cupiditate saepe accusantium error minus nam
                  assumenda quod incidunt, obcaecati soluta consequatur impedit
                  totam asperiores quasi optio eius? Temporibus, earum. Odit
                  modi animi in eligendi. Dolores, quidem possimus debitis optio
                  reiciendis, nulla corrupti animi maiores exercitationem ea
                  temporibus at earum labore unde doloremque voluptas soluta!
                  Autem, quasi totam rem obcaecati quae eum deleniti? Soluta
                  praesentium velit libero voluptate. Neque adipisci sunt id
                  sapiente sit iure autem optio exercitationem cum at hic harum
                  rem, totam deserunt dolorum, necessitatibus natus. Sequi,
                  consequuntur voluptates. Adipisci hic inventore dolorum
                  laudantium ullam, aspernatur explicabo?
                </p>
                <p>
                  Veritatis dicta veniam odit provident rerum aperiam ipsa
                  ducimus architecto voluptate optio, perferendis quidem beatae
                  magnam ut est facilis,
                  <strong>
                    <i>
                      quos vitae
                      <sup>sup</sup>
                      neque facere
                    </i>
                  </strong>
                  quisquam. Culpa animi, recusandae tempore maxime incidunt
                  molestias, dolore nulla facilis porro illo mollitia
                  consectetur modi ex iusto exercitationem dolorem voluptates
                  nostrum nisi fuga laboriosam sequi beatae! Incidunt doloremque
                  commodi ipsam adipisci! Officiis quod eum aliquam molestiae
                  facere beatae nisi nam esse veniam delectus dolore harum
                  suscipit, odit voluptatibus officia temporibus ducimus!
                  Officia cumque voluptates ipsa saepe perferendis ab impedit
                  labore, tempore, deserunt ducimus at? Doloremque ea
                  consequatur temporibus nisi nulla! Vero laudantium quas
                  molestiae commodi deleniti.
                </p>
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi ullam vero cum voluptatem eius dolor?
                  </p>
                  <cite>Lorem, ipsum.</cite>
                </blockquote>
                <p>
                  <strong>Some strong copy</strong>
                  hic voluptatum, esse optio recusandae numquam nostrum magni,
                  quibusdam animi earum tenetur sit eius perspiciatis. Quas
                  quidem atque id? Est architecto exercitationem, voluptate sint
                  beatae repudiandae vitae neque nostrum, ut tempora eligendi
                  blanditiis saepe praesentium delectus omnis molestiae
                  quibusdam aliquam rerum deleniti molestias quas, maiores
                  consequatur reprehenderit! Dolores libero tempore incidunt
                  dolorem distinctio! Sapiente, repellat, dicta reiciendis velit
                  in illo ducimus ullam, laborum nam obcaecati mollitia nulla.
                  Saepe ipsa fugit fuga non nihil praesentium commodi dolorem
                  nesciunt, ducimus quod deleniti aperiam vel distinctio cumque
                  dicta dolor pariatur enim dolore illum.
                </p>
                <h3>heading 3</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <em>Some italic copy</em>
                  adipisci consectetur. Alias nesciunt aliquam saepe? Itaque
                  ratione delectus hic dignissimos ad. Quaerat consectetur quam
                  incidunt odit unde natus, quos recusandae quo? Cum adipisci ex
                  rem maxime beatae quos autem magni. Dignissimos, consequuntur
                  debitis fuga hic deserunt natus ducimus ad culpa vero?
                  Voluptatum, similique accusamus aut, quidem nemo veniam amet
                  est repellendus corporis dolor odio tempore placeat impedit
                  odit officiis id quibusdam labore, reiciendis autem vero eaque
                  quod quam fuga assumenda! Ad error unde dolorum quaerat ipsa
                  quae odit delectus omnis illum voluptatibus. Explicabo
                  perferendis voluptas consequuntur ea.
                </p>
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, quaerat!
                  </p>
                  <footer>
                    <cite>Lorem, ipsum dolor.</cite>
                  </footer>
                </blockquote>
                <p>
                  Quas
                  <sup>sup</sup>
                  and dolorem
                  <sub>sub</sub>
                  harum tempora omnis veniam ut libero laboriosam fugiat
                  accusamus cupiditate saepe accusantium error minus nam
                  assumenda quod incidunt, obcaecati soluta consequatur impedit
                  totam asperiores quasi optio eius? Temporibus, earum. Odit
                  modi animi in eligendi. Dolores, quidem possimus debitis optio
                  reiciendis, nulla corrupti animi maiores exercitationem ea
                  temporibus at earum labore unde doloremque voluptas soluta!
                  Autem, quasi totam rem obcaecati quae eum deleniti? Soluta
                  praesentium velit libero voluptate. Neque adipisci sunt id
                  sapiente sit iure autem optio exercitationem cum at hic harum
                  rem, totam deserunt dolorum, necessitatibus natus. Sequi,
                  consequuntur voluptates. Adipisci hic inventore dolorum
                  laudantium ullam, aspernatur explicabo?
                </p>
                <p>
                  Veritatis dicta veniam odit provident rerum aperiam ipsa
                  ducimus architecto voluptate optio, perferendis quidem beatae
                  magnam ut est facilis, quos vitae neque facere quisquam. Culpa
                  animi, recusandae tempore maxime incidunt molestias, dolore
                  nulla facilis porro illo mollitia consectetur modi ex iusto
                  exercitationem dolorem voluptates nostrum nisi fuga laboriosam
                  sequi beatae! Incidunt doloremque commodi ipsam adipisci!
                  Officiis quod eum aliquam molestiae facere beatae nisi nam
                  esse veniam delectus dolore harum suscipit, odit voluptatibus
                  officia temporibus ducimus! Officia cumque voluptates ipsa
                  saepe perferendis ab impedit labore, tempore, deserunt ducimus
                  at? Doloremque ea consequatur temporibus nisi nulla! Vero
                  laudantium quas molestiae commodi deleniti.
                </p>
                <ol>
                  <li>Lorem ipsum adipiscing elit.</li>
                  <li>Sed feugiat turpis at massa tristique.</li>
                  <li>Curabitu r accumsan elit luctus.</li>
                </ol>
                <ul>
                  <li>Lorem ipsum adipiscing elit.</li>
                  <li>Sed feugiat turpis at massa tristique.</li>
                  <li>Curabitu r accumsan elit luctus.</li>
                </ul>
                <h4>heading 4</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  velit beatae saepe adipisci consectetur. Alias nesciunt
                  aliquam saepe? Itaque ratione delectus hic dignissimos ad.
                  Quaerat consectetur quam incidunt odit unde natus, quos
                  recusandae quo? Cum adipisci ex rem maxime beatae quos autem
                  magni. Dignissimos, consequuntur debitis fuga hic deserunt
                  natus ducimus ad culpa vero? Voluptatum, similique accusamus
                  aut, quidem nemo veniam amet est repellendus corporis dolor
                  odio tempore placeat impedit odit officiis id quibusdam
                  labore, reiciendis autem vero eaque quod quam fuga assumenda!
                  Ad error unde dolorum quaerat ipsa quae odit delectus omnis
                  illum voluptatibus. Explicabo perferendis voluptas
                  consequuntur ea.
                </p>
                <p>
                  Quas dolorem harum tempora omnis veniam ut libero laboriosam
                  fugiat accusamus cupiditate saepe accusantium error minus nam
                  assumenda quod incidunt, obcaecati soluta consequatur impedit
                  totam asperiores quasi optio eius? Temporibus, earum. Odit
                  modi animi in eligendi. Dolores, quidem possimus debitis optio
                  reiciendis, nulla corrupti animi maiores exercitationem ea
                  temporibus at earum labore unde doloremque voluptas soluta!
                  Autem, quasi totam rem obcaecati quae eum deleniti? Soluta
                  praesentium velit libero voluptate. Neque adipisci sunt id
                  sapiente sit iure autem optio exercitationem cum at hic harum
                  rem, totam deserunt dolorum, necessitatibus natus. Sequi,
                  consequuntur voluptates. Adipisci hic inventore dolorum
                  laudantium ullam, aspernatur explicabo?
                </p>
                <h5>heading 5</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  velit beatae saepe adipisci consectetur. Alias nesciunt
                  aliquam saepe? Itaque ratione delectus hic dignissimos ad.
                  Quaerat consectetur quam incidunt odit unde natus, quos
                  recusandae quo? Cum adipisci ex rem maxime beatae quos autem
                  magni. Dignissimos, consequuntur debitis fuga hic deserunt
                  natus ducimus ad culpa vero? Voluptatum, similique accusamus
                  aut, quidem nemo veniam amet est repellendus corporis dolor
                  odio tempore placeat impedit odit officiis id quibusdam
                  labore, reiciendis autem vero eaque quod quam fuga assumenda!
                  Ad error unde dolorum quaerat ipsa quae odit delectus omnis
                  illum voluptatibus. Explicabo perferendis voluptas
                  consequuntur ea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
