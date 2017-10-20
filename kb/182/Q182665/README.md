---
layout: page
title: "Q182665: XADM: Exchange Migration Wizard Fails with 7026 error"
permalink: /kb/182/Q182665/
---

## Q182665: XADM: Exchange Migration Wizard Fails with 7026 error

{% raw %}

	Article: Q182665
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you migrate users from Microsoft Mail to Microsoft Exchange Server, the
	following event may be logged and the users' data may not be migrated properly:
	
	  Event ID:   7026
	  Source:     MSExchangeMig
	  Type:    Error
	  Category:   None
	  Description:   Migration Aborted due to Mapi logon failure.
	
	CAUSE
	=====
	
	In Exchange Server version 5.5, when you use the Exchange Migration Wizard to
	migrate users from Microsoft Mail to Microsoft Exchange Server, the Exchange
	Migration Wizard creates an address type of "migrate:" for each user it migrates
	to Exchange.
	
	This is to ensure that the Exchange Migration Wizard can find the user again if
	the wizard is run in multiple phases against the same user.
	
	If you modify the CSV and remove the "migrate:MS:NET/PO/USER" information from
	the Secondary-Proxy-Addresses list, the "migrate:" address type is not created,
	and the second step of the two-step migration fails with the aforementioned
	Event ID.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Do not remove the "migrate:MS:NET/PO/USER" information from the CSV.
	
	2. Manually add the proper "migrate:MS:NET/PO/USER" address type for the user on
	  Exchange before you run the second step of the two-step migration process.
	
	
	Additional query words: MSMAIL MAILMIG
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
