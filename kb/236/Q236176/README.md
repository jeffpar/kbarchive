---
layout: page
title: "Q236176: XFOR: Event ID 12010: Failed to Initialize the Notes Migration S"
permalink: kb/236/Q236176/
---

## Q236176: XFOR: Event ID 12010: Failed to Initialize the Notes Migration S

	Article: Q236176
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp1 exc55sp2
	Last Modified: 22-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Server Migration wizard for Lotus Notes, no
	mailboxes are migrated and the following event is logged in the application
	event log of the Windows NT Event Viewer:
	
	  Event ID: 12010
	  Source: MSExchangeMig
	  Type: Error
	  Description: Failed to initialize the Notes Migration session. Make sure
	  'ntsmig.ini' is in the 'exchsrvr\bin' directory.
	
	CAUSE
	=====
	
	Adding the Lotus Notes service to Microsoft Outlook may cause this problem.
	
	RESOLUTION
	==========
	
	Reapply the service pack that is currently applied for Microsoft Exchange Server
	version 5.5, either Service Pack 1 or Service Pack 2.
	
	MORE INFORMATION
	================
	
	After you apply either Service Pack 1 or Service Pack 2 for Microsoft Exchange
	Server, the Outlook profile that connects to Lotus Notes no longer works.
	
	For additional information about Outlook and Lotus Notes, please click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q180314 OL98: (CW) Outlook Does Not Work with Lotus Notes Mail
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 exc55sp2 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5 SP1,5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
