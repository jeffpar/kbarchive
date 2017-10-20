---
layout: page
title: "Q234588: XFOR: GW Mailbox Gateway Alias Does Not Transfer to Exchange"
permalink: /kb/234/Q234588/
---

## Q234588: XFOR: GW Mailbox Gateway Alias Does Not Transfer to Exchange

{% raw %}

	Article: Q234588
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you configure the Microsoft Exchange Connector for Novell GroupWise and
	successfully complete directory synchronization between Exchange Server and
	GroupWise, some GroupWise custom recipients fail to inherit their original
	gateway alias as their SMTP proxy address.
	
	The expected behavior is for Exchange Server to use the GroupWise user's gateway
	alias as the SMTP proxy address if one is defined specifically for that user.
	Exchange Server should only generate an SMTP proxy address for a GroupWise
	mailbox if there is no gateway alias defined for that mailbox.
	
	CAUSE
	=====
	
	The Gateway Alias Type field in the Microsoft Exchange Connector for Novell
	GroupWise is incorrect.
	
	RESOLUTION
	==========
	
	1. In the Exchange Server Administrator program, click the Options tab of the
	  Microsoft Exchange Connector for Novell GroupWise container. Change the
	  Gateway Alias Type field to SMTP.
	
	2. In the GroupWise NetWare Administrator program, in the API Gateway container,
	  change the Gateway Alias Type to SMTP.
	
	3. Restart the GroupWise API gateway and the GroupWise ADA. Restart the
	  Microsoft Exchange Connector for GroupWise and the Microsoft Exchange Router
	  for GroupWise services.
	
	4. After the next directory synchronization, the Exchange Server SMTP proxy
	  address should be equal to the gateway alias for that GroupWise mailbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
