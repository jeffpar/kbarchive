---
layout: page
title: "Q233276: XCLN: Message Sent Times Inaccurately Match the Received Times"
permalink: /kb/233/Q233276/
---

## Q233276: XCLN: Message Sent Times Inaccurately Match the Received Times

	Article: Q233276
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,4.0,5.0; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An Exchange Client or Outlook client may receive an e-mail message that contains
	a sent time that matches the received time, even if the e-mail message was sent
	several minutes or hours before the message was received.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This behavior does not occur if you use
	Microsoft Exchange Server version 5.5.
	
	MORE INFORMATION
	================
	
	This problem only occurs when the following conditions exist:
	
	- The Outlook client has two profiles set up, one for Internet mail and one for
	  Exchange Server mail.
	
	- The Internet mail profile is set to receive mail from a UNIX-based server by
	  using the Post Office Protocol version 3 (POP3) protocol.
	
	- The Outlook client is set to deliver incoming mail to an Exchange Server
	  version 5.0 mailbox. If the Outlook client is set to deliver incoming mail to
	  a personal folder file (.pst), the sent and received times may be correct.
	
	
	Additional query words: OL98, OL97, OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:2000,4.0,5.0; :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
