---
layout: page
title: "Q183104: XCON: Interop Issue with Lowercase PAB Address, Softswitch LMS"
permalink: /kb/183/Q183104/
---

## Q183104: XCON: Interop Issue with Lowercase PAB Address, Softswitch LMS

	Article: Q183104
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc55sp2fix
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When connecting Microsoft Exchange Server to Softswitch LMS through a Microsoft
	Mail Connector, you may experience the following problem:
	
	If an Exchange user sends a message to two Microsoft Mail addresses in lowercase
	characters created in his or her personal address book, this can cause the
	Softswitch LMS server to fail to deliver the message to one of the recipients.
	
	This occurs when both the To: and Cc: fields are filled. The recipient in the To:
	field receives the message, but not the recipient in the Cc: field.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5. This
	problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	MORE INFORMATION
	================
	
	The problem may also appear when Exchange users reply to such lowercase
	Microsoft Mail addresses. The problem does not occur with uppercase characters.
	The problem does not occur if the lowercase-character addresses are present in
	the Exchange global address list.
	======================================================================
	Keywords          : kbusage exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
