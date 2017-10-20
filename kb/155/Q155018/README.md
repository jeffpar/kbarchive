---
layout: page
title: "Q155018: Cannot Join Domain During Setup with Dial-Up Networking"
permalink: /kb/155/Q155018/
---

## Q155018: Cannot Join Domain During Setup with Dial-Up Networking

{% raw %}

	Article: Q155018
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup dun kbDialUp
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows NT 4.0, if you choose to connect to the network
	using Dial-Up Networking and you choose to join a domain, Setup tries to start
	the network and register the computer on the domain. However, Setup does not
	dial the modem to connect you to the remote network.
	
	CAUSE
	=====
	
	Windows NT cannot set up the Dial-Up Networking session at this point in Setup.
	
	RESOLUTION
	==========
	
	To work around this problem, set up your computer as a workgroup. Once Setup is
	finished, establish a Dial-Up Networking connection to the network and join the
	domain.
	
	Additional query words: ras
	
	======================================================================
	Keywords          : kbnetwork kbsetup dun kbDialUp 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
