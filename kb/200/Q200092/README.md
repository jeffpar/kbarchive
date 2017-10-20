---
layout: page
title: "Q200092: XIMS: Internet Mail Service Fails to Start on DEC Alpha, 4087"
permalink: /kb/200/Q200092/
---

## Q200092: XIMS: Internet Mail Service Fails to Start on DEC Alpha, 4087

{% raw %}

	Article: Q200092
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A DEC Alpha with Microsoft Exchange Server 5.0 installed may experience problems
	after you add Gateway Services for NetWare and the Microsoft Exchange Connector
	for Lotus cc:Mail. The Internet Mail Service may fail to start, and an error in
	the event viewer may appear indicating the following:
	
	  ID: 4087, Source: MSExchangeIMC, Type: Error,
	
	  "Service could not be started. Queue viewing interface could not be
	  registered"
	
	Removing the connector to cc:Mail and removing the Gateway Services for NetWare
	does not solve the problem.
	
	RESOLUTION
	==========
	
	The following actions are suggested in this order given below:
	
	1. Confirm that the version of Windows NT is a release-to-market (RTM) version
	  clean installation (not over a Beta version).
	
	2. Confirm that Services for Apple Talk is not running on this Microsoft Windows
	  NT Advanced Server (NTAS) computer.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q182346 XFOR: Cannot Start or Create Internet Mail Service, Event 4087
	
	3. Confirm that SNMP service is not running.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q182346 XFOR: Cannot Start or Create Internet Mail Service, Event 4087
	
	4. Remove all the network protocols except TCP/IP, and then reboot the
	  computer.
	
	  Note: Always reapply Windows NT service packs when adding protocols.
	
	5. In Task Manager or Performance Monitor, confirm that the Internet Mail
	  Service has started.
	
	6. If it starts successfully, and stays up without errors, send an SMTP message
	  through the Internet Mail Service to confirm proper operation.
	
	Additional query words: GSNW
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
