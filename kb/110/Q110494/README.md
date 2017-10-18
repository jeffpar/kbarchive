---
layout: page
title: "Q110494: Windows Hangs on Reboot After Installing Sound System 2.0"
permalink: kb/110/Q110494/
---

## Q110494: Windows Hangs on Reboot After Installing Sound System 2.0

	Article: Q110494
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases Windows may stop responding after you install Windows Sound System
	and restart your computer.
	
	RESOLUTION
	==========
	
	It has been reported that adding the following line to the [SNDSYS.DRV] section
	of the SYSTEM.INI file may resolve this problem (note that this solution is
	specific to version 2.0 of Windows Sound System):
	
	     Enableeisaresourcescan=0
	
	If this does not resolve the problem, try setting it to 1 as follows:
	
	     Enableeisaresourcescan=1
	
	This switch disables the EISA resource scan on EISA machines that may be
	configured incorrectly or have invalid information in the EISA resources.
	
	Under the 2.0 driver, the EISA resources are scanned to find conflicts with
	DMAs/IRQs that are otherwise undetectable. This is the case for the Adaptec 174x
	enhanced SCSI controllers.
	
	Note that this line has solved problems on ISA machines as well as EISA
	machines.
	
	If this does not resolve the problem, there may be a DMA conflict, Interrupt
	conflict, or there may be other sound drivers left installed in Windows. The DMA
	can be manually modified by changing the DMAADC= and DMADAC= lines in the
	[SNDSYS.DRV] section of the SYSTEM.INI file. The interrupt can be changed by
	modifying the INTERRUPT= line in the same section.
	
	If none of the previous steps resolve the problem, remove the following line from
	the SYSTEM.INI file's [386enh] section to allow Windows to at least start.
	
	     device=vsndsys.386
	
	Additional query words: 2.00 hung 2 hang freeze up crash lockup lock wss reboot rebooting machine restart close exit
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
