---
layout: page
title: "Q258705: XADM: Site Addressing Generates Wrong SMTP Addr. for &quot;%g.%s.%m&quot;"
permalink: /kb/258/Q258705/
---

## Q258705: XADM: Site Addressing Generates Wrong SMTP Addr. for &quot;%g.%s.%m&quot;

	Article: Q258705
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Exchange Server 5.5 site addressing may generate incorrect Simple Mail Transfer
	Protocol (SMTP) addresses for "%g.%s.%m". If there are no given name (first
	name) and surname (last name) values entered, the SMTP address that results is
	"<alias>.<alias>", instead of "<alias>".
	
	
	CAUSE
	=====
	
	This issue can occur because when a user has no last name, the alias is copied
	to the last name field in the recipient information structure before the
	recipient information is passed to the proxy generator.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
