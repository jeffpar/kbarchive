---
layout: page
title: "Q96956: MS-DOS 6 Err Msg: The MS-DOS Setup Was Not Completed..."
permalink: /kb/096/Q96956/
---

## Q96956: MS-DOS 6 Err Msg: The MS-DOS Setup Was Not Completed...

	Article: Q96956
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message occurs when MS-DOS 6.x Upgrade has not been
	successfully installed:
	
	  The MS-DOS Setup was not completed Insert the UNINSTALL #1 diskette in drive
	  A
	  Press the ENTER key to continue
	
	CAUSE
	=====
	
	If you cannot recover from this situation by restarting your computer with the
	Uninstall disk in drive A, your CMOS settings may be configured to search drive
	C for the MS-DOS system files.
	
	Traditionally, the computer BIOS attempts to start MS-DOS from drive A and then
	searches drive C if no disk is in drive A. However, some newer AMI BIOS chips
	allow you to start your computer from drive C without first looking to drive A.
	This is incompatible with the MS-DOS 5 and later upgrade uninstall technology.
	
	WORKAROUND
	==========
	
	To work around this problem, modify your CMOS settings to check for a boot disk
	in drive A before attempting to boot from drive C.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 a: c: bootup startup bootstrap strap look to
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
