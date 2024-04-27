import { differenceInDays, differenceInHours, differenceInMinutes } from "date-fns";
import { FunctionComponent, useCallback, useEffect, useState } from "react";

interface ProjectData {
  id: number;
  name: string;
  description: string;
  creationDate: Date;
  deadLine: string;
  groupId: number;
  freelancerId: number;
  clientId: number;
  status: String;
  addedFile: boolean;
  requestQuotation: boolean;
  workingPreference: String;
  totalPrice?: number;
}


interface FrameComponentProps {
  projectWork: ProjectData;
  activeTab: number;
  userId: string;

}

const Projet: FunctionComponent<FrameComponentProps> = ({activeTab, projectWork,userId }) => {
  const [imageSource, setImageSource] = useState(""); // Utilisez useState pour déclarer imageSource comme une variable d'état

  const projectId = projectWork.id;

  const onSaveClick = useCallback(async () => {
    try {
      // Vérifier si la relation utilisateur-projet existe
      const relationResponse = await fetch(`http://localhost:3001/api/userProjectRelation/getproject/${userId}/${projectId}`);
      
      if (relationResponse.ok) {
        // Si la relation existe, supprimer-la
        const deleteResponse = await fetch(`http://localhost:3001/api/userProjectRelation/supprimer/${userId}/${projectId}`, {
          method: 'DELETE'
        });
  
        if (!deleteResponse.ok) {
          throw new Error('Failed to delete user-project relation');
        }
      } else {
        // Si la relation n'existe pas, ajouter-la
        const addResponse = await fetch(`http://localhost:3001/api/userProjectRelation/userProjectsRelation/${userId}/${projectId}`, {
          method: 'POST'
        });
  
        if (!addResponse.ok) {
          throw new Error('Failed to add user-project relation');
        }
      }
  
      // Mettre à jour l'état de l'image en fonction de l'action effectuée
      setImageSource(prevSource => prevSource === "/image1.png" ? "/heart-3@2x.png" : "/image1.png");
  
    } catch (error) {
      console.error('Error during request:', error);
    }
  }, [userId, projectId, setImageSource]);
  
  useEffect(() => {
    const checkRelation = async () => {
      try {
        const relationResponse = await fetch(`http://localhost:3001/api/userProjectRelation/getproject/${userId}/${projectId}`);
        
        if (relationResponse.ok) {
          // La relation existe, mettre à jour imageSource
          setImageSource("/image1.png");
        } else {
           setImageSource("/heart-3@2x.png");
        }
      } catch (error) {
        console.error('Error checking relation:', error);
      }
    };
  
    checkRelation();
  }, [userId, projectId,onSaveClick]);
  const timeDifferenceInMinutes = differenceInMinutes(new Date(), new Date(projectWork.creationDate));
  const timeDifferenceInHours = differenceInHours(new Date(), new Date(projectWork.creationDate));
  const timeDifferenceInDays = differenceInDays(new Date(), new Date(projectWork.creationDate));

  // Convertit la différence de temps en texte
  let timeElapsedText = '';
  if (timeDifferenceInDays > 0) {
    timeElapsedText = `${timeDifferenceInDays} days ago`;
  } else if (timeDifferenceInHours > 0) {
    timeElapsedText = `${timeDifferenceInHours} hours ago`;
  } else {
    timeElapsedText = `${timeDifferenceInMinutes} minutes ago`;
  }
  return (
    <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[23.7px] box-border gap-[9.8px] max-w-full text-right text-base-9 text-gray-1600 font-titre-grey">
      <div className="w-[192.9px] h-[18.9px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center shrink-0 [debug_commit:f6aba90]">
        Posted   {timeElapsedText}
      </div>
      <div className=" self-stretch flex flex-row items-start justify-between pt-[29.4px] pb-[29.5px] pr-[44.5px] pl-[45.3px] relative shrink-0 [debug_commit:f6aba90] text-left text-14xl-2 text-blue mq1050:flex-wrap mq1050:pl-[22px] mq1050:pr-[22px] mq1050:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[27.94px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-3184.svg"
        />
        <div className="w-[619.9px] flex flex-col items-start justify-start gap-[23.1px] max-w-full">
          <div className="w-[552px] flex flex-col items-start justify-start gap-[2.3px] max-w-full shrink-0">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full shrink-0">
              <div className="flex-1 relative leading-[113%] font-semibold shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-xl mq450:leading-[23px] mq1050:text-8xl mq1050:leading-[30px]">
                {projectWork.name}
              </div>

            </div>
            <div className="w-[490.8px] h-[27.2px] relative text-base-9 tracking-[-0.01em] leading-[145.45%] font-light text-dimgray-500 flex items-center shrink-0 [debug_commit:f6aba90] z-[1]">

            </div>
          </div>
          <div className="self-stretch h-[27.2px] relative text-2xl-9 tracking-[-0.01em] leading-[145.45%] font-light text-gray-800 flex items-center shrink-0 z-[1] mq450:text-lg mq450:leading-[25px]">
            {projectWork.description}
          </div>
          <div className="flex flex-row items-end justify-start gap-[17.4px] max-w-full text-base-9 text-dimgray-500 mq750:flex-wrap">

            <img
              className="self-stretch w-[105.7px] relative max-h-full object-cover min-h-[42px] z-[1]"
              alt=""
              src="/103-1-1@2x.png"
            />

            <div className="w-[82.3px] flex flex-col items-start justify-end pt-0 px-0 pb-[3.8px] box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[6.8px]">
                <img
                  className="h-[33.2px] w-[33.2px] relative object-cover z-[1]"
                  alt=""
                  src="/pricetag-1-1@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="self-stretch h-[27.2px] relative tracking-[-0.01em] leading-[145.45%] font-light flex items-center shrink-0 whitespace-nowrap z-[1]">
                    {projectWork.totalPrice}dt
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="flex flex-col items-end justify-start py-0 pr-0 pl-px gap-[95.2px]">

          <img
            className="w-[47.6px] h-[47.6px] relative object-contain z-[1]"
            alt=""
            src={imageSource || "/heart-3@2x.png"}
            onClick={onSaveClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Projet;
