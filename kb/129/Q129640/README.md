---
layout: page
title: "Q129640: How to Determine What Relations Exist in a .DBC"
permalink: /kb/129/Q129640/
---

## Q129640: How to Determine What Relations Exist in a .DBC

{% raw %}

	Article: Q129640
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ADBOBJECT() function will create an array containing a a list of all
	persistent relations defined in a database container (.DBC file). This
	information can be useful outside of the database container. For example, it can
	be useful when you want to set relationships automatically for use within a
	one-to-many report.
	
	MORE INFORMATION
	================
	
	The ADBOBJECT() function requires two parameters:
	
	- The first is the name of the array to be created.
	
	- The second indicates the type of information requested from the function.
	
	For example, the following code creates an array called laRelations:
	
	     OPEN DATABASE \vfp\samples\mainsamp\data\tastrade
	     =ADBOBJECT(laRelations, "RELATION")
	     DISPLAY MEMORY
	
	The array contains five columns. Each relationship defined in the DBC will occupy
	one row in the array. The columns contain the following information:
	
	  Column   Contents
	  --------------------------------------------------------------
	  1        Name of the parent table
	  2        Name of the child table
	  3        Name of the parent index tag involved in the relation
	  4        Name of the child index tag involved in the relation
	  5        Information for the Relational Integrity Builder
	
	Column 5 contains up to three letters, indicating Update, Delete, and Insert
	triggers respectively. Each letter code within the column will contain a "C" for
	Cascade, an "R" for Restrict, or an "I" for Ignore. For example, a value of
	"CRR" in column 5 would indicate that updates should be cascaded, deletes should
	be restricted, and inserts should be restricted.
	
	REFERENCES
	==========
	
	The GENDBC utility uses this technique to define relationships as well as obtain
	other information from the DBC. If you would like to view the source code for
	this utility, it is stored as VFP\TOOLS\GENDBC\GENDBC.PRG.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
