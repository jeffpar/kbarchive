---
layout: page
title: "Q124884: FIX: ALT+D and SPACE Both Map to Key Code Value of 32"
permalink: /kb/124/Q124884/
---

## Q124884: FIX: ALT+D and SPACE Both Map to Key Code Value of 32

	Article: Q124884
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.6a; WINDOWS:2.6a,3.0,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp500aBUG kbvfp500bug kbvfp260aBUGkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft FoxPro for MS-DOS, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If code is dependent on the key combination ALT+D, the key code value returned
	by this combination maps to the ASCII value of 32, which is the equivalent of
	the Space key. Any time the space bar is pressed, code associated with ALT+D is
	run.
	
	CAUSE
	=====
	
	The ALT+D key combination is incorrectly mapped to ASCII 32.
	
	RESOLUTION
	==========
	
	The workarounds for this problem are to avoid the use of ALT+D as a key
	combination, or use CTRL+D or designate some other key combination as a hot key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Create and run a program containing the following code:
	
	     CLEAR
	     @ 0,0 SAY "Press the key or key combination to evaluate:"
	     @ 1,0 SAY " "
	     =INKEY(20)
	     ? LASTKEY()
	
	Additional query words: access key kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp500aBUG kbvfp500bug kbvfp260aBUG kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aDOS kbFoxPro260a kbVFP300 kbVFP500 kbVFP500a
	Version           : MS-DOS:2.6a; WINDOWS:2.6a,3.0,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
