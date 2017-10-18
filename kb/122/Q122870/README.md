---
layout: page
title: "Q122870: Infinite Disk Does Not Support 32-Bit File Access"
permalink: kb/122/Q122870/
---

## Q122870: Infinite Disk Does Not Support 32-Bit File Access

	Article: Q122870
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Chili Pepper Software Infinite Disk versions 2.1 and earlier are incompatible
	with Windows for Workgroups 32-bit file access. Activating 32- bit file access
	in Windows for Workgroups while running Infinite Disk may corrupt program and/or
	data files on the hard disk drive.
	
	MORE INFORMATION
	================
	
	Infinite Disk is a utility program designed to optimize disk space by monitoring
	access of files and compressing those files that have not been accessed for a
	given amount of time. The files are compressed and automatically "recalled"
	(uncompressed) by Infinite Disk terminate-stay- resident programs (TSRs).
	Infinite Disk allows you to indicate which files should be monitored for
	compression and what amount of time should pass before a file is compressed.
	
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q92463 "Using Infinite Disk with Windows 3.1"
	
	Infinite Disk is manufactured by Chili Pepper Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3rdparty 3.11 incompatible compression vcache
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
