---
layout: page
title: "Q192467: Windows NT Load Balancing Service Remote Control Commands Fail"
permalink: /kb/192/Q192467/
---

## Q192467: Windows NT Load Balancing Service Remote Control Commands Fail

{% raw %}

	Article: Q192467
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows NT Load Balancing Service (WLBS) remote control commands are
	invoked from a system outside the cluster, no response is received from one or
	more cluster hosts.
	
	CAUSE
	=====
	
	This problem can be caused by one of the following:
	
	- The cluster network interface cards (NICs) are not reachable from the outside
	  system. If you have multiple NICs on a cluster host, the dedicated NIC may be
	  on a separate subnet from the cluster NIC. If you invoke a remote control
	  command from an outside system on this subnet, the cluster NICs and WLBS
	  driver will not receive the command.
	
	- Remote control commands are sent to a secondary cluster IP address. Commands
	  must be sent to the cluster's primary IP address (which is entered in the
	  WLBS Setup dialog box).
	
	- WLBS's UDP control port is blocked by a firewall. By default, remote control
	  commands are sent to UDP port 1717 at the cluster IP address. You can also
	  change the port number by modifying the corresponding WLBS registry
	  parameter.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods that correspond to the
	cause listed above:
	
	- Be sure that the cluster NICs on the cluster hosts can be reached by the
	  outside system.
	
	-or-
	
	- Be sure that you send remote commands to the secondary cluster IP address.
	
	-or-
	
	- Be sure that UDP port 1717 has not been blocked by a router or firewall.
	
	MORE INFORMATION
	================
	
	The Windows NT Load Balancing Service is configurable from a remote location by
	copying the control program (WLBS.exe) to any Windows NT device.
	
	Additional query words: Convoy WLBS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
