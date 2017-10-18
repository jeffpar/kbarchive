---
layout: page
title: "Q105247: Err Msg: There are no Print Processors... Creating a Printer"
permalink: kb/105/Q105247/
---

## Q105247: Err Msg: There are no Print Processors... Creating a Printer

	Article: Q105247
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install a printer in Windows NT, you may receive one of the
	following error messages:
	
	- There are no print processors
	
	- Print Processor is unknown
	
	CAUSE
	=====
	
	This behavior can occur if all of the following conditions exist:
	
	- No print processor is specified in the Windows NT registry.
	
	- The print processor file (Winprint.dll) is missing or corrupt.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Verify that the Winprint.dll file exists in the following folder:
	
	  %SystemRoot%\system32\spool\prtprocs\w32x86
	
	  If the Winprint.dll file is missing, use the following command to expand the
	  Winprint.dl_ file on your Windows NT Setup CD-ROM or Setup disks to
	  Winprint.dll in the above folder:
	
	  expand x:\i386\winprint.dl_
	  c:\winnt\system32\spool\prtprocs\w32x86\winprint.dll
	
	  where x: is the drive letter of your CD-ROM drive.
	
	2. Verify that the print processor is configured correctly in the Windows NT
	  registry. To do so, follow these steps:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  a. Locate the following key in the Windows NT registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print
	  \Environments\Windows NT x86\Print Processors\winprint
	
	  If the Winprint key is not present, create it by clicking Add Key on the Edit
	  menu. If Winprint.dll is not specified as the Driver value in the Winprint
	  key, click Add Value on the Edit menu to create the Driver value using the
	  following settings:
	
	  Driver:REG_SZ:winprint.dll
	
	  NOTE: It may be necessary to restart the computer after making these changes.
	
	Additional query words: 3.10 installed
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
