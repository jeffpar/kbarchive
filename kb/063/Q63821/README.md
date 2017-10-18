---
layout: page
title: "Q63821: Problems with Word 5.0 in Windows 3.0"
permalink: kb/063/Q63821/
---

## Q63821: Problems with Word 5.0 in Windows 3.0

	Article: Q63821
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start version 5.0 of Microsoft Word for MS-DOS in a Microsoft Windows
	version 3.00 window, you may get the following error message:
	
	  You cannot run this application while other high-resolution applications are
	  running fullscreen. The application will be suspended until a low-resolution
	  or text application is running fullscreen. Check the PIF settings to ensure
	  they are correct.
	
	Once you have received this error message, you find that you cannot close your
	Word window in any of the usual ways. Pressing ALT+Q has no effect, and the
	Close option under the Hyphen (-) menu is grayed out.
	
	CAUSE
	=====
	
	If you have tried to start Word in a window and have received this error
	message, you probably exited Word when you were in a mode other than 25-line
	text mode.
	
	WORKAROUND
	==========
	
	To close the window, do the following:
	
	1. From the Hyphen menu, Select "Settings...".
	
	2. Click Full Screen.
	
	3. Once the application has switched to fullscreen, you may use ALT+Q to exit.
	
	MORE INFORMATION
	================
	
	If Word is started in a fullscreen and then reduced to a window, you do not
	receive the error message; however, you are unable to edit or access the Word
	menu. Microsoft Word version 5.0 can only run in a window when it is in 25-line
	text mode. You receive the above error message when you start Word 5.0 in a
	window and it is in graphics mode (or in 43- or 50-line text mode). If you start
	Word in a fullscreen, then reduce it to a window in any mode other than 25-line
	text mode, you experience symptoms such as a frozen double mouse cursor and an
	inability to call up the Word menu.
	
	NOTE: Print preView is a graphics screen. This is true regardless of the display
	mode in which you are running Word. As a result, Word stops responding (hangs,
	or locks up) and gives you the above error message if you attempt to use Print
	preView while running the application in a window.
	
	Solution
	--------
	
	Press ESC, ALT+ENTER to exit to a workable fullscreen display.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
