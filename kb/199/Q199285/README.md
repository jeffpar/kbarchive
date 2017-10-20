---
layout: page
title: "Q199285: Upgrading Convoy to Windows NT Load Balancing Service"
permalink: /kb/199/Q199285/
---

## Q199285: Upgrading Convoy to Windows NT Load Balancing Service

{% raw %}

	Article: Q199285
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The new version of Convoy is called Windows NT Load Balancing Service.
	
	There is no upgrade program from Convoy to WLBS. The correct way to upgrade is to
	install WLBS, and then remove Convoy and restart the computer. The following
	steps show this process in more detail:
	
	1. In the Network tool in Control Panel, click the Adapters tab, and then click
	  Add.
	
	2. Click Have Disk and type the path where you have the WLBS installation files.
	  Click OK.
	
	3. In the Select OEM Option window, select Microsoft Windows NT Load Balancing
	  Service, and then click OK. You will get the following informational
	  message:
	
	  "Make sure that you set the proper bindings described in the Installation
	  guide before rebooting your system."
	
	  At this point, the WLBS License Agreement is shown to the user, and the WLBS
	  Setup window is displayed.
	
	4. Configure WLBS according to the Installation Guide.
	
	5. In the Network tool in Control Panel, click the Bindings tab and configure
	  the proper bindings. (Do not worry about the bindings for the Convoy Driver
	  and Convoy Virtual NIC because they are going to go away when Convoy is
	  removed.)
	
	6. In the Network tool in Control Panel, click the Adapters tab, select Convoy
	  Virtual NIC, and then click Remove.
	
	7. Close Control Panel and restart the computer.
	
	8. In TCP/IP Properties, configure the desired IP addresses for the WLBS Virtual
	  NIC and (if the computer is multihomed) for the other NICs.
	
	9. Close Control Panel and restart the computer.
	
	Additional query words: Convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTLBSSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
