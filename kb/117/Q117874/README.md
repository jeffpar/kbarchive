---
layout: page
title: "Q117874: Drive C and Drive H Are Not Available for Swap File"
permalink: kb/117/Q117874/
---

## Q117874: Drive C and Drive H Are Not Available for Swap File

	Article: Q117874
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install DriveSpace or DoubleSpace on a system with Windows for
	Workgroups that has an existing network connection on drive H, drive H is not
	available under New Swapfile Settings in the Virtual Memory dialog box. However,
	existing network connections other than drive H are available. Under MS-DOS 6.2
	or 6.22, drive C is not shown as available for a swap file. Under MS-DOS 6,
	drive C is available, but it should not be used because doing so results in a
	corrupted swap file warning message.
	
	CAUSE
	=====
	
	When DriveSpace or DoubleSpace is set up, it creates a host drive for drive C.
	The default host drive letter is H. Having a network connection on drive H in
	Windows for Workgroups generates an error indicating it cannot make the
	connection. A corrupted swap file error message is also displayed. If you choose
	the 386 Enhanced icon in Control Panel, choose Virtual Memory and then the
	Change button, neither drive C nor drive H is available as a drive selection.
	
	RESOLUTION
	==========
	
	To correct this problem, open File Manager and remap the network connection on
	drive H to another drive letter. Choose the 386 Enhanced icon in Control Panel,
	choose Virtual Memory, and then the Change button. Now both drives C and H are
	listed as available drives for a swap file.
	
	
	Additional query words: drvspace dblspace drive space double
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22; WINDOWS:3.11
	
	=============================================================================
	
