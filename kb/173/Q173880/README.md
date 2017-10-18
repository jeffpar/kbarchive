---
layout: page
title: "Q173880: BUG: Page Down/Page Up Keys Do Not Clear READ MODAL in VFP5"
permalink: kb/173/Q173880/
---

## Q173880: BUG: Page Down/Page Up Keys Do Not Clear READ MODAL in VFP5

	Article: Q173880
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Page Up and Page Down keys in Visual FoxPro 5.0x no longer clear a READ
	MODAL command. These keys do clear READ MODAL commands in Visual FoxPro 3.0 and
	3.0b and in FoxPro 2.x versions. The Up Arrow and Down Arrow keys clear the READ
	MODAL as in the earlier versions.
	
	RESOLUTION
	==========
	
	Use an ON KEY LABEL command to trap for a Page Up or Page Down key, and then
	issue a CLEAR READ. For example:
	
	     ON KEY LABEL pgdn CLEAR READ  && or pgup to trap for the Page Up key
	     x=" "
	     @ 2,2 SAY "This is a test " GET x
	     READ MODAL
	     ON KEY LABEL pgdn  && or pgup
	
	Upgrading to Visual FoxPro Service Pack 2 does not fix this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program called Test.prg containing the follow code:
	
	        x=" "
	        @ 2,2 SAY "This is a test " GET x
	        READ MODAL
	
	2. After running the program, press the Page Down or Page Up keys. The READ is
	  not cleared. In Visual FoxPro 3.0, 3.0b and FoxPro 2.x, both the Page Up and
	  Page Down keys clear the READ MODAL command.
	
	Additional query words: READ MODAL clear page up down
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
