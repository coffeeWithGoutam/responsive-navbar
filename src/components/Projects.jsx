import React from 'react'

const Projects = () => {
    return (
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-16">
      <h3 class=" text-2xl md:text-4xl font-semibold text-center title-font text-gray-900 mb-4">Projects We Work for Clients</h3>
    </div>

          <div class="flex flex-wrap -mx-4 -mb-10">
            <div class="md:w-1/3 mb-10 px-4">
              <div class="rounded-lg h-80 overflow-hidden">
                <img alt="content" class="object-cover object-top h-full w-full" src="src/assets/project1.png"/>
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
              <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
            </div>
            <div class="md:w-1/3 mb-10 px-4">
              <div class="rounded-lg h-80 overflow-hidden">
              <img alt="content" class="object-cover object-top h-full w-full" src="src/assets/project2.png"/>
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
              <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
            </div>
            <div class="md:w-1/3 mb-10 px-4">
              <div class="rounded-lg h-80 overflow-hidden">
              <img alt="content" class="object-cover object-top h-full w-full" src="src/assets/project3.png"/>
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
              <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Projects;