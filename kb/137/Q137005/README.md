---
layout: page
title: "Q137005: Unable to PING Router On Remote Network From RAS Client"
permalink: /kb/137/Q137005/
---

## Q137005: Unable to PING Router On Remote Network From RAS Client

	Article: Q137005
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): Win2000:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After a Remote Access Service (RAS) client (Windows NT, Windows 95, or a
	third-party PPP dialer) using the TCP/IP protocol receives an IP address from
	the Windows NT RAS server, the RAS client (may be a VPN client) is unable to
	PING the router on the remote network and computers beyond the router.
	
	
	CAUSE
	=====
	
	This issue may be caused by one of the following:
	
	- If you install a network service in Windows NT after a service pack, then the
	  network service will overwrite the service pack files.
	
	-or-
	
	- Most routers include an address resolution protocol (ARP) cache, which
	  provides IP address to media access control (MAC) address conversion. Some
	  routers (such as Wellfleet) can hold indefinite addresses in the cache by
	  default. If the IP address used by the RAS client has been used on the
	  network by a local area network (LAN) client in the past, the router can hold
	  this IP address and MAC address in its ARP cache. When another client uses
	  this IP address, the router ignore the packet because the MAC address of the
	  new client does not match the MAC address in the ARP cache.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Reapply the latest Windows NT service pack.
	
	-or-
	
	- Check the ARP cache entries on the router. Contact the router manufacturer
	  for more information and router configuration assistance.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt subnet
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : Win2000:95; winnt:3.5,3.51,4.0
	
	=============================================================================
	
