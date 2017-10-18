---
layout: page
title: "Q316536: XCCC: &quot;Have Server Reply with Specific Message&quot;  Rule Fails"
permalink: kb/316/Q316536/
---

## Q316536: XCCC: &quot;Have Server Reply with Specific Message&quot;  Rule Fails

	Article: Q316536
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbExchange500 kbExchange550
	Last Modified: 05-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 2002 
	- Microsoft Outlook 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exchange Server cannot perform the "Have server reply with specific message"
	Inbox rule if you change the mailbox that is indicated in the From box. This
	issue occurs even if you are the rule creator and you have delegate rights to
	the mailbox that is indicated in the From box.
	
	CAUSE
	=====
	
	This issue occurs because Inbox rules run in the security context of the
	Exchange Server service account, which does not have the inherited rights of the
	mailbox owner.
	
	WORKAROUND
	==========
	
	To work around this issue, configure either a mailbox agent or a client side
	rule that prompts Outlook to reply with the specific message. The client side
	rule runs in the context of the mailbox owner and completes successfully.
	
	MORE INFORMATION
	================
	
	For more information about client side rules, see Outlook Help and Outlook
	documentation. For more information about mailbox agents, see the Microsoft
	Platform Software Development Kit (SDK).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange500 kbExchange550 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbOutlook2002 kbZNotKeyword2 kbOutlook2000Search kbOutlook2002Search kbExchange2000Search kbZNotKeyword3 kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
