---
layout: page
title: "Q195215: XFOR: Outbound SMTP with 8-Bit Data in the Message Body"
permalink: kb/195/Q195215/
---

## Q195215: XFOR: Outbound SMTP with 8-Bit Data in the Message Body

	Article: Q195215
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Outbound SMTP messages from the Internet Mail Service may contain 8-bit data in
	the message body, even though the Internet Mail Service is configured to use
	UUENCODE and the US-ASCII character set.
	
	CAUSE
	=====
	
	The 8-bit data should be mapped to the 7-bit equivalents. Outlook 98 introduces
	a property that incorrectly signals the Internet Mail Service to use the
	ISO8859-1 character set, instead of US-ASCII.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Store
	
	  File Name      Version
	  -------------------------
	  Store.exe    5.5.2438.0
	  Mdbmsg.dll   5.5.2438.0
	  Gapi32.dll   5.5.2438.0
	
	  Store.exe    5.0.1461.75
	  Mdbmsg.dll   5.0.1461.75
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5.
	
	MORE INFORMATION
	================
	
	The Internet Mail Service will encode outbound mail according to the following
	criterion:
	
	- If the Internet Mail Service is configured as MIME, the Internet Mail Service
	  encodes the 8-bit data in either base64 or quoted printable.
	
	- If the Internet Mail Service is configured to send UUENCODE and the outbound
	  character set specified is US-ASCII, then the Internet Mail Service will take
	  the 8-bit data and match it to the closest 7-bit equivalent.
	
	- If the Internet Mail Service is configured to send UUENCODE with the outbound
	  character set specified as ISO-8859-1, then the 8-bit data should be left in
	  the body of the message.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
