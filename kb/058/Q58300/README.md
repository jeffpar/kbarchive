---
layout: page
title: "Q58300: Using Vaccine and Shelter with Windows 3.0 and 3.1"
permalink: /kb/058/Q58300/
---

## Q58300: Using Vaccine and Shelter with Windows 3.0 and 3.1

	Article: Q58300
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Vaccine is a terminate-and-stay-resident (TSR) program designed to prevent
	modification of files such as CONFIG.SYS and AUTOEXEC.BAT. Vaccine causes
	problems if it is loaded in memory when you install Microsoft Windows operating
	system version 3.0, 3.1, or 3.11.
	
	In addition, Vaccine's hard-drive write-protection program, Shelter, is not
	compatible with SMARTDrive version 4.0 when SMARTDrive is configured for
	write-behind caching.
	
	MORE INFORMATION
	================
	
	If Vaccine is loaded when you try to install Windows 3.0 or 3.1, Windows Setup
	will hang, usually when Setup tries to modify the CONFIG.SYS and AUTOEXEC.BAT
	files. Symptoms include an unending beep tone (Vaccine's alarm) and loss of
	keyboard control.
	
	You should unload Vaccine before setting up Windows 3.1. You may also encounter
	problems, such as beeping, while running Windows when Vaccine is loaded.
	
	Using SMARTDrive with Vaccine's Shelter Program
	-----------------------------------------------
	
	Shelter is a hard disk-drive write-protection program included with Vaccine. If
	SMARTDrive is configured for write-behind caching, you will receive the
	following error message if SHELTER.EXE is loaded:
	
	  Serious Disk Error
	
	To avoid receiving this error message, and possible data loss, either restart the
	computer without loading Shelter or configure SMARTDrive for read caching only
	on the drive being write-protected. The following example sets SMARTDrive for
	write-behind caching on drive C, and read-only caching on drive D, with a cache
	size of 1 MB:
	
	  smartdrv c+ d 1024
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11 WIN30 WIN31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
