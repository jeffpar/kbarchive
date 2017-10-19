---
layout: page
title: "Q143073: Err Msg: Microsoft Backup Has Encountered a Serious Error..."
permalink: /kb/143/Q143073/
---

## Q143073: Err Msg: Microsoft Backup Has Encountered a Serious Error...

	Article: Q143073
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to perform a backup, restore, or compare operation in Microsoft
	Backup, or close Backup after performing one of these operations, you may
	receive the following error message:
	
	  Microsoft Backup has encountered a serious error in the Memory Manager.
	  Quit and restart Backup, and then try again.
	
	CAUSE
	=====
	
	This error can occur for any of the following reasons:
	
	- An incompatible device driver or memory-resident program is being loaded in
	  the Autoexec.bat, Config.sys, System.ini, or Win.ini file.
	
	- The Windows swap file is damaged.
	
	- The tape drive or backup tape you are trying to use is damaged or
	  incompatible with Backup.
	
	- One or more Backup files may be damaged.
	
	- The memory in your computer is faulty.
	
	NOTE: If the above error message is displayed when you attempt to perform a
	restore operation in Microsoft Backup, the problem may also be caused by the
	method Backup uses to read restore information in some situations dealing with
	compression. For information about the updated Backup.exe file that corrects
	this problem, please see the following article in the Microsoft Knowledge Base:
	
	  Q147656 Updated Backup Corrects Erasing Data and Memory Manager Errors
	
	RESOLUTION
	==========
	
	For information about resolving this issue, see the appropriate section below.
	
	Incompatible Device Driver or Memory-Resident Program
	-----------------------------------------------------
	
	For information about troubleshooting problems with incompatible device drivers
	and memory-resident programs in Windows 95, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q136337 Troubleshooting Windows 95 Startup Problems
	
	  Q140441 Creating a New System.ini File Without Third-Party Drivers
	
	Damaged Swap File
	-----------------
	
	To ensure that the swap file is not damaged, follow these steps:
	
	1. In Control Panel, double-click System.
	
	2. On the Performance tab, click Virtual Memory.
	
	3. Click "Let me specify my own virtual memory settings" and then click the
	  Disable Virtual Memory check box to select it.
	
	  NOTE: You cannot select the Disable Virtual Memory check box on a computer
	  with only 8 MB of RAM. If your computer has only 8 MB of RAM, do not use
	  these steps. Instead, restart your computer to a command prompt, delete any
	  .swp file in the Windows folder, and then restart your computer.
	
	4. Click OK. When you are prompted to restart your computer, do so.
	
	5. Repeat steps 1-2.
	
	6. Click "Let Windows manage my virtual memory settings" and then click OK.
	
	Incompatible or Damaged Tape Drive or Backup Tape
	-------------------------------------------------
	
	For information about troubleshooting problems with incompatible or damaged tape
	drives and backup tapes, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q130946 Troubleshooting Windows 95 Backup
	
	Damaged Microsoft Backup Files
	------------------------------
	
	To make sure there are no damaged Backup files, remove Backup and then reinstall
	it. To do so, follow these steps:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. Click the Windows Setup tab.
	
	3. Click Disk Tools, and then click Details.
	
	4. Click the Backup check box to clear it, click OK, and then restart your
	  computer if you are prompted to do so.
	
	5. Repeat steps 1-3.
	
	6. Click the Backup check box to select it, and then click OK.
	
	Faulty Memory
	-------------
	
	For information about troubleshooting problems with faulty memory in Windows 95,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q142546 How to Use a RAM Drive to Troubleshoot Memory
	
	MORE INFORMATION
	================
	
	The Microsoft Backup Memory Manager is responsible for storing the backup set
	file in memory during the backup, restore, or compare operation.
	
	Additional query words: backupd2.exe
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
