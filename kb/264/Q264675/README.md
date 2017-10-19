---
layout: page
title: "Q264675: XADM: Directory Replication Fails with 1091 Error 2147746077"
permalink: /kb/264/Q264675/
---

## Q264675: XADM: Directory Replication Fails with 1091 Error 2147746077

	Article: Q264675
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Intersite Directory Replication is failing; when the diagnostic logging category
	Replication (on the Directory Service object) is set to Maximum, the following
	event may be generated in the Application Event Log:
	
	  Event Type: Warning
	  Event Source: MSExchangeDS
	  Event Category: Replication
	  Event ID: 1091
	  Description:
	  The directory replication agent (DRA) attempted to open mail with name
	  /o=ORGANIZATION/ou=SITE/cn=Configuration/cn=Servers/cn=SERVERNAME/cn=Microsoft
	  DSA:SERVERNAME but received error 2147746077. Messages could not be sent.
	  Make sure that the mail service on this Microsoft Exchange Server computer is
	  running.
	
	CAUSE
	=====
	
	The Microsoft Exchange Directory Service is configured to log on as the wrong
	account.
	
	RESOLUTION
	==========
	
	To resolve this issue, confirm that the Microsoft Exchange Directory Service is
	configured to log on using the correct Exchange Service Account. To do so,
	follow these steps:
	
	1. Click Start, click Settings, click Control Panel, and then double-click
	  Services.
	
	2. Select the Microsoft Exchange Directory Service, and then click Startup.
	
	3. In the "Log on As" box, click to select This Account, and then enter the
	  correct Exchange Service Account.
	
	4. Stop and restart the Exchange Services.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : Admin
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
