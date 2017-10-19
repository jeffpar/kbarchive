---
layout: page
title: "Q74589: Hidden System Files and MS-DOS 5 and Later Upgrade"
permalink: /kb/074/Q74589/
---

## Q74589: Hidden System Files and MS-DOS 5 and Later Upgrade

	Article: Q74589
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
	
	The Microsoft MS-DOS Upgrade Setup copies the hidden system files IO.SYS and
	MSDOS.SYS to the front of the root directory in the boot drive. If the previous
	version of DOS had files called IO.SYS and MSDOS.SYS created by Microsoft, those
	files will be deleted.
	
	If the previous version of DOS has hidden system files by other names or that
	were not created by Microsoft, they are moved to the first available space in
	the root directory of the bootable hard drive. These files can then be deleted
	after resetting the file attributes.
	
	The following command will turn off the system file attribute, the hidden file
	attribute, and the read-only file attribute of a file named IBMBIO.COM.
	
	  attrib -s -h -r ibmbio.com
	
	These files can also be deleted using MS-DOS Shell.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
