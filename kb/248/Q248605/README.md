---
layout: page
title: "Q248605: Cluster IP Address Resource Fails with Many IP Address Resources"
permalink: /kb/248/Q248605/
---

## Q248605: Cluster IP Address Resource Fails with Many IP Address Resources

	Article: Q248605
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create many IP address resources with the "Enable Netbios" option
	enabled, one or more resources may fail if the total number of Netbios enabled
	addresses on the system exceeds 64.
	
	In Event Viewer, you may see the following event ID:
	
	  Event ID 1044
	  Source: Cluster Svc
	  Text: Cluster IP Address could not create the required Netbios interface.
	
	CAUSE
	=====
	
	This behavior occurs because Netbios has a table limit of 64 IP Addresses. In
	most cases, this number of IP addresses might be used for World Wide Web or FTP
	resources which do not require an entry in the Netbios table.
	
	RESOLUTION
	==========
	
	To resolve this behavior, allow the "Enable Netbios" option to be checked only
	on IP Address resources that have a Network Name resource dependent on it, or
	when the address is used with Netbios.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: mscs netbios IP address fail
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
