---
layout: page
title: "Q85580: SMARTDrive Drive Letter Parameters Should Not Contain a Colon"
permalink: kb/085/Q85580/
---

## Q85580: SMARTDrive Drive Letter Parameters Should Not Contain a Colon

	Article: Q85580
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The drive letter command line parameters for SMARTDRV.EXE version 4.0 should not
	contain a colon (:) after the drive letter. If there is a colon after the drive
	letter on the command line for SMARTDrive, no caching changes will take effect
	on the specified drive.
	
	MORE INFORMATION
	================
	
	SMARTDRV.EXE version 4.0, which is shipped with Windows version 3.1, allows the
	use of command line parameters to control the caching of individual drives.
	
	By entering the drive letter on the command line after SMARTDRV.EXE, followed
	optionally by a plus sign (+) or minus sign (-), the caching status of the drive
	can be modified. However, if the drive letter is followed by a colon (:),
	SMARTDRV.EXE will make no caching changes.
	
	A colon is considered an invalid switch, and SMARTDRV.EXE will display the Help
	menu instead of caching information.
	
	The following is an example of the correct syntax for changing the caching status
	of a drive:
	
	  smartdrv c d- e+
	
	This command enables read-only caching for drive C, no caching for drive D, and
	read and write caching for drive E.
	
	Additional query words: 3.10 3.1 3.11 enable disable
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
