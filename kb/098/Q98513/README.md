---
layout: page
title: "Q98513: EMM386 Err Msg: Insufficient Memory for UMBs or Virtual HMA"
permalink: kb/098/Q98513/
---

## Q98513: EMM386 Err Msg: Insufficient Memory for UMBs or Virtual HMA

	Article: Q98513
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using an AMI or Phoenix BIOS, you may receive the following
	EMM386.EXE error message even though you have more than 384 kilobytes (K) of
	extended memory:
	
	  Insufficient memory for UMBs or virtual HMA
	
	WORKAROUND
	==========
	
	To work around this problem, modify your BIOS CMOS settings to disable "Fast A20
	Gating." For more information, contact your hardware vendor.
	
	NOTE: This message may also appear on systems with only 384K of extended memory
	if MS-DOS is loaded high. The solution is to exclude 64K from EMM386.EXE to
	accommodate loading MS-DOS high.
	
	Additional query words: 6.22 6.00 6.20 fast gate fastgate Compuadd + plus 1.10 2/22/91
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
