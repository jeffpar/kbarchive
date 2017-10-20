---
layout: page
title: "Q169717: Properties Menu Option Missing in DHCP Manager"
permalink: /kb/169/Q169717/
---

## Q169717: Properties Menu Option Missing in DHCP Manager

{% raw %}

	Article: Q169717
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You click on the Server menu of the DHCP Manager and the Properties menu item is
	not available.
	
	CAUSE
	=====
	
	The Microsoft DHCP Server service was installed after Service Pack 2 or Service
	Pack 3 and has not been updated.
	
	RESOLUTION
	==========
	
	Re-apply the latest Windows NT Service Pack.
	
	MORE INFORMATION
	================
	
	The Properties menu item was added in Service Pack 2 to allow for the
	configuration of new features. When the Microsoft DHCP Server service is
	installed after a service pack, you do not have access to the newer features
	until you re-apply the service pack.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
