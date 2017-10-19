---
layout: page
title: "Q176184: XFOR: Message Format Differs Between POP and MAPI Clients"
permalink: /kb/176/Q176184/
---

## Q176184: XFOR: Message Format Differs Between POP and MAPI Clients

	Article: Q176184
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a MAPI client receives messages from the Internet, Internet Mail (also
	known as IMAIL) converts the original Internet message to a MAPI message
	properly; and the message would be delivered to the user's inbox. However, if
	the user tried to read the message through a POP client, the message that the
	user sees on a POP client may not look the same as it looks in a MAPI compliant
	client. This problem is evident when POP Client views MIME messages with
	multipart/alternative bodypart inside a multipart/related.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Internet Mail attempts its best to preserve the original Internet message format
	when converting a MAPI message (which had originally come in from Internet) to
	Internet format. If this preservation is complete, the "full fidelity" was being
	preserved. The described problem indicates that the full fidelity preservation
	has failed for MIME messages with multipart/alternative bodypart inside a
	multipart/related. This is causing the message viewed in a POP client to be
	different than the original Internet message.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
