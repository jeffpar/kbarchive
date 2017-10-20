---
layout: page
title: "Q172975: Cannot Disconnect Mapped Network Drives"
permalink: /kb/172/Q172975/
---

## Q172975: Cannot Disconnect Mapped Network Drives

{% raw %}

	Article: Q172975
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS NT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to disconnect a mapped network drive, the drive may not be
	disconnected, and no error message may be displayed.
	
	CAUSE
	=====
	
	This behavior can occur if you have Banyan Vines Enterprise Client 7.26
	installed and it is configured as the primary network provider.
	
	RESOLUTION
	==========
	
	To resolve this issue, perform the following steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click Services.
	
	3. Click Network Access Order.
	
	4. In the Network Providers box, move Banyan Vines to the bottom of the list.
	
	5. Click OK, and restart the computer when you are prompted.
	
	MORE INFORMATION
	================
	
	When the Banyan Enterprise Client version 7.26 is installed, mapped network
	drives can be disconnected only for the primary network provider.
	
	Banyan Enterprise Client is manufactured by Banyan, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: map close cancel disconnected unable
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINDOWS NT:4.0
	
	=============================================================================
	

{% endraw %}
