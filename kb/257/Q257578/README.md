---
layout: page
title: "Q257578: XCON: Internet Mail Doesn't Respond if Recipient Has No Address"
permalink: /kb/257/Q257578/
---

## Q257578: XCON: Internet Mail Doesn't Respond if Recipient Has No Address

{% raw %}

	Article: Q257578
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server Internet Mail Service may stop responding or "crash" after
	attempting to deliver a message to an Exchange Server custom recipient that was
	created by using Lightweight Directory Access Protocol (LDAP).
	
	CAUSE
	=====
	
	This issue can occur if one of the recipients in the message has a missing
	address type in its X.400 address. For example, the address is displayed as
	follows in the Exchange Administrator program:
	
	  G=firstname;S=surname;OU1=orgunit1;O=org;P=prmd;A=admd;C=us
	
	Using a custom-made program that uses LDAP to create the recipient created the
	preceding address. The address should look like the following address:
	
	  X400:c=us;a=admd;p=prmd;o=org;ou1=orgunit1;s=surname;g=firstname;
	
	The missing address type causes the issue with the Internet Mail Service.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue as an alternative to applying this fix, ensure that
	any recipients that are created outside of the Exchange Server Administrator
	program have correct address types in their proxy addresses.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
