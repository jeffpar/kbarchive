---
layout: page
title: "Q111757: CD-ROM Always Shows 127 MB Used and Zero Bytes Free"
permalink: kb/111/Q111757/
---

## Q111757: CD-ROM Always Shows 127 MB Used and Zero Bytes Free

	Article: Q111757
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view disk information for a CD-ROM in File Manager, free disk space is
	always reported as zero (0) bytes, and total disk space in use is always
	reported as approximately 127 megabytes.
	
	Microsoft Mulitmedia CD-ROM Extensions (MSCDEX.EXE) is coded to report a specific
	number for both free space and bytes in use. Microsoft has confirmed this to be
	a limitation of MSCDEX.EXE (all versions).
	
	Microsoft Windows NT uses a different file system for addressing CD-ROM drives
	and does not have this limitation.
	
	Additional query words: wfw wfwg MSDOS DOSSHELL DOS SHELL FILE 131070 134215 130048 kbmm mmtitles 4.0 4.00 4.00a 4.01 5.00 5.00a 5.0 5.0a 6.00 6.20 win30 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
