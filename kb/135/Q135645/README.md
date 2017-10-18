---
layout: page
title: "Q135645: Setacl Doesn't Run When Converting to NTFS After Setup"
permalink: kb/135/Q135645/
---

## Q135645: Setacl Doesn't Run When Converting to NTFS After Setup

	Article: Q135645
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you choose to format the system partition with the Windows NT file system
	(NTFS) during Setup, permissions granted according to settings in the
	WINPERMS.TXT file. When you choose to convert a partition to NTFS after you have
	installed Windows NT, permissions are set so that everyone has full control of
	the files on the partition. This behavior is expected, and by design.
	
	MORE INFORMATION
	================
	
	If you choose to format the system partition with the Windows NT file system
	(NTFS) during Setup, the following Registry entries are added under
	HKEY_LOCAL_MACHINE\CurrentControlSet\Control\Session Manager\BootExecute:
	
	  autoconv \DosDevices\<systemdrive>: /fs:NTFS
	
	  setacl /a \DosDevices\<systemdrive>:\WINNT35\System32\winperms.txt
	  \DosDevices\<systemdrive>:
	
	The second to last time Windows NT boots, AUTOCONV.EXE runs to converts the
	partition to NTFS, and SETACL.EXE runs to set default permissions on the
	partition. SETACL.EXE gets permission settings from the WINPERMS.TXT file. Setup
	places WINPERMS.TXT in the %SYSTEMROOT%\SYSTEM32 directory.
	
	On the other hand, if you chose to convert to your partition to NTFS after you
	have installed Windows NT, the Autoconv registry entry is added, but the setacl
	command is not. Therefore, permissions taken from parameters contained in
	WINPERMS.TXT are not set on the NTFS partition. Thus, everyone has full control
	of the files on the partition.
	
	Additional query words: 3.10 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
