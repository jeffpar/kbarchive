---
layout: page
title: "Q67267: WIN.INI Run= Command Problem with Windowed MS-DOS Apps"
permalink: kb/067/Q67267/
---

## Q67267: WIN.INI Run= Command Problem with Windowed MS-DOS Apps

	Article: Q67267
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Run= line in the WIN.INI file to start a windowed MS-DOS
	application followed by a Windows application, the keyboard input goes to the
	MS-DOS application. The focus remains on the MS-DOS application in the
	background and does not switch to the Windows application in the foreground as
	you would expect. This only happens in 386 enhanced mode.
	
	The following is a sample WIN.INI run line:
	
	       Run=word.pif winword.exe
	
	WORKAROUND
	==========
	
	To switch the focus to the Windows application in the foreground, click anywhere
	in the Windows application with the mouse. If you do not have a mouse, press
	ALT+ESC.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
