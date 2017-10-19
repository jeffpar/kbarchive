---
layout: page
title: "Q175913: DHCP Clients Obtain IP Address from Old DHCP Scope Range"
permalink: /kb/175/Q175913/
---

## Q175913: DHCP Clients Obtain IP Address from Old DHCP Scope Range

	Article: Q175913
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:3.5,3.51,4.0;Windows:3.11,95
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you change the Dynamic Host Configuration Protocol (DHCP) scope on your
	Microsoft Windows NT DHCP Server, your DHCP clients may continue to lease
	addresses from the original or old scope. This may occur even if the old scope
	information is non-existent in DHCP Admin.
	
	NOTE: Stopping and restarting the DHCP Server Service or restarting the DHCP
	Server has no effect on this issue and attempts to release or renew the address
	on the client has no effect.
	
	CAUSE
	=====
	
	A registry key with the old DHCP scope information on the DHCP Server still
	exists.
	
	RESOLUTION
	==========
	
	You will need to remove the registry key that references the old scope range by
	performing the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	     \DHCPServer\Configuration\Subnets\<Subnet ID>
	     \IpRanges\<Old scope range>
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Click <Old scope range>, click Delete from the Edit menu, and click Yes
	  in the Warning dialog box.
	
	It is not necessary to restart the DHCP Server. After this key is deleted, DHCP
	clients will obtain IP addresses from the new scope range.
	
	
	Additional query words: previous
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : WinNT:3.5,3.51,4.0;Windows:3.11,95
	
	=============================================================================
	
