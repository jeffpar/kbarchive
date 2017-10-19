---
layout: page
title: "Q85910: IBM LSP Drivers Err Msg: Invalid Shared RAM Address"
permalink: /kb/085/Q85910/
---

## Q85910: IBM LSP Drivers Err Msg: Invalid Shared RAM Address

	Article: Q85910
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
	
	If you load the IBM LAN Support Program (LSP) drivers for the IBM Token Ring
	adapter into upper memory blocks (UMB) using DEVICEHIGH with MS-DOS, you may
	receive the following error message:
	
	  Invalid shared RAM address
	
	WORKAROUND
	==========
	
	To work around this problem, load the LSP drivers into low memory, or load the
	drivers high, adding a comma (,) to the end of the DEVICEHIGH line in the
	CONFIG.SYS file as follows:
	
	  DEVICEHIGH=C:\DXMC0MOD.SYS 400000000001,
	
	
	MORE INFORMATION
	================
	
	IBM LAN Support Program (LSP) is essentially the IBM network adapter software.
	Typically, there are three files loaded in the CONFIG.SYS file for these
	drivers, each providing various levels of driver support, much PROTMAN, NDIS
	driver, and 802.2 support in Microsoft LAN Manager.
	
	The following shows the syntax for the IBM LSP drivers:
	
	device=DXMCnMOD.SYS  addr0, mem0, etr0, addr1, mem1, etr1
	
	where:
	
	addr0 = Replace with locally administered MAC address for the primary adapter or
	first.
	
	mem0 = Replace with RAM location for the primary adapter or first. See your IBM
	technical reference, Token Ring configuration guide, or PS/2 reference disk to
	determine or change this address.
	
	etr0 = Early token release functionality is provided if etr0=1 and the data rate
	for adapter is greater than 4 megabits per second; otherwise, this argument is
	ignored.
	
	The file will be DXMC1MOD.SYS IBM 3270 for Workstation Program support, or
	DXMC0MOD.SYS if Workstation Program support is not being used.
	
	Additional query words: 6.22 3.10 EARLY TOKEN RELEASE PS/2 memmaker
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
