---
layout: page
title: "Q248449: PRB: MSDN Library NetCopy.exe Warns Network Share Is FAT"
permalink: kb/248/Q248449/
---

## Q248449: PRB: MSDN Library NetCopy.exe Warns Network Share Is FAT

	Article: Q248449
	Product(s): Microsoft Developer Network
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbOSWin2000 kbOSWin95 kbDSupport
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NetCopy.exe can be used to create a network installation point for the MSDN
	Library. When running NetCopy and copying all MSDN Library files to a network
	share, the following warning may incorrectly appear:
	
	  Warning! The target location is formatted as a FAT drive. Due to the large
	  number of files in MSDN, the target location may not have enough space.
	  Please refer to the READMEDN.HTM file on Disc 1 for more information.
	
	This message displays, even though the target network share is known to be using
	the FAT32 file system.
	
	CAUSE
	=====
	
	This problem can happen when the network share is on a Windows 2000 computer.
	Setup is using GetVolumeInformation API to determine the file system type. The
	GetVolumeInformation API incorrectly returns FAT instead of FAT32 when used on a
	Windows 2000 FAT32 network share.
	
	RESOLUTION
	==========
	
	Verify that the file system is FAT32:
	
	1. Go to the actual target computer. Do not use the network share.
	
	2. Use Windows Explorer to select the target drive.
	
	3. Right-click on the drive letter, and select Properties.
	
	4. Verify that the File System is FAT32.
	
	After verifying that the target network share is on a FAT32 drive, you can safely
	ignore the warning. If the target drive is not FAT32, please see the
	READMEDN.htm file on Disc 1 of the MSDN Library for more information about the
	potential problem.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The NetCopy.exe program first shipped with the January 2000 MSDN Library.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbOSWin2000 kbOSWin95 kbDSupport 
	Technology        : kbMSDNSearch kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
