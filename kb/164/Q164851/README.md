---
layout: page
title: "Q164851: XFOR: Embedded Message Wrapping Incorrect with DEC All-In-One"
permalink: /kb/164/Q164851/
---

## Q164851: XFOR: Embedded Message Wrapping Incorrect with DEC All-In-One

{% raw %}

	Article: Q164851
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Problems may occur when you send mail that includes an embedded message to
	foreign X.400 MTAs (such as Dec All-In-One) from Microsoft Exchange Server
	across a 1984 type X.400 connector. The text of the embedded message wraps
	incorrectly (that is, it does not wrap at all). In some circumstances, the text
	from the embedded message is unreadable.
	
	CAUSE
	=====
	
	This problem occurs when you send to the foreign system by means of a hub
	Microsoft Exchange Server that is running MTA version 995.24. The messages are
	received by the foreign system; however, text cannot be read in the embedded
	messages. Rather than being wrapped correctly, the entire text is placed onto
	one line.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
