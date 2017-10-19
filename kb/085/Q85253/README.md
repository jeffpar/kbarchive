---
layout: page
title: "Q85253: Radius Video Driver May Cause Incorrect Line Wrapping"
permalink: /kb/085/Q85253/
---

## Q85253: Radius Video Driver May Cause Incorrect Line Wrapping

	Article: Q85253
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a Radius Full Page Pivot monitor with a Radius MultiView SVGA
	video adapter, your output may have incorrect line wrapping when printing
	TrueType fonts.
	
	RESOLUTION
	==========
	
	To correct this problem, you need to update your Radius video drivers. Contact
	Radius for driver information.
	
	NOTE: This problem only occurs with TrueType fonts, so a temporary workaround is
	to use non-TrueType fonts.
	
	MORE INFORMATION
	================
	
	When TrueType text is formatted in Write (or another word processor) and extends
	to the end of a line so that the last word wraps to the next line, the text may
	print incorrectly. The last word may appear at the beginning of the line,
	overwriting the first word.
	
	For example, if your screen displayed the text below in Example A, the text would
	print as in Example B.
	
	Example A
	---------
	
	  This is a test of word
	  wrapping.
	
	Example B
	---------
	
	  wrapping a test of word wrapping.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.1 3.11 3.10 video display True Type TT wordwrap
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
