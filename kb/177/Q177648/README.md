---
layout: page
title: "Q177648: RAS Error: TCP/IP CP Reported Error 733: The PPP Control..."
permalink: /kb/177/Q177648/
---

## Q177648: RAS Error: TCP/IP CP Reported Error 733: The PPP Control...

	Article: Q177648
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect a Remote Access Service (RAS) client to your
	multihomed RAS Server or Routing and Remote Access Service (RRAS) Server, which
	is also a Dynamic Host Configuration Protocol (DHCP) server, the client may get
	the following error:
	
	  TCP/IP CP reported error 733: The PPP control protocol for this network
	  protocol is not available on the server.
	
	On your RAS server, Event Viewer may log one or more of the following event
	messages:
	
	  Event ID   : 1011
	  Source     : DhcpServer
	  Description: The DHCP server issued a NACK to the client
	               (5241532090DAE6D09FD4BC0101000000) for the address
	               (160.62.1.126) request.
	
	NOTE: The hardware address and the IP address above will be different for your
	network environment.
	
	
	-or-
	
	  Event ID   : 20091
	  Source     : RemoteAccess
	  Description: The remote Access Server was unable to acquire an IP
	               Addresss from the DHCP Server to be used on the Server
	               Adapter. Incoming user will be unable to connect using IP.
	
	RESOLUTION
	==========
	
	To work around this issue, you will need to reconfigure your RAS server to use a
	static pool of IP addresses. If the addresses that you use exist within the
	scope of addresses in your DHCP server scopes, you also need to exclude the
	range in DHCP Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: multi-homed
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
