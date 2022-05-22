import './massageGet.css';

function MassageGet({content}) {

    return (
        <div className="media w-50 mb-2">
          <div className="media-body ml-3">
            <div className="bg-primary rounded py-2 px-3 mb-2">
              <div className="text-small mb-0 text-white myGet">{content}</div>
            </div>
          </div>
        </div>
    );
}
export default MassageGet;