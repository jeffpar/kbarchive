---
layout: page
title: "Q130985: Server Properties Returns Inconsistent Number of Connections"
permalink: /kb/130/Q130985/
---

## Q130985: Server Properties Returns Inconsistent Number of Connections

{% raw %}

	Article: Q130985
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the properties for a Novell NetWare server, the number of
	connections reported may vary with the NetWare Client software you are using and
	the NetWare version that is installed on the server.
	
	CAUSE
	=====
	
	This behavior occurs because the Microsoft Client for NetWare Networks consumes
	one attachment while it retrieves information from the server. The NETX client
	does not consume this attachment while retrieving information. The number of
	connections reported reflects the number of attachments, not the number of
	logged-in connections.
	
	MORE INFORMATION
	================
	
	NetWare version 2.x servers count attachments. This number includes the number
	of authenticated users.
	
	NetWare versions 3.x and 4.x count only authenticated users, and do not count the
	extra attachment to retrieve information.
	
	Therefore, if you connect to a NetWare 2.x server with the Microsoft Client for
	NetWare Networks, 2 connections are reported. If you connect to the same server
	with the NETX client instead, one connection is reported.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
