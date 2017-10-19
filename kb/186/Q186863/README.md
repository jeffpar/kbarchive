---
layout: page
title: "Q186863: XWEB: Unable to Change Password Using OWA"
permalink: /kb/186/Q186863/
---

## Q186863: XWEB: Unable to Change Password Using OWA

	Article: Q186863
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5; winnt:4.5,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 SP3 
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to change your domain password from the Outlook Web Access
	Client, the following error may occur:
	
	  Internet Explorer cannot open the Internet site
	  http://<server>/iisadmpwd/aexp2b.htr.
	  A connection with the server could not be established
	
	CAUSE
	=====
	
	Changing passwords with OWA requires that Secure Sockets Layer (SSL) be
	installed.
	
	MORE INFORMATION
	================
	
	For additional information about installing SSL, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q218445 How to Configure Certificate Server for Use with SSL on IIS
	
	  Q234022 XCLN: Configuring Exchange OWA to use SSL
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbOutlookSearch kbAudDeveloper kbExchangeSearch kbZNotKeyword2 kbOWASearch kbSBServSearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbSBServ450 kbExchange550SP3
	Version           : WINDOWS:5.5; winnt:4.5,5.5 SP3
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
