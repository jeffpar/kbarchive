---
layout: page
title: "Q86347: Thomas Conrad Network Cards May Need BUFFER.COM"
permalink: /kb/086/Q86347/
---

## Q86347: Thomas Conrad Network Cards May Need BUFFER.COM

	Article: Q86347
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use an earlier Thomas Conrad token ring network card with Microsoft
	Windows version 3.1, you may receive the following error message when you start
	Windows 3.1 in 386 enhanced mode:
	
	  Error loading [display].DRV
	
	where [display] is the video driver being used by Windows.
	
	The system may also stop or return to an MS-DOS command prompt without an error
	message.
	
	NOTE: Windows runs correctly in standard mode.
	
	WORKAROUND
	==========
	
	Loading the BUFFER.COM program provided by Thomas Conrad may correct this
	problem. Some earlier Thomas Conrad token ring cards require that the BUFFER.COM
	file be loaded in the AUTOEXEC.BAT file before running Windows 3.1 in 386
	enhanced mode. This file is necessary to allow the network driver to co-exist
	with the HIMEM.SYS memory manager. The BUFFER.COM file can be found on Disk #1
	of the Thomas Conrad Network Drivers disks in the NW_WKSTN directory.
	
	Another alternative is to download the TOKIPX.EXE file from the Thomas Conrad
	bulletin board service (BBS). This is a self-extracting file containing the
	necessary updates to allow the Network card to work successfully with HIMEM.SYS.
	After you update these files, you won't need BUFFER.COM.
	
	MORE INFORMATION
	================
	
	For further information, contact Thomas Conrad technical support.
	
	The Thomas Conrad products included here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty VGA EGA older hang err msg crash TC-4035
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
