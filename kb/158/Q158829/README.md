---
layout: page
title: "Q158829: Domain Validation May Not Work Across Dial-on-Demand Routers"
permalink: /kb/158/Q158829/
---

## Q158829: Domain Validation May Not Work Across Dial-on-Demand Routers

{% raw %}

	Article: Q158829
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork msnets win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you try to log in across a dial-on-demand router with a Windows 95 client,
	domain validation may not work. When this occurs, you receive the following
	error message:
	
	  No domain controller is available to validate your session.
	  You may not be able to gain access to some network resources.
	
	CAUSE
	=====
	
	Windows 95 issues netlogon mailslots to the domain name to find a domain
	controller for validation. Windows 95 issues a mailslot three times with a
	default delay of three seconds for a response to each mailslot. If a response is
	not received after three attempts (roughly nine seconds), validation fails and
	the error message is displayed.
	
	Validation may fail if the domain controllers are located across a dial-
	on-demand router, the router is not connected when the client begins sending the
	netlogon mailslots, and the router requires longer than nine seconds to connect.
	The result of the router connection delay is that the mailslots time out and the
	client displays the error message.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	Note that the problem described in this article can also occur if the router is
	not available (offline). This can be verified by a Network Monitor trace. To
	resolve this issue, bring the router back online.
	
	
	Additional query words: w95qfe
	
	======================================================================
	Keywords          : kberrmsg kbnetwork msnets win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
