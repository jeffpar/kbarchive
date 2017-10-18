---
layout: page
title: "Q167674: BUG: DEFINE WINDOW Command Loses Single Border in VFP 5.0"
permalink: kb/167/Q167674/
---

## Q167674: BUG: DEFINE WINDOW Command Loses Single Border in VFP 5.0

	Article: Q167674
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500bug kbvfp600bug
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Font clause on the DEFINE WINDOW command under Visual FoxPro 5.0 and
	higher causes the resulting window to appear with a double border. In FoxPro
	2.6a for Windows and Visual FoxPro 3.0b, the window has a single pixel border.
	
	RESOLUTION
	==========
	
	To preserve the single border window, do not use the FONT clause with the DEFINE
	WINDOW command in Visual FoxPro 5.0 or higher.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Identical DEFINE WINDOW commands create windows that differ in appearance when
	run under Visual FoxPro 5.0 and higher compared with FoxPro for Windows 2.6a and
	Visual FoxPro 3.0b. Along with the difference in border styles noted above, a
	close box appears in the upper right-hand corner when the code runs under Visual
	FoxPro 3.0b and FoxPro 2.6a for Windows. In Visual FoxPro 5.0 and higher,
	however, the close box is absent.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In FoxPro 2.6a or Visual FoxPro 3.0b, type the following lines of code in the
	  Command Window:
	
	     DEFINE WINDOW X from 1,1 to 20, 20 Title "X" font "MS San Serif", 10
	     ACTIVATE WINDOW X
	
	2. Note that the resulting window has a close box in the upper right-hand corner
	  and the border is a single pixel in width.
	
	3. Type the same commands in the Command window of Visual FoxPro 5.0 or 5.0a.
	  The window now has what appears to be a double border and the close box is
	  gone.
	
	4. Type "CLEAR ALL" (without the quotation marks) in the Command window, and
	  change the code to read:
	
	     DEFINE WINDOW X from 1,1 to 20, 20 Title "X"
	     ACTIVATE WINDOW X
	
	5. The window now has a single border but the close box is still absent.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500bug kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
