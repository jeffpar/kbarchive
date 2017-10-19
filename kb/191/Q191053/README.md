---
layout: page
title: "Q191053: Error Appears Behind C2 Security Config Tool Splash Screen"
permalink: /kb/191/Q191053/
---

## Q191053: Error Appears Behind C2 Security Config Tool Splash Screen

	Article: Q191053
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the C2 Configuration utility from the Terminal Server compact Disc,
	an error dialog may appear behind the Security Manager splash screen. However,
	at most display resolutions, it is impossible to see the error, or to drag it
	into view.
	
	CAUSE
	=====
	
	The Section header "[C2 Security Items]" (no quotation marks) in the
	c2config.inf file should read, "[Security Items]" (no quotation marks). The
	incorrect header causes the error to appear.
	
	RESOLUTION
	==========
	
	1. Copy the files from the Windows Terminal Server 4.0 compact disc
	  \Support\Sectool\Alpha or from the I386 folder, to a folder on your hard disk
	  drive.
	
	2. Edit the C2Config.Inf file and change "[C2 Security Items]" to "[Security
	  Items]" (no quotation marks).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows Terminal Server 4.0.
	
	Additional query words: security tool
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
