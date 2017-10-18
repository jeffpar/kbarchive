---
layout: page
title: "Q90917: Unable to Switch to File Manager After Formatting Disk in Back"
permalink: kb/090/Q90917/
---

## Q90917: Unable to Switch to File Manager After Formatting Disk in Back

	Article: Q90917
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you finish formatting a disk in the background of the Error Selecting
	Drive dialog box, File Manager does not appear in the Task List. Also, File
	Manager does not appear if you press ALT+TAB.
	
	MORE INFORMATION
	================
	
	When you change drives or refresh the drive window, File Manager searches the
	current drive to display its contents. If File Manager detects an unformatted or
	unrecognizable disk, it displays the Error Selecting Drive dialog box and
	prompts you to format the disk.
	
	If you choose the Yes button in response to this prompt, the File Manager Format
	Disk dialog box is displayed and you can format the disk. If you format the disk
	with File Manager in the background, when the format is completed, you cannot
	switch back to File Manager from the Task List, and File Manager does not appear
	if you press ALT+TAB to switch to an application.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following techniques:
	
	- Minimize all application windows except File Manager. This makes File Manager
	  the active window by default.
	
	- If visible, click the File Manager window.
	
	- If the File Manager is not visible, press ALT+ESC to display its window at
	  the front of the desktop and click the window.
	
	- Run File Manager from the Program Manager (double-click the File Manager
	  icon).
	
	Note: You can run only one instance of File Manager at a time.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
