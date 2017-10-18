---
layout: page
title: "Q140225: PRB: Error &quot;File Does Not Exist&quot; When Appending from a Cursor"
permalink: kb/140/Q140225/
---

## Q140225: PRB: Error &quot;File Does Not Exist&quot; When Appending from a Cursor

	Article: Q140225
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After using a SQL SELECT command, the temporary cursor created remains open and
	active but is read-only. Attempting to append records from this cursor by using
	the APPEND FROM command into a read/write Cursor or Table generates this error:
	
	  File does not exist
	
	CAUSE
	=====
	
	SQL cursors are temporary files residing in memory. When the APPEND command is
	issued, Visual FoxPro searches for the file in the default directory and along
	the search path. When the file is not found, the error is generated.
	
	RESOLUTION
	==========
	
	To correct this problem, issue the APPEND FROM command with the DBF() clause,
	and pass the name of the cursor to the DBF() function as in this example:
	
	     APPEND FROM DBF("<Read-Only Cursor name>")
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Type each of the following commands in the Visual FoxPro Command window:
	
	     CREATE CURSOR Temp ( Cust_id c(5),Title c(30))
	     ** Creates a read/write cursor called Temp
	     SELECT * FROM C:\VFP\SAMPLES \DATA\CUSTOMER INTO CURSOR Test
	     ** Creates a read-only cursor called Test, open and active.
	     SELECT Temp      && Selects the read/write cursor
	     APPEND FROM Test  && Generates an error "File <path> does not exist"
	     APPEND FROM DBF("Test")
	     ** Append records from read-only cursor into the read/write cursor.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
