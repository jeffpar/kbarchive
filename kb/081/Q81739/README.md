---
layout: page
title: "Q81739: Using UNINSTAL.EXE With MS-DOS Upgrade"
permalink: kb/081/Q81739/
---

## Q81739: Using UNINSTAL.EXE With MS-DOS Upgrade

	Article: Q81739
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The UNINSTAL.EXE program included with your MS-DOS Upgrade should only be run
	under the version of MS-DOS that it shipped with. This is because the program
	assumes it will be run under that version, and other versions of MS-DOS may not
	be able to properly access the hard drive(s) or behave as UNINSTAL.EXE expects.
	
	MORE INFORMATION
	================
	
	The Uninstall #1 disk must be created in drive A because it is an MS-DOS boot
	disk that automatically executes UNINSTAL.EXE. To uninstall MS-DOS, place the
	Uninstall #1 disk in drive A and reboot the computer.
	
	If the Uninstall #1 disk won't boot, do the following:
	
	1. Create an MS-DOS system disk with the SETUP /F command.
	
	2. Rename the CONFIG.SYS file on that disk.
	
	3. Boot with that disk and then run the Uninstall program.
	
	If you cannot run the SETUP /F command and another MS-DOS machine is available
	and is running the same version of MS-DOS, you can use the SYS command to create
	a system disk on that machine.
	
	If you cannot create an MS-DOS system disk, determine whether the previous MS-DOS
	version can access the hard drive properly. If it does, you may be able to
	manually install the previous MS-DOS version without losing any data.
	
	If necessary, reformat your disk using the previous MS-DOS version.
	
	Additional query words: 6.22 5.x 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
