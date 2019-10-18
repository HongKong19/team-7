import React from 'react';
import { InputGroup, InputGroupText, Input, Button } from 'reactstrap';
import FoodEaten from "./FoodEaten";

class DietPlan extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { 
            calorie_count: 2276,
            cur_food: "",
            cur_quantity: "",
            data: [],
            food: {"Alligator": 232, "Beef": 248, "Beef Brisket": 242,  
                "Beef Jerky": 410, "Beef Ribs": 238 ,
                "Beef Tenderloin": 218 ,
                "Chicken"	:	219 ,
                "Chicken Breast"	:	172,
                "Chicken Drumstick":	185,
                "Chicken Fat":	898 ,
                "Chicken Giblets":	158 ,
                "Chicken Gizzards":	146 ,
                "Chicken Leg":	174 ,
                "Chicken Liver":	167 ,
                "Chicken Meat":	172 ,
                "Chicken Thigh":	229 ,
                "Chicken Wing":	266 ,
                "Chuck Steak" :	277 ,
                "Cubed Steak":	199 ,
                "Duck":	337 ,
                "Filet Mignon":	267 ,
                "Flank Steak":	194 ,
                "Flat Iron Steak":	137 ,
                "Ground Beef":	246 ,
                "Ground Round":	246 ,
                "Ham":	163 ,
                "New York Strip Steak":	199 ,
                "Ostrich":	145 ,
                "Pork":	196 ,
                "Pork Baby Back Ribs":	212 ,
                "Pork Chops":	196 ,
                "Pork Country-Style Ribs":	247 ,
                "Pork Loin":	204 ,
                "Pork Roast":	254 ,
                "Pork Steaks":	196 ,
                "Roast Beef":	140 ,
                "Round Steak":	182 ,
                "Schnitzel":	156 ,
                "Spare Ribs":	238 ,
                "Standing Rib Roast":	333,
                "T-Bone Steak":	202 ,
                "Turkey":	189 ,
                "Turkey Breast":	135 ,
                "Turkey Legs":	208 ,
                "Turkey Steak":	189 ,
                "Turkey Wings":	221, 
                "rice": 130},
            calorie_consumed : 0 
        };
      };

    componentDidMount(){
        this.setState({
            calorie_count: 2276
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        const temp_arr = this.state.data; 
        var cur_calorie = 0; 
        var quantity = parseInt(this.state.cur_quantity); 
       
        console.log(Object.keys(this.state.food));
        if(Object.keys(this.state.food).includes(this.state.cur_food)){
            cur_calorie = quantity/100*this.state.food[this.state.cur_food];
        } else{
            cur_calorie = 275; 
        }
        const new_calorie = this.state.calorie_count - cur_calorie; 
        const consumed = this.state.calorie_consumed + cur_calorie; 
        temp_arr.push({'food':this.state.cur_food, 'quantity': this.state.cur_quantity, 'calorie':cur_calorie})
        this.setState({
            data: temp_arr, 
            calorie_count: new_calorie,
            calorie_consumed: consumed
        });
    }

    renderDataList(){
        return(
            <>
            <br/> 
            <div> 
                <h1> Food Consumed Today </h1>
                <FoodEaten data = {this.state.data} calorie_consumed={this.state.calorie_consumed}/> 
            </div>
            </>
        );
    }

    updateFoodValue(evt) {
        this.setState({
           cur_food: evt.target.value
        });
      }

      updateAmountValue(evt) {
        this.setState({
            cur_quantity: evt.target.value
        });
    }

    render() {
        return (
            <> 
            <br/>
            <h1>
                Calorie Count : {this.state.calorie_count}
            </h1>

            <br/> 
            <br/> 
           
            <h2> 
               What have you eaten? 
            </h2> 
            <br/> 

            <InputGroup>
               <InputGroupText>What have you eaten?</InputGroupText>
                <Input value={this.state.task} onChange={evt => this.updateFoodValue(evt)}/>
                <br />

                <InputGroupText>Amount (g) </InputGroupText>
                <Input value={this.state.time} onChange={evt => this.updateAmountValue(evt)}/>

                <Button color="success"  onClick={this.onSubmit}>Add</Button>
            </InputGroup>
            
            {this.renderDataList()}
            
            </>
         );
    }
}

export default DietPlan;
