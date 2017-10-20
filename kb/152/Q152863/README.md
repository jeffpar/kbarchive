---
layout: page
title: "Q152863: XFOR: IMC Generates Empty Body on S/MIME Messages"
permalink: /kb/152/Q152863/
---

## Q152863: XFOR: IMC Generates Empty Body on S/MIME Messages

{% raw %}

	Article: Q152863
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an outbound Internet Mail Connector (IMC) message contains an attachment and
	MIME encoding has been selected, the IMC will generate a multipart/mixed MIME
	message. This will occur even if the original message contains only an
	attachment and an empty text or plain body.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
