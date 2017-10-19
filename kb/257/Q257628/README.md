---
layout: page
title: "Q257628: XFOR: Event 5017 When Starting GWise Router w/ Novell Client 4.7"
permalink: /kb/257/Q257628/
---

## Q257628: XFOR: Event 5017 When Starting GWise Router w/ Novell Client 4.7

	Article: Q257628
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	Microsoft provides third-party contact information to help you find technical support. This contact information may change without notice. Microsoft does not guarantee the accuracy of this third-party contact information.
	
	SYMPTOMS
	========
	
	If you use the Microsoft Exchange Connector for Novell GroupWise from Exchange
	Server 5.5 Service Pack 3 with the Novell Client 4.7 for Microsoft Windows NT,
	when the GroupWise router (Gwrouter) starts, you receive the following error
	message:
	
	  Event ID: 5017
	  An error occurred when logging on NetWare server, the system error code is
	  487, attempt to access invalid address
	
	CAUSE
	=====
	
	This problem occurs because of an authentication change in the Windows NT 4.7
	Client for Novell.
	
	This problem is documented by Novell in the "TID 10025609 - Authentication or
	printing issues after administering NDS from a Novell 3.2 or 4.7 client" article
	from the following Novell Web site:
	
	  http://support.novell.com/search/kb_index.htm
	
	WORKAROUND
	==========
	
	To work around this problem, upgrade to the latest Novell Client 4.71 from the
	following Novell Web site:
	
	  http://support.novell.com/
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q259264 Unsuccessful Logon Attempts and Problems Gaining Access to NDS
	  Resources
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : GroupWise
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
