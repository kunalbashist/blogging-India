import "./Create.css";

 function Create() {
  return (
    <div className="Message" >
      <img
        className="writeImg"
        src="images/createpic.jpg"
        alt="pic"
      />
      <form className="MessageForm" action="/response" method="POST">
      <label>Title</label>
        <input className="MessageInput" id="title" type="text" placeholder="Enter Title of the blog" />
        
        <label>Category</label>
        <input className="MessageInput" id="category" type="text" placeholder="Categories i.e technology,politics,entertainment,environment" />
        <label>Conclusion</label>
        <textarea className="MessageBox" id="conclusion" placeholder="Summary" >
        </textarea>
        <label>Description</label>
       <textarea className="MessageBox" id="description" placeholder="Blog" >
       </textarea>
        <button className="MessageButton">Publish</button> 
      </form>
    </div>
  );
}
export default Create