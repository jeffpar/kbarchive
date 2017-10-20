---
layout: page
title: "Q278343: XFOR: Can't Log On to Calendar Connector Service (Error 1069)"
permalink: /kb/278/Q278343/
---

## Q278343: XFOR: Can't Log On to Calendar Connector Service (Error 1069)

{% raw %}

	Article: Q278343
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 13-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change the service account password, you may receive the following
	error message when you try to start the Microsoft Exchange Calendar Connector
	Service:
	
	  Could not start the Microsoft Exchange Calendar Connector Service on
	  \\Tbill1
	
	  Error 1069: The service did not start due to logon failure.
	
	CAUSE
	=====
	
	Changing the site service account password from within the Microsoft Exchange
	Administrator program does not change the startup parameters of the Calendar
	Connector.
	
	WORKAROUND
	==========
	
	To make sure that the Calendar Connector Service starts by manually changing the
	startup parameters of the Calendar Connector, follow these steps:
	
	1. In the Services tool, in Control Panel, click "Microsoft Exchange Calendar
	  Connector".
	
	2. Click Startup.
	
	3. Under Log On As, reset the password to the current password.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about changing the Exchange Service Account, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q157780 XADM: How to Change the Service Account Password
	
	Additional query words: calcon
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
