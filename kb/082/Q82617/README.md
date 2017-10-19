---
layout: page
title: "Q82617: Ventura Publisher Doesn't Install If SHARE Is Loaded"
permalink: /kb/082/Q82617/
---

## Q82617: Ventura Publisher Doesn't Install If SHARE Is Loaded

	Article: Q82617
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:3.x,4.x,5.x,6.x; WINDOWS:3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Ventura Publisher's installation program doesn't recognize that you have
	inserted the requested disk in the drive and continually prompts you to insert
	the next disk in the set. In addition, a message similar to the following may be
	displayed:
	
	  General Protection Fault in SETUP2.EXE
	
	CAUSE
	=====
	
	Ventura Publisher is not compatible with the SHARE.EXE program.
	
	WORKAROUND
	==========
	
	To work around the problem, you should make sure that the SHARE program is not
	loaded. You should either rename or remove all copies of SHARE from your hard
	drive.
	
	NOTE: You must rename or remove all copies of SHARE.EXE from your hard drive
	because certain Windows applications, including Ventura Publisher, contain
	pointers to SHARE.EXE in different locations on the hard drive. Simply moving
	SHARE.EXE to a different location on your drive may not work.
	
	To properly set up Ventura Publisher, search the hard disk for all copies of
	SHARE.EXE and then rename or delete them. If you have MS-DOS version 5.0 or
	later, you can use the following command in the root directory of your hard
	drive to locate copies of SHARE:
	
	  DIR share.exe /S
	
	After you remove or rename each copy of SHARE from your hard drive, run the
	Ventura Publisher setup program again.
	
	MORE INFORMATION
	================
	
	For more information about Ventura Publisher, contact Xerox Technical Support.
	
	Ventura Publisher is manufactured by Xerox, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: gpf 3.10 3.11 3.00 3.00a 3.0a 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.x; WINDOWS:3.x
	
	=============================================================================
	
