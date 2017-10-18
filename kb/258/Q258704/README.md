---
layout: page
title: "Q258704: XIMS: SMTP Proxy Adds Trailing Period (.) for Template"
permalink: kb/258/Q258704/
---

## Q258704: XIMS: SMTP Proxy Adds Trailing Period (.) for Template

	Article: Q258704
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SMTP Proxy adds a trailing period (.) for the template that contains "%g.%m.%s".
	If the First Name field is blank and you have SMTP Proxy generator set for
	last.first@<companyname>.com, the trailing period after the last name
	remains in the SMTP address.
	
	For additional information about a similar problem that may occur in Microsoft
	Exchange Server version 5.5, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q287618 XIMS: SMTP Proxy Adds a Trailing Period (.) for the Template
	  Containing "%g.%m.%s"
	
	CAUSE
	=====
	
	Proxy generator for SMTP was not checking for a trailing period.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191914 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
