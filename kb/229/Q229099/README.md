---
layout: page
title: "Q229099: XFOR: NNTP Does Not Support PULL/POST Feed"
permalink: /kb/229/Q229099/
---

## Q229099: XFOR: NNTP Does Not Support PULL/POST Feed

{% raw %}

	Article: Q229099
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server 5.5 adds an NNTP-Posting-Host header into news
	messages posted by news readers who use the POST command.
	
	However, Exchange Server 5.0 and 5.5 reject a news message or posting with an
	NNTP-Posting-Host header sent using the POST command.
	
	In the illustration below, a news message posted by a news reader is not sent to
	the Exchange Server NNTP host if the NewsFeed setting is configured for a Pull
	feed. This is because the Pull feed uses the POST command to send the news
	message.
	
	NewsReader-(POST)--> Exchange 5.5 NNTP:PULL--(POST)--X-->Exchange 5.x
	
	--------------------------add a NNTP-Posting-Host------Reject the news message.
	
	The problem is that a Pull/Post feed is being used. This is an ill thought-out
	feed type that is NOT supported by Usenet RFCs. The correct feed type is
	Push/Accept.
	
	MORE INFORMATION
	================
	
	There is no plan to add support for this feed type in Exchange Server 5.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
