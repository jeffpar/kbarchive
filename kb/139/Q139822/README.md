---
layout: page
title: "Q139822: How to Restore a Backup to Computer with Different Hardware"
permalink: /kb/139/Q139822/
---

## Q139822: How to Restore a Backup to Computer with Different Hardware

	Article: Q139822
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.00
	Operating System(s): 
	Keyword(s): kbenv kbhw kbusage kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.00 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how you can restore a tape backup from one computer to
	another computer with different hardware, and maintain user accounts and working
	environment. This procedure may be needed if there is no backup domain
	controller or fault tolerance implementation on the network and the primary
	domain controller is down for some time.
	
	A backup set is intended to be used as a disaster recovery utility to maintain
	your system by backing it up and restoring it to the same, not a different
	computer. When you restore to a different computer you may encounter problems,
	due to hardware differences between the two computers.
	
	This procedure is not recommended by Microsoft and therefore is not supported.
	Microsoft makes no warranty, implied or otherwise, regarding the performance,
	stability or reliability of this procedure.
	
	MORE INFORMATION
	================
	
	NOTE: If you need to only change the primary hard disk and controller while
	maintaining user accounts and desktop settings, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q112019
	  TITLE : Changing Primary Disk System After Installation
	
	If you want to restore a Windows NT backup from one computer to a similar
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  Q130928 Restoring a Backup of Windows NT to Another Computer
	
	To restore a tape backup from one computer to another computer with different
	hardware, and maintain user accounts and working environment:
	
	1. From the original computer you need a tape backup of the registry and all
	  other files you want to transfer.
	
	2. Partition and drive information should be set up the same as the original
	  computer. However, the primary partition should be a FAT partition and
	  initially Windows NT should be installed onto a FAT partition (it can be
	  converted later). Use the same computer name and domain name as the computer
	  that is being replaced.
	
	3. Create a directory off the root called CNFGTEST. From the backup set restore
	  the Registry (%SystemRoot%\system32\config directory) to C:\CNFGTEST on the
	  hard drive.
	
	4. Delete SYSTEM.* and *.EVT files from C:\CNFGTEST.
	
	  NOTE: These files must be deleted in order to remove hardware specific
	  information.
	
	5. Boot to DOS and copy the remaining files from C:\CNFGTEST to the current
	  %SystemRoot%\system32\config directory.
	
	  NOTE: You cannot replace SAM or Security hives while Windows NT is running.
	
	6. Reboot the computer and make sure that everything is functioning in Windows
	  NT. When you restart user accounts should be in place.
	
	7. If you use TCP/IP with DHCP and/or WINS, you can restore the
	  %SystemRoot%\SYSTEM32\DHCP and the %SystemRoot%\SYSTEM32\WINS directories. It
	  may be necessary to reestablish the DHCP scope.
	
	8. The %SystemRoot%\SYSTEM32\SPOOL and %SystemRoot%\SYSTEM32\REPL directories
	  can now be restored. If you were using TCP/IP printing, printer queues will
	  have to be re-created and IP addresses reassigned.
	
	9. Convert to NTFS if the original install was NTFS. To replace data with
	  permissions you must convert to NTFS. To convert the file system to NTFS,
	  type the following from the MS-DOS Command Prompt:
	
	  convert <drive letter> fs:ntfs"
	
	  Next, restore the user data.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbhw kbusage kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.00
	
	=============================================================================
	
