---
layout: page
title: "Q135524: Diskeeper Version 1.0 Uninstall Causes Windows NT 3.51 to Hang"
permalink: /kb/135/Q135524/
---

## Q135524: Diskeeper Version 1.0 Uninstall Causes Windows NT 3.51 to Hang

	Article: Q135524
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Executive Software Diskeeper 1.0 uninstall feature after you
	upgrade Windows NT 3.5 to 3.51 and restart your computer, you receive an entry
	point error in NTDLL.DLL and Windows NT hangs and becomes unbootable.
	
	NOTE: Diskeeper for Windows NT is a disk defragmentation program for Windows NT
	3.5.
	
	CAUSE
	=====
	
	Diskeeper version 1.0 is not designed to run under Windows NT 3.51.
	
	When you install Diskeeper on Windows NT 3.5, Diskeeper replaces the following
	Windows NT system files with its own versions of these files: NTDLL.DLL,
	NTOSKRNL.EXE, FASTFAT.SYS, and NTFS.SYS. If you use the Diskeeper uninstall
	feature after you upgrade to Windows NT 3.51, Diskeeper replaces the Windows NT
	3.51 versions of these files with the Windows NT 3.5 versions. These do not work
	with Windows NT 3.51.
	
	RESOLUTION
	==========
	
	Run the emergency repair disk (ERD) to recover your Windows NT 3.51 boot and
	system files. Do not run Diskeeper version 1.0 under Windows NT 3.51.
	
	To prevent this problem when you upgrade from Windows NT 3.5 to 3.51, uninstall
	Diskeeper before you start the upgrade.
	
	Diskeeper 1.01, which works with windows NT 3.51, is now available from Executive
	Software from the following locations:
	
	  Compuserve- GO EXECSOFT
	  wwearthlink.net\execsoft
	
	MORE INFORMATION
	================
	
	This problem can also occur in NT 4.0 server and workstation. It is strongly
	recommended that customers read the Product Alert on ExecSoft's web site which
	is located at http://www.execsoft.com/pas/pa091796.htm.
	
	The latest version of Diskeeper is version 2.0 for NT 4.0.
	
	
	For additional information, contact Executive Software at:
	
	  Executive Software
	  701 North Brand Blvd., 6th Floor
	  Glendale, California, USA 91203-1242
	
	  Technical Support: (818) 547-2050
	  FAX: (818) 545-8801
	
	Diskeeper is manufactured by Executive Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: prodnt defrag utility defragmenter
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
