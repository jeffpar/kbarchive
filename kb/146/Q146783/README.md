---
layout: page
title: "Q146783: XFOR: IMC Resolves Domain Names using MX Record Lookup"
permalink: /kb/146/Q146783/
---

## Q146783: XFOR: IMC Resolves Domain Names using MX Record Lookup

	Article: Q146783
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Internet Mail Connector (IMC) resolves domain names for
	delivery using an MX record lookup (including the domain search list).
	
	MORE INFORMATION
	================
	
	To be consistent with how Sendmail works and consistent with how Sendmail
	administrators configure their DNS servers, the IMC should do a CNAME record
	lookup (using the domain search list) to canonicalize the domain name and then
	search the MX record space with the canonicalized name (without using the domain
	search list).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: CNAME IMC RESOLVER DNS Internet
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
