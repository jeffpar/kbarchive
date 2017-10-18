---
layout: page
title: "Q158751: Printing Problems Caused By Fax Software"
permalink: kb/158/Q158751/
---

## Q158751: Printing Problems Caused By Fax Software

	Article: Q158751
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Spooler Service stops running on a Windows NT computer and the following
	error occurs:
	
	
	On the print server, the following error appears in the system log when users
	attempt to print:
	
	  Event ID: 2510
	  Source: SRV
	  Type: Error
	  Description: "The server service was unable to map error code 1722."
	
	-or-
	
	
	When you attempt to print on a computer running Windows NT Workstation the
	following error message appears:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  Spoolss.exe
	
	  Exception: access violation (0xc00000005), Address: <Hex address>
	
	CAUSE
	=====
	
	These error conditions during printing may occur when third-party fax software
	is installed either on an Windows NT print server computer or on a computer
	running Windows NT Workstation.
	
	RESOLUTION
	==========
	
	Some fax software programs modify the registry. It might become necessary to
	remove the fax software in order to print. However, some programs do not clean
	up the registry when they are removed. Check the registry to see if there are
	entries added by a fax software program that might be causing one of the
	previous errors.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and locate the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print
	
	2. Look for any entries that might be related to a fax software program.
	
	3. Delete these entries.
	
	NOTE: Do NOT delete any of the subkeys of the Print key, such as Environments,
	Forms, Monitors, Printers, and Providers.
	
	NOTE: The symptoms described in this article may also be caused by third party
	port monitor software, and it may be necessary to remove the port monitor from
	the registry using the steps above.
	
	
	Additional query words: printing hangs
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
