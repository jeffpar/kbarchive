---
layout: page
title: "Q152921: XFOR: IMC May Cause WorldTalk SMTP/MIME Gateway to Stop"
permalink: /kb/152/Q152921/
---

## Q152921: XFOR: IMC May Cause WorldTalk SMTP/MIME Gateway to Stop

{% raw %}

	Article: Q152921
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The WorldTalk SMTP/MIME gateway stops responding.
	
	CAUSE
	=====
	
	Messages sent from the Microsoft Exchange Server Internet Mail Connector (IMC)
	may cause the Worldtalk SMTP/MIME Gateway to stop responding. The IMC in some
	cases generates a multipart message with a null content-type header.
	
	The WorldTalk SMTP/MIME Gateway can receive mail successfully if the header is
	not present at all, or if the header is as follows:
	
	  Content-Type: text/plain; charset="us-ascii"
	
	Note that the first bodypart in the message outbound from Microsoft Exchange does
	have the correct content-type.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	The WorldTalk gateway is manufactured by World Communications, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: IES
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
