---
layout: page
title: "Q168771: XFOR: Read Receipt From MSMail Does Not Contain Subject Line"
permalink: /kb/168/Q168771/
---

## Q168771: XFOR: Read Receipt From MSMail Does Not Contain Subject Line

{% raw %}

	Article: Q168771
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message is sent to a Microsoft Mail user from a cc:Mail user, the read
	receipt does not contain the subject from the original message.
	
	Instead, the text in the body of the read receipt is the following:
	
	  Registered: <name of person who read the message>.
	
	The text in the body of the read receipt should be:
	
	  Read: <subject line from original message>.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	This problem was corrected in the latest Microsoft Exchange Server 5.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
