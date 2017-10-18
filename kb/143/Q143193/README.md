---
layout: page
title: "Q143193: Internet Explorer Name Resolution"
permalink: kb/143/Q143193/
---

## Q143193: Internet Explorer Name Resolution

	Article: Q143193
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Most World Wide Web (WWW) Browsers running on non-Microsoft network operation
	systems rely on a Domain Name Server (DNS) and a Hosts file to resolve Host
	names to IP addresses, even if the Web client and the Web server are on the same
	subnet.
	
	However, Microsoft Internet Explorer, does not only use the DNS and HOSTS file,
	but uses Windows Internet Name Service (WINS), the LMHOSTS file, and NetBIOS
	broadcasts for name resolution when it is running on Microsoft network operating
	systems such as Windows NT, Windows 95, Windows for Workgroups with Microsoft
	TCP/IP stacks installed. However, a NetBIOS broadcast resolves the name only if
	the WWW server is running on Windows NT and both WWW Server and WWW client is on
	the same subnet.
	
	For additional information on name resolution, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q108295 : TCP/IP Name Resolution
	
	  Q138086 : Windows NT 3.51: Reverse Name Resolution for WINS Clients
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : :1.0
	
	=============================================================================
	
