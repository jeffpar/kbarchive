---
layout: page
title: "Q86577: Word for MS-DOS Err Msg: There Is No Text in the Clipboard"
permalink: kb/086/Q86577/
---

## Q86577: Word for MS-DOS Err Msg: There Is No Text in the Clipboard

	Article: Q86577
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear in Windows version 3.1 when you attempt
	to paste text from Word for MS-DOS to another MS-DOS application:
	
	  There is no text in the clipboard
	
	CAUSE
	=====
	
	The above error message is generated when Word for MS-DOS version 5.5 runs in
	Graphics mode.
	
	When you run Word for MS-DOS in a Window and using the Edit Mark option, text is
	copied into the Windows Clipboard. In Clipboard, the display from Word for
	MS-DOS is received as a bitmap instead of text.
	
	RESOLUTION
	==========
	
	Setting the Display Mode option in Word for MS-DOS to Text mode should correct
	this problem. From the Word for MS-DOS View menu, choose Preferences. Change the
	Display Mode option from Graphics to Text. This will allow the pasting of text
	from Word for MS-DOS to another MS-DOS-based application.
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
