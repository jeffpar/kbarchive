---
layout: page
title: "Q180569: XADM: Counting Age in Clean Mailbox"
permalink: /kb/180/Q180569/
---

## Q180569: XADM: Counting Age in Clean Mailbox

	Article: Q180569
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Exchange Administrator program when you run the Clean Mailbox
	command from the Tools menu, there is a data entry field for deleting all
	messages older than a certain number of days. When counting the number of days
	for this field, Exchange goes by the time stamp for the mail receipt date, not
	the last modified date.
	
	For example, if a particular mail message was received a month ago and is just
	modified today by the recipient, the mail message will still be deleted if the
	Clean Mailbox command is performed by the administrator with "All messages older
	than <number of days>:" set to "10."
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
