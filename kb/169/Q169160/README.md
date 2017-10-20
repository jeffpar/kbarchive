---
layout: page
title: "Q169160: Routing Protocols Changes Not Updated in Routing and RAS Admin"
permalink: /kb/169/Q169160/
---

## Q169160: Routing Protocols Changes Not Updated in Routing and RAS Admin

{% raw %}

	Article: Q169160
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Removing a routing protocol from Routing and Remote Access Service (RRAS) is not
	accurately reflected in the RRAS Administrator tool. To remove a routing
	protocol on a RRAS router you must use the command-line utility ROUTEMON. If
	RRAS Administrator is active when you remove a routing protocol, the graphical
	user interface will not reflect the change. Also, if you add a routing protocol
	from the command line, the protocol will not be reflected in RRAS Administrator.
	
	RESOLUTION
	==========
	
	Quit and restart Routing and Remote Access Service Administrator. When Routing
	and Remote Access Service Administrator is restarted, it will accurately reflect
	removal or addition of a routing protocol.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Routing and Remote Access
	Service Update. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
