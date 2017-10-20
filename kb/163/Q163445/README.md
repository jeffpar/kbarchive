---
layout: page
title: "Q163445: XADM: NDR When Forwarding Message from Dec All-In-One"
permalink: /kb/163/Q163445/
---

## Q163445: XADM: NDR When Forwarding Message from Dec All-In-One

{% raw %}

	Article: Q163445
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Dec All-In-One user sends a message with a BP-15 attachment to a
	Microsoft Exchange Server user, and that user forwards it to HP Openmail, the
	Microsoft Exchange Server user gets a nondelivery report (NDR) claiming:
	"Content Type Not Supported."
	
	WORKAROUND
	==========
	
	To work around this problem, use BP-14 in the X.400 link options; that is,
	disallow the BP-15 option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	
	
	MORE INFORMATION
	================
	
	This problem does not occur when you only use BP-14 in the X.400 link options.
	Even with BP-15, the problem does not happen with messages that do not have an
	attachment.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
