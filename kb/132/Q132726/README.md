---
layout: page
title: "Q132726: How to Enumerate and Open All Tables in a Database Container"
permalink: kb/132/Q132726/
---

## Q132726: How to Enumerate and Open All Tables in a Database Container

	Article: Q132726
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
	
	This article shows by example how to use the ADBOBJECTS function in a program to
	determine the names of all tables contained within a database container (.DBC
	file), and then use the resulting array to open all tables.
	
	MORE INFORMATION
	================
	
	The following program creates an array (laTableNames) containing the names of
	all the tables in the Tastrade.dbc sample database container. The FOR loop then
	opens each table in its own work area. The name of each table is displayed in
	the upper-right corner of the screen as it is opened.
	
	Code Sample
	-----------
	
	  ** Begin Code Example
	  CLOSE ALL
	  OPEN DATABASE c:\vfp\samples\mainsamp\data\tastrade
	  lnNumOfTables = ADBOBJECTS(laTableNames, "Table")
	  FOR i = 1 to lnNumOfTables
	     WAIT WINDOW "Opening Table " + laTableNames(i) TIMEOUT 2
	     USE laTableNames(i) IN 0
	  ENDFOR
	  SET VIEW ON
	  ** End Code Example
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
