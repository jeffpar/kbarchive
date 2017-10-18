---
layout: page
title: "Q196793: XIMS: Restricting Internet E-Mail to Specific Domains via IMS"
permalink: kb/196/Q196793/
---

## Q196793: XIMS: Restricting Internet E-Mail to Specific Domains via IMS

	Article: Q196793
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article quickly explains how to restrict Internet mail to specific Internet
	e-mail domains. It is geared towards Exchange Server organizations that do not
	permit users to send and receive Internet mail, but must communicate over the
	Internet Mail Service to other Exchange Server organizations or sites.
	
	To restrict sending Internet mail to specific domain, perform the following
	steps:
	
	1. In the Exchange Server Administrator program connections, double-click on the
	  Internet Mail Service to open the property pages.
	
	2. Select the Address Space tab, which specifies which domains the Internet Mail
	  Service is allowed to send mail to.
	
	3. If the Internet Mail Service is currently configured to send to all Internet
	  mail domains, you will see "SMTP * 1" in the Address Space. Select the entry,
	  click Edit, and the SMTP properties will appear.
	
	4. In the E-Mail Domain field, edit the entry to specify a specific domain. For
	  example, specifying "*@microsoft.com," allows the users to send Internet mail
	  only to the microsoft.com domain.
	
	5. Click OK to add the allowed domain.
	
	6. To allow the users to send e-mail to more than one domain, click New, specify
	  the Type (SMTP in all cases regarding the Internet Mail Service), and type
	  the address of the second allowed domain.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
