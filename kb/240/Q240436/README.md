---
layout: page
title: "Q240436: FIX: Repeated SQL SELECT Statements Cause &quot;File is in use&quot; Error"
permalink: /kb/240/Q240436/
---

## Q240436: FIX: Repeated SQL SELECT Statements Cause &quot;File is in use&quot; Error

	Article: Q240436
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You run a program, method, or procedure that repeatedly issues SQL SELECT
	statements in a loop. After a very high number of iterations, the following
	program error occurs on a SQL SELECT statement:
	
	  Program Error
	
	  File is in use.
	
	CAUSE
	=====
	
	Visual FoxPro attempts to use the same temporary file name twice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Although the code below uses the SELECT statement to create a cursor, you may
	also see this error occur with SELECTs that create files or arrays, because
	intermediate temporary files might be created when joins or unions are used.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	  LOCAL lni
	  SET TALK OFF
	  CLOSE ALL
	  CREATE TABLE table1(field1 i)
	  INDEX ON field1 TAG field1
	  INSERT INTO table1 (field1) VALUE (1)
	  USE
	  FOR lni = 1 TO 1000000
	     IF MOD(lni,100) = 0
	        @ 2,2 SAY ALLTR(STR(lni))+" Iterations"
	     ENDIF
	     SELECT field1 FROM table1 ;
	        WHERE field1 = 1 INTO CURSOR sqlresult NOFILTER
	     USE IN sqlresult
	  ENDFOR
	  CLOSE DATA ALL
	
	2. The iteration count is echoed to the screen. Let the program run for 839800
	  iterations. This may take quite a while, especially on slower computers.
	
	After approximately 839805 iterations, the error described in the SYMPTOMS
	section above occurs.
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport kbCodeSnippet kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
