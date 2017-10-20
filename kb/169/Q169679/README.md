---
layout: page
title: "Q169679: XADM: Messages Sent with MIME/JIS Encoding May Not Be Readable"
permalink: /kb/169/Q169679/
---

## Q169679: XADM: Messages Sent with MIME/JIS Encoding May Not Be Readable

{% raw %}

	Article: Q169679
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When your Microsoft Exchange Server is configured to use MIME/JIS (Japanese
	Industry Standards, code set for Japanese character), some messages that you
	send to Simple Mail Transfer Protocol (SMTP) users may not be readable.
	
	CAUSE
	=====
	
	With Microsoft Exchange Server set up to use a MIME/JIS configuration, messages
	are expected to be encoded with 7-bit data. However, if an invalid character is
	included in the message, the message will be encoded Quoted- Printable. Some
	mail readers do not support Quoted-Printable, and if they receive messages
	encoded in Quoted-Printable, the messages will not be readable.
	
	Some applications generate the character 0x9520, which is an invalid CP932
	character. If you copy this character, paste it into a Microsoft Exchange
	message, and send it to an SMTP user, this problem will occur.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: DBCS Dot
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
