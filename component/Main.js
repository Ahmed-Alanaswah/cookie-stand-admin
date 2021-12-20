import React from "react";
import { useState } from "react";
export default function Main() {

  const [answersList, setAnswersList] = useState([]);
  const [latestAnswer, setLatestAnswer] = useState('No question yet, please ask a question!');
  const [counter, setCounter] = useState(0)
  const formHandler = (e)=>{
      e.preventDefault();
      // let replies = ['yes', 'no', 'not your business', 'HAHAHAHA!!', 'maybe another time!', 'ASK GOOGLE!'];
      // const randomReply = replies[Math.floor(Math.random()* replies.length)];
      let answer ={
        location :e.target.location.value,
        minCostumers:e.target.minCostumers.value,
        maxCostumers:e.target.maxCostumers.value,
        avgCostumers:e.target.avgCostumers.value
      
      };
      setLatestAnswer(`{location: ${answer.location}, min costumer hour: ${answer.minCostumers},  max costumer hour:  ${answer.maxCostumers} ,  avg costumer:${answer.avgCostumers}}`)
      setAnswersList([...answersList, answer]);
      setCounter(answer.id+1);
    }
	return (
		<div>
			<main className="min-h-full bg-emerald-300 py-3.5">
				<form
					className="w-8/12 my-auto bg-emerald-400 mx-auto p-2  "
					onSubmit={formHandler}
				>
					<h1 className="text-center">create cookie stand</h1>
					<div className="flex flex-row">
						<label className="">location</label>
						<input className="w-full" name="location" />
					</div>
					<div className="flex flex-row justify-center  ">
						<div className="w-full basis-1/4 text-center ">
							<label className="w-full  text-center">minCostumers</label>
							<br />
							<input type="number" className="w-8/12" name="minCostumers" />
						</div>
						<div className="text-center basis-1/4">
							<label>maxCostumers</label>
							<br />
							<input type="number" name="maxCostumers" />
						</div>
						<div className="text-center basis-1/4">
							<label>avgCostumers</label>
							<br />
							<input type="number" name="avgCostumers" />
						</div>
						<div className="text-center  my-2  basis-1/4">
							<button className="px-4 mt-2 py-1 my-2 w-8/12 bg-emerald-700  basis-1/4">
								Ok
							</button>
						</div>
					</div>
				</form>

				<div className="w-full h-96 mx-auto ">
					<p className="text-x1 text-center">{latestAnswer}</p>
				</div>
			</main>
		</div>
	);
}
