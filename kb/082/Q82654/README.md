---
layout: page
title: "Q82654: DEC Pathworks Remote Boot Workstations Under Windows 3.1"
permalink: kb/082/Q82654/
---

## Q82654: DEC Pathworks Remote Boot Workstations Under Windows 3.1

	Article: Q82654
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use a Digital Equipment Corporation (DEC) Pathworks diskless
	workstations, you need to take the additional steps described in this article
	when installing Windows version 3.1.
	
	You need to place loadable drivers provided with Windows 3.1 (for example,
	HIMEM.SYS, EMM386.EXE, RAMDRIVE.SYS, SMARTDRV.EXE, and so on.) on the boot disk
	for floppy based systems, or the bootable share for diskless workstations.
	
	MORE INFORMATION
	================
	
	DEC Pathworks handles remote boot stations differently than other networks. It
	creates a floppy disk from which to boot. In the case of an actual floppy-based
	system, this makes sense; however, on a diskless workstation, this can be
	confusing.
	
	The network creates a bootable disk-service share with the workstations node
	address as the name. The boot share is given the drive letter C by the network.
	Another share must be created by the administrator to contain the workstation's
	Windows directory or any other applications they may use.
	
	When the station is set up by the network, the administrator has a choice of
	floppy-disk sizes; the largest size for the boot share for a diskless station is
	1.44 MB. In this area, DEC puts a DECNET directory containing the basic network
	functions necessary to connect and use the DECNET master share. Because this
	does not leave much room for anything else, The MS-DOS command SETUP /N should
	be pointed to a common file service share.
	
	Another point to remember is that loadable drivers provided by Windows,
	HIMEM.SYS, EMM386.EXE, RAMDRIVE.SYS, SMARTDRV.EXE, and so on, must be placed on
	the boot disk for floppy-based systems, or the bootable share for diskless
	workstations. This is because the connection to the main Windows share, or the
	workstation's Windows share, is not established until STARTNET.BAT is run in the
	AUTOEXEC.BAT.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
