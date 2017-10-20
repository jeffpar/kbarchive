---
layout: page
title: "Q152330: XADM: Err Msg: Could Not Log On to the Message Store"
permalink: /kb/152/Q152330/
---

## Q152330: XADM: Err Msg: Could Not Log On to the Message Store

{% raw %}

	Article: Q152330
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 21-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you migrate user accounts from an MS Mail Postoffice (PO), if the user
	already has a mailbox in one recipient container in Microsoft Exchange and you
	specify a different recipient container in the Microsoft Exchange Migration
	Wizard, the following error will be reported in the Windows NT Event Log:
	
	  Event ID: 147
	  Source: MSExchangeMig
	  Type: Error
	  Description:
	  Could not log onto the Message Store for Account: <mailbox>
	
	where mailbox is the SFS user mailbox.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem has been corrected in Microsoft Exchange
	Server version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
