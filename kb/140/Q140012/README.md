---
layout: page
title: "Q140012: ScanDisk in Setup Does Not Scan DriveSpace 3 Drive's MDFAT"
permalink: /kb/140/Q140012/
---

## Q140012: ScanDisk in Setup Does Not Scan DriveSpace 3 Drive's MDFAT

	Article: Q140012
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows 95 over an existing installation of Windows 95 on a
	hard disk compressed with DriveSpace 3, the version of ScanDisk run by Setup can
	check only the FAT for potential errors. The version of ScanDisk run by Setup
	cannot check the MDFAT. If you did not update your Windows 95 Startup Disk with
	Microsoft Plus!, the same situation occurs with the version of ScanDisk on the
	Startup Disk.
	
	CAUSE
	=====
	
	The version of ScanDisk run by Setup is not designed to work with DriveSpace 3.
	
	RESOLUTION
	==========
	
	Before you run Setup again, run ScanDisk with the Thorough option on all drives,
	including the compressed drive and its host drive. Run ScanDisk from the System
	Tools menu, or from your Startup Disk (if it was upgraded with Microsoft Plus!).
	
	MORE INFORMATION
	================
	
	The version of ScanDisk run by Setup checks only the cluster-based file
	allocation table (FAT) on drives compressed with DriveSpace 3. Because
	DriveSpace 3 uses a Microsoft DoubleSpace FAT (MDFAT) for sector allocation,
	ScanDisk cannot check portions of the compressed drive for errors.
	
	Note that the version of ScanDisk run by Setup can check drives compressed with
	DriveSpace and DoubleSpace (but not DriveSpace 3). ScanDisk checks drives
	compressed with third-party compression (such as SuperStor or Stacker) as normal
	FAT drives only.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q136900 Manually Updating the Startup Disk After Installing MS Plus!
	
	  Q134859 DriveSpace VxD and Real-Mode Driver are Mismatched
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
