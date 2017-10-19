---
layout: page
title: "Q90994: File Manager Displays Actual Total Disk Space"
permalink: /kb/090/Q90994/
---

## Q90994: File Manager Displays Actual Total Disk Space

	Article: Q90994
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11; winnt:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Windows for Workgroups or Windows NT File Manager, the total disk
	size displayed in the status bar may differ from the specified formatted size of
	the disk.
	
	For example:
	
	- 1.44 megabyte (MB) disks display as having 1.38 MB total space.
	
	- 1.2 MB disks display as having 1.15 MB total space.
	
	- 720 kilobyte (K) disks display as having 713K total space.
	
	MORE INFORMATION
	================
	
	While these totals may seem incorrect, File Manager is actually displaying the
	exact amount of total disk space based on 1K actually being 1024 bytes and 1
	megabyte being 1024K.
	
	File Manager determines the amount of space on a disk by using the following
	formula:
	
	  (Allocation units * number of bytes in each allocation unit)/1024/1024
	
	For example:
	
	  1.44 Disk: (2847*512)/1024/1024 = 1.39013671875 megabytes
	
	NOTE: Microsoft Windows 3.1 File Manager displays total disk space in kilobytes
	rather than megabytes. As a result, 1.44 MB disks display as having 1.423K.
	
	Additional query words: 3.1 3.11 win95 floppy winnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11; winnt:3.1
	
	=============================================================================
	
