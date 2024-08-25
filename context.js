const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props) {
   function classes() {
       const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
       const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
       return bg + txt;
   }

   return (
       <div className={`card ${classes()} mt-4 mx-3`} style={{maxWidth: "18rem"}}>
           <div className="card-header">{props.header}</div>
           <div className="card-body">
               {props.title && (<h5 className="card-title">{props.title}</h5>)}
               {props.text && (<p className="card-text">{props.text}</p>)}
               {props.body}
               {props.status && (<div id="createStatus" className="mt-3 text-center">{props.status}</div>)}
           </div>
       </div>
   );
}