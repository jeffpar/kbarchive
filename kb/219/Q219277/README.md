---
layout: page
title: "Q219277: Load Balancing HTTP with WLBS"
permalink: /kb/219/Q219277/
---

## Q219277: Load Balancing HTTP with WLBS

{% raw %}

	Article: Q219277
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to load balance traffic to Web servers using Windows
	NT Load Balancing Service (WLBS).
	
	MORE INFORMATION
	================
	
	To load balance traffic to Web servers, perform the following steps:
	
	1. Web servers typically listen on port 80. Configure one port rule on all
	  cluster hosts for a port range of 80 to 80 and select Both for protocols (TCP
	  and UDP).
	
	2. Click to select Multiple Hosts. Affinity should be set to None, unless the
	  Web server maintains client state in its memory, in which case Affinity must
	  be set to either Single or Class C.
	
	If you want to load balance HTTP over SSL (encrypted Web traffic), you need to
	configure a rule for this type of traffic; usually, the port is 443. Us the
	following steps:
	
	1. Set up a rule for a port range of 443 to 443, both TCP and UDP.
	
	2. Set Affinity to either Single or Class C to ensure that the client
	  connections are always handled by the server that has the SSL session
	  established.
	
	For additional information about how to configure port rules, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q198496 How to Configure WLBS Port Rules
	
	Additional query words: convoy load balancing iis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTLBSSearch kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
