---
layout: page
title: "Q319277: FIX: IMPORT from Excel File causes Error"
permalink: /kb/319/Q319277/
---

## Q319277: FIX: IMPORT from Excel File causes Error

	Article: Q319277
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 03-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IMPORT command with a Microsoft Excel spreadsheet in Visual
	FoxPro 7.0, the Browse window that displays the imported data may be blank, or
	you may receive one of the following error messages:
	
	  Data type mismatch
	
	or
	
	  Fatal Error: Exception code: C0000005
	
	CAUSE
	=====
	
	The errors occur because the IMPORT process has filled the Visual FoxPro 7.0
	internal name table.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows, version 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	NOTE: The following code assumes that you have installed the sample data that
	ships with Visual FoxPro, and that the Visual FoxPro environmental variable
	_SAMPLES points to the sample data correctly.
	
	1. Create a Config.fpw file in a text editor such as Notepad. Add the line
	  "MVCOUNT=50500" (without the quotation marks) to the file, and then save the
	  file in your Visual FoxPro home directory. If you already use a Config.fpw
	  file, add this line to the current file.
	
	2. Paste the following code in a program (.prg) file named Test.prg, and then
	  run the program from the Command window:
	
	  LOCAL liCnt AS INTEGER, ;
	  	lcMemVar AS STRING, ;
	  	lcXLFile AS STRING, ;
	  	laDBFArray[1]
	
	  CD JUSTPATH(SYS(16))
	  CLOSE ALL
	  CLEAR ALL
	  ERASE Q319277*.*
	
	  FOR liCnt = 1 TO 50000
	  	lcMemVar = "MVar" + TRANSFORM(liCnt)
	  	PUBLIC (lcMemVar)
	  NEXT
	
	  USE (_SAMPLES) + "\DATA\CUSTOMER"
	  AFIELDS(laDBFArray)
	  USE IN SELECT("CUSTOMER")
	  CREATE CURSOR "XLS_SOURCE" FROM ARRAY laDBFArray
	  SELECT "XLS_SOURCE"
	  WAIT WINDOW "Building XLS file..." NOWAIT NOCLEAR
	  FOR liCnt = 1 TO 500
	  	APPEND FROM (_SAMPLES) + "\DATA\CUSTOMER"
	  ENDFOR
	  COPY TO Q319277_XLS.XLS TYPE XLS
	  USE IN SELECT("XLS_SOURCE")
	  WAIT WINDOW "Complete!" TIMEOUT 1
	  	
	  CREATE DATABASE Q319277
	  SET DATABASE TO Q319277
	  IMPORT FROM Q319277_XLS.XLS TYPE XLS DATABASE "Q319277" NAME ;
	  	"Some_Long_Table_Name"
	  USE "Some_Long_Table_Name"
	  BROWSE
	  LIST ALL
	  CLOSE ALL
	  SET SAFETY OFF
	  DELETE DATABASE Q319277 DELETETABLES
	
	3. Save this file, and then run the program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
