---
layout: page
title: "Q200775: Routing Problems After Installing Checkpoint Firewall 1"
permalink: /kb/200/Q200775/
---

## Q200775: Routing Problems After Installing Checkpoint Firewall 1

	Article: Q200775
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT system does not forward packets, even though the Enable IP
	Forwarding check box is selected in TCP/IP Properties.
	
	CAUSE
	=====
	
	This problem may occur because Checkpoint Software's Firewall 1 software has
	been installed and no routing security policy has been configured by the user
	after installation.
	
	RESOLUTION
	==========
	
	To resolve this problem, configure a security policy or disable the control of
	IP forwarding by Firewall 1.
	
	MORE INFORMATION
	================
	
	If no security policy has been configured, Firewall 1 assumes the most
	restrictive policy, which is no forwarding of IP packets.
	
	For more information, contact Checkpoint Software Technologies Ltd. at the
	following Web site:
	
	  http://www.checkpoint.com/
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
