---
layout: page
title: "Q250558: XIMS: Internet Mail Service MIME Word Wrap Default 76 Characters"
permalink: /kb/250/Q250558/
---

## Q250558: XIMS: Internet Mail Service MIME Word Wrap Default 76 Characters

	Article: Q250558
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp1 exc55sp2 exc55sp3
	Last Modified: 24-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may notice that the default "Message text word wrap" setting for
	Multipurpose Internet Mail Extensions (MIME) attachments are incorrect. You can
	observe this behavior when you administer the Internet Mail Service by clicking
	the Internet Mail tab, and then by clicking "Advanced options".
	
	MORE INFORMATION
	================
	
	On the Internet Mail tab of the Internet Mail Service properties, you can click
	Message Content to send attachments by using MIME or uuencode. If you select
	MIME to send attachments, in the "Advanced options" dialog box, under "Message
	text word wrap", Never is selected by default. The value in the "At column" box
	is also set to 76 by default, and is unavailable (dimmed).
	
	To ignore the default word wrapping for MIME attachments, click "At column", and
	then reselect Never.
	
	The value in the "At column" box is changed to "0". If this value is set to "0",
	the default word wrapping for MIME attachments is ignored.
	
	Additional query words: LINE Carriage Return Feed Break
	
	======================================================================
	Keywords          : exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
