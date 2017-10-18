---
layout: page
title: "Q152471: XFOR: Difference Between SMTP:&#42; and SMTP: Address Space"
permalink: kb/152/Q152471/
---

## Q152471: XFOR: Difference Between SMTP:&#42; and SMTP: Address Space

	Article: Q152471
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to configure the Address Space in an Internet Mail Connector
	(IMC), or Internet Mail Service in Exchange Server 5.0 or higher, with a
	specific domain the IMC will accept messages for, an asterisk (*), or blank
	space (entered with a single space bar entry). This article discusses the
	differences between the asterik and blank space entries.
	
	When you use the Microsoft Exchange Internet Mail Connector (IMC) and you have
	two routes (address spaces), one with SMTP: and one with SMTP:*, mail will move
	on the SMTP:* route even if the cost for this route is higher than the SMTP:
	route.
	
	Routing returns four values in order of "best fit" as follows:
	
	- Exact match
	
	- Wildcard match
	
	- Partial substring match
	
	- No match
	
	SMTP:* is considered a wildcard match and SMTP: is considered a partial substring
	match.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
