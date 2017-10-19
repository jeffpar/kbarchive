---
layout: page
title: "Q168033: DNS Server Fails to Start After Promoting Secondary to Primary"
permalink: /kb/168/Q168033/
---

## Q168033: DNS Server Fails to Start After Promoting Secondary to Primary

	Article: Q168033
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you use Domain Name Service (DNS) Manager to promote a secondary zone to
	primary zone, or demote a primary zone to secondary zone, the DNS Server service
	will not restart. Trying to restart the service will produce the following Event
	ID's:
	
	  Event ID: 7023
	  The MS DNS Server service terminated with the following error:
	  The data is invalid.
	
	  Event ID: 130
	  DNS Server zone <zone name> has invalid or corrupted registry data.
	  Delete its registry data and recreate with DNSAdmin.
	
	  Event ID: 133
	  DNS Server secondary zone <zone name>, had no master IP addresses in
	  registry.  Secondary zones require masters.
	
	CAUSE
	=====
	
	The registry key that specifies the zone type does not get updated correctly.
	
	RESOLUTION
	==========
	
	Use the Registry Editor to modify the
	HKEY_LOCAL_MACHINE\System\Ccs\Services\Dns\Zones
	key in the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To modify the zone to the correct type, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\Ccs\Services\Dns\Zones
	
	3. On the zones key, select the key with the name of secondary zone (like
	  mydomain.com) which was promoted to primary. Set the value to 1.
	
	     Value Name: Type
	     Data Type:  REG_DWORD
	     Value:      1
	                 0x1 specifies Primary zone
	                 0x2 specifies secondary zone
	
	4. Quit Registry Editor and restart the Microsoft DNS Service in the Services
	  Control Panel.
	
	Additional query words: Event ID 7023 Secondary Zone dns ntdns
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
