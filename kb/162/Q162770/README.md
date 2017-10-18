---
layout: page
title: "Q162770: Access Violation in Spooler When Using Notepad"
permalink: kb/162/Q162770/
---

## Q162770: Access Violation in Spooler When Using Notepad

	Article: Q162770
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, you may get a SPOOLSS access violation (AV) when
	you select Print Setup from within Notepad on a print server.
	
	In the Dr. Watson log or user mode memory dump, you will see that the access
	violation occurs in EnumeratePrinters in Spoolss.dll.
	
	CAUSE
	=====
	
	This error can occur when a printer is attached to LPT1 and is shared on the
	network. If you are connecting to the printer through the share instead of the
	LPT port, the access violation may occur.
	
	WORKAROUND
	==========
	
	On the computer that has the printer installed, print to the local port instead
	of to the network share.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
