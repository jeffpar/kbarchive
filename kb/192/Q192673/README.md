---
layout: page
title: "Q192673: Accessing Files on NTFS Partitions Created with Windows 2000"
permalink: /kb/192/Q192673/
---

## Q192673: Accessing Files on NTFS Partitions Created with Windows 2000

	Article: Q192673
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 4 contains an updated Ntfs.sys file that allows you
	to access NTFS-formatted partitions that are created in Windows 2000. Although
	you can read and write to these volumes, you may not have access to all files
	and utilities that are present in Windows 2000.
	
	MORE INFORMATION
	================
	
	NTFS in Windows 2000 requires some on-disk changes that enable support for
	additional features. Some files that are saved under Windows 2000 may not be
	available for use on Windows NT 4.0-based computers. Listed below are some of
	the limitations you may encounter with Windows NT 4.0 when you try to access
	NTFS volumes created with Windows 2000:
	
	- Chkdsk.exe - This is not available for NTFS volumes. When you try to run
	  Chkdsk on a volume, you see this message:
	
	  This version of Chkdsk cannot be run on a volume created by later versions of
	  Windows NT.
	
	If the volume is in use, Chkdsk allows itself to be scheduled, but displays the
	same message on the startup screen.
	
	- Any disk utilities, such as Defrag, should not be used on these volumes.
	
	Additional query words: NTFS.sys NTFS40.sys Dual boot
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
