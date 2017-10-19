---
layout: page
title: "Q135971: Cannot Compress Incorrectly Configured Drive with DriveSpace"
permalink: /kb/135/Q135971/
---

## Q135971: Cannot Compress Incorrectly Configured Drive with DriveSpace

	Article: Q135971
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
	
	When you try to compress a drive with DriveSpace, you may receive the following
	error message:
	
	  DriveSpace cannot write to the C:\DRVSPACE.000 file. Drive C is probably
	  full. Or, it might be write-protected or damaged. Move or delete unwanted
	  files, remove any write-protection, or try running ScanDisk.
	
	  ID Number: DRVSPACE049"
	
	When you click OK, you receive the following error message:
	
	  Windows cannot examine drive H. You should check the drive for errors using
	  ScanDisk.
	
	  ID Number: DRVSPACE043"
	
	After you click OK, you receive the following message:
	
	  Cannot read C:\DRVINI.TMP.
	
	  ID Number: DRVSPACE048"
	
	If you run ScanDisk, it does not find any errors.
	
	CAUSE
	=====
	
	This problem can occur if the drive is configured incorrectly in the computer's
	CMOS settings.
	
	RESOLUTION
	==========
	
	To correct this problem, configure the drive correctly in the computer's CMOS
	settings. Possible changes include:
	
	- Changing the hard disk type to the correct value below 1024.
	
	- Enabling logical block addressing (LBA).
	
	WARNING: Changing CMOS settings for the hard disk can cause data loss. Make sure
	that you know the correct settings before you make any changes.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
