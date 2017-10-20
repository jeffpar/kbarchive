---
layout: page
title: "Q289120: XCLN: Exchange Server Performance Problems Caused by Clients"
permalink: /kb/289/Q289120/
---

## Q289120: XCLN: Exchange Server Performance Problems Caused by Clients

{% raw %}

	Article: Q289120
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	General Exchange Server performance and stability problems may be caused if a
	client application opens a large numbers of messages at once. Some add-on
	services and applications may inadvertently do this while performing their
	functions.
	
	Symptoms may be non-specific and can include slow performance on the server or
	unexpected program exits by clients. You may also observe Out-of-Memory errors
	on the Exchange Server computer. Examination of Exchange Server-related errors
	in the server Application log may show errors with the following IDs in the
	event descriptions:
	
	- 0x800700E
	- 1014
	- CdoE_NOT_ENOUGH_MEMORY
	
	RESOLUTION
	==========
	
	For Exchange Server 5.5 and earlier, you must address the problem from the
	client. Exchange 2000 provides two server-side options for dealing with this
	problem:
	
	- Limit the number of open messages for each client logon.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q289109 XADM: Limit the Number of Messages Opened per MAPI Logon
	
	- If you find that a particular client version is problematic in your
	  environment, you may prevent all clients of this version from connecting at
	  all to the Exchange 2000 server.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q289115 XADM: How to Disable MAPI Clients at a Server Level Based on Client
	  MAPI Provider Version
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange 2000 Server.
	Microsoft has confirmed this to be a problem in Microsoft Exchange 5.5 Server.
	
	MORE INFORMATION
	================
	
	You can view the number of open messages for each client logon in the Exchange
	Server 5.5 Administrator program or in Exchange System Manager for Exchange
	2000. A client logon is suspect if it shows more than 1,000 messages open for
	more than a few minutes at a time.
	
	To check the open message count:
	
	1. Start the Administrator program for Microsoft Exchange Server 5.5, or
	  Exchange System Manager for Exchange 2000.
	
	2. Expand the mailbox database object, and then click Logons.
	
	  NOTE: In Exchange Server 5.5, this database is always the private information
	  store. In Exchange 2000, the database name is set by the administrator.
	
	3. On the View menu, click Columns, and then add "Open Messages" to the
	  displayed columns.
	
	Note that the column display does not refresh automatically, and values in it are
	updated at approximately one minute intervals.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
