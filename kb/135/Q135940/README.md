---
layout: page
title: "Q135940: Large Files Left on Host After Compressing with DriveSpace"
permalink: kb/135/Q135940/
---

## Q135940: Large Files Left on Host After Compressing with DriveSpace

	Article: Q135940
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
	
	When you use DriveSpace (DRVSPACE.EXE) to compress a drive, you may receive the
	following error message:
	
	  There was not enough free space on drive C: to complete this task. Some files
	  have been left uncompressed on drive h: If you want to compress these files,
	  you must delete unwanted files from drive C: and then try again.
	
	  ID Number: Drvspace000
	
	CAUSE
	=====
	
	When it compresses files, DriveSpace makes a second copy of the files on the
	compressed drive before it deletes the duplicated files on the host drive. If
	the compressed drive does not have enough free space to store a copy of the
	larger files, it leaves the larger files on the host drive.
	
	RESOLUTION
	==========
	
	When you use DriveSpace in Windows 95, free some space on the compressed drive,
	and then copy the files from the host drive to the compressed drive.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
