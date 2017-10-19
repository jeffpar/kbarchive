---
layout: page
title: "Q299322: FIX: Error with Repeated AddObject/RemoveObject Calls"
permalink: /kb/299/Q299322/
---

## Q299322: FIX: Error with Repeated AddObject/RemoveObject Calls

	Article: Q299322
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp kbvfp500bug kbvfp600bug kbGrpDSFox kbDSupport kbvfp700fix kbvfp700kbfixlist
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program makes repeated calls to the AddObject and RemoveObject methods,
	the following error message may be received:
	
	  Too Many Names Used
	
	CAUSE
	=====
	
	Visual FoxPro is not releasing unused names from the internal names table used
	to keep track of created objects.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Paste the following code in a new program:
	
	  ON KEY LABEL F5 DO CleanUp
	  CLEAR ALL
	  CLEAR
	
	  LOCAL lcVarName,  lni, loCont
	  PUBLIC glKeepGoing
	  loCont = CREATEOBJECT("Container")
	  glKeepGoing = .T.
	  lni = 0
	
	  DO WHILE glKeepGoing
	  	lni = lni+1
	  	lcVarName = "ln" + SYS(2015)
	  	loCont.ADDOBJECT(lcVarName ,"Line")
	  	loCont.REMOVEOBJECT(lcVarName)
	  	IF MOD(lni,500) = 0
	  		? lni, SYS(1011), SYS(1016)
	  		_CALCMEM = lni && The Calculator Memory will persist 
	                                 && through the following CLEAR ALL.
	  		CLEAR ALL
	  		LOCAL loCont, lni, lcVarName
	  		glKeepGoing = .T.
	  		loCont = CREATEOBJECT("Container")
	  		lni = INT(_CALCMEM)
	  	ENDIF
	  ENDDO
	
	  PROCEDURE CleanUp
	  	glKeepGoing = .F.
	  	ON KEY LABEL F5
	  ENDPROC
	
	2. Save and then run the code (the program name is not important).
	
	  You can press F5 at any time to end the running program. The numbers printed
	  to the screen are loop iterations. They show the value of SYS(1011) (Number
	  of Memory Handles) and the value of SYS(1016) (User Object Memory Use). The
	  error occurs when the number of iterations reaches around 64000.
	
	(c) Microsoft Corporation 2001, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp kbvfp500bug kbvfp600bug kbGrpDSFox kbDSupport kbvfp700fix kbvfp700 kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
