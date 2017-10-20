---
layout: page
title: "Q149239: SNA Server Distributed Link Service Supports IP Address"
permalink: /kb/149/Q149239/
---

## Q149239: SNA Server Distributed Link Service Supports IP Address

{% raw %}

	Article: Q149239
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	It is possible to enter the central SNA Server's IP address in the
	Distributed Link Service Setup dialog box even though the documentation
	does not explicitly state this.
	
	The following is a sample entry in the Distributed Link Service Setup
	dialog box:
	
	  
	
	  Remote Link Service: \\100.120.3.4\SNADLC1
	
	where 100.120.3.4 is the central SNA Server's IP address.
	
	Use the TCP/IP address whenever there are difficulties with NetBIOS name
	resolution. Using the IP address of the server prevents name resolution
	from taking place.
	
	Additional query words: prodsna service pack 1
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1,3.0,4.0
	
	=============================================================================
	

{% endraw %}
