---
layout: page
title: "Q136547: Restoring Windows NT Dual Boot After Installing Windows 95"
permalink: /kb/136/Q136547/
---

## Q136547: Restoring Windows NT Dual Boot After Installing Windows 95

	Article: Q136547
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0; Windows:95
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to restore Windows NT dual booting after you install
	Windows 95. The article is divided into two sections:
	
	- Installing Windows 95 on a Windows NT and MS-DOS Dual Boot Computer
	
	- Troubleshooting Windows NT and Windows 95 Dual Boot
	
	MORE INFORMATION
	================
	
	Installing Windows 95 on a Windows NT and MS-DOS Dual Boot Computer
	-------------------------------------------------------------------
	
	Windows NT and Windows 95 can reside on the same computer. If you dual boot
	between Windows NT 3.5x or 4.0 and MS-DOS 6.2x, the following method is
	recommended before you install Windows 95:
	
	1. If you do not have an Emergency Repair Disk for your Windows NT installation,
	  create one using the RDISK utility (RDISK.EXE) in the %SystemRoot%\SYSTEM32
	  directory.
	
	2. Shut down Windows NT and restart your computer. Select MS-DOS from the boot
	  loader menu.
	
	3. Install Windows 95. Make sure you install Windows 95 to a separate directory
	  and not the Windows NT %SystemRoot% directory.
	
	After you successfully install Windows 95 and restart the computer, the Windows
	NT Flex Boot Loader screen appears, allowing you to choose between MS-DOS and
	Windows NT. If you choose MS-DOS, Windows 95 starts. You may change the MS-DOS
	entry of the Boot Loader menu to Windows 95 by modifying the Windows NT BOOT.INI
	file.
	
	For additional information about modifying the Windows NT Boot.ini file, please
	see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q99743
	  TITLE : Purpose of the BOOT.INI File
	
	Troubleshooting Windows NT and Windows 95 Dual Boot
	---------------------------------------------------
	
	If the Windows NT Flex Boot Loader does not appear at the end of the procedure
	above, do the following:
	
	1. Insert the Windows NT Setup Boot Disk into drive A and restart your computer.
	
	2. Insert Setup Disk 2 when prompted.
	
	3. When the Setup options appear, press R for Repair.
	
	  Four options appear and all four are selected by default.
	
	4. Clear the selection of all options except Inspect Boot Sector by pressing
	  ENTER to select or clear the options. Be sure that Inspect Boot Sector is the
	  only option that has an X in front of it.
	
	5. Select Continue and press ENTER.
	
	6. If you want Setup to detect mass storage devices in your computer again,
	  press ENTER. If you want to skip the mass storage device detection, press S.
	
	7. Insert Setup Disk 3 when prompted.
	
	8. If you have the Emergency Repair Disk, press ENTER, insert the disk, and
	  press ENTER again. If you do not have the Emergency Repair Disk, press ESC to
	  allow Setup to locate Windows NT 3.5x or 4.0 and the Repair information.
	
	9. Remove the disk from drive A and press ENTER to restart your computer.
	
	  The Windows NT Flex Boot Loader appears and the dual boot ability is restored.
	
	Additional query words: win95
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WinNT:3.5,3.51,4.0; Windows:95
	
	=============================================================================
	
