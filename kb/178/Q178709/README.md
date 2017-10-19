---
layout: page
title: "Q178709: XFOR: Internet Mail Service Is Not Properly Encoding Messages"
permalink: /kb/178/Q178709/
---

## Q178709: XFOR: Internet Mail Service Is Not Properly Encoding Messages

	Article: Q178709
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Simple Mail Transfer Protocol (SMTP) messages are not being encoded properly
	when senders send messages to recipients using Rich Text Format. The messages
	are being delivered in Raw Text.
	
	CAUSE
	=====
	
	The code that scans for 8-bit characters in the Subject string has a logic error
	such that if the only 8-bit character in the string is the last character, the
	code does not detect it as such. When "UseRTFText" is true, the stream passed to
	rcScan() to scan for 8-bit characters is the incorrect stream.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Many content types are natively formatted as 8-bit character or binary data.
	Data formatted in this way cannot be sent using SMTP, RFC-821, as the transport
	protocol. As mentioned earlier, RFC-821 limits messages to 7-bit US-ASCII with
	lines no longer than 1,000 characters. So, a method for encoding such data as
	7-bit US-ASCII is needed. The encoding formats do not describe the data itself,
	but only the encoding used to transport the data.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
