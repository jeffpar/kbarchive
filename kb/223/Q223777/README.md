---
layout: page
title: "Q223777: XCLN: Voting Buttons Disappear when Sending Message to CR"
permalink: kb/223/Q223777/
---

## Q223777: XCLN: Voting Buttons Disappear when Sending Message to CR

	Article: Q223777
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message with Voting Buttons is sent to a custom recipient (CR), the
	Voting Buttons are gone when the recipient receives the message.
	
	CAUSE
	=====
	
	By default, when a custom recipient is created, rich text e-mail is not enabled.
	
	RESOLUTION
	==========
	
	In the Exchange Server Administrator program, get the properties for the custom
	recipient mailbox, then go to the Advanced tab, and click to enable the "Allow
	Rich Text in Messages" check box. This will allow rich text to be sent to the
	custom recipient.
	
	MORE INFORMATION
	================
	
	Voting Buttons require the message be sent in rich text. For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q180320 OL98: (CW) Voting and Meeting Buttons Missing
	
	Additionally, if the custom recipient is connecting to a third-party e-mail
	server that strips out rich text formatting, he or she will not be able to use
	Voting Buttons. The same is true for users who are getting e-mail through a
	client that has rich text disabled, or does not support rich text messages. Some
	POP3 clients support HTML messages, but not rich text.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
