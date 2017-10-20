---
layout: page
title: "Q136421: How NULL Values Sort in Indexes"
permalink: /kb/136/Q136421/
---

## Q136421: How NULL Values Sort in Indexes

{% raw %}

	Article: Q136421
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Expression indexes that evaluate to NULL are inserted into the .cdx file before
	non-NULL entries, so NULL expressions in indexes sort at the beginning rather
	than at the end.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program called Myprog.prg.
	
	2. Key in the following code fragment:
	
	     CREATE TABLE mytable (lastname c(20) NULL, firstname c(20) NULL, ;
	        city c(20) NULL)
	     INSERT INTO mytable (lastname,firstname,city) ;
	        VALUES ("Ansarti","Jim","San Jose")
	     INSERT INTO mytable (lastname,firstname,city) ;
	        VALUES ("Hayden","Rance",.NULL.)
	     INSERT INTO mytable (lastname,firstname,city) ;
	        VALUES ("Putnam","Phil","New Orleans")
	     USE mytable
	     INDEX ON city TAG city          && Create the Index and the Tag
	     SET ORDER TO city               && Set the order to the Tag
	     BROWSE
	
	3. Save the program.
	
	4. In the Command window, type:
	
	     DO Myprog.prg
	
	5. When the program runs, it displays a Browse window where the first record
	  containing .NULL. in the city field is the first field in the Browse window.
	
	REFERENCES
	==========
	
	Visual FoxPro for Windows "Developer's Guide," version 3.0, pages 143-145 and
	172-173.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
