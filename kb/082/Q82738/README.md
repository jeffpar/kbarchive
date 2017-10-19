---
layout: page
title: "Q82738: Using Central Point Backup with Windows 3.1"
permalink: /kb/082/Q82738/
---

## Q82738: Using Central Point Backup with Windows 3.1

	Article: Q82738
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run Central Point Backup version 7.0 or 7.1 for MS-DOS under Windows
	version 3.1, DMA buffer size may be too small. To increase the DMA buffer size,
	add the following line to the SYSTEM.INI file under the [386Enh] section:
	
	     DMABUFFERSIZE=18
	
	You may need to experiment to find a value that works on your machine. A value in
	the range of 18 to 64 should work correctly.
	
	If you have problems running Central Point Backup when TrueType fonts are
	enabled, increase the BUFFERS setting in the CONFIG.SYS file to at least 30.
	
	MORE INFORMATION
	================
	
	Some tape backup systems require that DMABUFFERSIZE be set to 64, which is what
	Central Point recommends. The disadvantage of increasing the buffer size is that
	increasing the DMA buffer size uses up conventional memory for all applications
	running under Windows.
	
	The Windows version of Central Point Backup does not require the increase in DMA
	buffer size. If you are going to use a backup program under Windows, Microsoft
	recommends you use a Windows backup program, such as the one that comes with PC
	Tools.
	
	Some tape backup systems may run successfully no matter what setting is used for
	the DMA buffer size. Resetting the DMA buffer size will not enhance performance
	on such systems, even though the DMA buffer message is displayed. For more
	information about using Central Point Backup with such systems, contact Central
	Point Software.
	
	The Central Point Backup product included here is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
