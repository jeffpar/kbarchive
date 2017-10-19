---
layout: page
title: "Q152230: XFOR: Current Microsoft Internet Mail Products"
permalink: /kb/152/Q152230/
---

## Q152230: XFOR: Current Microsoft Internet Mail Products

	Article: Q152230
	Product(s): Microsoft Exchange
	Version(s): 3.0,4.0,95
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Mail Gateway to SMTP, version 3.0 
	- the operating system: Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are currently four products available from Microsoft that use the SMTP
	protocol to access Internet mail. This article outlines how these products
	differ and what support options are available to customers.
	
	The four products are:
	
	- Microsoft Exchange Internet Mail Connector
	
	- Microsoft Mail Gateway to SMTP Version 3.0
	
	- Windows Messaging (Formally Microsoft Internet Mail Service for Windows 95
	  Exchange)
	
	- Microsoft Internet Mail 1.0
	
	MORE INFORMATION
	================
	
	The four different Internet mail products enable users to access SMTP mail and
	fit into two basic types of products. The first type of product are Enterprise
	connectors which enable workgroups or entire operations to access Internet mail
	without direct connectivity to the Internet and connectors that attach to
	enterprise e-mail systems and retrieve SMTP mail for an entire domain. The
	second type of Internet mail product enables a user to directly send Internet
	mail using the SMTP protocol and to retrieve e-mail using the POP3 protocol.
	POP3 is Post Office Protocol version 3 and is used for clients that are not
	permanently connected to the Internet and are not part of an enterprise
	messaging system.
	
	Enterprise Connectors
	---------------------
	
	Microsoft Exchange Internet Mail Connector (IMC) Part #: 67743.
	
	Included with Microsoft Exchange Server Enterprise Edition. Part #:67742 Protocol
	Support: SMTP, MIME, UUENCODE, DNS Supported by: Microsoft Information Exchange
	Support
	
	The Internet Mail Connector (IMC) is the Internet mail component for Microsoft
	Exchange Server. Microsoft Exchange is a world class enterprise messaging
	system. The IMC is a robust connector that can directly connect to the Internet
	to retrieve and send SMTP mail. The IMC can also use another SMTP host on the
	Internet to deliver and receive Internet mail. This allows the intermediate SMTP
	server to act as a proxy on behalf of the IMC. This robust connector can
	facilitate simultaneous outgoing and incoming SMTP mail transfers and can be
	configured to support MIME and UUENCODE file attachments and supports rich text
	formatting.
	
	This product fully integrates with Microsoft Exchange Server as a Windows NT
	service. This gives the messaging service administrator the ability to configure
	SMTP mail options for the entire enterprise.
	
	MICROSOFT MAIL GATEWAY TO SMTP VERSION 3.0 Part #: 56770.
	---------------------------------------------------------
	
	Protocol Support: SMTP, UUENCODE Supported by: Microsoft Information Exchange
	Support
	
	The Microsoft Mail Gateway is the Internet mail component for Microsoft Mail.
	Microsoft Mail is the legacy shared file system (SFS) enterprise messaging
	system. The gateway enables users of Microsoft Mail to send and receive SMTP
	mail. The gateway must use another SMTP host (smarthost) on the Internet to
	deliver Internet mail. The SMTP gateway is an MS-DOS program that runs on a
	dedicated PC. It can handle one connection at a time. Because of this
	limitation, it is recommended that the SMTP smarthost also receive mail on
	behalf of the gateway by implementing an MX record on the smarthost DNS server.
	This directs other SMTP hosts on the Internet to deliver mail bound for the
	gateway to the smarthost for more robust performance.
	
	This product does not support the MIME protocol for file attachments and does not
	implement DNS.
	
	POP3 CLIENTS
	------------
	
	WINDOWS MESSAGING (Formally Microsoft Internet Mail Service for Windows 95
	Exchange)
	
	Included with Microsoft Plus! for Windows 95, Microsoft Internet Explorer, and on
	the Microsoft World Wide Web server (http://www.microsoft.com/windows/software.)
	Protocol Support: SMTP, POP3, MIME, UUENCODE, DNS Supported by: Microsoft Answer
	Point Desktop Support
	
	Windows Messaging is the electronic mail client that is included with Windows 95.
	The client was originally called Microsoft Exchange for Windows 95 but this has
	caused confusion with the Microsoft Exchange Server products.
	
	Windows Messaging is a client that can be extended with services that integrate
	with the product. Multiple services can be added to allow connectivity to
	different mail systems, including the Internet. The service for SMTP mail is
	Microsoft Internet Mail Service for Windows 95. Once installed, the client must
	directly connect to the Internet and connect to a POP3 server to retrieve mail.
	
	Windows Messaging must have access to an SMTP server to send mail and a POP3
	server to retrieve mail. The POP3 service is usually provided and supported by
	the Internet Service Provider (ISP) that also provides dial-up Internet access.
	
	MICROSOFT INTERNET MAIL 1.0 *BETA PRODUCT*
	------------------------------------------
	
	Available on the Microsoft World Wide Web server
	(http://www.microsoft.com/ie/imn/). Protocol Support: SMTP, POP3, MIME,
	UUENCODE, DNS Supported by: No formal Microsoft support while in beta. Peer to
	peer on Microsoft's NNTP server:
	
	  news://msnews.microsoft.com/microsoft.public.internet.mail
	  news://msnews.microsoft.com/microsoft.public.internet.news
	
	Microsoft Internet Mail is the newest electronic mail client for Windows NT 4.0
	and Windows 95. This client only supports SMTP/POP3 and does not work with other
	mail systems. It cannot be extended by adding services like the Windows
	Messaging client. This client is easy to set up, has a preview pane, and has an
	address book. This client is primarily designed to be quick and easy to use
	without having as many features as the Windows Messaging client.
	
	Microsoft Internet Mail must have access to an SMTP server to send mail and a
	POP3 server to retrieve mail. The POP3 service is usually provided and supported
	by the Internet Service Provider (ISP) that also provides dial-up Internet
	access.
	
	THIS PRODUCT IS CURRENTLY IN BETA. Support is limited to the NNTP newsgroups
	listed above.
	
	Additional query words: isp pcmail smtp gatway
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbWin95search kbExchangeSearch kbExchange400 kbGamesSearch kbZNotKeyword2 kbMailSearch kbPlusSearch kbMailGateSearch kbWordPad95 kbWin95
	Version           : :3.0,4.0,95
	
	=============================================================================
	
