import React from 'react'
import "./About.css"
import airsoc_logo2 from "../assets/Airsoc logo.png"

function About() {
  return (
    <div id='about' className='about'>
        <div className='aboutHeader'>About Us</div> 
        <div className='upper_part'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequuntur repellendus eius quas, dolore beatae inventore impedit eligendi fugiat consectetur, velit vero deleniti maxime optio. Reprehenderit blanditiis suscipit porro quae molestias, id magni pariatur. Repellat magnam aliquam corporis quas quo, vitae provident velit nesciunt quidem? Libero ex accusamus saepe possimus blanditiis et amet explicabo labore aspernatur, asperiores cumque repudiandae corporis, laudantium dolor distinctio voluptates impedit est praesentium. Non eos sequi tenetur, rerum quis fugiat veritatis necessitatibus voluptate provident veniam odio eligendi assumenda quam aut, fugit ullam aperiam fuga tempore officiis laborum. Cupiditate in quia excepturi nobis rem aspernatur distinctio, exercitationem inventore quos minus corporis facere explicabo soluta, eum dolor eveniet tempore, cum aut deleniti unde molestias. Eligendi unde facilis minus!</p>
            <div><img src={airsoc_logo2} alt='' className='aboutImage'/></div>
        </div>
        <div className='lower_part'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
    </div>
  )
}

export default About