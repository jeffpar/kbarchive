---
layout: page
title: "Q313815: XCCC: You Are Unable to Delete E-mail Messages Using OWA"
permalink: /kb/313/Q313815/
---

## Q313815: XCCC: You Are Unable to Delete E-mail Messages Using OWA

	Article: Q313815
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Outlook Web Access (OWA) to access your mailbox, you may
	notice the following errors:
	
	- You may receive the following error message when you try to delete e-mail
	  messages:
	
	  "Unable to delete item."
	
	- You may receive either of the following error messages when you click the
	  Calendar folder:
	
	  "Unable to set default formats and patterns."
	
	  -or-
	
	  "Unable to Render This view 424Object Required."
	
	- You proceed to the Inbox when you click the Contacts folder.
	
	CAUSE
	=====
	
	This behavior can occur because the public folder server is not accessible.
	
	RESOLUTION
	==========
	
	To resolve this behavior, users must have access to public folders. To do so:
	
	1. Make sure that you can use the ping command to search for the public folder
	  server from the OWA server by the public folder server's Internet protocol
	  (IP), network basic input and output system (NetBIOS) and fully qualified
	  domain name (FQDN). You can add entries in the Lmhosts and Hosts files if it
	  is necessary.
	
	2. If NTLM is the authentication method on the OWA server, the public folder
	  server specified on the General tab of the properties of the private
	  information store must be the Exchange Server computer itself.
	
	  NOTE:To implement NTLM authentication for OWA, it is essential to have
	  Internet Information Service and Exchange Server 5.5 on the same computer.
	
	  For additional information, click the article number below to view the article
	  in the Microsoft Knowledge Base:
	
	  Q183545 XWEB: NTLM Authentication Fails Between Two Computers with OWA
	
	
	MORE INFORMATION
	================
	
	The public folder server is determined by the Public Folder box on the General
	property page for the Private Information Store container in the Exchange Server
	5.5 Admininstrator program. This is the server on which all of the top-level
	public folders that are created by users who have home mailboxes on this server
	are stored. The public folder server is also the server on which the users on
	this private information store view the public folder hierarchy.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q200373 XWEB: OWA Error: Unable to Set Default Formats and Patterns
	
	  Q125329 Deployment and Troubleshooting Outlook Web Access (OWA)
	
	  Q183545 XWEB: NTLM Authentication Fails Between Two Computers with OWA
	
	Additional query words: owa ntlm patterns formats 424Object unable delete
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
