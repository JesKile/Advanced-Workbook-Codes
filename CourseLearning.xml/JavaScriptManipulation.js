let xmlString = `
<coffeeLearning>

      <course>
 <title> Introduction to Coffee
                 </title>
 
 <description>  Learn the basics of coffee, its history, and types of beans.
               </description>

 <duration> 2 weeks 
            </duration>
 
<instructor> Trevour Barista
          </instructor>
</course> 
             <course>
 
             <title>Brewing Techniques
                        </title>
 <description>Explore various brewing methods such as espresso, French press, 
and pour-over.
             </description>

 <duration>3 weeks
                </duration>

 <instructor>China Brewer
          </instructor>
 </course>
        
        <course>

 <title> Advanced Coffee Art
            </title>
 
 <description>
      Master latte art and advanced brewing techniques.
            </description>

 <duration>4 weeks
            </duration>
 
            <instructor>
        Maggy Latte</instructor>
 
    </course>

</coffeeLearning>`;
// Parse XML string into a DOM object
let parser = new DOMParser();
let xmlDoc = parser.parseFromString(xmlString, "application/xml");
// Access and display course titles
let courses = xmlDoc.getElementsByTagName("course");
for (let i = 0; i < courses.length; i++) {
 let title = courses[i].getElementsByTagName("title")[0].textContent;
 console.log(`Course Title: ${title}`);
}