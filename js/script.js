new Vue({
	el: "#main",
	data:{

		tblrows:[
			
		],
		current1:{name:"", price: 0, quantity:0, addremove:"", gin: 100},
		current2:{name:"", price: 0, quantity:0, addremove:"", gin:200},
		current3:{name:"", price: 0, quantity:0, addremove:"", gin:300},
		current4:{name:"", price: 0, quantity:0, addremove:"", gin:400}
	}, 
	methods:{
		addToCard1: function () {
			if (this.tblrows.includes(this.current1)){
				this.current1.price += 100;
				this.current1.quantity++
			}else{
				if(this.current1.name ==""){
					this.current1.name += "First";
				}else{
					this.current1.name+=""
				}
				this.current1.quantity++;
				this.current1.price += 100;
				this.tblrows.push(this.current1);
			}
		},
		addToCard2: function () {
			if (this.tblrows.includes(this.current2)){
				this.current2.price += 200;
				this.current2.quantity++
			}else{
				if(this.current2.name ==""){
					this.current2.name += "Second";
				}else{
					this.current2.name+=""
				}
				this.current2.quantity++;
				this.current2.price += 200;
				this.tblrows.push(this.current2);
			}
		},
		addToCard3: function () {
			if (this.tblrows.includes(this.current3)){
				this.current3.price += 300;
				this.current3.quantity++
			}else{
				if(this.current3.name ==""){
					this.current3.name += "Third";
				}else{
					this.current3.name+=""
				}
				this.current3.quantity++;
				this.current3.price += 300;
				this.tblrows.push(this.current3);
			}
		},
		addToCard4: function () {
			if (this.tblrows.includes(this.current4)){
				this.current4.price += 400;
				this.current4.quantity++
			}else{
				if(this.current4.name ==""){
					this.current4.name += "Fourth";
				}else{
					this.current4.name+=""
				}
				this.current4.quantity++;
				this.current4.price += 400;
				this.tblrows.push(this.current4);
			}
		},
		addQuant: function(x){
			x.quantity++
			x.price+=x.gin;
		},
		remQuant: function(x){
			x.quantity--
			x.price -= x.gin
		},
		remRow: function(x){
			this.tblrows.splice(x, 1)
		}
	}
});
