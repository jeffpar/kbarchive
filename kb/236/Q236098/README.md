---
layout: page
title: "Q236098: Local TCP/IP Client Fails--No SNA Servers Found in (Sub)domain"
permalink: /kb/236/Q236098/
---

## Q236098: Local TCP/IP Client Fails--No SNA Servers Found in (Sub)domain

	Article: Q236098
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure an SNA Server 4.0 Windows 95 or Windows 98 client for Local
	client mode and the TCP/IP transport, the client SnaBase may fail to locate an
	SNA Server and displays the following error message:
	
	  SnaBase
	  ERROR: No SNA Servers found in (sub)domain DOMAINNAME
	
	This intermittent problem started to occur at a customer site that had hundreds
	of SNA Windows 95 and Windows 98 clients and who had configured their TCP/IP
	routers to forward UDP broadcasts to five SNA Servers in the subdomain. At
	times, the clients would fail to receive a response from an SNA Server within
	the 3-second client timeout interval, causing client startup problems.
	
	CAUSE
	=====
	
	The server-side SnaBase service is improperly handling client UDP startup
	requests, delaying 200 ms before responding to a client discovery request. Under
	heavy client load, these requests can be queued on the server, resulting in a
	delayed server response past the 3-second client timeout interval.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	Configure the SNA Server Windows 95 or Windows 98 clients for Remote client
	mode, where the client locates the server by name and does not rely on the UDP
	response from the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, and 4.0 SP2. This problem was first corrected in SNA Server
	version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The server-side SnaBase has been changed to respond immediately to client
	discovery requests received over TCP/IP or IPX or Banyan (except on named pipes,
	used by old LAN Manager clients) instead of waiting 200 ms.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
