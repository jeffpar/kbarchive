---
layout: page
title: "Q299898: FIX: Coverage Profiler Fails when Procedure Contains &amp;&amp;"
permalink: kb/299/Q299898/
---

## Q299898: FIX: Coverage Profiler Fails when Procedure Contains &amp;&amp;

	Article: Q299898
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbCodeSnippet tslic_tslic kbvfp700fix kb
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a procedure that has an inline comment on the same line as the
	procedure name when you mark a line in the Coverage Profiler, you may receive
	the following error message:
	
	  Problem:
	  "Command contains unrecognized phrase/keyword"
	  MarkTargetCoverage
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Visual FoxPro (VFP) 6.0, paste the following code in a new program.
	
	  *!* Q299898 FIX: Coverage Profiler Fails When Procedure Contains && On Procedure  Name Line
	  #DEFINE lMakeData .T.
	  #DEFINE CRLF  CHR(13)+CHR(10)
	
	  CLOSE DATA ALL
	
	  IF lMakeData
	  	DELETE FILE testdb.DBC
	  	DELETE FILE testtab1.DBF
	  	DELETE FILE testxx.txt
	  	CREATE DATA testdb
	  	CREATE TABLE testtab1 (f1 c(5) DEFAULT defval())
	  	=STRTOFILE("procedure defval "+ "&"+"&"+" this is the problem"+ CRLF+ ;
	  		"RETURN SUBSTR(sys(2015),6)"+CRLF + "ENDPROC", "testxx.txt")
	  	APPEND PROCEDURE FROM testxx.txt OVERWRITE
	  ENDIF
	
	  CLOSE DATABASES ALL
	  COMPILE DATABASE testdb
	
	  CLOSE ALL
	  SET COVERAGE TO cvglog
	
	  USE testtab1
	  APPEND BLANK
	
	  SET COVERAGE TO
	  CLOSE DATABASES ALL
	  DO (_COVERAGE) WITH 'cvglog'
	  RETURN
	
	2. Save and run the code (the name is unimportant).
	
	3. When the Coverage Profiler appears, click the line just below the toolbar
	  buttons and press the DOWN ARROW key.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbCodeSnippet tslic_tslic kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
