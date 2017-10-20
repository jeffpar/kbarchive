---
layout: page
title: "Q232711: How Cluster Integrity Is Monitored in WLBS"
permalink: /kb/232/Q232711/
---

## Q232711: How Cluster Integrity Is Monitored in WLBS

{% raw %}

	Article: Q232711
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Cluster integrity is monitored by the periodic exchange of proprietary messages
	between cluster members; these messages are called heartbeats. Each cluster host
	periodically sends a heartbeat from its virtual network adapter to the segment
	in which the cluster's virtual network adapters reside to let the other hosts
	know that it is "alive."
	
	When the Windows NT Load Balancing Service (WLBS) cluster is configured to use a
	unicast media access control (MAC) address, the heartbeat is sent to the
	Ethernet broadcast address, FFFFFFFFFFFF. When the cluster is configured to use
	a multicast MAC address, the heartbeat is sent to the cluster's multicast MAC
	address. The virtual network adapter of each cluster host must be in the same
	network segment or subnet as the other cluster hosts' virtual network adapters
	to be able to receive the heartbeat from each other.
	
	By default, the time period a cluster host waits before sending the next
	heartbeat is 1 second. This can be customized by adjusting the AliveMsgPeriod
	registry parameter.
	
	By default, a cluster host is declared inactive by the other hosts if its
	heartbeat is missed for five periods. You can customize this value by adjusting
	the AliveMsgTolerance registry parameter.
	
	The intracluster traffic that is created by the heartbeat is miniscule. It is a
	function of the cluster size, not of the number of users or offered load. The
	size of the heartbeat message is 1.5 KB. It is stamped with a version number and
	newer versions are insured to be backward compatible.
	
	MORE INFORMATION
	================
	
	The heartbeat's Ethernet frame type is 0x886f (IEEE registered). The frame type
	used in previous versions of WLBS is 0xbf01. In a mixed cluster composed of WLBS
	and previous versions of WLBS, WLBS reverts to frame type 0xbf01.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q193601 Registry Parameters for Windows NT Load Balancing Service
	
	Additional query words: convoy nic
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
