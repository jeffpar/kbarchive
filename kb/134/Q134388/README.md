---
layout: page
title: "Q134388: Disk Administrator Does Not Appear When Run For The First Time"
permalink: kb/134/Q134388/
---

## Q134388: Disk Administrator Does Not Appear When Run For The First Time

	Article: Q134388
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Windows NT and run Disk Administrator for the first time, the
	"Disk administrator is initializing" screen appears but you never see the Disk
	Administrator Window. When you attempt to run Disk Administrator again:
	
	  Disk Administrator is already running.
	
	CAUSE
	=====
	
	This problem occurs when Disk Administrator displays a dialog box that states it
	is going to write a disk signature, but the dialog box appears behind Program
	Manager.
	
	WORKAROUND
	==========
	
	To work around this problem, press ALT+TAB to switch to the Disk Administrator
	dialog box.
	
	Additional query words: prodnt windisk.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
