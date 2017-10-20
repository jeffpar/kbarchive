---
layout: page
title: "Q242097: GSNW Shares Deleted with NT Server Connected to Cisco Catalyst 5"
permalink: /kb/242/Q242097/
---

## Q242097: GSNW Shares Deleted with NT Server Connected to Cisco Catalyst 5

{% raw %}

	Article: Q242097
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a computer running Microsoft Windows NT Server that is connected
	to a Cisco Catalyst 5000 Etherswitch, file shares using Gateway Services for
	NetWare (GSNW) may be disconnected.
	
	CAUSE
	=====
	
	This issue can occur if the port is slow initializing.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Cisco to enable the Portfast option on the Cisco
	Catalyst 5000 Etherswitch.
	
	Stop the GSNW service after restarting the server but before changing the
	portfast setting on the switch. Restart the GSNW and Server services. If the
	shares appear correctly, slow port initialization is causing the problem. Set
	portfast enabled on the Cisco switch.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
