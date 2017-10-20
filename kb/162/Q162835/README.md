---
layout: page
title: "Q162835: XADM: SMTP Address is Stripped from Auto-forwarded Message"
permalink: /kb/162/Q162835/
---

## Q162835: XADM: SMTP Address is Stripped from Auto-forwarded Message

{% raw %}

	Article: Q162835
	Product(s): Microsoft Exchange
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message is received via the Internet Mail Service and is auto- forwarded
	by an Inbox Assistant rule, the SMTP address of the original sender is not
	included in the body of the forwarded message.
	
	WORKAROUND
	==========
	
	If you manually forwarded a message received via the Internet Mail Service, the
	SMTP address of the original sender is included in the body of the forwarded
	message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 4.0.
	This problem was corrected in Microsoft Exchange Server 5.0.
	
	Additional query words: inbox assistant forward smtp address
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbExchange400SP1 kbExchange400SP2 kbExchange400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
