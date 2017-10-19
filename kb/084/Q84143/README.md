---
layout: page
title: "Q84143: Windows 3.1 PRINT SCREEN May Fail in Low-Memory Situations"
permalink: /kb/084/Q84143/
---

## Q84143: Windows 3.1 PRINT SCREEN May Fail in Low-Memory Situations

	Article: Q84143
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to use the PRINT SCREEN key to capture a full screen image
	from MS-DOS Prompt under Microsoft Windows version 3.1 in low-memory situations.
	For example, if you have a system with 2 MB of memory, MS-DOS loaded high, and
	several device drivers loaded, there may not be enough memory for Windows in 386
	enhanced mode to capture a full-screen image of your MS-DOS-based applications.
	
	WORKAROUND
	==========
	
	To work around this problem, either add more RAM to your computer or select and
	copy the desired text when MS-DOS Prompt is run in a window.
	
	To select text from MS-DOS Prompt running in a window:
	
	1. Choose the Control Menu (press ALT+SPACEBAR).
	
	2. Choose Edit.
	
	3. Choose Mark.
	
	4. Use the mouse or SHIFT+ARROW keys to select a specific area, or select all of
	  the text in the window. Selecting all of the text is the equivalent of doing
	  a Print Screen from a full screen MS-DOS Prompt session.
	
	5. Press ENTER to copy the text to the Clipboard.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.11 3.10 low memory command
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
