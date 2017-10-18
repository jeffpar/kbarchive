---
layout: page
title: "Q181953: Sending RTF with Attachment as MIME Loses Attachment"
permalink: kb/181/Q181953/
---

## Q181953: Sending RTF with Attachment as MIME Loses Attachment

	Article: Q181953
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message with a MIME attachment from an Exchange client and have
	configured an Internet recipient to "Always send to this recipient as RTF", and
	that recipient uses a POP3 client, the recipient will not receive the
	attachment.
	
	CAUSE
	=====
	
	The MIME-encoded attachment is still present but is not accessible by the POP3
	client (depending on the receiving client). This problem only happens when
	sending an attachment as MIME.
	
	WORKAROUND
	==========
	
	There are two ways to work around this problem:
	
	1. Disable the option "Always send to this recipient as RTF" when sending an
	  attachment to an Internet recipient using a POP3 client.
	
	2. Do not include an attachment in an RTF message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Most POP3 clients do not understand Rich Text Format (RTF) used by Microsoft
	transport-neutral encapsulation format (TNEF). Consequently, the sender must
	turn off the option "Always send to this recipient as RTF", in order for the
	POP3 client to see the attachments.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
