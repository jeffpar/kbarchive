---
layout: page
title: "Q287888: XADM: Corrupted Message-ID Text"
permalink: kb/287/Q287888/
---

## Q287888: XADM: Corrupted Message-ID Text

	Article: Q287888
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you check the Internet headers on a message that originates from an
	Exchange Server computer, you may notice that the originating server name in the
	Message-ID section is corrupted. For example, the following text is displayed in
	the Message-ID section:
	
	  
	
	  Message-ID: <C1F8B064AA7BD111A78E006097AC94A13649AB@GUIS<7F><16><7F><17><7F><18><7F><19><7F><1A><7F><1B><7F><1C><7F><1D>RV02>
	
	However, you expect the following text to be displayed:
	
	  
	
	  Message-ID: <C1F8B064AA7BD111A78E006097AC94A13649AB@GUISRV02>
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall the TCP/IP stack on the originating Exchange
	Server computer, and then reapply the current Microsoft Windows NT service pack.
	
	MORE INFORMATION
	================
	
	This issue has been reported to cause blank e-mail messages when they are
	received on an Exchange 2000 Server computer. In this case, even though the
	messages are blank, the From address is still displayed. The specific cause of
	this issue is not known at this time. This issue may be caused by the Exchange
	2000 SMTP gateway or by virus scanning software that strips the message body
	from message, and causes the corrupted text to be displayed in the Message-ID
	section.
	
	This issue has not been reported in Hotmail messages.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
