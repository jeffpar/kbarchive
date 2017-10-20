---
layout: page
title: "Q197864: Cannot Ping a WLBS Server from Another WLBS Server"
permalink: /kb/197/Q197864/
---

## Q197864: Cannot Ping a WLBS Server from Another WLBS Server

{% raw %}

	Article: Q197864
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you ping a cluster host's dedicated IP address from another cluster host,
	you receive no response.
	
	CAUSE
	=====
	
	This issue is a single network interface card (NIC) limitation. If you are using
	a single NIC and have not selected the Windows NT Load Balancing Service (WLBS)
	multicast support, the cluster hosts will not be able to communicate with each
	other even though they can exchange network traffic with outside systems.
	
	NOTE: On a cluster host with multiple NICs (multihomed), using the Virtual NIC to
	access the dedicated IP address (IP address bound to the virtual NIC but
	configured not to be load balanced) of another multihomed cluster host causes
	WLBS to consider this a single-NIC configuration
	
	RESOLUTION
	==========
	
	To resolve this issue, select multicast support in the WLBS Setup dialog box to
	eliminate this problem.
	
	Additional query words: Convoy NLB
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400xsearch kbWinNTS400 kbWinNTLBSSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
