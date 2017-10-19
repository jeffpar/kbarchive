---
layout: page
title: "Q171100: PRB: PR_NDR_XXX Properties Not Removed from Recipients"
permalink: /kb/171/Q171100/
---

## Q171100: PRB: PR_NDR_XXX Properties Not Removed from Recipients

	Article: Q171100
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message returns to the sender with a NDR (Non-Delivery Report), the
	PR_NDR_REASON_CODE and the PR_NDR_DIAG_CODE appear on the recipients that did
	not receive the mail. When you try to resend this message to one of the
	recipients that did not receive the message, these properties should be removed.
	However, these properties will still appear for the recipient on the newly
	created message.
	
	CAUSE
	=====
	
	These properties are not being removed when the message is re-created.
	
	RESOLUTION
	==========
	
	To avoid unnecessary processing of messages with these properties, check the
	message class. The message class, stored in PR_MESSAGE_CLASS, is
	REPORT.<subject message class>.NDR for non-delivery reports.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
