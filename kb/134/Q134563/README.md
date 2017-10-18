---
layout: page
title: "Q134563: MS-DOS Prompt Does Not Shut Down with Third-Party TSRs"
permalink: kb/134/Q134563/
---

## Q134563: MS-DOS Prompt Does Not Shut Down with Third-Party TSRs

	Article: Q134563
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a third-party keyboard enhancement Terminate and Stay Resident (TSR) program
	is installed on the computer, you may be unable to shut down MS-DOS prompts. Any
	of the following actions (and possibly others) may not shut down the MS-DOS
	prompt:
	
	- Shutting down the computer
	
	- Closing all programs and logging off
	
	- Clicking the X button in the corner of the MS-DOS prompt window
	
	- Clicking the End Task button in the CTRL+ALT+DELETE dialog box
	
	The title of the window says that the window is closing, but the window does not
	close.
	
	CAUSE
	=====
	
	The TSR does not implement the clean shut-down functionality, new in Windows 95.
	As a result, Windows 95 waits forever for the TSR to shut down.
	
	RESOLUTION
	==========
	
	For a long-term resolution, contact the vendor to see if an updated version of
	the program is available.
	
	To work around this behavior, click the MS-DOS prompt that is not shutting down,
	and then at the MS-DOS prompt, type "exit" (without the quotation marks) to
	cause it to quit properly.
	
	To avoid having to do shut down the MS-DOS prompt in this manner repeatedly, use
	one of the following two methods:
	
	NOTE: By following these steps, any unsaved information in the MS-DOS prompt will
	be lost.
	
	1. Click the Start button, point to Settings, and then click Taskbar on the menu
	  that appears.
	
	2. In the Taskbar Properties dialog box, click the Start Menu Programs tab, and
	  then click the Advanced button.
	
	3. In the Exploring - Start Menu dialog box, click the Programs folder.
	
	4. Under Contents of Programs, using the right mouse button, click the MS-DOS
	  Prompt icon, and then click Properties on the menu that appears.
	
	5. In the MS-DOS Prompt Properties dialog box, click the Misc tab, and under
	  Termination, make sure the "Warn if still active" box is not checked.
	
	-or-
	
	Remove the TSR from the Autoexec.bat file.
	
	MORE INFORMATION
	================
	
	Keyboard enhancement TSRs that do not support the Windows 95 clean shut- down
	functionality as of this writing include the following:
	
	  CED
	  PCED
	  ANARKEY
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: MS-DOS box
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
