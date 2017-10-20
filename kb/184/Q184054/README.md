---
layout: page
title: "Q184054: XCON: NDR on Message from cc:Mail PO with Friendly Name"
permalink: /kb/184/Q184054/
---

## Q184054: XCON: NDR on Message from cc:Mail PO with Friendly Name

{% raw %}

	Article: Q184054
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Lotus cc:Mail user tries to send an Internet message via Microsoft
	Exchange Connector for Lotus cc:Mail by using the following syntax in the To:
	field:
	
	           "User" <user@subdom.domain>
	           User <user@subdom.domain>
	           First Last <user@subdom.domain>
	           First (comment) <user@subdom.domain>
	
	the Internet Mail Service will send a non-delivery report (NDR) on the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server versions 5.0 and
	5.5.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : 5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
