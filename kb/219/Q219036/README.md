---
layout: page
title: "Q219036: SP4 on a Digital Alpha System Requires an OEM HAL Update"
permalink: kb/219/Q219036/
---

## Q219036: SP4 on a Digital Alpha System Requires an OEM HAL Update

	Article: Q219036
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply Windows NT 4.0 Service Pack 4 (SP4) to a Digital Alpha computer
	without applying the latest OEM HAL first, the following blue screen error
	message may displayed:
	
	  INACCESSIBLE_BOOT_DEVICE (0x7B)
	
	CAUSE
	=====
	
	This problem occurs because some Digital Alpha computers require an updated
	Hal.dll in order to be compatible with SP4.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain and install the latest OEM HAL before you apply
	SP4 to a Digital or Compaq Alpha computer. The HAL for Digital or Compaq
	computers is available at Compaq's Web site:
	
	  http://www.digital.com/windows/
	
	
	To correct this condition, use one of the following recovery procedures:
	
	1. Manually replace the Hal.dll file using a modified repair disk. For more
	  information about this recovery procedure, please see the following Microsoft
	  Knowledge Base article:
	
	  Q164471 Replacing System Files Using a Modified Emergency Repair Disk
	
	2. Because the Hal.dll file is contained in a small FAT system partition in the
	  Os\Winntxx folder (where xx=Windows NT operating system version), it is
	  possible to create a boot floppy disk containing the new Hal.dll file so you
	  can boot back into the operating system and replace it manually.
	
	  For more information about creating a boot floppy disk, please see the
	  following Microsoft Knowledge Base article:
	
	  Q172806 Creating a WinNT Boot Floppy for DEC ALPHA RISC Computers
	
	3. Boot to another installation of Windows NT on the computer or create a
	  parallel installation of Windows NT into a unique directory. Manually copy
	  over the updated OEM Hal.dll file to the OS\WINNTxx folder from the parallel
	  installation.
	
	To avoid this condition, after you apply SP4 but before restarting, apply the OEM
	HAL you obtained from Compaq. Rev. E currently is the latest HAL and this
	download includes an Update utility, which determines the correct HAL for your
	system. Rev E also loads all the necessary .PAL files.
	
	MORE INFORMATION
	================
	
	Digital systems are a third party product manufactured by Compaq, Inc. a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: alpha STOP 7B inaccessible boot device
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP3
	Issue type        : kbhowto kbprb
	
	=============================================================================
	
