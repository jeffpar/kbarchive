---
layout: page
title: "Q94343: Obtaining Number of Data Groups in .FRX Without Using UDF"
permalink: kb/094/Q94343/
---

## Q94343: Obtaining Number of Data Groups in .FRX Without Using UDF

	Article: Q94343
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine the number of data groups in a .FRX
	report file without using a user-defined function (UDF).
	
	MORE INFORMATION
	================
	
	Once the .FRX report file layout is complete and the data groups have been
	added, the following steps can be used to obtain a report expression that
	returns the number of data groups in the .FRX report file:
	
	1. Choose Variable from the Report menu and create a random variable. For
	  example, call the variable "GRPCOUNT".
	
	2. For VALUE TO STORE, enter GRPCOUNT+1 . Leave INITIAL VALUE as 0. Set RESET to
	  the field name used as DATA GROUP EXPRESSION, instead of END OF REPORT or END
	  OF PAGE.
	
	3. Create the report expression IIF(GRPCOUNT=1,1,0) and place it in the page
	  footer. Check the CALCULATE option to display the CALCULATE dialog box. Set
	  RESET to END OF REPORT and select the SUM option.
	
	4. Place the newly created report expression in either the Group Footer or the
	  Page Footer sections.
	
	Additional query words: VFoxWin FoxDos FoxWin count calculate
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
