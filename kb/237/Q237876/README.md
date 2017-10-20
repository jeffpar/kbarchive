---
layout: page
title: "Q237876: XADM: Cyrillic Characters in TNEF Not Converted Properly"
permalink: /kb/237/Q237876/
---

## Q237876: XADM: Cyrillic Characters in TNEF Not Converted Properly

{% raw %}

	Article: Q237876
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a message using the Cyrillic (KOI8-R) character set, and then
	send the message through a Microsoft Exchange Server computer that is configured
	to use transport-neutral encapsulation format (TNEF), the Cyrillic characters
	may not be displayed correctly when you view the message in an e-mail client.
	This applies to Cyrillic characters included in the Subject field, the message
	body, or attachment file names.
	
	CAUSE
	=====
	
	This problem occurs when the TNEF properties are encoded using the Internet code
	page instead of the Windows code page.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	Additional query words: cpid
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
