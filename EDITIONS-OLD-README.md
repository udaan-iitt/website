# Udaan_Guide
Udaan content organization guidelines for LAC

Content on the Udaan website needs to be formatted as markdown files, and also stuctured in a proper format so that  

Commonly used formatting cheatsheet - you can find more easily at [MD Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or other similar resources. Even this is a md file open it from the heirarchy above and views its source!

   <pre>
   # Title
   ## Subheading
   *italics*
   **bold**
   ~~strikethrough~~
   > blocks
   for proper spacing try pressing enter twice inteady of once
   ![relative url dont use links]("./images/image.jpg")
   [I'm a link](https://www.google.com)
   </pre>
   
   Assuming you have a google doc with content ready, lets start! I will be using this [file](https://docs.google.com/document/d/1xAY5sWO4VFzWcr8P8jEPNTFvkpLjIHJ70yIDlrnJmic/edit?usp=sharing) as an example
   
   # Step 0: Make a new branch and do the steps below on that branch
   
   Edits to this repo trigger an update on the main website, to prevent multiple builds and the website crashing make a new branch named "year_month" and then build the new edition in it. So that we can make one final pull request to update the main site or a pull into the preview branch as we wish!
   
   To create a new branch from within Github
   - Tap on the dropdown button which should currently say "main" with the branch symbol beside it
   ![image](https://user-images.githubusercontent.com/55821103/174408612-cd0c17ac-3256-4f77-8fee-d1b6aa052aca.png)

   - Type the name "year_month"
   - Tap on the entry which says 'Create branch "..." from main'
   - Now whenever you want to submit a change, tap on the button and switch to this edition branch and work on it until release 
   
   # Step 1: Starting with file contents
   This file contains an image so thats something we want to take care of first.. Make sure to source a high quality version of the image if you can and not directly the snippet from the doc. I have the original file so i will be going with that. First thing folder heirarchy - create any that dont exist
   
  <pre>  
  year_month                        (It is the year and month and must be in that format)             2077_Test
  ├───myuniquefilename.md           (name should be unique and will be used to construct page url)    prabot.md
  ├───images                        (contents in this folder will be referenced from your md file)    prabot.jpg
  │   ├───myuniquefilename.jpg
  │   └───myuniquefilename_1.jpg
  </pre>
  
   Type a folder name and then "/" to create a folder that doesn't exist 
   ![image](https://user-images.githubusercontent.com/55821103/150760607-523f93f8-c9c7-4b6d-8e4f-3866f96dad67.png)
   or upload entire folder if you are working locally
  
  # Step 2: Create a .md file
  - You can do it locally or through github ui. I will go for the latter since you can preview .md without installing anything
  - Copy the following snippet into your md file (including the dashes) and edit it
  - For "category" use any one out of 
    - Experiences
    - Op-Ed
    - Poetry
    - Campus News
    - Review
    - Competitions
  - starred will pin article on top of page if "true"
  - maintain format for the date, its only used for sorting

<pre>
---
title: "Why Prabhat is every human’s best friend!"
category: "Op-ed"
date: "2021-06-06 10:00:00 +09:00"
desc: "Prabhat is like the peoples president no? like how Dr Kalam was the people president everyones best friend Prabhat is ACCURATE.. This masterpiece was AI generated and will also appear on top of the article"
thumbnail: "./images/prabot.jpg"
authors: "Debeshee and Deepmind"
starred: "false"
abio: "NONE"
alt: "prabot__text_if_images_fail_to_load"
---
</pre>

  - Copy paste remaining contents of your doc directly excluding any images
  - Format based on cheatsheet above
  - No need to insert title and tagline in document again these will be inserted on the website automatically!
  - Add in images using the syntax mentioned below
 
> whoah
 
You can preview what you are doing by tapping on preview
![image](https://user-images.githubusercontent.com/55821103/150762683-c449dd64-a447-40ee-a9ff-8502329e3d77.png)

This is how mine looks like at this stage
![image](https://user-images.githubusercontent.com/55821103/150765606-0d78117c-8366-4f13-a9f6-e04bce5ae462.png)

The broken image will be fixed once you upload the file in the directory as mentioned! Here is me doing that
![image](https://user-images.githubusercontent.com/55821103/150766424-a5fc352e-89fb-47bd-a275-1646b6e2f4a5.png)
Drag a folder named images with the jpg's into that space if there is no folder by that name to upload to!! See how it added the /images/ to the file name
![image](https://user-images.githubusercontent.com/55821103/150766732-5578db30-c7b4-4c86-824b-4866a69d5f1f.png)
Commit the changes and go back to your file, it should have the image loading now

   # Step 3: Describe and submit! 
![image](https://user-images.githubusercontent.com/55821103/150764355-778fc79b-58c7-413a-a1ad-6f2f0d43392f.png)

P.s. if you are familiar with vscode you can press . to work online or just clone it locally to work on it
