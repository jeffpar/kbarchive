---
layout: page
title: "Q185038: XCLN: Message Recall Failure when Recalling a Message"
permalink: kb/185/Q185038/
---

## Q185038: XCLN: Message Recall Failure when Recalling a Message

	Article: Q185038
	Product(s): Microsoft Exchange
	Version(s): 8.03; WINDOWS:; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to recall a message sent to one or more Microsoft Exchange
	Server users, you may receive a message containing the following:
	
	  From:   <your name>
	  Sent:   Monday, April 20, 1998 1:23 PM
	  To:   <recipient's name>
	  Subject: Message Recall Failure:
	
	  Your message
	
	     To: ServerA-Recipients;ServerB-Recipients;ServerC-Recipients;
	     Subject:   Test Message
	     Sent:   4/4/98 5:00 PM
	
	  could not be recalled on 4/20/98 9:45 AM.
	
	CAUSE
	=====
	
	The recipient has deleted the message you are attempting to recall.
	
	MORE INFORMATION
	================
	
	The above message recall failure notification may be received if the recipient
	of the original message has permanently deleted the message before the sender
	has recalled the message.
	
	You may get the message recall failure notification a long time after you recall
	the message. Consider the following example. User1 sends a message to User2 on
	January 1, 1998. Then User1 recalls the message on January 2, 1998. However,
	User1 doesn't receive a message recall failure notification from User2 until
	February 1, 1998.
	
	The above situation can occur if User2 has a Personal Folder (.pst file) as the
	default mail delivery location. This will cause the message from User1 to be
	automatically delivered to the .pst file. Now if User2 permanently deletes this
	message and then logs out of the client, the recall message from User1 will not
	be processed until User2 logs back onto the client. If User2 goes on vacation
	and does not log onto the Exchange Server computer until February 1, 1998, the
	recall message will be received by User2 on February 1, and since User2 had
	permanently deleted the message from User1, a message recall failure
	notification will be sent to User1 on Feb 1.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook803
	Version           : :8.03; WINDOWS:; winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
