---
layout: page
title: "Q157705: XFOR: IMC Can't Handle MIME w/ Content Type of Multipart/Digest"
permalink: /kb/157/Q157705/
---

## Q157705: XFOR: IMC Can't Handle MIME w/ Content Type of Multipart/Digest

	Article: Q157705
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Internet Mail Connector (IMC) receives an incoming message that contains
	MIME bodyparts with content type = multipart/digest, the message remains stuck
	in the Imcdata\In directory and never reaches the destined recipient.
	
	The IMC reports the Event ID 4037 (Internal Processing Error). The message
	remains stuck and can be seen (but not deleted) in the IMC queue ( for inbound
	messages awaiting conversion) of the Microsoft Exchange Server Administrator
	program. The file has to be removed by manually deleting it with File Manager or
	Windows Explorer (only after the service has been stopped).
	
	CAUSE
	=====
	
	One of the digest messages is a different code page. When this happens, the IMC
	needs to re-create the embedded message in code page 932. If code page 932 is
	not installed on the Microsoft Exchange server, it will fail. When this happens,
	two released pointers are not made NULL and they are freed again.
	
	WORKAROUND
	==========
	
	There only workaround is for an administrator to find the message in the
	Imcdata\In directory and pass this message on to the intended recipient.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange Server U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
