---
layout: page
title: "Q172902: XWEB: Exchange Web Client Cannot Open Attached Mail Messages"
permalink: /kb/172/Q172902/
---

## Q172902: XWEB: Exchange Web Client Cannot Open Attached Mail Messages

	Article: Q172902
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5; winnt:5.5,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, versions 5.0, 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, versions 5.5, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Outlook Web Access client and attempt to open an
	attached mail message, you receive the following error message
	
	  The attachment is a type not yet supported
	
	and the attached message does not open. The Outlook Web Access client does not
	currently support opening attached mail messages that are in MSG file format.
	All attached messages will open correctly in the Exchange and Outlook clients.
	
	CAUSE
	=====
	
	The Outlook Web Access client does not currently support opening an attached
	mail message which is in the MSG file format.
	
	WORKAROUND
	==========
	
	You can use the Exchange Windows 3.x, Exchange Windows NT, or Exchange Windows
	95 clients and the Outlook Windows 95 or Outlook Windows NT clients to
	successfully open attached mail messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access,
	version 5.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: XCLN IIS http
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : WINDOWS:5.0,5.5; winnt:5.5,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
