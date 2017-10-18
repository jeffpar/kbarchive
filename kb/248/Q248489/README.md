---
layout: page
title: "Q248489: XADM: Insufficient Access Rights When Creating Site Connectors"
permalink: kb/248/Q248489/
---

## Q248489: XADM: Insufficient Access Rights When Creating Site Connectors

	Article: Q248489
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to Microsoft Exchange Server as Administrator to create a site
	connector between sites in different domains that are in a two-way trust, and
	then enter the name of the remote server as the target site in the New Site
	Connector dialog box, you may receive this message:
	
	  DS_E_INSUFFICIENT_ACCESS_RIGHTS
	
	CAUSE
	=====
	
	This issue can occur when the account that you are using does not have
	permissions to create site connectors.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Confirm that the Exchange Server service account is properly configured with
	  the appropriate Microsoft Windows NT permissions.
	
	2. Confirm that the service account has the Service Account Admin role at the
	  site level on both sites. The service account should have this role on the
	  Organization and Configuration containers as well.
	
	3. Log off the current account, log on as the local service account, and then
	  create the site connector.
	
	MORE INFORMATION
	================
	
	For additional informationExchange Server service account permissions, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q147701 XADM: Exchange Service Account Permissions
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
