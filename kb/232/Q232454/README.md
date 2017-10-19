---
layout: page
title: "Q232454: How to Manually Configure Cluster MAC Addresses in WLBS"
permalink: /kb/232/Q232454/
---

## Q232454: How to Manually Configure Cluster MAC Addresses in WLBS

	Article: Q232454
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to manually configure a cluster's media access
	control (MAC) address in Windows NT Load Balancing Service (WLBS).
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	By default, WLBS derives the cluster MAC address from the virtual IP (VIP)
	address that you type in the Primary IP Address field in the WLBS Setup dialog
	box. The MAC address automatically appears in the Network Address field and
	cannot be modified. When you configure the VIP address in cluster hosts, WLBS
	ensures all hosts use the same cluster MAC address.
	
	To manually configure the cluster MAC address:
	
	1. Set the IPToMACEnable registry value to 0.
	
	  NOTE: When this value is set to 1 (the default), WLBS automatically derives a
	  MAC address from the VIP address.
	
	2. At a command prompt, type "wlbs stop" (without the quotation marks).
	
	3. At a command prompt, type "wlbs reload" (without the quotation marks) to
	  reload registry parameters.
	
	4. Click Start, point to Settings, click Control Panel, double-click Network,
	  and then click the Adapters tab.
	
	5. Click WLBS Virtual NIC, and then click Properties.
	
	6. Modify the MAC address, and then click OK.
	
	7. Close Control Panel, and then restart the computer.
	
	NOTE: When you manually configure a cluster's MAC address, make sure the MAC
	address is the same for all cluster hosts.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q193601 Registry Parameters for Windows NT Load Balancing Service
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
