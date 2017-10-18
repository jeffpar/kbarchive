---
layout: page
title: "Q83726: INT 12h and Windows Enhanced Mode"
permalink: kb/083/Q83726/
---

## Q83726: INT 12h and Windows Enhanced Mode

	Article: Q83726
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A well-known method of providing security features for MS-DOS is to install an
	interrupt handler into the upper area of conventional memory. INT 12h is used to
	inform MS-DOS that this portion of memory is no longer available for use with
	MS-DOS applications. For this technique to work with Windows enhanced mode, it
	is necessary to write a virtual device (VxD) to map the affected memory pages
	into virtual machines.
	
	MORE INFORMATION
	================
	
	When the value in location 40:13 of the BIOS data segment is decreased, MS- DOS
	will reserve memory immediately below the 384 kilobyte adapter segment. The
	return value from issuing an INT 12h is the new amount of available memory.
	Several manufacturers of security software use this technique to install
	software prior to starting MS-DOS.
	
	This technique fails with Windows in enhanced mode because Windows does not map
	the corresponding pages in virtual machines onto the physical locations of those
	pages. If any interrupt handlers reside in the affected area, the missing
	mapping will keep the handlers from being invoked properly.
	
	The EBIOS virtual device, provided with the Windows Device Development Kit (DDK),
	demonstrates using the VxD services PhysIntoV86 and Assign_Device_V86_Pages to
	add page mappings to Windows. These techniques have been incorporated into the
	RIPLMEM VxD, which was originally designed to address a problem related to
	starting Windows on diskless workstations. RIPLMEM is distributed as an
	application note and is in the Software/Data Library. For more information on
	RIPLMEM, query on the following words in the Microsoft Knowledge Base:
	
	  " prod(win3) and riplmem " (without the quotation marks)
	
	Additional query words: 3.0 boot
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	
	=============================================================================
	
