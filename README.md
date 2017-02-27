# HTMLWIDGET
Connect R code with any Javascript libraries

##Description

"htmlwidget" is an R package that you can download and use as a framework for binding your R code to javascript code. For example, if there's a javascript library(D3.js,cytoscape.js etc) that's interesting to you and you want to visualize the data that you are using in R with that javascript library, it can be done so using htmlwidget. 

For the purpose of understanding how to create an htmlwidget from scratch, I have made an htmlwidget for the c3.js library which is a D3 based reusable chart library (http://c3js.org/). There are lots of ways to visualize your data with c3.js and for this example I am using the simple xy line chart(http://c3js.org/samples/simple_xy.html). The steps are as follows:

##Step1:Create R package

Creating a package has never been easier thanks to the "devtools" package.

 >install.packages("devtools")
 
 >devtools::create("c3")                 # create package using devtools
 
 >setwd("c3")                            # navigate to package dir
 
 This will create an R package called c3 and then set your current directory to that folder.
 
 ##Step2:Create htmlwidget framework
 
 Using the htmlwidget framework requires the htmlwidget package. 
       
  >install.packages("c3")
       
  >htmlwidgets::scaffoldWidget("c3",bowerPkg="c3") 
  
 Inside the R package that you created in step 1, This will create the  c3.R file in the R folder, c3.js and c3.yaml file in the inst/htmlwidgets/ folder and javascript dependency files( c3.js and other .js files) in the inst/htmlwidgets/lib/ folder.
 The dependencies can be manually put in the lib folder if you don't use the bowerPkg argument in htmlwidgets::scaffoldWidget function.
 
 So what are these files?
 
 ###R file:
 This file has the R function which you pass data into so that data can be sent to the .js file to be translated into javascript code. For this package, we send a dataframe like this:
 
 > d<-data.frame(c("dat1",10,200,30,300,40,400),c("dat2",100,20,24,40,54,400))
 
 Where dat1 and dat2 are the names of two different lines on the chart that we are trying to generate. This data frame is then put in a list "x" in the function in the .R file(in this case we are using c3(d) where c3() is the function and called from the R terminal by the user of the package ).The list "x" is sent to the .js file to be converted into javascript data.
 
 ### JS file:
 
 The .js is the javascript binding which takes the list x as the data and uses that for javascript visualization(for this example it's c3.js). Three important things in this file are: "x" which is the data, "el" which is the htmlwidget object(think of it as the screen where you will see your data) and the rendervalue function(which renders the data x through the el object). For  simple XY chart that has been implemented in this package, the data(without it being sent from the .R file) gets shown in a "#chart" which the element id for the actual html file which the c3.js is bound to.Don't worry about this just remember to use "#"+el.id wherever you find a binding like "#something" and it will show up for htmlwidget package.
 R code is translated to JSON(javascript object notation) and htmlwidget has a function called HTMLWidgets.dataframeToD3(x)
 which translate R code to JSON for you. It is important to note that having a minimal knowledge about javascript is necessary(javascript variables,objects,array) to manipulate the data in the way you would like to.
 
 
 ### YAML file:
 
  This file contains the dependencies for the package. Install manually the files that is needed by the actual library inside the lib folder or used bower package manager to install the dependencies for you.
  
  
  ##Step 3: install the package
  
  Once you are done editing the package it's time to install(Repeat step2 everytime you make a change and again install otherwise new changes will not be added to the previously installed package).
  
  >devtools::install()
  
  >library(c3)
  
  > d<-data.frame(c("dat1",10,200,30,300,40,400),c("dat2",100,20,24,40,54,400))
  
  >c3(d)
  
  And that's it! You have a working htmlwidgets package.
  
  
  You can install the package and test it out by installing devtools and then:
  
  >devtools::install_github('lsgsb/HTMLWIDGET')
  >library(c3)
  
  > d<-data.frame(c("dat1",10,200,30,300,40,400),c("dat2",100,20,24,40,54,400))
  
  >c3(d)
  
  
  or
  
  >devtools::install_github('Saadman/r-c3.js')
  
  >library(c3)
  
  > d<-data.frame(c("dat1",10,200,30,300,40,400),c("dat2",100,20,24,40,54,400))
  
  >c3(d)
  
  
  
  
  
  
  
  If you have any question reach out to me at karimrn@mail.uc.edu or rashidsaadman@gmail.com
       
       
 
 
 
