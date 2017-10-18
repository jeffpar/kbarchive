---
layout: page
title: "Q239838: Err Msg: This Drive Cannot Be Checked with this Version of..."
permalink: kb/239/Q239838/
---

## Q239838: Err Msg: This Drive Cannot Be Checked with this Version of...

	Article: Q239838
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to perform a manual NTFS file system check by using the Chkdsk.exe
	tool or when you restart your computer, when Autochk.exe starts to check NTFS
	volumes, you may receive the following error message:
	
	  This drive cannot be checked with this version of UNTFS.DLL
	
	CAUSE
	=====
	
	This behavior occurs because the code that actually performs the verification
	when running Chkdsk.exe or Autochk.exe resides in utility .dll files such as
	Untfs.dll and Ufat.dll. When you invoke an NTFS file system check, the computer
	reads the NTFS $Volume metafile to extract the version number of the file
	system. You receive the error message if the version of the NTFS file system
	being checked is greater than what can be repaired by the current version of
	Untfs.dll. Another probable cause of this message is that the NTFS $Volume
	metafile may have been damaged in such a way that the version field contains
	invalid version information. If this is so, then even the latest utility .dll
	files may incorrectly interpret the file system version as one that is currently
	not supported. Note that in this case, it is very likely that the entire file
	system is damaged, and you may have to reinstall Windows.
	
	MORE INFORMATION
	================
	
	If you have ever attempted to install Windows 2000 or if you have configured
	your computer to dual start between Windows NT and Windows 2000, the computer
	may generate this message every time Windows NT tries to repair an NTFS volume.
	This is because Windows NT does not support many of the new NTFS Features
	introduced by Windows 2000 and so it cannot perform the repairs.
	
	In order to successfully repair the volume, you must permit the Windows 2000
	Chkdsk.exe or Autochk.exe utilities to repair the volume, or start to the
	Windows 2000 "Recovery Console" and use the chkdsk command with the /p parameter
	to repair the volume.
	
	For more information, please click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q184299 Dual-Booting Windows NT 4.0 and Windows 2000 on NTFS Partitions
	
	  Q198904 Windows 2000 Setup Upgrades Existing NTFS File System Volumes
	
	  Q229716 Description of the Windows 2000 Recovery Console
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinAdvServSearch
	Version           : :2000,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
