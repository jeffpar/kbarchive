---
layout: page
title: "Q179479: PRB: Problems with Error 2004 and 2005 Commands"
permalink: /kb/179/Q179479/
---

## Q179479: PRB: Problems with Error 2004 and 2005 Commands

	Article: Q179479
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the ERROR command with either error number 2004 or 2005 produces a blank
	dialog box instead of the proper error message.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The error message for error number 2004 should return the following message:
	
	  The table file "name" has moved. Please validate database "name" and try
	  again.
	
	The error message for Error number 2005 should return the following message:
	
	  Error with "name" - "property": "error".
	
	If you attempt to pass the two error numbers listed above more than one
	parameter, you receive a syntax error message.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Activate the Command window and type the following commands:
	
	  " ERROR 2004
	  ERROR 2005" (without the quotation marks)
	
	2. Blank dialog boxes appear.
	
	3. If you pass more than one variable to the ERROR command for error numbers
	  2004 or 2005, a syntax error occurs. For example, a syntax error occurs if
	  you type the following in the FoxPro Command window because you want to
	  represent a table and a database name for error 2004:
	
	        ERROR 2004, "Customer","Testdata"
	
	REFERENCES
	==========
	
	Visual FoxPro Technical Reference Online: Error Messages By Number
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
