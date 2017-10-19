---
layout: page
title: "Q157564: STOP: c0000263 on Upgrade from WinNT 4.0 to WinNT 3.51"
permalink: /kb/157/Q157564/
---

## Q157564: STOP: c0000263 on Upgrade from WinNT 4.0 to WinNT 3.51

	Article: Q157564
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install Windows NT 3.51 as an upgrade over Windows NT 4.0
	(released build or beta), the following error message occurs:
	
	  STOP: c0000263 {Driver Entry Point Not Found}
	  The \SystemRoot\system32\drivers\Scsiscan.SYS device driver could not locate
	  the entry point ObfReferenceObject in driver ntoskrnl.exe?.
	
	CAUSE
	=====
	
	Windows NT 3.51 was not designed to upgrade versions of Windows NT later than
	itself. In fact, you will not have the option to upgrade Windows NT 4.0 with
	Windows NT 3.51. If you attempt to install Windows NT 3.51 over an existing
	Windows NT 4.0 installation, you will be prompted that the pre- existing files
	will be replaced.
	
	The Windows NT 3.51 setup process will fail just after the first reboot.
	
	RESOLUTION
	==========
	
	After the attempted installation of Windows NT 3.51 over Windows NT 4.0, Windows
	NT 4.0 will no longer be functional. The resolution will be to attempt to
	either:
	
	- Perform a new installation of Windows NT 3.51 by deleting the existing,
	  corrupted version during the Windows NT 3.51 setup process.
	
	  -or-
	
	- If data/application and registry settings need to be recovered, install
	  Windows NT 3.51 into another subdirectory, delete the corrupt version of
	  Windows NT, and then restore a complete backup tape to the drive, including
	  the registry.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
