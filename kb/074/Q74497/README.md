---
layout: page
title: "Q74497: MEM May Report Extended Memory when None Exists"
permalink: /kb/074/Q74497/
---

## Q74497: MEM May Report Extended Memory when None Exists

	Article: Q74497
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MEM command determines the size of available extended memory by making a
	call to the ROM BIOS (int 15h, function 88h). This call is also made by DOS at
	boot time and is stored as an internal variable. On some older machines, the ROM
	BIOS does not support int 15h, function 88h. This can cause garbage values to be
	returned to MEM when attempting to determine the size of extended memory. This
	problem typically occurs on older 8086/8088 machines.
	
	For more information, query on the following words:
	
	  " MEM and EXTENDED and MEMORY " (without the quotation marks)
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
