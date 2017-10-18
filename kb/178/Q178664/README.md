---
layout: page
title: "Q178664: BUG: ? Displays Incorrect Number of Characters to Screen"
permalink: kb/178/Q178664/
---

## Q178664: BUG: ? Displays Incorrect Number of Characters to Screen

	Article: Q178664
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sending output to the desktop with a question mark (?) or @ SAYS may cause
	incorrect output to appear on the screen. If the variable that is being output
	is quite long, around 200 characters or greater, the output generated will not
	be the same as the length of the variable. The number of characters displayed
	should match the number of characters in the variable.
	
	CAUSE
	=====
	
	The Visual FoxPro screen font is set to a proportional font. Different
	proportional fonts produce different results.
	
	RESOLUTION
	==========
	
	Set the Visual FoxPro screen font to a mono-spaced font. Courier New and Foxfont
	are two fonts that should produce the correct output.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following commands in a program or from the Visual FoxPro Command
	window:
	
	     _SCREEN.FONTNAME = "Arial"
	     _SCREEN.FONTSIZE = 10
	     x = REPLICATE('0123456789',25) && Creates a string 250 characters long
	     ? LEN(x) && Returns 250
	     ? x  && If you count you will get 219
	
	The DISPLAY MEMORY LIKE x command outputs the correct number of characters to the
	screen.
	
	Additional query words: kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
