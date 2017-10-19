---
layout: page
title: "Q97885: DoubleSpace, Drive Letters, and Installable Devices"
permalink: /kb/097/Q97885/
---

## Q97885: DoubleSpace, Drive Letters, and Installable Devices

	Article: Q97885
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	This article discusses how MS-DOS DoubleSpace assigns drive letters when
	installable block device drivers are loaded in the CONFIG.SYS file. Drive
	assignments depend on the order of device drivers in relation to the
	DEVICEHIGH=C:\DOS\DBLSPACE.SYS /MOVE command in the CONFIG.SYS file.
	
	NOTE: Installable block device drivers (for example, RAMDRIVE.SYS) affect
	DoubleSpace because they use drive letters.
	
	MORE INFORMATION
	================
	
	If no block devices appear before the DBLSPACE.SYS command in the CONFIG.SYS
	file, host drive letters are assigned according to the ActivateDrive line in
	DBLSPACE.INI file on the host drive. Any unused letters between the FirstDrive
	and LastDrive lines appear as "Available for DoubleSpace" when you type
	"dblspace /list" (without the quotation marks) at the MS-DOS command prompt. For
	example, if you have the following configuration files:
	
	  CONFIG.SYS:           DBLSPACE.INI
	  -----------           ------------
	  DBLSPACE.SYS          LastDrive=H
	  RAMDRIVE.SYS          ActivateDrive=H,CO
	
	your DBLSPACE /LIST would look something like this:
	
	  Drive  Type
	  -----  -------------------------
	    A    Removable-media drive
	    B    Removable-media drive
	    C    Compressed hard drive
	    D    Available for DoubleSpace
	    E    Available for DoubleSpace
	    F    Available for DoubleSpace
	    G    Available for DoubleSpace
	    H    Local hard drive
	    I    RamDrive
	
	However, if a block devices loads before DBLSPACE.SYS in the CONFIG.SYS file, it
	uses the first drive letter available after the last physical drive before any
	Double Space drives mount. As a result, if a drive letter taken by a block
	device would otherwise have been either a host drive or an "Available for
	DoubleSpace" drive, DoubleSpace moves the host or "Available..." drive to a
	different letter. The letter used is one greater than the LastDrive specified in
	the DBLSPACE.INI. For example, if you have the following configuration files:
	
	  CONFIG.SYS:           DBLSPACE.INI
	  ------------          ------------
	  RAMDRIVE.SYS          LastDrive=H
	  DBLSPACE.SYS          ActivateDrive=H,C0
	
	your DBLSPACE /LIST would look something like this:
	
	  Drive  Type
	  -----  -------------------------
	    A    Removable-media drive
	    B    Removable-media drive
	    C    Compressed hard drive
	    D    RamDrive
	    E    Available for DoubleSpace
	    F    Available for DoubleSpace
	    G    Available for DoubleSpace
	    H    Local hard drive
	    I    Available for DoubleSpace
	
	If more than one block device is loaded prior to the DBLSPACE.SYS command in the
	CONFIG.SYS file, each block device causes DoubleSpace to move a host or
	"Available" drive, using successive letters after the LastDrive.
	
	This results in DoubleSpace reserving drive letters after the drive letter
	specified by the LastDrive line in the DBLSPACE.INI file.
	
	For example, if you have a Novell network in the case above, Novell would use
	drive letters starting after those reserved by DoubleSpace, regardless of the
	LastDrive line in the DBLSPACE.INI file. However, if letter specified by the
	LastDrive line in the CONFIG.SYS file is greater than the last drive letter
	reserved by DoubleSpace, Novell NetWare uses drive letters starting after the
	letter in the LastDrive line in the CONFIG.SYS file.
	
	Additional query words: .00 6.20 dblspace double space DOSOAD.SYS bernoulli DMDRVR.BIN
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
