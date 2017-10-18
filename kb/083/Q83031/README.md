---
layout: page
title: "Q83031: Windows 3.1: Using Upper Memory Blocks (UMBs)"
permalink: kb/083/Q83031/
---

## Q83031: Windows 3.1: Using Upper Memory Blocks (UMBs)

	Article: Q83031
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.1 running in 386 enhanced mode contains support for
	the use of upper memory blocks (UMBs) just as MS-DOS 5.0 does. With MS- DOS 5.0,
	you can make use of free addresses in the 384K upper memory area (UMA) by
	loading EMM386.EXE and using the LOADHIGH or DEVICEHIGH commands. Windows is
	compatible with this configuration, but cannot make use of free UMB space, once
	EMM386.EXE is loaded.
	
	MORE INFORMATION
	================
	
	Windows 3.1 can use free UMBs in the same manner as MS-DOS 5.0. Both operating
	systems can access the UMA and provide UMB support for programs. Windows 3.0
	does not have this feature and subsequently cannot make use of the UMA. This
	means that the application programming interface (API) translation buffers are
	always stored in conventional memory or lower memory if EMM386.EXE is loaded.
	With Windows 3.1, the translation buffers can be loaded into the UMA, and will
	be, if there is enough free memory in the UMA (4-34K).
	
	This DOES NOT mean that you can load Windows 3.1 high into a UMA. What this means
	is that Windows 3.1 understands how to access and use the UMA itself, without
	any interaction on your part.
	
	The available UMBs are used for things that would otherwise have a "low 640 KB
	conventional" memory footprint. This means that Windows can move things out of
	an application's way and make the contiguous available space for applications
	larger by placing things into the UMBs. Primarily, API translation buffers
	(because they are the largest items) are moved into the UMBs. These buffers are
	used to map things such as INT 21h, INT 10h, INT 13h, and INT 5Ch calls that are
	made by Windows- and MS-DOS-based applications. These buffers can take up
	between 4K and 32K of UMBs.
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
