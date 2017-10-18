---
layout: page
title: "Q107126: Using SYS.COM After Stacker Version 3.1 Is Installed"
permalink: kb/107/Q107126/
---

## Q107126: Using SYS.COM After Stacker Version 3.1 Is Installed

	Article: Q107126
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	STAC Electronics Stacker 3.1 modifies the DBLSPACE.BIN file to allow access to
	Stacker-compressed volumes; however, Stacker does not change the DBLSPACE.BIN
	filename.
	
	MORE INFORMATION
	================
	
	The command SYS.COM, which is supplied with Microsoft MS-DOS 6.x, normally
	generates the following four files:
	
	  IO.SYS
	  MSDOS.SYS
	  COMMAND.COM
	  DBLSPACE.BIN
	
	If Stacker 3.1 is present and you use SYS.COM to make a bootable floppy disk, the
	Stacker 3.1 version of DBLSPACE.BIN is generated and placed on the disk along
	with the other system files. If you use this floppy disk, a STAC Electronics
	copyright message is displayed during startup. If you boot your MS-DOS 6.0 or
	6.2 system with this disk and DoubleSpace is installed, the drive cannot mount
	because DBLSPACE.BIN is now controlled by Stacker 3.1.
	
	NOTE: Microsoft can neither guarantee nor support the functionality of the
	Stacker DBLSPACE.BIN file.
	
	If Stacker 3.1 is present, the only reliable methods to create an MS-DOS 6.0 or
	6.2 startup disk are:
	
	- Run SETUP /F using the MS-DOS 6.0 or 6.2 Upgrade disks.
	
	-or-
	
	- Copy the DBLSPACE.BIN file found on the MS-DOS 6.0 or 6.2 Uninstall disk to
	  the bootable floppy disk.
	
	Stacker 3.1 is manufactured by STAC Electronics, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.00 6.20 Stac 3.1 Stacker Dblspace.bin
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
