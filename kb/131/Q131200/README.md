---
layout: page
title: "Q131200: How to Print a Report When No Records Are Involved"
permalink: kb/131/Q131200/
---

## Q131200: How to Print a Report When No Records Are Involved

	Article: Q131200
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
	
	The REPORT FORM command requires an open table or cursor with at least one
	record, otherwise it doesn't print anything. This article shows how to work
	around this.
	
	MORE INFORMATION
	================
	
	If you have set up a report to print the results of a SQL statement sent to a
	cursor and that query returns zero (0) rows, the report doesn't print.
	
	The following code shows by example how to print the report even if zero rows are
	returned. It is valid for a report named TEST.FRX that contains three fields:
	fname, lname, and dob (date of birth). The CREATE CURSOR command must create a
	field for each field in your report.
	
	     IF _TALLY=0
	        CREATE CURSOR Temp (fname c(30),lname c(30),dob d)
	        INSERT INTO Temp (fname) VALUES ('Nothing to print')
	     ENDIF
	     REPORT FORM TEST.FRX NOEJECT NOCONSOLE TO PRINTER
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
