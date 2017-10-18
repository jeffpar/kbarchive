---
layout: page
title: "Q82456: EGA.SYS Doesn't Load for Windows 3.1"
permalink: kb/082/Q82456/
---

## Q82456: EGA.SYS Doesn't Load for Windows 3.1

	Article: Q82456
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the MS-DOS SETUP /N command to install a shared copy of Microsoft
	Windows to a network drive on a machine with an EGA monitor, Setup adds the
	following line to the CONFIG.SYS file
	
	  DEVICE=X:\WINPATH\EGA.SYS
	
	where X is the net drive.
	
	As a result, when you boot the machine, EGA.SYS doesn't get loaded because the
	network has not started yet.
	
	RESOLUTION
	==========
	
	To correct this, copy EGA.SYS from the net drive to the local hard disk, floppy
	boot disk, or remote boot area on the network and modify the CONFIG.SYS file.
	
	Additional query words: 3.10 3.1 EGA.SYS 3.11 SETUP/N
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
