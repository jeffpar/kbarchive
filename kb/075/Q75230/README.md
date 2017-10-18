---
layout: page
title: "Q75230: PCSupport 2.1, MEM /C, and Enhanced Mode Windows 3.0"
permalink: kb/075/Q75230/
---

## Q75230: PCSupport 2.1, MEM /C, and Enhanced Mode Windows 3.0

	Article: Q75230
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may encounter problems using PCSupport 2.1 (a token ring router) with the
	MS-DOS version 5.0 MEM command when shelling out of enhanced mode Windows 3.0.
	When typing the MEM /C command, the machine will display the requested
	information, then hang. Performing MEM /C from standard or real mode Windows
	will not cause a system hang.
	
	This problem occurs because of a conflict between Windows enhanced mode memory
	allocation and the token ring card being used. The MEM command will function
	normally from enhanced mode Windows if EMM386.EXE is loaded in the CONFIG.SYS
	file and the token ring card's address is excluded using the X= parameter.
	EMM386.EXE should be loaded before the token ring drivers.
	
	Note that this problem will occur even if EMM386.EXE is NOT loaded.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
