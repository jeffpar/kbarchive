---
layout: page
title: "Q148682: Comparison of Upgrade and Non-Upgrade Versions of Windows 95"
permalink: /kb/148/Q148682/
---

## Q148682: Comparison of Upgrade and Non-Upgrade Versions of Windows 95

	Article: Q148682
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95kbfaq
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes the differences between the Windows 95 Upgrade and the
	non-upgrade (full) version of Windows 95. This article also lists the directory
	contents of the Boot disk and the contents of the Config.sys and Autoexec.bat
	files included with the non-upgrade version of Windows 95 distributed on
	3.5-inch disks.
	
	MORE INFORMATION
	================
	
	You can use the Windows 95 Upgrade to upgrade Windows version 3.0 or later or
	Windows for Workgroups version 3.1 or later to Windows 95. You must be running
	MS-DOS, PC-DOS, or OEM-DOS version 3.1 or later to install the Windows 95
	Upgrade. Because the Windows 95 Upgrade does not include a bootable floppy disk,
	you must be able to boot from the computer's hard disk to install the Windows 95
	Upgrade.
	
	To install the non-upgrade (full) version of Windows 95, you do not need a
	previous version of Windows, Windows for Workgroups, MS-DOS, PC-DOS, or OEM-DOS.
	Because the non-upgrade version of Windows 95 includes a bootable floppy disk,
	you do not need to be able to boot from the computer's hard disk.
	
	Contents of the Boot Disk
	-------------------------
	
	Note that although the label on the Boot disk indicates that it is a Distribution
	Media Format (DMF) disk, it is actually a standard 1.44-MB disk.
	
	IO       SYS       223,148  07-11-95  9:50a
	MSDOS    SYS             4  07-11-95  9:50a
	COMMAND  COM        92,870  07-11-95  9:50a
	AUTOEXEC BAT            25  07-11-95  9:50a
	CONFIG   SYS            40  07-11-95  9:50a
	COUNTRY  SYS        27,094  07-11-95  9:50a
	DISPLAY  SYS        17,175  07-11-95  9:50a
	EGA      CPI        58,870  07-11-95  9:50a
	EGA2     CPI        58,870  07-11-95  9:50a
	EGA3     CPI        48,973  07-11-95  9:50a
	FDISK    EXE        59,128  07-11-95  9:50a
	FORMAT   COM        40,135  07-11-95  9:50a
	HIMEM    SYS        32,935  07-11-95  9:50a
	KEYB     COM        19,927  07-11-95  9:50a
	KEYBOARD SYS        34,566  07-11-95  9:50a
	KEYBRD2  SYS        31,942  07-11-95  9:50a
	MODE     COM        29,191  07-11-95  9:50a
	OEMSETUP BIN         3,270  07-11-95  9:50a
	OEMSETUP EXE        78,668  07-11-95  9:50a
	
	Contents of the Autoexec.bat and Config.sys Files
	-------------------------------------------------
	
	The Autoexec.bat and Config.sys files on the Boot disk prepare the computer for
	Windows 95 Setup.
	
	Contents of the Config.sys File:
	
	  device=himem.sys
	  files=60
	  buffers=20
	
	Contents of the Autoexec.bat File:
	
	  @echo off
	  oemsetup
	
	Additional query words: retail dirwin dirwin95
	
	======================================================================
	Keywords          : win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
