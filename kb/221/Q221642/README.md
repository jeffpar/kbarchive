---
layout: page
title: "Q221642: FIX: Memory Leak With SET SYSMENU TO DEFAULT"
permalink: /kb/221/Q221642/
---

## Q221642: FIX: Memory Leak With SET SYSMENU TO DEFAULT

	Article: Q221642
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSF
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SYS(1016) function reports increasing use of memory when the following
	command is issued:
	
	  SET SYSMENU TO DEFAULT
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named Usemem.prg with the following code:
	
	     lnx = ''
	     FOR lni = 1 TO 1000
	        SET SYSMENU TO DEFA
	        IF TYPE('lnx') = 'C'
	           lnx = VAL(SYS(1016))
	        ENDIF
	        lnY= VAL(SYS(1016))
	        ?ALLTR(STR(lnY - lnx))
	        lnx = lnY
	     ENDFOR
	
	2. Run the program file.
	
	3. Observe the output on the screen and note that the User Object Memory
	  reported by the SYS(1016) function increases by 336 bytes in four of five
	  iterations and 416 bytes on the fifth iteration.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
