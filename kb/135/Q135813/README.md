---
layout: page
title: "Q135813: DriveSpace 3 Cannot Compress Drive with 22 Local Drives"
permalink: kb/135/Q135813/
---

## Q135813: DriveSpace 3 Cannot Compress Drive with 22 Local Drives

	Article: Q135813
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use DriveSpace 3 to compress a drive on a computer with 22 local
	drives, you receive the following error message:
	
	  Drive letters C through Z are in use. You need a free drive letter to mount a
	  compressed drive.
	
	  To free a drive letter, disconnect a network drive or unmount a compressed
	  drive you aren't using now.
	
	RESOLUTION
	==========
	
	To compress a drive on a computer with the configuration stated above, you must
	add the line "firstdrive=Y" to the Drvspace.ini file. The Drvspace.ini file
	should be located in the root directory of the compressed drive, and should have
	its Hidden, Read-Only, and System attributes set. To remove these attributes (so
	you can edit the file), type the following line at an MS-DOS prompt:
	
	  " attrib -r -h -s drvspace.ini " (without the quotation marks)
	
	Add the line "firstdrive=Y" (without the quotation marks) to the beginning of the
	file, save and close the file, and then restart Windows 95.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbGamesSearch kbPlusSearch kbPlus95
	Version           : 95
	
	=============================================================================
	
