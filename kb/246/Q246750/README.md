---
layout: page
title: "Q246750: XADM: OAB Doesn't Send to Custom Recipients in Rich Text Format"
permalink: /kb/246/Q246750/
---

## Q246750: XADM: OAB Doesn't Send to Custom Recipients in Rich Text Format

	Article: Q246750
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 22-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you download the offline Address Book (OAB), the "Always send to this
	recipient in Microsoft Exchange rich text format" check box is cleared in any
	custom recipient mailboxes that were created by using the Exchange Server
	Administrator program.
	
	CAUSE
	=====
	
	This behavior is by design. The "Allow rich text in messages" check box under
	"Custom recipient options" in the Exchange Server Administrator program is an
	attribute that is not downloaded in the offline Address Book for any custom
	recipient mailboxes.
	
	WORKAROUND
	==========
	
	Create a personal address book (PAB) entry for the specific custom recipient and
	click to select the "Always send to this recipient in Microsoft Exchange rich
	text format" check box, or select the custom recipient from the global address
	list when you are working online.
	
	For additional information about the attributes that are downloaded in the
	offline Address Book, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q180118 XADM: Information Available in the Offline Address Book
	
	MORE INFORMATION
	================
	
	Most Post Office Protocol version 3 (POP3) and Internet Message Access Protocol,
	Version 4rev1 (IMAP4) clients do not read the Rich Text Format (RTF) that is
	used by Microsoft Transport-Neutral Encapsulation Format (TNEF). Consequently,
	the sender must click to clear the "Always send to this recipient as RTF" check
	box for a POP3 or IMAP4 client to see attachments.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q221164 XFOR: Outlook Express Using IMAP4 Doesn't Display Attachments
	
	
	Additional query words: oab RTF attributes attribute TNEF
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
