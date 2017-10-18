---
layout: page
title: "Q128078: How to Trap for &quot;Not a Database&quot; Error in a Corrupt .DBC"
permalink: kb/128/Q128078/
---

## Q128078: How to Trap for &quot;Not a Database&quot; Error in a Corrupt .DBC

	Article: Q128078
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a Database Container (.DBC file) becomes corrupted or damaged, it may
	generate error number 1552: File "<filename>" is not a database. This
	article shows by example how to trap for this error by using an ON ERROR
	routine.
	
	MORE INFORMATION
	================
	
	To demonstrate, perform the following steps:
	
	1. Create a new database and call it DATA1.DBC
	
	2. In the Database Designer, right-click and choose New Table. Create a new
	  table with the following fields:
	
	     Field  Type       Width
	     -----------------------
	
	     Test1  character  10
	     Test2  character  10
	
	  When prompted to Input Data Records Now, choose Yes and add data to the table.
	
	3. Issue the following commands in the Command Window:
	
	        CLOSE ALL
	        USE c:\vfp\data1.dbc &&actual path to your .DBC file may be different
	        BROWSE
	
	CAUTION: If you are using an existing file instead of the example file created
	here, please back it up before proceeding to the next step.
	
	1. Change the PARENTID in the first record to 0, then Save and Close the table.
	
	2. Type the following into a program and run it:
	
	        ON ERROR DO errhand         && To trap, and send to the error
	                                    && handler procedure
	        OPEN DATABASE SYS(2004)+'data1.dbc'  && An existing corrupt DBC file
	        ON ERROR                       && To reset ON ERROR to default
	
	        PROCEDURE errhand              && The error handler
	        IF ERROR()=1552                  && Check which error occurred
	          WAIT WINDOW 'Error #: '+STR(ERROR())+'  Message: '+MESSAGE()
	        ENDIF
	
	The error message "Error #1552 Message:File C:\VFP\DATA1.DBC is not a database."
	should be displayed in a Wait window.
	
	Additional query words: trap error VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
