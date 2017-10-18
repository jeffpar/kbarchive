---
layout: page
title: "Q188778: XADM: Replying To or Forwarding Resent Message Causes NDR"
permalink: kb/188/Q188778/
---

## Q188778: XADM: Replying To or Forwarding Resent Message Causes NDR

	Article: Q188778
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send a message that causes a non-delivery report (NDR) to be sent, and
	then you successfully resend the message to a recipient that is located in the
	same Microsoft Exchange Server site as you, the recipient may receive an NDR if
	they reply to or forward the message. However, if the recipient attempts to
	resend the message, it is sent successfully.
	
	CAUSE
	=====
	
	When you resend a message after receiving an NDR, the recipients that caused the
	NDR to be sent are assigned a type of MAPI_P1. This recipient type is only valid
	for messages that are resent after an NDR is received. If the message is resent
	to a local recipient, and then the recipient replies to or forwards the message,
	some of the recipients may still be assigned a type of MAPI_P1. Because this
	recipient type is only valid for resent messages, this causes the recipient to
	receive an NDR.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
