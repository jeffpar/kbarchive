---
layout: page
title: "Q187826: SNA 4.0 Server Backup Information Can Be Centrally Administered"
permalink: /kb/187/Q187826/
---

## Q187826: SNA 4.0 Server Backup Information Can Be Centrally Administered

{% raw %}

	Article: Q187826
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA 4.0 Server can be configured to send backup information to SNA 4.0 clients.
	This feature eliminates the requirement to manually update or configure each SNA
	client locally.
	
	This can be configured from within the properties of the subdomain by clicking
	the Client Backup Configuration tab. The Backup Domain and Backup Sponsor Server
	information can be configured from within the same tab and sent to SNA 4.0
	clients automatically through the sponsor connection. This feature only works
	with SNA 4.0 clients.
	
	MORE INFORMATION
	================
	
	Before an SNA client can establish a session with a host computer, they must
	establish a sponsor connection.
	
	Please refer to the following article in the Microsoft Knowledge Base for more
	details on client sponsor connections:
	
	  Q160849 How the SNA Server Client Chooses a "Sponsor" SNA Server
	
	During an SNA client installation, a choice is made between installing the client
	locally or remotely. There are benefits gained from using each approach.
	
	Local clients have an advantage of not being affected when SNA Servers are
	retired or renamed in an existing SNA subdomain. However, local clients cannot
	be used when SNA Servers are on different TCP/IP subnets and separated from the
	client by a router. Requests for members of an SNA subdomain are broadcast and
	will generally not get through a router to another TCP/IP subnet.
	
	Remote clients are useful when SNA Servers are located across a WAN or another
	TCP/IP subnet. However, they may not be able to get SNA sponsor connections when
	SNA Servers are retired or renamed in an existing SNA subdomain, depending on
	their original client configuration. This problem can be solved by taking
	advantage of the new feature in SNA 4.0 Server that can update client
	configurations with new backup server or domain information as required.
	
	Additional query words: snasetup snawin95
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
