---
layout: page
title: "Q142660: Upgrade from Uni- to Multiprocessor (Uptomp.exe) and Win32k.sys"
permalink: /kb/142/Q142660/
---

## Q142660: Upgrade from Uni- to Multiprocessor (Uptomp.exe) and Win32k.sys

	Article: Q142660
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbsetup kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you upgrade a single processor computer with Windows NT 4.0 installed to a
	multiprocessor system, several files have to be changed.
	
	The affected files are:
	
	  Ntoskrnl.exe (Ntkrnlmp.exe has to be copied and renamed to Ntoskrnl.exe)
	  Hal.dll (System specific Hal*.dll has to copied and renamed to Hal.dll)
	  Kernel32.dll
	  Ntdll.dll
	  Winsrv.dll
	  Win32k.sys (New for Windows NT 4.0)
	
	CAUSE
	=====
	
	Although Uptomp.exe from the Windows NT 4.0 Resource Kit does assist to copy the
	correct files, Win32k.sys is not copied with this utility.
	
	RESOLUTION
	==========
	
	To resolve the problem:
	
	1. Locate the file Win32k.sys on the Windows NT 4.0 compact disc, and copy it to
	  the System32 directory.
	
	  NOTE: The file might be compressed as Win32k.sy_. Use Expand.exe to uncompress
	  the file.
	
	  You must then modify the %systemroot%\repair\setup.log file to modify the CRC
	  value of win32k.sys to equal 13e42a - this value is for the multi-processor
	  version and is used when installing future service packs or repairing the
	  system files.
	
	  NOTE: If the customer already has a Service Pack loaded on the system he
	  should point to the Service pack directory when the utility asks him for a
	  path for the replacement files.
	
	2. Modify the Resource Kit Uptomp.inf file and add the Win32k.sys to the list of
	  files as follows:
	
	  hal.dll = 1, 2, hal.dll
	  ntoskrnl.exe = 0, 2, ntkrnlmp.exe
	  ntdll.dll = 0, 2, ntdll.dll
	  kernel32.dll = 0, 2, kernel32.dll
	  winsrv.dll = 0, 2, winsrv.dll
	  win32k.sys = 0, 2, win32k.sys
	
	
	Additional query words: prodnt uptomp.exe processor multi
	
	======================================================================
	Keywords          : kbenv kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
