---
layout: page
title: "Q149554: TCP/IP Settings Are Incorrect After Server-Based Setup"
permalink: /kb/149/Q149554/
---

## Q149554: TCP/IP Settings Are Incorrect After Server-Based Setup

{% raw %}

	Article: Q149554
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a server-based Setup, your enumerated network adapter may not
	have the correct TCP/IP settings. For example, a network system with a static IP
	address will have its settings changed to use DHCP.
	
	CAUSE
	=====
	
	Netdi.dll does not properly detect and transfer TCP/IP settings for the network
	card during server-based Setup.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words: lanman PnP netsetup
	
	======================================================================
	Keywords          : kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
