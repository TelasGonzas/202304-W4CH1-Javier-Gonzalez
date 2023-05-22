import { gentlemanData } from "../data/caspa.mock";

export type Caspa = {
  id: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
};

export function Info() {
  const professionTitle = "Profesión:";
  const statusTitle = "Status:";
  const socialTitle = "Twitter:";

  return (
    <>
      {gentlemanData.map(
        ({
          id,
          name,
          status,
          profession,
          twitter,
          picture,
          alternativeText,
          selected,
        }: Caspa) => (
          <ul className="gentlemen">
            <li className="gentleman">
              <div className="gentleman__avatar-container">
                <img
                  className="gentleman__avatar"
                  src={picture}
                  alt={alternativeText}
                />
                <span className="gentleman__initial">F</span>
              </div>
              <div className="gentleman__data-container">
                <h2 className="gentleman__name">{name}</h2>
                <ul className="gentleman__data-list">
                  <li className="gentleman__data">
                    <span className="gentleman__data-label">
                      {professionTitle}
                    </span>
                    {profession}
                  </li>
                  <li className="gentleman__data">
                    <span className="gentleman__data-label">{statusTitle}</span>
                    {status}
                  </li>
                  <li className="gentleman__data">
                    <span className="gentleman__data-label">{socialTitle}</span>{" "}
                    {twitter}
                  </li>
                </ul>
              </div>
              <i className="icon gentleman__icon fas fa-check"></i>
              <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
            </li>
          </ul>
        )
      )}
    </>
  );
}
