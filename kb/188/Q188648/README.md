---
layout: page
title: "Q188648: XADM: Enabling Security on a 5.5 Exchange Server or Site"
permalink: /kb/188/Q188648/
---

## Q188648: XADM: Enabling Security on a 5.5 Exchange Server or Site

	Article: Q188648
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The steps to enable Advanced Security on a site are different in Exchange Server
	version 5.5 than in version 5.0. This article explains how to enable Advanced
	Security on a site when you are running Exchange Server version 5.5.
	
	MORE INFORMATION
	================
	
	To set up Advanced Security in Exchange Server 5.0, setup needs to be run and
	Key Management Server pointed to the existing server or site running Key
	Management Server. In Exchange Server 5.5, the security objects are already
	installed and Key Management Server simply needs to be pointed to the existing
	server.
	
	To enable security in an Exchange Server 5.5 site, get properties on the Site
	Encryption Configuration object in the Configuration container of the site.
	Select "Choose Site.." next to the Primary KMS Server location field. Select the
	site that is running the main Key Management Server database.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
