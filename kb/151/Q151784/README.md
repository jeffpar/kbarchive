---
layout: page
title: "Q151784: XADM: Err Msg: Originator Does Not Have Permission"
permalink: /kb/151/Q151784/
---

## Q151784: XADM: Err Msg: Originator Does Not Have Permission

	Article: Q151784
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following non-delivery reports (NDR) may be received even if the
	sender is correctly listed in Delivery Restrictions-Accept From list:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject:test
	  Sent:5/16/97 1:01:20 PM
	
	  The following recipient(s) could not be reached:
	
	  Smith, Jane on 5/16/97 1:01:22 PM
	  A restriction in the system prevented delivery of the message.
	  MSEXCH:MSExchangeMTA:Delland200:ServerName
	
	-or-
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject:test
	  Sent:5/16/97 1:01:20 PM
	
	  The following recipient(s) could not be reached:
	
	  Smith, Jane on 5/16/97 1:01:22 PM
	  The originator does not have permission to submit message
	  MSEXCH:MSExchangeMTA:Delland200:ServerName
	
	CAUSE
	=====
	
	An incorrect column header is used when importing distribution lists (DLs) into
	the Microsoft Exchange Server Directory.
	
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Do not place a single mailbox in the Accept From DL property, which is
	  intended only for DLs. For a single mailbox, use the Accept From property
	  instead.
	
	MORE INFORMATION
	================
	
	Delivery restrictions to define who can send to a DL can be assigned by using
	two properties: Accept From and Accept From DL. These two properties can be
	specified as column headers in an import file. Both of these properties are
	multivalued (can hold more than one value, each value separated by %). Accept
	From is used for single mailboxes, while "Accept From DL" is used to specify
	DLs. If you place a single mailbox in the property intended for DLs, you will
	receive the error message above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
