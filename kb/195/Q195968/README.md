---
layout: page
title: "Q195968: XADM: Unable to Install Internet News Service"
permalink: kb/195/Q195968/
---

## Q195968: XADM: Unable to Install Internet News Service

	Article: Q195968
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Newsfeed Connector for the first time, the Setup Wizard may
	fail when you click Next after you try to select the Administrator account. The
	following error message is then displayed:
	
	  Client operation failed.
	  Microsoft Exchange Server Information Store
	  ID no: 80070057-0501-80070057
	
	If you click OK, you will return you to the wizard but will be unable to
	progress. Clicking Cancel will stop the Wizard and remove the Internet News
	Service.
	
	CAUSE
	=====
	
	The public information store has been removed from this Exchange Server
	computer.
	
	WORKAROUND
	==========
	
	To work around this problem and successfully install the Internet News Service,
	perform the following steps:
	
	1. Start the Microsoft Exchange Server Administrator program.
	
	2. On the File menu, click New Other, then click Information Store.
	
	3. Select Public in the Information Store type section of the New Information
	  Store dialog box, and then click OK.
	
	Additional query words: NNTP, Newsfeed, newsgroups
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
