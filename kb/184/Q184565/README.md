---
layout: page
title: "Q184565: XADM: Korean Outlook 8.5 MIME Messages Encoded Improperly"
permalink: /kb/184/Q184565/
---

## Q184565: XADM: Korean Outlook 8.5 MIME Messages Encoded Improperly

{% raw %}

	Article: Q184565
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages sent from Korean Outlook version 8.5 clients while connected to
	Microsoft Exchange Server versions 5.0, 5.0 SP1, 5.0 SP2, or 5.5 may be
	unreadable by Internet recipients, due to character set encoding issues.
	
	CAUSE
	=====
	
	This problem occurs when a MIME message is sent to an Internet address from a
	Korean Outlook 8.5 client. The Microsoft Exchange Server computer fails to
	encode the message properly so that it can be interpreted correctly by the
	recipient.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	
	Additional query words: Outlook 98
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
