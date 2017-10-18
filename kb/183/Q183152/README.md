---
layout: page
title: "Q183152: XCLN: OWA Error Message: Failed to Send This Item"
permalink: kb/183/Q183152/
---

## Q183152: XCLN: OWA Error Message: Failed to Send This Item

	Article: Q183152
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Outlook Web Access client to try to send a message that may or
	may not contain an attachment, the following error message may appear:
	
	  Failed to Send This Item
	
	CAUSE
	=====
	
	You have exceeded the Prohibit Send limit set in the Exchange Administrator
	program for your mailbox or the information store. This error may also occur if
	the outgoing message is larger than the prescribed limit set by the
	Administrator for outgoing messages.
	
	WORKAROUND
	==========
	
	To work around this problem, reduce the number of messages in your server- based
	mailbox to a level below the limit set that will prohibit sending new messages.
	You can do this either by deleting some of the messages in your mailbox or by
	creating a personal folder file (PST) in an Exchange profile and downloading
	some of the messages to your local computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the above listed versions.
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
