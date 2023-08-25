import './AddForm.css';

export default function AddForm(props){
  const {title,setTitle,saveTask,edit} = props;
    return(
        <>
        <h2>แอพบริหารจัดการงาน</h2>
        <form onSubmit={saveTask}>
          <div className='form-control'>
          <input type="text" className="text-input" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <button type="submit" className="submit-btn">
              {edit? "Update" : "Add"}
            </button>
          </div>
        </form>
        </>
    )
}