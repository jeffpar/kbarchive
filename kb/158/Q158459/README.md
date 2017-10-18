---
layout: page
title: "Q158459: One Drive's Directory List Is Replaced by That of Another"
permalink: kb/158/Q158459/
---

## Q158459: One Drive's Directory List Is Replaced by That of Another

	Article: Q158459
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The directory listing of a particular drive is replaced by the directory listing
	of a floppy disk drive.
	
	WORKAROUND
	==========
	
	To work around this problem, wait for the windows to refresh or use the
	drop-down box to select the desired drive.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Place a disk with files on it in drive A.
	
	2. On the View menu, click Options, then choose Single Windows mode.
	
	3. Open drive C and place it at the top of the screen. Consider this instance 1.
	
	4. Below instance 1, open a second instance of My Computer. Consider this
	  instance 2.
	
	5. Double-click the drive A icon (instance 2).
	
	6. Before instance 2 finishes its refresh, touch the windows of instance 1
	  (either on the title bar or somewhere inside; the important thing is making
	  instance 1 active).
	
	The contents of drive A are now applied to the active window, which was drive C.
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
