---
layout: page
title: "Q238747: Windows Load Balancing Service Does Not Work on Token Ring"
permalink: /kb/238/Q238747/
---

## Q238747: Windows Load Balancing Service Does Not Work on Token Ring

{% raw %}

	Article: Q238747
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Load Balancing Service and Windows 2000 Network Load Balancing (NLB)
	is not supported on token ring networks. The system requirements for Windows NT
	Load Balancing Service state:
	
	  The current version of WLBS operates on FDDI or Ethernet-based local area
	  networks within the cluster. It has been tested on 10 megabits per second
	  (Mbps), 100 Mbps, and gigabit Ethernet networks with a wide variety of
	  network adapters.
	
	MORE INFORMATION
	================
	
	Although not explicitly stated in the product documentation, Windows NT Load
	Balancing Service and Windows 2000 NLB does not run on a token ring network.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTLBS100 kbWinNTLBSSearch kbwin2000Search kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
