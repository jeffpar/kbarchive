---
layout: page
title: "Q197146: DNS Fails to Start w/ Event 1000 and 1004 and SCM 7023"
permalink: /kb/197/Q197146/
---

## Q197146: DNS Fails to Start w/ Event 1000 and 1004 and SCM 7023

	Article: Q197146
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 27-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you start your Domain Naming Service (DNS) on your computer running Windows
	NT Server, you may receive the following error:
	
	  System Error 2: "The system cannot find the file specified"
	
	The DNS service will then terminate and you will receive the following events in
	your event log:
	
	  EventID: 1000
	  Source: DNS
	  Type: Error
	  Description: DNS Server could not open the file dns\<zone-file-name>.
	  The data is the error.
	  Data: (grayed out)
	
	  EventID: 1004
	  Source: DNS
	  Type: Error
	  Description: DNS Server could not find or open database file dns\<zone-
	  file-name>.
	  Data: 0000: 02 00 00 00 (in bytes)
	
	  EventID: 7023
	  Source: Service Control Manager
	  Type: Error
	  Description: The Microsoft DNS Server service terminated with the
	  following error: The system cannot find the file specified.
	  Data: (grayed out)
	
	CAUSE
	=====
	
	The HKEY_LOCAL_MACHINE\System\CCS\Services\DNS\Zones registry key still has a
	subfolder/key for the zone but the zone file of <zone-file-name> is
	missing.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	Either remove the zone subkey or subkeys referenced in the event log or create
	the zone file with correct format and proper information under
	%SystemRoot%\system32\dns.
	
	Additional query words: dns zone SCM System Error
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
