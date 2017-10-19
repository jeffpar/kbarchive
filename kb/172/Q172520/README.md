---
layout: page
title: "Q172520: Access Denied Error When Trying to Access a Shared CD-ROM"
permalink: /kb/172/Q172520/
---

## Q172520: Access Denied Error When Trying to Access a Shared CD-ROM

	Article: Q172520
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you share a CD-ROM (IDE or SCSI) or floppy disk drive but then try to
	access it over the network (either remotely or locally through UNC or NET USE)
	the following error message is displayed:
	
	  Access Denied
	
	Additionally, the directory \\<machinename>\<sharename> remotely or
	locally will cause the following error message to appear:
	
	  File Not Found
	
	Sharing and accessing a hard drive remotely or locally in the same manner will
	work fine.
	
	CAUSE
	=====
	
	There are 2 registry entries in the HKEY_LOCAL_MACHINE\Software\Microsoft\
	WindowsNT\CurrentVersion\Winlogon subkey:
	
	AllocateCDRoms:REG_SZ
	AllocateFloppies:REG_SZ
	
	One or both of these entries has been added and/or set to 1, thus disabling
	access to everyone but the locally logged on user.
	
	AllocateCDRoms   REG_SZ     0 | 1
	---------------------------------
	
	Default: 0
	
	Determines whether data in the CD-ROM drive is accessible to other users. This
	value entry satisfies, in part, the C2 security requirement that you must be
	able to secure removable media.
	
	Value Meanings:
	
	0 Compact discs in the CD-ROM drive can be accessed by all administrators in the
	domain.
	
	1 Only the user logged on locally can access data on the compact discs in the
	CD-ROM drive.
	
	Because the CD-ROM drive is a volume, by default, it is shared as an
	administrative share on the network. If the value of this entry is 1, the CD-ROM
	drive is allocated to the user as part of the interactive logon process and,
	therefore, only the current user can access it. This prevents administrators and
	remote users (and even the same user at a different workstation) from accessing
	the drive while the current user is logged on to the computer. The drive is
	shared again when the current user logs off the computer.
	
	Windows NT does not add this value entry to the registry. You can add it by
	editing the registry or by using a program that edits the registry.
	
	AllocateFloppies     REG_SZ     0 | 1
	-------------------------------------
	
	Default: 0
	
	Determines whether data in the floppy disk drive is accessible to other users.
	This value entry satisfies, in part, the C2 security requirement that you must
	be able to secure removable media.
	
	Value Meanings:
	
	0 Floppy disks in the floppy disk drive can be accessed by all administrators in
	the domain.
	
	1 Only the user logged on locally can access data on the floppy disks in the
	floppy disk drive.
	
	Because the floppy disk drive is a volume, by default it is shared as an
	administrative share on the network. If the value of this entry is 1, the floppy
	disk drive is allocated to the user as part of the interactive logon process
	and, therefore, only the current user can access it. This prevents
	administrators and remote users (and even the same user at a different
	workstation) from accessing the drive while the current user is logged on. The
	drive is shared again when the current user logs off.
	
	Windows NT does not add this value entry to the registry. You can add it by
	editing the Registry or by using a program that edits the registry.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\ 
	  CurrentVersion\Winlogon
	
	  AllocateCDRoms:REG_SZ
	  AllocateFloppies:REG_SZ
	
	2. Change the value for these entries to 0 or remove the entry.
	
	Additional query words: c2 cd-rom
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	
