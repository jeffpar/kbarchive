---
layout: page
title: "Q275921: XCLN: How to View Private Messages in an Additional Mailbox"
permalink: /kb/275/Q275921/
---

## Q275921: XCLN: How to View Private Messages in an Additional Mailbox

{% raw %}

	Article: Q275921
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add another user's mailbox to your Microsoft Outlook profile, when you
	open this other mailbox, you are not able to view messages that are marked as
	Private.
	
	CAUSE
	=====
	
	The Microsoft Outlook client is designed to filter messages marked as Private so
	that only the intended recipient is able to view the message in their Inbox.
	This filtering process prevents delegates from viewing the contents of private
	messages that were intended for the original recipient only.
	
	RESOLUTION
	==========
	
	To enable delegates to see messages marked as Private, follow these steps:
	
	1. Create an Outlook profile and log on to the <Resource1> mailbox.
	
	2. On the Tools menu, click Options, and then click the Delegates tab.
	
	3. Click Permissions and assign Reviewer permissions (or higher) to the Inbox.
	
	4. Click to select the "Delegate can see my private items" check box.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you are unable to view private messages, the Inbox for this additional
	mailbox may indicate that you have an unread message (even though you cannot see
	it).
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q171636 HOWTO: Adding a Delegate to Exchange Server Messaging Service
	
	Additional query words: xadm, unread items
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
