---
layout: page
title: "Q135939: DriveSpace Does Not Mount Two CVFs with the Same Extension"
permalink: kb/135/Q135939/
---

## Q135939: DriveSpace Does Not Mount Two CVFs with the Same Extension

	Article: Q135939
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
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
	
	If you have two or more compressed drives, one of the compressed drives may not
	be mounted because DriveSpace reports that it has already been mounted.
	
	CAUSE
	=====
	
	This problem can occur if two compressed volume files (CVFs) have the same
	extension. For example, this problem can occur if one CVF is named Drvspace.002
	and another CVF is named Dblspace.002.
	
	RESOLUTION
	==========
	
	Rename one of the CVFs so that it does not have the same extension as another.
	Use a unique number between 001 and 255 for the extension. To rename a CVF,
	follow these steps:
	
	1. At an MS-DOS prompt, change to the drive and directory containing the CVF
	  file you want to rename.
	
	2. Type the following command
	
	  " attrib -s -h -r <filename> " (without the quotation marks)
	
	  where <filename> is the name of the CVF.
	
	3. Type the following command
	
	  " ren <filename> <new filename> " (without the quotation marks)
	
	  where <filename> is the name of the CVF, and <new filename> is the
	  new name for the CVF.
	
	4. Type the following command
	
	  " attrib +s +h +r <new filename> " (without the quotation marks)
	
	  where <new filename> is the new name of the CVF.
	
	5. Quit the MS-DOS prompt.
	
	6. Restart the computer.
	
	MORE INFORMATION
	================
	
	DriveSpace cannot mount two CVFs with the same extension. When this occurs, the
	CVF that is mounted depends on the .ini file that DriveSpace is using. For
	example, if you have a Drvspace.003 and a Dblspace.003 file, and DriveSpace is
	using the Dblspace.ini file for its configuration information, the Dblspace.003
	file is mounted.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : WINDOWS:95
	
	=============================================================================
	
