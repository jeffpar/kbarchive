---
layout: page
title: "Q230508: XCON: How to Configure X.400 to Send System Messages Only"
permalink: /kb/230/Q230508/
---

## Q230508: XCON: How to Configure X.400 to Send System Messages Only

{% raw %}

	Article: Q230508
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp1
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be necessary to use the X.400 Connector to deliver system messages ONLY
	(for example, for directory replication, public folder replication, and so on).
	In such cases, you may want to use other connectors (for example, the Internet
	Mail Service) to deliver regular user mail. This may become necessary to reduce
	operation costs because of dedicated lines or the amount of data transferred by
	the X.400 Connector.
	
	This feature requires that Exchange Server 5.5 Service Pack 1 is already
	installed on the server.
	
	MORE INFORMATION
	================
	
	To configure the X.400 Connector as mentioned above:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. In raw mode, under Organization, click Site, click Configuration, and click
	  the Connections container.
	
	3. In the right window, click the X.400 Connector you want to use to deliver
	  System messages ONLY.
	
	4. On the File menu, click Raw Properties.
	
	5. Under "List attributes of type", click All. Under Object attributes, click
	  Heuristics.
	
	6. In the Edit value field, type "8192" (without the quotation marks).
	
	7. Click Set, and click OK.
	
	8. Stop and re-start the Microsoft Exchange Message Transfer Agent (MTA)
	  service.
	
	9. Test it.
	
	Now the X.400 Connector can only send System messages and all other user mail is
	forced to use the Internet Mail Service.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
