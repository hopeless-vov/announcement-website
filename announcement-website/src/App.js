import React from 'react';
import './App.css';
import ListItems from './ListItems'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      items:[],
      
        title: '',
        description: '',
        key: '',
        search: '',
        show:false,
       
      
    }
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputDescription = this.handleInputDescription.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.setUpdateDescription = this.setUpdateDescription.bind(this);
    this.toggledDiv = this.toggledDiv.bind(this);
     
  }
  handleChange = (e) => {
    console.log("Hallo", e.target.value)
    this.setState({
      search: e.target.value
    })
    
  }
  handleInputTitle(e) {
    this.setState({

        title: e.target.value,
        key: Date.now(),
       
    })
  }
  handleInputDescription(e) {
    this.setState({
     
        description: e.target.value,
        key: Date.now(),
       
    })
  }
  
  
  setUpdate(title,key){
    
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
      
        item.title= title;
      
      }
    })
    this.setState({
      items: items
    })
    
   
  }
  setUpdateDescription(description,key){
    
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
      
 
        item.description= description;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  addItem(e) {
    console.log(this.state.items)
    e.preventDefault();
    const newItem  = {title: this.state.title,description: this.state.description, key: this.state.key }
    if(newItem.title !=="" && newItem.description !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
        title:'',
        description:'',
        key:'',
         
       
      })
    }
    
  }
  toggledDiv = (e, key) => {
    e.preventDefault();
    const {show} = {show: this.state.show, key: this.state.key }
    this.setState({
      show: !show ,
      key:''
    })
  }
   
  render() {
     
    return (
      <div className="App">
        <header>
          <form id="announcement-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Title"
              value={this.state.title}
              onChange={this.handleInputTitle}
            />
            <input type="text" placeholder="Enter Description"
              value={this.state.description}
              onChange={this.handleInputDescription}
            />
             
            <button type="submit">Send</button>
          </form>
          
            
        
          <form id="announcement-form">
             

              <input type="text" className="search"
                value={this.state.search}
                 onChange={this.handleChange} placeholder="Search..." />
          </form>

          <ListItems 
            items={this.state.items} 
            deleteItem={this.deleteItem} 
            setUpdate={this.setUpdate}
            setUpdateDescription={this.setUpdateDescription}
            handleChange={this.handleChange}
            search = {this.state.search}
            show = {this.state.show}
            button = {this.state.button}
          
            toggledDiv ={this.toggledDiv}
          />
           
        </header>
      </div>
    );
  }
}

export default App;
