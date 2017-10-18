---
layout: page
title: "Q87022: SMTP: Definition of SMTP"
permalink: kb/087/Q87022/
---

## Q87022: SMTP: Definition of SMTP

	Article: Q87022
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Simple Mail Transfer Protocol (SMTP) is designed for reliable and efficient mail
	transfer. It is widely used in government and education facilities and is also
	the standard used by the Internet for mail transfer.
	
	The Simple Mail Transfer Protocol would be an "application layer" protocol when
	slotted into the OSI model. It is an open protocol because the only assumption
	it makes of the transport mechanism below it is that it will provide a reliable
	service.
	
	In most cases, SMTP is used in conjunction with the Transmission Control Protocol
	(TCP) service, which provides the reliable transport layer (Service). Other
	transport mechanisms that are mentioned as supported in the specification are
	the Network Control Program (NCP) service, the Network Independent Transport
	Service (NITS), and the X.25 service.
	
	Requests for comment (RFCs) provide specifications for the protocol:
	
	- RFC-821 specifies the exchange protocol and is the basis for SMTP.
	
	- RFC-822 specifies the message format.
	
	The internet mail service is based on these RFCs.
	
	REFERENCES
	==========
	
	RFC 821 for SMTP
	
	RFC-822 for the message format
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	Transmission Control Protocol/Internet Protocol
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
