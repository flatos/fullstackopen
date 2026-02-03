


const CourseHeader = (props) => <h2>{props.course}</h2>

// const Content = (props) => (
//   <div>
//     <Part part={props.parts[0]} />
//     <Part part={props.parts[1]} />
//     <Part part={props.parts[2]} />
//   </div>
// )

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const Content = (props) => {
  return props.parts.map(part => 
    <Part key={part.id} part={part} />
 )    
}


const Course = (props) => {
  return (
    <>
    <CourseHeader course={props.course.name} />
    <Content parts={props.course.parts} />
    <Total total={props.course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </>
  )
}



export default Course
