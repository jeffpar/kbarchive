---
layout: page
title: "Q266260: XADM: Rules That Use an SMTP Address Do Not Run"
permalink: /kb/266/Q266260/
---

## Q266260: XADM: Rules That Use an SMTP Address Do Not Run

{% raw %}

	Article: Q266260
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you specify the Simple Mail Transfer Protocol (SMTP) address in the To box
	of a message, rules may not run after you install anti-virus software that uses
	the virus application programming interface (API).
	
	The To box no longer displays the SMTP address of the recipient but it resolves
	to the display name of the mailbox. In the open message, if you right-click the
	recipient in the To box, and then click Properties, you receive the properties
	for the Exchange Server mailbox; if the header does not resolve to the display
	name, you receive the SMTP properties.
	
	CAUSE
	=====
	
	The following registry key is enabled when you install an API virus solution:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIMC\Parameters\ReRouteViaStore
	
	When this registry key is enabled, all messages must pass through the information
	store and resolve the P2 header to the display name in the folder. When the P2
	header is resolved, the rule is no longer triggered.
	
	WORKAROUND
	==========
	
	Contact the anti-virus software vendor for information about how to disable this
	registry key and for information about the effect of disabling this registry
	key.
	
	You can create or modify rules to run when the rules are addressed to the
	Exchange Server mailbox display name instead of an SMTP address.
	
	MORE INFORMATION
	================
	
	For additional information about this problem, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q238471 XIMS: How to Force SMTP Messages Through the Information Store
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
