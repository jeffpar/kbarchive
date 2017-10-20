---
layout: page
title: "Q219038: Disabling and Removing WLBS"
permalink: /kb/219/Q219038/
---

## Q219038: Disabling and Removing WLBS

{% raw %}

	Article: Q219038
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Load Balancing Service (WLBS) can be disabled for troubleshooting
	purposes or because a computer is not going to participate in cluster operations
	for an extended period of time. Follow these steps to disable WLBS:
	
	NOTE: Cluster Adapter is the network interface card (NIC) used for cluster
	traffic; it is not the WLBS Virtual NIC adapter.
	
	1. In Control Panal, double-click Network, and then click the Bindings tab.
	
	2. Under "Show Bindings For", select "All Protocols".
	
	3. Disable the binding from the WLBS driver protocol to the network adapter.
	
	4. Disable the binding from the TCP/IP and WINS Client protocols to the WLBS
	  Virtual NIC adapter.
	
	5. If you are using multiple adapters and if you plan to use this adapter to
	  handle TCP/IP and WINS Client traffic, enable the binding from the TCP/IP and
	  WINS Client protocols to the cluster adapter.
	
	6. Click OK to close the dialog box.
	
	7. Restart the computer.
	
	To fully remove the WLBS software, follow these steps:
	
	1. In Control Panal, double-click Network, and then click the Adapters tab.
	
	2. Select the WLBS Virtual NIC Driver.
	
	3. Click Remove.
	
	4. Examine and modify (if needed) the bindings from the TCP/IP and WINS Client
	  protocols to the cluster adapter as preferred.
	
	5. Click OK to close the dialog box.
	
	6. Remove the following files from the %SystemRoot%\System32 folder:
	
	   - Wlbs.exe
	
	   - Wlbs.dll
	
	   - Wlbs.hlp
	
	   - Wlbs.cnt
	
	   - Wlbs.sys
	
	7. Remove the following file from the %SystemRoot%\System32\Drivers folder:
	
	   - Wlbs.sys
	
	8. Restart the computer.
	
	Additional query words: convoy load balancing
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTLBSSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
