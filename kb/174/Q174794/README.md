---
layout: page
title: "Q174794: How to Change Network Priority in a Cluster"
permalink: /kb/174/Q174794/
---

## Q174794: How to Change Network Priority in a Cluster

{% raw %}

	Article: Q174794
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Cluster Server provides the ability to change the priority, change the
	role, or use configured networks for cluster communications.
	
	MORE INFORMATION
	================
	
	Internal cluster data will be transmitted on the highest priority and available
	network. You may designate detected networks for the following roles:
	
	- Use for all communications
	
	- Use only for internal cluster communications
	
	- Use only for client access
	
	Use the procedure below to adjust network priority for internal cluster
	communications or to change network designations:
	
	1. Right-click the cluster name. The name is at the top level of the resource or
	  group tree in the left portion of the Cluster Administrator window (above the
	  Groups folder).
	
	2. Select Properties.
	
	3. Select the Network Priority tab.
	
	4. Adjust network priority for internal cluster communications as needed with
	  the up and down arrows provided.
	
	5. To adjust the role of the network, select the appropriate network and click
	  Properties. If you do not want to change the role of the network or whether
	  it is enabled for cluster use, do not perform this step. Otherwise, adjust
	  the network properties as preferred for your configuration.
	
	6. When you are finished, click OK.
	
	NOTE: It is important to allow for internal cluster communications as well as
	client communications. A typical configuration with two network adapters would
	allow all communications on the system's primary network adapter and internal
	cluster communications only on the secondary adapter. The secondary adapter
	would have the highest priority for cluster communications and would allow the
	primary adapter to assume this role if the secondary adapter fails.
	
	Additional query words: network priority role MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
