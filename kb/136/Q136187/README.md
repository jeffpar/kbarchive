---
layout: page
title: "Q136187: DOC: Missing ALL Clause on Page 46 of Developer's Guide"
permalink: /kb/136/Q136187/
---

## Q136187: DOC: Missing ALL Clause on Page 46 of Developer's Guide

	Article: Q136187
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Developer's Guide, Chapter 2, "Overview of the language," under For Clauses,
	on page 46 gives the following incorrect information:
	
	  The following example stores low balance in the alert field of all records
	  that contain less than 500 in the total field.
	
	  REPLACE alert WITH "low balance" FOR total < 500
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	The REPLACE command needs the ALL scope, so that the line of code reads:
	
	     REPLACE ALL alert WITH "low balance" FOR total < 500
	
	Additional query words: docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
