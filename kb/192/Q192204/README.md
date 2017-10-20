---
layout: page
title: "Q192204: XADM: Information Store Stops When Forwarding Internet Message"
permalink: /kb/192/Q192204/
---

## Q192204: XADM: Information Store Stops When Forwarding Internet Message

{% raw %}

	Article: Q192204
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create a rule that automatically forwards messages to an Internet
	recipient through the Internet Mail Service, and then you receive a message to
	which the rule applies, the information store may stop unexpectedly.
	
	
	CAUSE
	=====
	
	This problem occurs when memory is overwritten while the message is being
	converted to MDBEF.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: crash autoforward auto-forward ims internet mail connector imc
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
