---
layout: page
title: "Q182232: XFOR: SMTP Messages with TNEF May Lose Formatting and Attachment"
permalink: /kb/182/Q182232/
---

## Q182232: XFOR: SMTP Messages with TNEF May Lose Formatting and Attachment

	Article: Q182232
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive SMTP messages with TNEF via the Internet Mail Service, message
	formatting and attachments may be lost.
	
	CAUSE
	=====
	
	This problem only occurs when the X-MS-TNEF-CORRELATOR section of the SMTP
	message header is wrapped onto a second line. The following an example from a
	message:
	
	  X-MS-TNEF-Correlator: <5913080CA46DD111A98200A0C9960C101E3C@test.com>
	
	If the above line is wrapped according to RFC 822 section 3.1.1, it would appear
	as follows:
	
	  X-MS-TNEF-Correlator:(CRLF)
	  (Space)<5913080CA46DD111A98200A0C9960C101E3C@test.com>
	
	When the TNEF Correlator is wrapped in the above manner, the IMAIL process in the
	Microsoft Exchange information store does not interpret the header correctly,
	and consequently it ignores the TNEF section of the message. Because message
	formatting, rich-text definitions, and attachments can be placed in the TNEF,
	they could also be lost.
	
	WORKAROUND
	==========
	
	To work around this problem, the originator of the message needs to turn off
	rich text formatting.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: XADM
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
