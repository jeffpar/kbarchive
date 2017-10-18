---
layout: page
title: "Q70753: DELOLDOS Command and OLD_DOS Directory Creation Limit"
permalink: kb/070/Q70753/
---

## Q70753: DELOLDOS Command and OLD_DOS Directory Creation Limit

	Article: Q70753
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
	
	In the Microsoft MS-DOS Upgrade for versions 5.0 and later, DELOLDOS command
	deletes all OLD_DOS.x directories residing in the root directory of the boot
	drive. Upon deletion of the these directories, DELOLDOS.EXE itself is also
	deleted from the directory it resides in.
	
	The MS-DOS Upgrade installation process can create a total of 99 old DOS
	directories named OLD_DOS.<x>:
	
	  OLD_DOS.1 ... OLD_DOS.99
	
	The <x> value is based upon the integer extensions of any previous OLD_DOS
	directories residing in the root directory of the boot drive, so that <x>
	is the next integer available in order starting at 1. When the installation
	process attempts to create the 100th OLD_DOS directory, it instead replaces the
	last OLD_DOS directory made, creating a directory with the same name.
	
	MORE INFORMATION
	================
	
	If the current DOS directory in use is deleted prior to installation or not
	detected when installing, an OLD_DOS.x directory is still created when
	installing; however, it contains only the README.NOW file. Also, any non- DOS
	files put into the DOS directory aren't saved in the OLD_DOS.x during
	installation. Those files are put into the new installed DOS directory instead.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
