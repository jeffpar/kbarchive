---
layout: page
title: "Q176968: Error Message: A Kernel File Is Missing from the Disk"
permalink: kb/176/Q176968/
---

## Q176968: Error Message: A Kernel File Is Missing from the Disk

	Article: Q176968
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetupkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to boot a Windows NT-based computer with a Windows NT File
	System (NTFS) system partition, your computer may hang after the Power On Self
	Test (POST), and you may receive the following error message:
	
	  A kernel file is missing from the disk.
	  Insert a system disk and restart the system.
	
	
	NOTE: This article only applies to Intel-based computers with an NTFS primary
	bootable partition.
	
	CAUSE
	=====
	
	This issue can occur if the NTFS disk structure data contained in the Master
	File Table (MFT) is damaged or fragmented, preventing the Windows NT boot loader
	(Ntldr) from being located or read.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Using the MS-DOS-based Fdisk utility, verify the system partition is the
	  active partition. For information about how to do so, consult the
	  documentation included with MS-DOS. If this does not resolve the issue,
	  continue with step 2.
	
	2. Attempt to repair the Ntldr file. For information about how to do so, please
	  see the following article Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q155892
	  TITLE : Windows NT Boot Problem: Kernel File Is Missing From the Disk
	
	  If this does not resolve the issue, continue with step 3.
	
	3. Use an anti-virus program to check for a boot sector virus. For information
	  about how to do so, please see the following article in the Microsoft
	  Knowledge Base:
	
	  ARTICLE-ID: Q122221
	  TITLE : How to Protect Boot Sector from Viruses in Windows NT
	
	  If this does not resolve the issue, continue with step 4.
	
	4. You may be able to access the system partition using a Windows NT boot disk.
	  If you can access the system partition, you can create a backup of essential
	  data files and reinstall Windows NT. For information about how to create a
	  Windows NT boot disk, please see the following article in the Microsoft
	  Knowledge Base:
	
	  ARTICLE-ID: Q119467
	  TITLE : Creating a Boot Disk for an NTFS or FAT Partition.
	
	  NOTE: If you cannot access the system partition using a Windows NT boot disk,
	  the NTFS MFT may be damaged, and the NTFS partition may need to be
	  reformatted.
	
	MORE INFORMATION
	================
	
	For additional information about troubleshooting damaged NTFS partitions, please
	see the following articles in the Microsoft Knowledge Base:
	
	ARTICLE-ID: Q155053
	TITLE : Black Screen on Boot
	
	ARTICLE-ID: Q121517
	TITLE : How to Recover From a Corrupt NTFS Boot Sector
	
	ARTICLE-ID: Q153973
	TITLE : Recovering NTFS boot sector on NTFS partitions
	
	For more information on the MFT and NTFS partition requirements, please see the
	following articles in the Microsoft Knowledge Base:
	
	ARTICLE-ID: Q114841
	TITLE : Windows NT Boot Process and Hard Disk Constraints
	
	ARTICLE-ID: Q100108
	TITLE : Overview of FAT, HPFS, and NTFS File Systems
	
	
	
	Additional query words: boot ntfs ntldr hang ntboot fragment MFT bootsector
	
	======================================================================
	Keywords          : kbsetup kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
