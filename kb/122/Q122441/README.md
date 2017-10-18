---
layout: page
title: "Q122441: STOP 7B When Not Updating File Systems for Windows NT 3.1"
permalink: kb/122/Q122441/
---

## Q122441: STOP 7B When Not Updating File Systems for Windows NT 3.1

	Article: Q122441
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT version 3.5 to another directory instead of
	upgrading Windows NT version 3.1 and both versions of Windows NT reside on an
	NTFS or FAT partition, the following STOP message may appear when you start
	Windows NT version 3.1:
	
	  STOP: 0x0000007B Inaccessible Boot Device
	
	During bootup when checking the file system(s), the error message for NTFS is:
	
	  This drive cannot be checked with this version of UNTFS.DLL.
	
	File Manager gives a description of the drive as:
	
	  Wrong disk is in the drive.
	
	Disk Administrator says the format of the drive is:
	
	  Unknown.
	
	CAUSE
	=====
	
	This problem occurs due to changes made to the file systems in Windows NT
	version 3.5.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Start Windows NT version 3.5.
	
	2. Rename the following files in the <winnt31root>\SYSTEM32 directory to
	  another file name on the hard disk drive:
	
	  UFAT.DLL
	  UNTFS.DLL
	
	  Rename the following files in the <winnt31root>\SYSTEM32\DRIVERS
	  subdirectory to another file name on the hard disk drive:
	
	  NTFS.SYS
	  FASTFAT.SYS
	
	3. Copy the same files listed above (Step 2) from the Windows NT version 3.5 CD
	  (for either Server or Workstation) to the same subdirectory of
	  <winnt31root>\SYSTEM32\DRIVERS.
	
	  NOTE: These replacement files are in expanded format and are located in the
	  FS31UPD\I386 subdirectory (for Intel-based computers) on the Windows NT
	  version 3.5 CD.
	
	4. Shut down and restart the computer with Windows NT version 3.1.
	
	5. Run UPDATE.EXE located in the FS31UPD\I386 subdirectory (for Intel- based
	  computers) on the Windows NT version 3.5 CD (for either Server or
	  Workstation).
	
	Additional query words: prodnt 3.10 hard disk trap 0x7B
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
