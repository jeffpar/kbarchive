---
layout: page
title: "Q146032: XCON: MTA: Invalid Originator Address When Sending to X.400"
permalink: /kb/146/Q146032/
---

## Q146032: XCON: MTA: Invalid Originator Address When Sending to X.400

{% raw %}

	Article: Q146032
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message from Microsoft Mail through Microsoft Exchange Server
	5.0 to someone on an X.400 messaging system, a reply to this message may not be
	possible. This occurs if you (the Microsoft Mail user) are not a Custom
	Recipient on Microsoft Exchange Server, which can happen if, for example,
	directory synchronization is not yet finished.
	
	CAUSE
	=====
	
	The message will arrive at the remote X.400 system with an invalid X.400
	originator address in the P1 header fields. The X.400 address will only contain
	a DDA Type and a DDA Value, which contains the Microsoft Mail Address. For
	example:
	
	  DDA Type=MS;DDA Value=Net/PO/User
	
	This address is invalid because mandatory parts are missing. A valid address
	would look like this:
	
	  C=Country;A=Admin;P=Private;O=Org;DDA Type=MS;DDA Value=Net/PO/User
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange 5.0
	Server U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
