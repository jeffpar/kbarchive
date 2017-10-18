---
layout: page
title: "Q166454: Using FDISK /MBR for Troubleshooting Windows NT Boot Problems"
permalink: kb/166/Q166454/
---

## Q166454: Using FDISK /MBR for Troubleshooting Windows NT Boot Problems

	Article: Q166454
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows NT, using the MS-DOS FDISK /MBR command is not always
	appropriate when you cannot boot a computer. The problem is that the command
	rewrites the master boot record (MBR) only, and not the entire boot record. The
	FDISK /MBR command rewrites only the first 446 bytes of the master boot record,
	not the partition table. Windows NT disk signatures used for fault tolerance are
	also overwritten, and if the drive contained an FT member, it may not be
	recognized by Windows NT as an FT member afterward.
	
	If a drive is infected with a Stealth virus, the partition table and pointers
	have been offset. The offset pointer is contained in the MBR. Using the FDISK
	/MBR command on the computer refreshes the MBR--the pointer to the partition
	table is lost, as is the ability to boot. The only possible solution is to
	reinfect the drive and then try to remove the virus again using Fdisk or
	anti-virus software.
	
	The only time that the FDISK /MBR command is effective against a virus is if it
	is a boot-sector-only virus (such as the Stoned virus).
	
	If the sector is infected, recovery cannot be guaranteed. If the FDISK /MBR
	command is used and a Stealth virus is present, the computer can most likely not
	be recovered because the offsets are not constant.
	
	Examples of Stealth viruses include:
	
	- NY Bomber or NYB
	
	- Stealth.B
	
	- Hare
	
	- Monkey.B
	
	MORE INFORMATION
	================
	
	If you receive any of the following messages on a blue screen when you are
	booting Windows NT, you need to check for a virus:
	
	  0x0000007B  INACCESSIBLE_BOOT_DEVICE
	  0x0000008F  MBR_CHECKSUM_MISMATCH
	  (0x4,0,0,0)
	
	When these symptoms occur, the first step is to run a virus scan. F-Prot, Norton,
	McAfee, and Dr. Soloman are programs that are commonly used and all have
	shareware downloads on the Internet. If one of these does not indicate a virus,
	try one of the others.
	
	Other symptoms can include the following:
	
	- The error message "Windows NT could not start because the following file is
	  missing or corrupt: \<WINN ROOT>\COMPUTER32\NTOSKRNL.EXE."
	
	- A black screen with a cursor blinking in the upper left corner.
	
	TO protect yourself before using the FDISK /MBR command or cleaning the virus
	from the disk using an anti-virus inoculation program, you can use the Windows
	NT 4.0 Resource Kit tool named Disksave.exe. This is an MS- DOS-based tool that
	you can use to back up the MBR and save it to a floppy disk. In the event that
	the inoculation of the virus also deletes the partition table, you can restore
	the MBR using Disksave.exe, and then try a different method of removing the
	virus.
	
	Another option for protecting yourself is to boot from an MS-DOS disk and run
	Norton DiskEdit to view the partition table entries. The entries displayed are
	those from the indexed location from the active virus. Record the values that
	are displayed. If, after inoculation, the partition table entries are destroyed,
	you can manually type the recorded values and restore the partition table values
	to valid entries (but without the virus).
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q69013
	  TITLE : FDISK /MBR Rewrites the Master Boot Record
	
	Additional query words: 6.22 5.00 5.00a
	
	======================================================================
	Keywords          : kb3rdparty kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
