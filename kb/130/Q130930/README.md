---
layout: page
title: "Q130930: Creating a Boot Floppy for a Multibus SCSI Adapter"
permalink: /kb/130/Q130930/
---

## Q130930: Creating a Boot Floppy for a Multibus SCSI Adapter

	Article: Q130930
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	To create an FT boot floppy to boot the mirror drive attached to the
	secondary channel/bus of a Multibus SCSI adapter, you must modify the
	Arc path in the BOOT.INI file. For scsi(x)disk(y)rdisk(z)parition(a), the
	variable (y) should be calculated as follows:
	
	  y= [ (scsi bus/channel number) x (32) ] + (scsi id of the disk)
	
	For example, the Adaptec AHA-2740T/2742T has two channels; SCSI Channel A
	(bus 0) and SCSI Channel B (bus 1). Each channel can accommodate a SCSI bus
	with up to seven devices. If the Windows NT mirror drive is located on the
	first partition on a SCSI disk with the target ID of 4, and is connected to
	SCSI Channel B (bus number 1) of an Adaptec AHA-2742T controller, the ARC
	name in the BOOT.INI file would be:
	
	  scsi(0)disk(36)rdisk(0)partition(1)
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
