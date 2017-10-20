---
layout: page
title: "Q289688: WINS Settings Are Missing on VPN Client"
permalink: /kb/289/Q289688/
---

## Q289688: WINS Settings Are Missing on VPN Client

{% raw %}

	Article: Q289688
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you establish a virtual private network (VPN) connection to a Windows NT
	4.0-based server that is running the Routing and Remote Access Service (RRAS),
	the client's primary or secondary WINS server settings may be missing.
	
	CAUSE
	=====
	
	This issue can occur if you have more than 105 VPN ports defined in RRAS, and
	you set the ports to "Dial out and receive calls", instead of setting them to
	"Receive calls only".
	
	RESOLUTION
	==========
	
	To resolve this issue, use RRAS to set the VPN ports to "Receive Calls Only".
	
	MORE INFORMATION
	================
	
	To determine if the client's primary or secondary WINS server settings are
	missing, run the ipconfig /all command on the client.
	
	In general, servers do not need 105 outgoing VPN connections. A server that is
	running Windows NT can handle several hundred incoming VPN connections without
	trouble (depending on memory and other resources). The issue described in this
	article results from the number of outgoing ports.
	
	RRAS includes the following options:
	
	- "Dial out as a RAS client"
	
	- "Receive calls as a RAS server"
	
	- "Dial out and receive calls as a demand dial router"
	
	This issue occurs if you select "Dial out as a RAS client", and there are more
	than 105 ports.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
