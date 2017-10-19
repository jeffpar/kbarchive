---
layout: page
title: "Q157586: Corporate Evaluation CD Fails Installing WinNT 4.0 Workstation"
permalink: /kb/157/Q157586/
---

## Q157586: Corporate Evaluation CD Fails Installing WinNT 4.0 Workstation

	Article: Q157586
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some versions of the Corporate Evaluation 97 CD-ROM have two folders that are
	named incorrectly. The Winntw folder should be I386 and the I386\Drvlib_N folder
	should be I386\Drvlib.nic.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Copy the entire Winntw folder and all subfolders to a share or onto a hard
	  disk drive.
	
	2. Change the folder name Winntw to I386.
	
	3. Change the folder name Winntw\Drvlib_N to I386\Drvlib.nic.
	
	The setup should proceed as normal as it is now the same as the standard Windows
	NT 4.0 Workstation compact disc.
	
	If you use Windows 95, you need to run WINNT from the I386 folder. If you run
	Windows NT 3.5x, you need to run WINNT32 from the I386 folder. The installation
	will proceed the same as a normal setup from the Full Windows NT Workstation 4.0
	compact disc.
	
	Customers can get an upgraded Corporate 97 compact disc if they cannot or will
	not implement the above workaround. This has been rectified and a replacement
	compact disc can be sent to the customer if he or she calls the following
	hotline (800) 360-7561 and asks for part number 098-66815.
	
	MORE INFORMATION
	================
	
	The Windows NT 4.0 installation has a 120-day time limit on it so you should not
	install this on production machines or upgrade a full Windows NT 3.x setup.
	
	Additional query words: time bomb timebomb
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : WinNT:4.0
	
	=============================================================================
	
