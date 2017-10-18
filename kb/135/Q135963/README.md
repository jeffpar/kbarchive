---
layout: page
title: "Q135963: Cannot Create DriveSpace 3-Compatible Startup Disk"
permalink: kb/135/Q135963/
---

## Q135963: Cannot Create DriveSpace 3-Compatible Startup Disk

	Article: Q135963
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
	
	If you install Microsoft Plus! for Windows 95 and DriveSpace 3 and then
	re-install Windows 95, you cannot create a DriveSpace 3-compatible startup disk.
	
	CAUSE
	=====
	
	Windows 95 Setup replaces the Msdos.inf and Layout.inf files used to create the
	startup disk with the original versions of the files.
	
	RESOLUTION
	==========
	
	To update the required files, follow these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click DriveSpace.
	
	2. Click an uncompressed drive, and then click Create Empty on the Advanced
	  menu.
	
	3. In the Using box, enter "1" (without the quotation marks) and then click
	  Start. The "1" indicates the size in megabytes for the new compressed drive.
	
	4. When you are prompted to update the current startup disk, click Yes.
	
	To delete the new compressed drive, follow these steps:
	
	1. Click the new compressed drive in DriveSpace, and then click Delete on the
	  Advanced menu.
	
	2. Click Yes, and then OK, to confirm that you want to delete the drive.
	
	3. Close DriveSpace.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	After you follow the steps in the "Resolution" section, you can create
	DriveSpace 3-compatible startup disks.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
