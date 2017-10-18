---
layout: page
title: "Q149483: Redirected TREE /F Command Does Not Work in Windows 95 GUI"
permalink: kb/149/Q149483/
---

## Q149483: Redirected TREE /F Command Does Not Work in Windows 95 GUI

	Article: Q149483
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a redirected MS-DOS TREE /F command at a command prompt within the
	Windows 95 graphical user interface results in incomplete output. This behavior
	occurs in both windowed and full-screen MS-DOS sessions.
	
	RESOLUTION
	==========
	
	To work around this behavior, issue the redirected TREE /F command after
	restarting the computer in MS-DOS mode, or after booting the computer to a
	command prompt.
	
	To restart the computer in MS-DOS mode, click the Start button, click Shut Down,
	click "Restart the computer in MS-DOS mode," and then click Yes.
	
	To boot the computer to a command prompt, restart the computer. When you see the
	"Starting Windows 95" message, press the F8 key, and then choose Command Prompt
	Only from the Startup menu.
	
	MORE INFORMATION
	================
	
	The TREE command is used to display the structure of a folder. The /F switch
	displays the names of the files in each folder. The following examples
	demonstrate the use of the TREE command with redirection:
	
	To display the files in all the folders on drive C one screen at a time, use the
	following command:
	
	  tree c:\ /f | more
	
	To print the list of files displayed using the previous example, use the
	following command:
	
	  tree c:\ /f > prn
	
	NOTE: The TREE command (Tree.com) is an MS-DOS command. Tree.com is not installed
	by Windows 95, but is available on the Windows 95 CD-ROM or from online
	services. For information about installing the old MS-DOS tools included with
	Windows 95, please see the following article:
	
	  Q147831 How to Install Old MS-DOS Tools in Windows 95
	
	Additional query words: directory listing
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
