---
layout: page
title: "Q129999: Increasing Windows NT Backup Performance"
permalink: /kb/129/Q129999/
---

## Q129999: Increasing Windows NT Backup Performance

	Article: Q129999
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
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how you can make Windows NT Backup run faster when you
	back up data from universal naming convention (UNC) shares. You will notice the
	biggest performance gains when backing up many small files. In some tests,
	backup jobs that previously took three hours to complete finished in one hour.
	
	
	MORE INFORMATION
	================
	
	To make Windows NT Backup run faster:
	
	WARNING: Using Registry Editor incorrectly can cause serious, systemwide problems
	that may require you to reinstall Windows NT to correct them. Microsoft cannot
	guarantee that any problems resulting from the use of Registry Editor can be
	solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \System\CurrentControlSet\Services\LanmanWorkstation\networkprovider
	
	3. Select DeviceName:REG_SZ:\device\LanmanRedirector.
	
	4. From the Edit menu, choose String.
	
	5. Change \device\LanmanRedirector to \Device\LanmanRedirector.
	
	  Change only the case of the first letter (d in device) -- do not change
	  anything else.
	
	Why This Change Makes Windows NT Backup Run Faster
	--------------------------------------------------
	
	Whenever Windows NT Backup encounters a file that could be a POSIX file, it
	requests that Windows NT open the file in a POSIX-compatible way (the path and
	filename match the filename case exactly).
	
	Because the workstation service has the wrong case for the device path registry
	settings (the first character is lowercase), Windows NT refuses to open the file
	when Windows NT Backup requests POSIX semantics. As a result, Windows NT returns
	ERROR_FILE_NOT_FOUND. Windows NT Backup then tries to open the file without
	specifying POSIX semantics, which works correctly. Performance suffers because
	Windows NT Backup has to attempt to open a file twice.
	
	STATUS
	======
	
	This design was changed in Windows NT version 3.51. The string for
	System\CurrentControlSet\Services\LanmanWorkstation\networkprovider is now
	\Device\LanmanRedirector by default.
	
	Additional query words: 3.10 ntbackup prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
