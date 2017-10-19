---
layout: page
title: "Q161194: Access Violation When Adding a Printer in Windows NT 4.0"
permalink: /kb/161/Q161194/
---

## Q161194: Access Violation When Adding a Printer in Windows NT 4.0

	Article: Q161194
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During or after the installation of a new printer or printer port, you may
	receive an access violation in Explorer.exe or Spoolss.exe.
	
	CAUSE
	=====
	
	This problem may occur if a port monitor is installed that is designed for
	Windows NT 3.51.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, remove any entries in the registry that reference
	Windows NT 3.51 port monitors. Port monitor entries are located in the following
	registry location:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Monitors
	
	
	Additional query words: 4.00 prodnt dr watson _wcsicmp c0000005 nwmon.dll
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
