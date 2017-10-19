---
layout: page
title: "Q241812: DUN Clients Cannot Obtain Access to the LAN"
permalink: /kb/241/Q241812/
---

## Q241812: DUN Clients Cannot Obtain Access to the LAN

	Article: Q241812
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Microsoft Proxy 2.0 on your Microsoft Windows NT 4.0-based
	computer, the common recommendation is to disable Internet Protocol (IP)
	forwarding. This is usually recommended to prevent the computer from routing
	packets to the internal network. This article describes the behavior of remote
	access Dial-Up Networking (DUN) clients based on whether this setting is enabled
	or disabled.
	
	MORE INFORMATION
	================
	
	When your Windows NT 4.0-based computer is running Remote Access Service (RAS)
	or Routing and Remote Access Service (RRAS) in addition to Microsoft Proxy 2.0,
	the IP forwarding setting controls the following behavior for remote access DUN
	clients:
	
	IP Forwarding Is Disabled
	-------------------------
	
	Remote access DUN clients are able to obtain access to the Proxy 2.0 RAS (or
	RRAS) Proxy 2.0 server only.
	
	IP Forwarding Is Enabled
	------------------------
	
	Remote access DUN clients are able to obtain access to the Proxy 2.0 RAS (or
	RRAS) Proxy 2.0 server, and to resources on the local area network (beyond the
	proxy).
	
	NOTE: Proxy 2.0 Autodial is not affected by the IP forwarding setting, because
	the DUN connections are outgoing.
	
	To configure IP forwarding on your Windows NT 4.0-based computer:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click the Protocols tab, and then double-click TCP/IP Protocol.
	
	3. Click the Routing tab, and then click to select or click to clear the Enable
	  IP Forwarding check box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
