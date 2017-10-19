---
layout: page
title: "Q186691: XCLN: Inbox Assistant Replies to Sender Not Alternate Recipient"
permalink: /kb/186/Q186691/
---

## Q186691: XCLN: Inbox Assistant Replies to Sender Not Alternate Recipient

	Article: Q186691
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0; WINDOWS:4.0,5.0; :8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	- Microsoft Outlook 97, version 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Inbox Assistant (Rules Wizard in Outlook 98) rules can be created to reply to
	the sender of a note. However, if the sender of the note is using an Outlook
	client and sets an alternate recipient with the "Have replies sent to" option,
	the Inbox Assistant rule will not send the reply to the alternate recipient.
	
	CAUSE
	=====
	
	The Inbox Assistant rule looks at the MAPI properties of the incoming note to
	determine what address to reply to. The MAPI property used by the rule for
	replies is the PR_SENDER property, instead of the PR_REPLY_RECIPIENT_NAMES
	property, which would contain the alternate recipient's address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlookMacSearch kbOutlook803 kbExchange400NT kbExchange500NT kbOutlook800Mac kbExchange400Win95 kbExchange500Win95
	Version           : MACINTOSH:8.0; WINDOWS:4.0,5.0; :8.03
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
