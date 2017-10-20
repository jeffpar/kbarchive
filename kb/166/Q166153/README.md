---
layout: page
title: "Q166153: XFOR: PCMTA May Create &#42;.MAX, &#42;.PX or &#42;.ATX Files"
permalink: /kb/166/Q166153/
---

## Q166153: XFOR: PCMTA May Create &#42;.MAX, &#42;.PX or &#42;.ATX Files

{% raw %}

	Article: Q166153
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	You may find files throughout your Microsoft Mail postoffice databases, serviced
	by the Microsoft Exchange MS Mail Connector (PC) MTA (PCMTA), which have the
	MAX, PX, or ATX extensions.
	
	CAUSE
	=====
	
	
	These files were intended for debugging purposes only. The files are copies of
	the original MAI, P1, or ATT file respectively and do not indicate that mail has
	been lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
