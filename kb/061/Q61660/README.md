---
layout: page
title: "Q61660: FIX: Certain Key Sequences Cause R6003 or SYS1943 in PWB 1.0"
permalink: /kb/061/Q61660/
---

## Q61660: FIX: Certain Key Sequences Cause R6003 or SYS1943 in PWB 1.0

{% raw %}

	Article: Q61660
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS 
	- Microsoft Programmer's Workbench for OS/2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Programmer's Workbench (PWB) version 1.0, it has been observed that
	certain unusual editing sequences can cause the following errors:
	
	In MS-DOS:
	
	  Run-time error R6003 - integer divide by 0
	
	In OS/2:
	
	  SYS1943 protection violation, trap number 13
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB version 1.0. This problem
	was corrected in PWB version 1.1.
	
	MORE INFORMATION
	================
	
	The following sequences reproduce the errors:
	
	  Procedure                             Keystrokes
	  ---------                             ----------
	
	1. Bring up several files.               ALT+F O x3
	  Select the Options menu.              ALT+O
	  Select Linker options.                L
	  Select Set Debug Options.             ALT+G
	  Pull up help on the options.          F1
	  Arg-refresh through several files.    ALT+A SHIFT+F7 x3
	  Escape back to the Editor screen.     ESC x3
	
	2. Select the Options menu.              ALT+O
	  Select Editor Settings.               S (or K)
	  Go down thirteen lines.               DOWN ARROW key x13
	  Backspace.                            BACKSPACE
	  Undo.                                 ALT+BACKSPACE
	
	NOTE: Step 2 reproduces only the R6003 error in DOS, not the SYS1943 error.
	
	Additional query words: 1.00 buglist1.00 fixlist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3
	Version           : :
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
