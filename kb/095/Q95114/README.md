---
layout: page
title: "Q95114: Unable to Move the Save As Dialog Box When Quitting Windows"
permalink: /kb/095/Q95114/
---

## Q95114: Unable to Move the Save As Dialog Box When Quitting Windows

	Article: Q95114
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit Windows or Windows for Workgroups, if there are any minimized
	applications with new, unsaved files, a dialog box asking if you would like to
	"Save current changes" to the files may appear.
	
	If you choose the Yes button, the Save As dialog box will appear in the
	lower-right corner and the following problems may occur:
	
	- You cannot move the box with the mouse and the Move command is dimmed on the
	  window's Control menu.
	
	- If you use the mouse to select a drive letter, the Drives box always stays on
	  the working directory of the application.
	
	WORKAROUND
	==========
	
	To work around this problem, use the keyboard to change drives or make manual
	entries, as described below. There is no way to work around the inability to
	move the box. This problem occurs only when you are quitting Windows.
	
	- Press ALT+V to select the drives box and press the key corresponding to the
	  desired drive, or use the arrow keys to scroll to that drive and then press
	  ENTER.
	
	  -or-
	
	- Manually type the drive and filename in the File Name box.
	
	  <drive>:\<filename>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows versions 3.1
	and 3.11 and Microsoft Windows for Workgroups versions 3.1 and 3.11. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.10 3.11 grayed greyed exit common
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
