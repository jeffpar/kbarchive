---
layout: page
title: "Q95787: Problems Using Norton's Smartcan TSR with SHARE.EXE"
permalink: /kb/095/Q95787/
---

## Q95787: Problems Using Norton's Smartcan TSR with SHARE.EXE

	Article: Q95787
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Smartcan is an erase protection utility included with version 2.0 of Norton
	Desktop for Windows (NDW). Smartcan hides deleted files in a hidden directory,
	allowing them to be easily unerased.
	
	If you use the utility while the SHARE.EXE terminate-and-stay-resident program
	(TSR) is loaded, it causes frequent sharing violation messages and can cause
	data corruption.
	
	MORE INFORMATION
	================
	
	The purpose of SHARE.EXE is to provide file sharing and locking capabilities for
	files on your hard disk. When SHARE.EXE is loaded, it is responsible for
	validating all file operation requests by applications.
	
	In Microsoft Windows for Workgroups version 3.1, SHARE is loaded as a virtual
	device driver (VSHARE.386) in the SYSTEM.INI file. According to Symantec
	Technical Support, both the Windows and Windows for Workgroups implementations
	of SHARE.EXE conflict with Norton's Smartcan.
	
	Norton Desktop for Windows and Norton Smartcan are manufactured by Symantec, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
