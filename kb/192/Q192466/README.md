---
layout: page
title: "Q192466: &quot;System Error 53 Has Occurred&quot; Using WLBS"
permalink: kb/192/Q192466/
---

## Q192466: &quot;System Error 53 Has Occurred&quot; Using WLBS

	Article: Q192466
	Product(s): Microsoft Windows NT
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using WLBS' NBT support to scale the performance of Windows NT read-only
	file access and printing, attempts to use the Microsoft network commands, such
	as net view and net use, fail with the following error:
	
	  System error 53 has occurred. The network path was not found.
	
	CAUSE
	=====
	
	This error can be caused by one of the following:
	
	- The cluster's system name was not resolved to an IP address.
	
	-or-
	
	- The cluster IP address is not the NIC's first IP address listed in the TCP/IP
	  configuration.
	
	RESOLUTION
	==========
	
	To resolve this issue, do one of the following according to which of the above
	causes is relevant:
	
	- Be sure to create the appropriate static WINS, DNS, or LMHOSTS file entry.
	
	-or-
	
	- Use multiple NICs and be sure that the cluster's primary IP address is listed
	  first in the TCP/IP configuration for the cluster NIC.
	
	  NOTE: If the client is a Windows 2000-based computer, the preceding steps will
	  not work. The workaround is to connect to the cluster by using the Virtual IP
	  Address (VIP) such as "net use * \\<ipaddress>\ShareName".
	  For additional information about related topics, click the article number
	  below to view the article in the Microsoft Knowledge Base:
	
	  Q222085 How to Scale Microsoft Print Services Using WLBS
	
	  Another reference for Windows 2000 hosts is
	
	  Q281308 Connecting to SMB Share on a Windows 2000-Based Server May Not Work
	  with an Alias Name
	
	MORE INFORMATION
	================
	
	The cluster's system name, which is the first portion of the full Internet name,
	must be a known NetBIOS computer name for NetBIOS to resolve it into an IP
	address.
	
	Because NetBIOS uses only the first IP address, the cluster IP address must be
	listed first. Note that WLBS' NBT support cannot be used in single NIC
	configurations because the dedicated IP address is always listed first when a
	single NIC is used.
	
	Additional query words: WLBS Convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch
	Version           : :1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
