---
layout: page
title: "Q102718: MS-DOS Err Msg: ERROR D601US - System Failed"
permalink: /kb/102/Q102718/
---

## Q102718: MS-DOS Err Msg: ERROR D601US - System Failed

	Article: Q102718
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you you receive the following error message when booting your system with the
	MS-DOS 6 Setup Disk 1, it is likely that you are using the Data Expert original
	equipment manufacturer (OEM) version of MS-DOS 6:
	
	  ERROR: D601US
	  System failed
	
	MORE INFORMATION
	================
	
	As an OEM, Data Expert exercised its right to change the method in which the
	MS-DOS 6 operating system functions. Data Expert changed the boot functionality
	so that Data Expert MS-DOS looks specifically for the Data Expert computer BIOS
	signature. If its BIOS is not found, Data Expert MS-DOS refuses to boot.
	
	If you boot from Data Expert MS-DOS 6 Setup Disk 1 on a system that uses a Data
	Expert motherboard, you should not receive the error mentioned above.
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
