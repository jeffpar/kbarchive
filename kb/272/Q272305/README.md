---
layout: page
title: "Q272305: XADM: Move Mailbox Fails with Event ID 8505 and Error 0x8004030"
permalink: /kb/272/Q272305/
---

## Q272305: XADM: Move Mailbox Fails with Event ID 8505 and Error 0x8004030

{% raw %}

	Article: Q272305
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Move Mailbox functionality in the Microsoft Exchange
	Server 5.5 Administrator program, the following event ID message may be logged
	in the Application event log:
	
	  Event Type: Error
	  Event Source: MSExchangeISPriv
	  Event ID: 8505
	  Description: Unable to move mailbox <mailbox name>... error number
	  0x80040301
	
	The message for Error 0x80040301 is "ecPropBadValue-MAPI_E_BAD_VALUE".
	
	CAUSE
	=====
	
	This issue can occur if the mailbox has a corrupted or unexpected value.
	
	RESOLUTION
	==========
	
	To resolve this issue, correct the damaged information. To do so, use either of
	the following methods:
	
	- Use the Isinteg utility.
	
	For additional information about how to run Isinteg to resolve this issue, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q188627 MSExchangeIS Move Mailbox Error Event IDs
	
	- Use the CleanSweep utility from the BackOffice Resource Kit.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q174045 Installing and Using the CleanSweep Tool
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
