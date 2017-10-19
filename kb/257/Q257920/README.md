---
layout: page
title: "Q257920: &quot;The Specified Name ...&quot; Message When Installing MSCS Server"
permalink: /kb/257/Q257920/
---

## Q257920: &quot;The Specified Name ...&quot; Message When Installing MSCS Server

	Article: Q257920
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a Microsoft Cluster Server (MSCS) server, you may
	receive the following error message:
	
	  The specified name is already in use on this network. You must enter a unique
	  cluster name.
	
	Note that you may receive this error message even though you are using a unique
	cluster name.
	
	CAUSE
	=====
	
	This issue can occur if the NetBIOS interface has been removed from the MSCS
	server.
	
	RESOLUTION
	==========
	
	To resolve this issue, add the NetBIOS Interface to your MSCS server, and then
	disable the NetBIOS Interface on the "heartbeat" network adapter:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click the Services tab, click Add, click NetBIOS Interface, click OK, click
	  Close, and then click No when prompted to restart your computer.
	
	3. Apply the latest service pack previously installed on your computer, and then
	  restart your computer.
	
	4. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	5. Click the Bindings tab, click All Adapters in the "Show Bindings for" box,
	  and then double-click the "heartbeat" network adapter.
	
	6. Double-click WINS Client (TCP/IP), click NetBIOS Interface, click Disable,
	  and then click OK.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If you perform multiple rebinds on the MSCS server, the bindings may not work
	properly. In this case, you may need to remove and then reinstall the Transport
	Control Protocol/Internet Protocol (TCP/IP) protocol. For additional information
	about how to remove and then reinstall TCP/IP, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q151237 Error Message When Installing TCP/IP or Adding TCP/IP Service
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
