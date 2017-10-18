---
layout: page
title: "Q299918: FIX: Memory Leak Calling Connection Designer from Database"
permalink: kb/299/Q299918/
---

## Q299918: FIX: Memory Leak Calling Connection Designer from Database

	Article: Q299918
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbBuilder kbvfp500bug kbvfp600bug kbGrpDSFox kbCodeSnippet tslic_tslic kbvfp700fixkbfix
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A memory leak occurs in Visual FoxPro (VFP) versions 5.0 and 6.0 when you open
	the Connection designer from the Database designer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In VFP 5.0 or 6.0, paste the following code in a new program:
	
	  *!* Q299918 FIX: Memory Leak Calling Connection Designer from Database Designer
	  #DEFINE DBCNAME "Q299918"
	  LOCAL lni
	
	  *!* CD to the DIR containing this .PRG
	  CD SUBSTR(SYS(16),1, ATC("\",SYS(16),OCCURS("\",SYS(16))))
	  CLEAR
	  CLOSE DATABASES ALL
	  *!* Clean-up old database
	  ERASE Q299918.*
	
	  CREATE DATABASE DBCNAME
	  CREATE CONNECTION Connection1 CONNSTRING "TEST"
	
	  FOR lni = 1 TO 10
	  	KEYBOARD '{alt+d}o{enter}{enter}{alt+f4}{ctrl+w}'
	  	MODIFY DATABASE
	          && Store counter here because it will survive CLEAR ALL
	          _CALCMEM = lni  
	  	CLEAR ALL
	  	? "Memory Handles Used:", SYS(1011), "User Object Memory Use:", SYS(1016)
	  	LOCAL lni
	  	lni = _CALCMEM
	  ENDFOR
	  CLOSE DATABASES ALL
	
	2. Save and run the code (the name is unimportant).
	
	When run, the code creates a database and a connection. It then opens and closes
	the Connection designer 10 times from the Database designer. After the code
	finishes, the current values of SYS(1011) (number of memory handles) and of
	SYS(1016) (user object memory use) are printed to _SCREEN. Note that in VFP 5.0
	and 6.0, there is a leak of approximately 2 handles and 400 bytes of memory per
	iteration.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBuilder kbvfp500bug kbvfp600bug kbGrpDSFox kbCodeSnippet tslic_tslic kbvfp700fix kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
