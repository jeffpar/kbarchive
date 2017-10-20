---
layout: page
title: "Q241115: DHCP Client Sends NetBIOS Name Instead of Host Name"
permalink: /kb/241/Q241115/
---

## Q241115: DHCP Client Sends NetBIOS Name Instead of Host Name

{% raw %}

	Article: Q241115
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your NetBIOS name and host name are different. In the Dynamic Host Configuration
	Protocol (DHCP) database, you see the NetBIOS name. Using the host name would be
	more logical.
	
	CAUSE
	=====
	
	The DHCP client uses the NetBIOS computer name (returned by the GetComputerName
	function) to fill in the DHCP requests.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
