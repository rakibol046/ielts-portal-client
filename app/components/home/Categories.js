import Link from "next/link";

export default function Catagories() {
    const categories =[
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5c52b9"><path d="M272-81q57 0 99-31t62-82q20-51 39.5-79.5T546-345q66-53 95-113t29-146q0-120-76-196.5T398-877q-118 0-195.5 73.5T120-616h60q5-88 65.5-144.5T398-817q90 0 151 61.5T610-604q0 72-28 124.5T489-378q-39 29-62.5 63T382-231q-17 42-44.5 66T272-141q-35 0-60.5-24T181-224h-60q5 60 48 101.5T272-81Zm449-221q57-63 88-141.5T840-608q0-85-29.5-164.5T721-913l-45 40q52 53 78 121.5T780-608q0 74-26.5 142.5T676-343l45 41ZM398-511q39 0 66-27t27-66q0-39-27-67t-66-28q-39 0-67 28t-28 67q0 39 28 66t67 27Z"/></svg>,
          title: "Listening",
          des: "The IELTS Listening test is designed to evaluate your ability to understand spoken English in various contexts. It consists of four sections, with a total of 40 questions, and it lasts 30 minutes.",
          url: "/listening",
        },
        {
          icon:    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5c52b9"><path d="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h420v620H240q-25.5 0-42.75 17.25T180-200q0 25.5 17.25 42.75T240-140h540v-660h60v720H240Zm100-240h260v-500H340v500Zm-60 0v-500h-40q-26 0-43 17.25T180-760v457q13-8 27.88-12.5Q222.77-320 240-320h40ZM180-820v517-517Z"/></svg>,
          title: "Reading",
          des: "The IELTS Reading test is designed to evaluate your ability to understand writing English in various contexts. It consists of three passages, with a total of 40 questions, and it take 1 hour.",
          url: "/reading",
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5c52b9"><path d="M160-120v-128l571-571q11-11 22.5-16t24.5-5q12 0 23.5 5t22.5 16l35 35q11 10 16 21.5t5 24.5q0 12-5 24t-16 23L288-120H160Zm60-60h44l446-446-22-22-22-22-446 446v44Zm601-557-44-44 44 44Zm-133 89-22-22 44 44-22-22ZM560-120q78 0 139-36.5T760-260q0-40-29.5-73.5T638-386l-47 47q50 12 79.5 34t29.5 45q0 32-40.5 56T560-180q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9ZM240-414l48-48q-54-13-81-27.5T180-520q0-16 21.5-30.5T290-590q83-31 111.5-59.5T430-719q0-56-41-88.5T280-840q-42 0-76 14.5T153-789q-8 9-7.5 21t11.5 20q10 8 22.5 6.5T200-751q15-15 34-22t46-7q46 0 68 18t22 43q0 20-19 35t-85 39q-94 34-120 62t-26 63q0 32 28 62t92 44Z"/></svg>,
          title: "Writing",
          des: "The IELTS Writing test evaluates your ability to present ideas clearly, organize information effectively, and use a range of vocabulary and grammar accurately. It consists of two tasks and lasts 60 minutes.",
          url: "/writing",
        },
        
    ];
  
  
    return (
    <div>
       <div className="grid lg:grid-flow-col lg:grid-cols-3 gap-6">
       {categories.map((category, index) => <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        {/*  <!-- Icon --> */}
        <figure className="p-6 pb-0 inline-block">
        {category.icon}
         </figure>
        {/*  <!-- Body--> */}
        <div className="p-2">
          <h3 className="mb-4 text-xl font-medium text-slate-700">{category.title}</h3>
          <p>
            {category.des}
          </p>
          <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm mb-4 mt-6 text-xl font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <Link href={category.url}>start practicing</Link>
      </button>
        </div>
      </div>)}
      
       </div>
    </div>
  );
}
