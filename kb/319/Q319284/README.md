---
layout: page
title: "Q319284: Record Count Reset When END TRANSACTION Run Against Remote View"
permalink: /kb/319/Q319284/
---

## Q319284: Record Count Reset When END TRANSACTION Run Against Remote View

	Article: Q319284
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbDatabase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 11-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you requery a remote view to which you have appended records, and then you
	append additional records in the transaction, some or all of the appended
	records are missing when you reach the END TRANSACTION line.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	Paste the following code in a program (.prg) file, and then run the program from
	the Command window of Visual FoxPro 7.0 build 9262:
	
	  CLOSE DATABASES all
	  CLEAR 
	
	  *!************************************
	  *!* Create sample data
	  CREATE TABLE testTable (cField1 C(10))
	  USE
	
	  CREATE DATABASE testDBC
	  CREATE CONNECTION testConn ;
	     CONNSTRING "Driver={Microsoft Visual FoxPro Driver};" + ;
	        "SourceDB=" + SYS(5) + CURDIR() + ";SourceType=DBF"
	  *!* Note: This view cannot be updated.
	  CREATE SQL VIEW testView CONNECTION testConn AS ;
	     SELECT * ;
	        FROM testTable
	  CLOSE DATABASES ALL
	
	  *!****************************
	  *!* Behavior without buffering.
	  ? "Without Buffering"
	
	  OPEN DATABASE testDBC
	  USE testView
	
	  *!* The APPEND BLANK command and REQUERY() function trigger the behavior.
	  APPEND BLANK
	  REQUERY()
	  ? RECCOUNT()  
	
	  BEGIN TRANSACTION
	  APPEND BLANK
	  APPEND BLANK
	  ?RECCOUNT()  
	
	  END TRANSACTION
	  ?RECCOUNT()  
	  CLOSE DATABASES ALL
	
	  *!*************************
	  *!* Behavior with buffering.
	  ? "With Buffering"
	
	  OPEN DATABASE testDBC
	  USE testView
	  CURSORSETPROP("Buffering", 5)
	
	  APPEND BLANK
	  APPEND BLANK 
	
	  BEGIN TRANSACTION 
	  TABLEUPDATE(1)
	  END TRANSACTION
	  ?RECCOUNT() 
	  REQUERY()   && Resets view to 0
	
	  APPEND BLANK
	  APPEND BLANK
	
	  BEGIN TRANSACTION
	  TABLEUPDATE(1)
	  ?RECCOUNT()  
	  END TRANSACTION
	  ?RECCOUNT()  
	
	After you run the code, you expect to see the following:
	
	  Without Buffering:
	           0
	           2
	           2
	  With Buffering:
	           2
	           2
	           2
	
	However, in Visual FoxPro 7.0 build 9262, you receive the following results:
	
	  Without Buffering:
	           0
	           2
	           1
	  With Buffering:
	           2
	           2
	           0
	
	Note that without buffering, all but one of the records disappear after the END
	TRANSACTION command. With buffering, all of the records disappear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
