---
layout: page
title: "Q196263: Browse List Does Not Display All NetWare Servers"
permalink: /kb/196/Q196263/
---

## Q196263: Browse List Does Not Display All NetWare Servers

{% raw %}

	Article: Q196263
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click Network Neighborhood to view a list of computers on your
	network, the list of Novell NetWare servers may be incomplete.
	
	CAUSE
	=====
	
	This behavior can occur if you have Microsoft Gateway (and Client) Services for
	NetWare (GSNW) installed and your computer is configured for automatic frame
	detection. NetWare servers are explicitly configured to use either Ethernet
	802.2 or 802.3 frames. Reception of multiple frame types is disabled in Windows
	NT when you choose automatic frame detection.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure your computer to use multiple frame types. To
	do so, see the following article in the Microsoft Knowledge Base.
	
	  Q138699 Configuring Windows NT Workstation for Multiple Frame Types
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words: packet
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
