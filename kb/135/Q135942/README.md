---
layout: page
title: "Q135942: DoubleSpace Driver in Memory After Drive is Uncompressed"
permalink: kb/135/Q135942/
---

## Q135942: DoubleSpace Driver in Memory After Drive is Uncompressed

	Article: Q135942
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows 95 DriveSpace program to uncompress a drive, the
	program prompts you whether you want to uncompress the drive and remove the
	compression driver from memory. After the drive is uncompressed, the
	Dblspace.bin file may remain resident in conventional memory and the
	Dblspace.ini file may remain on drive C.
	
	CAUSE
	=====
	
	Windows 95 is installed on a drive other than drive C, and you are using the
	uncompress feature from the Windows 95 drive.
	
	RESOLUTION
	==========
	
	To remove the Dblspace.bin file from conventional memory and the Dblspace.ini
	file from drive C, use one of the following methods:
	
	- Delete all reference to DoubleSpace from drive C by typing the following
	  command at the MS-DOS prompt:
	
	  " Deltree dblspace.* " (without the quotation marks)
	
	  -or-
	
	- Use the Windows 95 protect mode Drivespace program to uncompress the drive.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
