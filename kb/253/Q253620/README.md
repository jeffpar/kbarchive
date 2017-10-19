---
layout: page
title: "Q253620: XCLN: Non-Delivery Report from &quot;Ghost&quot; Recipients"
permalink: /kb/253/Q253620/
---

## Q253620: XCLN: Non-Delivery Report from &quot;Ghost&quot; Recipients

	Article: Q253620
	Product(s): Microsoft Exchange
	Version(s): 98
	Operating System(s): 
	Keyword(s): kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user opens a message in the Sent Items folder, clicks "Reply to All",
	removes some recipients from the To or Cc box, and then sends the reply, the
	user may receive a non-delivery report (NDR) that includes all of the recipients
	from the original message.
	
	If diagnostic logging is set to maximum for the transport category on the
	Exchange Server information store in the Exchange Server Administrator program,
	the following event error message is logged:
	
	  11/5/99,11:57:22 AM,MSExchangeIS Private,Warning,Transport General ,
	  1026,N/A,ASM0109,An error occurred with the following call stack:
	  EcSendMessage(): 0000000467
	  EcCreateOMSubmit(): 0000000467
	  Why do we have a MAPI_P1 recipient in a non resend msg?(): 0000000000
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words: ol98
	
	======================================================================
	Keywords          : kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbOutlookSearch kbOutlook98Search kbZNotKeyword3
	Version           : :98
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
