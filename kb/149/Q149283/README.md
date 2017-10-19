---
layout: page
title: "Q149283: INFO: Rollback.exe on Windows NT 4.0 CD Destroys Critical System"
permalink: /kb/149/Q149283/
---

## Q149283: INFO: Rollback.exe on Windows NT 4.0 CD Destroys Critical System

	Article: Q149283
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbOPK kbSBK kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT 4.0 Server and Workstation compact discs include a utility called
	Rollback.exe. Rollback.exe was designed to help computer manufacturers
	preinstall Windows NT 4.0, and allow end-users to do the final configuration
	according to the desired role of the computer. Running this utility will remove
	all registry settings on a system and bring it back to the end of the Character
	Based Setup portion of the Setup program, effectively undoing everything
	configured by the GUI portion of Windows NT Setup.
	
	WARNING: Do not run this file on a production system! There is no way to recover
	information erased by running this utility, so anything stored in the registry
	will be lost. This includes user account information, protocol bindings,
	application settings, user preferences, etc.
	
	MORE INFORMATION
	================
	
	If you run Rollback.exe on a production system there is no warning that
	Rollback.exe removes all system registry entries. Therfore, after you run
	Rollback.exe there is no system to rescue or to restore as the registry and the
	Setup.log file no longer exist.
	
	The only fix to this problem is to restore the entire system from a current tape
	back up. Emergency Repair Disk does not restore the system as it requires the
	Setup.log and specific registry components to be present.
	
	Rollback.exe is on the Windows NT compact discs in the following directory:
	
	  Support\Deptools\<system>\
	
	Additional query words: prodnt Rollback boot registry ERD SBKOem Preinstall Kit OPK
	
	======================================================================
	Keywords          : kbhw kbsetup kbOPK kbSBK kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
