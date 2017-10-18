---
layout: page
title: "Q72112: '0 Bytes Available Contiguous Extended Memory'"
permalink: kb/072/Q72112/
---

## Q72112: '0 Bytes Available Contiguous Extended Memory'

	Article: Q72112
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MEM command reports "0 bytes available contiguous extended memory" when
	another device driver or program makes a call to extended memory after HIMEM.SYS
	is loaded in the CONFIG.SYS file.
	
	For example, a CONFIG.SYS file with following lines
	
	     device=c:\himem.sys
	     device=c:\windows\smartdrv.sys <xxxx> <yyyy>
	
	reports 0 (zero) bytes as available contiguous extended memory with the MEM
	command (where <xxxx> is the initial cache size and <yyyy> is the
	minimum cache size).
	
	MORE INFORMATION
	================
	
	Available contiguous extended memory is the extended memory available for the
	interrupt 15h interface. This memory is not managed by an extended memory
	manager (HIMEM.SYS in this example). HIMEM.SYS manages an application's use of
	extended memory and the high memory area (HMA). The extended memory manager
	prevents programs from simultaneously accessing the same memory area.
	
	HIMEM.SYS versions 2.04 and 2.60 have no switch to allocate extended memory to
	the interrupt 15 interface.
	
	HIMEM.SYS version 2.77, which is shipped with MS-DOS version 5.0, contains an
	added /INT15=xxxx switch. This switch allocates a specified amount of extended
	memory (in kilobytes) for the interrupt 15h interface. Programs that use
	extended memory directly and recognize vdisk headers can use the memory provided
	by the /INT15= switch. For more information, refer to the version 5.0 "MS-DOS
	User's Guide and Reference."
	
	The programs accessing extended memory using the interrupt 15h call do not get
	any access to extended memory if HIMEM.SYS is loaded during system startup.
	HIMEM.SYS takes control of all the extended memory if no other device drivers
	are loaded before HIMEM.SYS during system startup.
	
	If a program is making an interrupt 15h call to access extended memory, do not
	load HIMEM.SYS (version 2.04 or 2.60). Not loading HIMEM.SYS gives access to
	extended memory through the interrupt 15h call.
	
	For more information on how the MEM command reports, query on the following
	words:
	
	  " MEM and command and extended and memory " (without the quotation marks)
	
	Additional query words: 4.x 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:4.x,5.0
	
	=============================================================================
	
