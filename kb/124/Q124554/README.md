---
layout: page
title: "Q124554: DriveSpace: DRVSPACX.VXD Is Removed, DRVSPACE.SYS /Move Is Not"
permalink: /kb/124/Q124554/
---

## Q124554: DriveSpace: DRVSPACX.VXD Is Removed, DRVSPACE.SYS /Move Is Not

	Article: Q124554
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you remove your last compressed drive, DriveSpace does one of the
	following:
	
	- Asks whether you want to remove the compression driver from memory.
	
	  -or-
	
	- Fails to remove a device statement in your CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	At the end of an operation that removes your last compressed drive (either
	Uncompress or Delete), DriveSpace asks if the compression driver (DRVSPACX.VXD)
	should be removed from memory:
	
	  Remove Compression?
	  Your computer no longer contains any compressed drives.
	  Do you want to remove the compression driver from memory?
	
	The question implies that the driver will be removed immediately from memory;
	however, it is not actually removed until you restart the computer.
	
	After you restart the computer, DRVSPACX.VXD is successfully removed from memory;
	however, the following line may remain in your CONFIG.SYS file
	
	  Device=<path>\DRVSPACE.SYS /Move
	
	where <path> is the Windows 95 COMMAND subdirectory (for example,
	C:\Windows\Command)
	
	DRVSPACE.SYS /Move no longer serves a purpose because the DriveSpace driver is
	not loading. It is safe to remove this line from your CONFIG.SYS file.
	
	Steps to Remove DRVSPACE.SYS /Move
	----------------------------------
	
	1. Open the CONFIG.SYS file in a text editor (such as Microsoft WordPad).
	
	2. Remove the following line:
	
	  DEVICE=<path>\DRVSPACE.SYS /Move
	
	3. Save the file, shut down and then restart Windows 95.
	
	
	Additional query words: dxxspace
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
