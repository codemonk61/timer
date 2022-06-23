var hr=0;
	var min=0;
	var sec=0;
	var count=0;
	var timer=false;

	function start(){
		timer=true;
         stopwatch();

	}

	function stop(){
		timer=false

	}

	function reset(){
		timer=false
		hr=0;
		min=0;
		sec=0;
		count=0

		document.getElementById("count").innerText="0";
			document.getElementById("sec").innerText="0";
			document.getElementById("min").innerText="0";
			document.getElementById("hr").innerText="0";

	}

	function stopwatch(){
		if(timer==true){
			count+=1;

			if(count==100){
				sec+=1;
				count=0;
			}
			if(sec==60){
				min+=1;
				sec=0;
				count=0;
			}
			if(min==60){
				hr+=1;
				sec=0;
				min=0;
				count=0;
			}

			document.getElementById("count").innerText=count;
			document.getElementById("sec").innerText=sec;
			document.getElementById("min").innerText=min;
			document.getElementById("hr").innerText=hr;



			setTimeout("stopwatch()",10)
		}

	}




