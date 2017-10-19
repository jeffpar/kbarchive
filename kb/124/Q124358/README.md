---
layout: page
title: "Q124358: RAS Server Assigns Cached IP Addresses to RAS Clients"
permalink: /kb/124/Q124358/
---

## Q124358: RAS Server Assigns Cached IP Addresses to RAS Clients

	Article: Q124358
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows NT version 3.5 or 3.51 Remote Access Service (RAS) server uses
	dynamic host configuration protocol (DHCP) servers to assign remote TCP/IP
	client addresses, the range of IP addresses that the RAS server receives is
	cached in the registry. If you reconfigure the DHCP server to allocate and
	provide IP addresses from a different address pool, the RAS server still assigns
	IP addresses from the original RAS client address pool.
	
	CAUSE
	=====
	
	The RAS Server does not query the DHCP server for new IP addresses until the
	original address leases (cached in the Registry) expire.
	
	RESOLUTION
	==========
	
	To force the RAS server to use the new IP addresses provided by the DHCP
	server:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\RemoteAccess\Parameters\Ip
	
	3. Remove the DhcpAddresses subkey.
	
	4. Close Registry Editor.
	
	5. Shutdown and restart Windows NT.
	
	Additional query words: prodnt ras tcpip
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
