---
layout: page
title: "Q278678: Slow Performance Accessing Local Drives with Share Name"
permalink: /kb/278/Q278678/
---

## Q278678: Slow Performance Accessing Local Drives with Share Name

	Article: Q278678
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you share folders on a local computer and then access these local file
	systems by using their share names, transferring files may be much slower than
	when you use local drive and path names.
	
	CAUSE
	=====
	
	This behavior can occur if TCP/IP is installed as one of the network protocols.
	When you use share names to access local file systems, the data passes through
	server, redirector, and network protocol code. The TCP/IP loopback code handles
	the data inefficiently and causes a bottleneck.
	
	RESOLUTION
	==========
	
	If you use NetBEUI as the only protocol, this problem does not occur. Or, if you
	use \\<ipaddr>\<sharename> instead of
	\\<server>\<sharename>, where <ipaddr> is the local IP address
	of your network adapter, the loopback code is not used, avoiding the bottleneck.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Using server, redirector, and networking code adds additional overhead.
	Microsoft does not recommend accessing local file systems by using share names.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
