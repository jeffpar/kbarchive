---
layout: page
title: "Q84919: Terminal Communications Screen Jumbled"
permalink: /kb/084/Q84919/
---

## Q84919: Terminal Communications Screen Jumbled

	Article: Q84919
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Microsoft Windows Terminal accessory application is used on an
	ANSI-based system, the screen may become corrupt, with portions of the screen
	appearing in the correct locations and others overwriting other portions or
	appearing on the left margin. This problem may occur even though the terminal
	emulation is set to DEC VT-100 (ANSI).
	
	Although VT-100 codes are very similar to ANSI, two functions used by ANSI-based
	systems are not present in the VT-100 command set. These are the Save and
	Restore Cursor Position commands. These ANSI commands are ignored by Terminal,
	which causes the cursor to be in the wrong position as more ANSI commands are
	sent. This makes the screen appear disjointed or broken up.
	
	To work around this problem, use a straight ASCII, non-graphics mode from the
	host or recreate the ANSI menus on the host to remove these commands.
	
	MORE INFORMATION
	================
	
	The Save Cursor Position command is <esc>[s and the Restore Cursor
	Position command is <esc>[u. These commands are typically used to shorten
	a stream of ANSI characters. When you are creating a menu with an ANSI editor,
	the editor will typically ask for the maximum line length. This will determine
	the number of codes and text sent on one line.
	
	For example, if the line length is set to 80, the editor will send no more than
	80 characters before forcing a carriage return and linefeed. If there were a
	number of color or attribute changes on that line, it may not have finished
	drawing the line. Rather than remembering the absolute location on the screen
	where it needs to resume, it inserts a Save Cursor Position command before
	sending the carriage return-linefeed (<CR><LF>) combination.
	
	At the beginning of the new line, the editor can then issue a Restore Cursor
	Position command to return the cursor to the end of the previous line and
	continue where it was interrupted. When Terminal is used, the Restore Cursor
	Position command will be ignored and the line will be restarted from the left
	margin where the cursor was placed by the <CR><LF> combination.
	
	It is usually possible to select an option when creating these menus to avoid the
	use of the Save and Restore Cursor Position commands. If the maximum line length
	function is ignored, these commands will normally not be used.
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
