---
layout: page
title: "Q86367: Novell Removal Leaves OVERLAPPEDIO Setting"
permalink: /kb/086/Q86367/
---

## Q86367: Novell Removal Leaves OVERLAPPEDIO Setting

	Article: Q86367
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Microsoft Windows operating system version 3.1 is installed for a Novell
	network, and then MS-DOS-based maintenance mode Setup is run and No Network
	Installed is selected, then all the Novell components are removed except for the
	following line in the SYSTEM.INI file's [386enh] section:
	
	  OVERLAPPEDIO=OFF
	
	Having this setting active when you are not running on a Novell network, may
	reduce system performance.
	
	MORE INFORMATION
	================
	
	If enabled, this switch allows several virtual machines to make read and write
	requests to a disk before the first request has been completed. If it is
	disabled, then MS-DOS-based applications cannot issue a request to read or write
	to a disk until any previous read and write requests have been completed.
	
	Additional query words: 3.10 3.11 InDOSPolling
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
