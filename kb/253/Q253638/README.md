---
layout: page
title: "Q253638: XADM: Mailbox Manager Does Not Install, (80004005)"
permalink: /kb/253/Q253638/
---

## Q253638: XADM: Mailbox Manager Does Not Install, (80004005)

	Article: Q253638
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 05-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Microsoft Exchange Server Mailbox Manager, you may receive the
	following error message:
	
	  Unable to Install Mailbox Agent,(80004005)
	
	The following event ID may be logged in the application event log:
	
	  Event ID:2037
	  Source: MSExchangeSA
	  Category: General
	  Type: Error
	  Description: The File Version of "\address\GWISE\i386\gwxpxgen.dll" on the
	  local server is not current. Unable to Locate a correct version on any server
	  in the site.
	
	CAUSE
	=====
	
	The proxy address generator may not properly generate a GroupWise address for
	the mailbox agent.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps to install Mailbox
	Manager:
	
	1. Start the Exchange Server Administrator program.
	
	2. Click to expand the Site object, click Configuration, click Site Addressing,
	  and then click Properties.
	
	3. Click the Site Addressing tab.
	
	4. Click to clear the "GroupWise e-mail address" check box, and then click
	  Apply.
	
	5. IMPORTANT STEP: When you are prompted to "Remove this address from all
	  existing recipients," click No.
	
	6. Run Setup for Mailbox Manager.
	
	7. Click to expand the Site object, click Configuration, click Site Addressing,
	  and then click Properties.
	
	8. Click to select the "GroupWise e-mail address" check box, and then click
	  Apply.
	
	9. IMPORTANT STEP: When you are prompted to "Add this address to all existing
	  recipients," click No.
	
	Additional query words: MBClean Mailbox Agent Addins
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
