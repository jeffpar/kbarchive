---
layout: page
title: "Q196408: XADM: Move Server Logs Failure if MailBox has no WinNT Account"
permalink: /kb/196/Q196408/
---

## Q196408: XADM: Move Server Logs Failure if MailBox has no WinNT Account

{% raw %}

	Article: Q196408
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Exchange Server computer that you are moving has mailboxes which are not
	associated with a Windows NT account, then choosing to move the server to a new
	organization and/or new site using the Move Server Wizard will result in the
	following warning being displayed in the Windows NT Application Event log:
	
	  Event ID: 9502
	  Source: MSExchangeMvServer
	  Type: Warning
	  Category: General
	  Description: Unable to completely cleanup mailbox
	  '/o=Orgname/ou=Sitename/cn=Recipients/cn=Jane-92303-MB'
	
	There is also a direct effect on performance. Each mailbox needs several seconds
	to be processed during this phase.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Move Server Wizard of Exchange
	Server version 5.5.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
