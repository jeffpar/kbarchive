---
layout: page
title: "Q136771: How to Verify If a Table Is Free or Belongs to a Database"
permalink: /kb/136/Q136771/
---

## Q136771: How to Verify If a Table Is Free or Belongs to a Database

	Article: Q136771
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
	
	This article explains how to determine if a table (.dbf file) is a free table or
	belongs to a database.
	
	MORE INFORMATION
	================
	
	Programmatic Test
	-----------------
	
	Run the following code to determine if a table is free or belongs to a database:
	
	       xyz = CURSORGETPROP("database")
	       IF EMPTY(xyz)
	          WAIT WINDOW "This is a free table!"
	       ELSE
	          WAIT WINDOW "This database " + xyz +" is open!"
	       ENDIF
	
	You can use a low-level utility or Visual FoxPro low-level functions to verify
	the content of the .dbf header.
	
	REFERENCES
	==========
	
	For more information about Visual FoxPro low-level functions, please see the
	following:
	
	Visual FoxPro Help; search on: "Low-Level Functions"
	
	For more information on the table header structure, type "HELP FILE STRUCTURES"
	in the Command window to display online Help consisting of a list of file types.
	Select Table File Structure (.dbc, .dbf, ..... ), and click the Display button.
	You will see the Table Header Record Structure.
	
	Additional query words: VFoxWin on-line online
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
