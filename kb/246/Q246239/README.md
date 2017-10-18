---
layout: page
title: "Q246239: XWEB: Unable to Reply to or Forward a Large Message in OWA"
permalink: kb/246/Q246239/
---

## Q246239: XWEB: Unable to Reply to or Forward a Large Message in OWA

	Article: Q246239
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to reply to or forward a large message that is larger than 30
	kilobytes (KB) in Microsoft Outlook Web Access (OWA), you may receive the
	following error message:
	
	  Your message body is too large. Outlook Web Access only supports messages up
	  to 100K.
	
	  Please create a new message with a smaller size. Save your edits by cutting
	  and pasting them into the new message.
	
	CAUSE
	=====
	
	If the message text in the body of the original message is greater than 30 KB in
	size, you cannot reply to or forward the message. OWA has a limitation on
	message size that is not a restriction in a regular Outlook client.
	
	WORKAROUND
	==========
	
	Cut the text of the message and paste it into two or more smaller messages, or
	send the text to another recipient as an attachment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The error message is actually slightly incorrect. The message limitation for
	replying or forwarding occurs around 30 KB rather than 100 KB.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbExchangeActiveServComp500
	Version           : :5.0,5.5
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
