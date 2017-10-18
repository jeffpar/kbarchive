---
layout: page
title: "Q121908: Unable to Browse or Connect to Microsoft Networking Print Server"
permalink: kb/121/Q121908/
---

## Q121908: Unable to Browse or Connect to Microsoft Networking Print Server

	Article: Q121908
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases Browsing and Connecting to Windows NT and/or Windows 95 Network
	Printers may not function correctly. The Browse list will be blank and if a
	direct path is entered for Connect To Printer, one of the following error
	messages appears:
	
	  Could not connect to printer. The printer name is invalid.
	
	  -OR-
	
	  Cannot locate network printer name
	
	
	CAUSE
	=====
	
	This problem is caused by the Order value in the Print\Providers section in the
	Registry not containing the correct entries. Rather than correctly listing
	"LanMan Print Services," "Microsoft Windows Network" is listed instead. This
	causes the LanMan Provider key, which specifies the dynamic-link library (DLL)
	to be used for LanMan print shares, to not be found and thus Print Manager is
	unable to Browse or Connect to Windows NT Printer Shares.
	
	
	RESOLUTION
	==========
	
	To correct both the Browsing and Connect to problems, change the Registry entry
	to the correct provider. In the Registry, use the following path:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Providers
	
	In the Order value, remove the following entry:
	
	Microsoft Windows Network
	
	Then add the following entry:
	
	LanMan Print Services
	
	There may also be an entry for NetWare printer shares; that does not need to be
	removed or changed.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
