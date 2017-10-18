---
layout: page
title: "Q234388: XFOR: Novell Gateway Doesn't Deliver Msg. w/Zero-Byte Attachment"
permalink: kb/234/Q234388/
---

## Q234388: XFOR: Novell Gateway Doesn't Deliver Msg. w/Zero-Byte Attachment

	Article: Q234388
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message with a zero-byte attachment from Novell GroupWise to an
	Exchange Server user, the message is not delivered and a non-delivery report
	(NDR) is not generated.
	
	CAUSE
	=====
	
	The Novell GroupWise API Gateway does not process messages that contain a
	zero-byte attachment. The API Gateway reports "Error processing message
	attachments," and orphans the message body in the Att_out folder.
	
	MORE INFORMATION
	================
	
	For additional information on this issue, refer to Novell's Web site at:
	
	  http://support.novell.com
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
