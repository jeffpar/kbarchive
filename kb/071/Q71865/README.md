---
layout: page
title: "Q71865: Requirements for UMB Support in MS-DOS 5.0"
permalink: /kb/071/Q71865/
---

## Q71865: Requirements for UMB Support in MS-DOS 5.0

{% raw %}

	Article: Q71865
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS version 5.0 provides systems the ability to free up conventional memory
	by running device drivers and other memory resident programs in the upper memory
	blocks (UMBs) located in the upper memory area (UMA). The UMA is address space
	located between 640K and 1024K that normally contains the system ROM BIOS and
	the video, network, and other hardware adapters. To access MS-DOS 5.0's ability
	to support UMBs, Microsoft recommends the following system conditions be met:
	
	- A 80386 or 80486 microprocessor
	
	- 350K of XMS memory
	
	- The following CONFIG.SYS statements:
	
	        device=himem.sys
	        dos=umb                    or     dos=high,umb
	        device=emm386.exe noems    or     device=emm386.exe ram
	
	Any DEVICEHIGH statements in the CONFIG.SYS file must follow the two device
	statements previously mentioned.
	
	MORE INFORMATION
	================
	
	80386 or 80486 Microprocessor
	-----------------------------
	
	The 80386 and 80486 are the first processors that have paging hardware
	capability. EMM386.EXE uses this capability to map device drivers or programs
	into the UMA where these programs run in real-mode addresses that are below the
	1024K line. Therefore, EMM386.EXE can currently work only with these
	microprocessors. For any earlier processor, a different upper memory manager is
	necessary for access to that area.
	
	350K of XMS Memory
	------------------
	
	XMS is the Lotus/Intel/Microsoft/AST eXtended Memory Specification, which is a
	standard way for programs to use extended memory. 350K is the recommended amount
	of XMS memory necessary to use all of the UMA for UMBs. However, it is possible
	to have a smaller amount of XMS memory for UMB support. Most often, 350K of UMBs
	will never be available due to the system ROM BIOS and other hardware adapters
	that may be present in the UMA.
	
	CONFIG.SYS Statements
	---------------------
	
	The following MS-DOS 5.0 statements are needed for UMB support:
	
	- The DEVICE=HIMEM.SYS statement loads the extended memory manager driver that
	  provides access to extended memory.
	
	- DOS=UMB provides MS-DOS the link to the UMA providing UMB support.
	
	- The EMM386.EXE statement needs one of the following switches to manage the
	  UMA:
	
	  noems (Does not provide expanded memory support)
	  ram (Provides both upper memory and expanded memory support)
	
	  Examples: device=c:\dos\emm386.exe noems
	  device=c:\dos\emm386.exe ram
	
	More information on this topic can be found in the version 5.0 "Microsoft MS-DOS
	User's Guide and Reference," pages 313-330.
	
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
