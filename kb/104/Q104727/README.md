---
layout: page
title: "Q104727: EMM386.EXE 4.48 Doesn't Enable HIGHSCAN on Some AMI BIOSs"
permalink: /kb/104/Q104727/
---

## Q104727: EMM386.EXE 4.48 Doesn't Enable HIGHSCAN on Some AMI BIOSs

	Article: Q104727
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	EMM386.EXE version 4.48 does not enable HIGHSCAN for some AMI BIOS.
	
	CAUSE
	=====
	
	EMM386.EXE checks the AMI BIOS date and does not enable HIGHSCAN if the BIOS
	date is one of the following:
	
	  04/25/91
	  05/05/91
	  07/07/91
	  06/01/92
	
	These AMI BIOS chip sets use the F000h-F7FFh upper memory area (UMA) range and
	are therefore incompatible with HIGHSCAN.
	
	Additional query words: 6.22 6.20 mem maker memmaker 4-25-91 7-07-71 5- 05-91 date dates high scan f000-f7ff
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22; WINDOWS:3.11
	
	=============================================================================
	
