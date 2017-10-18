---
layout: page
title: "Q185107: XFOR: Character Set Translation Issues with VAX Mail Systems"
permalink: kb/185/Q185107/
---

## Q185107: XFOR: Character Set Translation Issues with VAX Mail Systems

	Article: Q185107
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Internet Mail Service (Internet Mail Connector in version 4.0) as
	an SMTP gateway to connect to a VAX mail System, specifically a VAX system using
	Innosoft's PMDF as an SMTP gateway, do not specify character set by domain. Use
	the default, which is Western European (ISO-8859-1). If the Character Set
	translation is set by domain (accessed by the E-mail domain button on the
	Internet Mail tab), the inbound mail is processed into the Archive queue by the
	Internet Mail Service, because the character set is incorrect.
	
	Using the default Western European (ISO-8859-1) will result in '=20' being
	appended to various messages depending on the original format. Specifically
	messages including tabs, or replies and forwarded messages sent to the non- MIME
	VAX user agent.
	
	The PMDF supports MIME and is ISO 8859-1 compliant. However the VAX user agent
	(client) must also support MIME. Because the PMDF supports X.400, setting up
	Exchange Server to use an X.400 connector between the VAX mail system is the
	preferred method. Older versions of PMDF are not supported by Innosoft
	International, Inc., which means that an upgrade to a later version of PMDF is
	required before migrating to Microsoft Exchange Server.
	
	Contact Innosoft to verify whether the PMDF and VAX User agent versions used are
	still supported. Innosoft also provides a MIME- enabled client with the PMDF,
	but some companies do not implement it because of training issues.
	
	
	The only configuration that is supported by Innosoft, is using its X400 module
	with the Exchange Server X.400 Connector. Using the Internet Mail Service as an
	SMTP Gateway to the PMDF VAX Gateway is not recommended.
	
	PMDF is manufactured by Innosoft International, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: inosof inosoft x.400
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
