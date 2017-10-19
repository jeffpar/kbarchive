---
layout: page
title: "Q149584: Cannot Access Compressed Drives After Removing Windows 95"
permalink: /kb/149/Q149584/
---

## Q149584: Cannot Access Compressed Drives After Removing Windows 95

	Article: Q149584
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): msdos win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for
	commands and file names.
	
	SYMPTOMS
	========
	
	If you upgrade to Windows 95 on a computer with a compressed drive C, and then
	uncompress drive C in Windows 95, you may lose access to all other compressed
	drives if you later remove (uninstall) Windows 95.
	
	CAUSE
	=====
	
	When the uninstall information was saved, the real-mode compression driver and
	other MS-DOS system files were located on the host drive for compress- ed drive
	C. Because drive C is no longer compressed when you remove Windows 95, the host
	drive is no longer available and the real-mode compression driver cannot be
	restored. Therefore, any remaining compressed drives are not mounted and cannot
	be accessed.
	
	RESOLUTION
	==========
	
	To work around this problem, create a small new DoubleSpace drive and then
	delete it. This creates a Dblspace.ini file and loads Dblspace.bin into memory
	so that you can mount the remaining compressed drives. For information about how
	to do so, please see the following article in the Microsoft Knowledge Base:
	
	  Q100763 Using Compressed Floppy Disks without a Compressed Hard Disk
	
	After the new compressed drive is created, you can use DoubleSpace to mount any
	other compressed drives on your computer.
	
	MORE INFORMATION
	================
	
	Even if you choose to save your existing system files during Windows 95 Setup,
	you may be unable to successfully remove Windows 95 if your system configuration
	has changed significantly since the uninstall information was saved.
	
	Additional query words: 6.00 6.20 6.22
	
	======================================================================
	Keywords          : msdos win95 
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22; WINDOWS:95
	
	=============================================================================
	
