---
layout: page
title: "Q185499: XADM: Inbox Rule to Forward w/ Leave Intact Rewrites P2 Headers"
permalink: /kb/185/Q185499/
---

## Q185499: XADM: Inbox Rule to Forward w/ Leave Intact Rewrites P2 Headers

{% raw %}

	Article: Q185499
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message is forwarded using the Inbox Assistant and the method selected
	under the Edit Rule menu is Leave Message Intact, the content of the message is
	forwarded, but the P2 headers are rewritten. After the P2 headers are rewritten,
	they contain only the address list specified in the Inbox Assistant rule. The
	contents of the message are complete, and the headers are placed in the body of
	the message. Any action taken on the message after delivery acts on the new
	headers, and the addresses in the original P2 are listed in the message but not
	available for use by the receiving mailbox.
	
	For example, MailboxA sends a message to MailboxB, which has a rule to forward
	all messages to MailboxC. MailboxC then replies to the message, which is sent to
	MailboxB, not to MailboxA.
	
	CAUSE
	=====
	
	The P2 headers are rewritten by design when you use the Forward action of the
	Inbox Assistant.
	
	WORKAROUND
	==========
	
	The Alternate Recipient Delivery option in the Exchange Administrator program
	forwards the message without rewriting the P2 headers.
	
	To enable this option, do the following:
	
	1. Using Microsoft Exchange Administrator, select the user's mailbox.
	
	2. On the File menu, select Properties.
	
	3. Click the Delivery Options tab.
	
	4. On the Alternative Recipient section of the dialog box, click the Modify
	  button.
	
	5. Select a recipient to get a copy of all messages. You can also indicate that
	  a copy of each message is to be retained.
	
	6. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this is by design for Microsoft Exchange. Contact
	Microsoft Technical Support for more information.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0 5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
