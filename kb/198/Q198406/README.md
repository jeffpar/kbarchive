---
layout: page
title: "Q198406: RIP Version 2 Does Not Advertise Subnet Routes"
permalink: /kb/198/Q198406/
---

## Q198406: RIP Version 2 Does Not Advertise Subnet Routes

{% raw %}

	Article: Q198406
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT servers that are running the Routing and Remote Access Service
	(RRAS) Update are not advertising subnet routes for your IP networks. Instead,
	they are advertising one network route that summarizes the missing subnets.
	
	CAUSE
	=====
	
	The Windows NT routers are using a feature known as subnet hiding.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	The feature described above, subnet hiding, is expected behavior with RIP
	version 1. RIP version 1 does not have a field for the subnet mask of a network
	and does not support subnet advertisements. When advertising routes to an
	external network that could not possibly know the subnet mask, the subnetted
	routes are reduced to a single network route or a Summary Route.
	
	RIP version 2 is capable of advertising subnet masks; however, RIP version 2 may
	not advertise specific subnet routes when RIP version 1 routers could mistake
	the routes as host routes. This would be the case if the RIP version 1 router
	had a different network ID than the RIP version 2 router.
	
	This behavior of subnet hiding is always done with RIP version 1 and is usually
	done with RIP version 2. With some implementations of RIP version 2, subnet
	hiding can be enabled or disabled.
	
	If the announce mode is set to RIP1 or RIPv2 broadcast the subnet summarization
	(hiding) is always performed. You must choose RIPv2 multicast mode to disable
	subnet summarization.
	
	Also, the RRAS command-line utility can be used to turn this feature on or off.
	The following syntax example is provided:
	
	routemon ip set protocol
	[proto=] rip
	[name=] <interface-name>
	[subnetsummary=] <enable|disable>]
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
