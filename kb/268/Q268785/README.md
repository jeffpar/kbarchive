---
layout: page
title: "Q268785: XFOR: The NEWNEWS and XOVER commands in Exchange NNTP"
permalink: /kb/268/Q268785/
---

## Q268785: XFOR: The NEWNEWS and XOVER commands in Exchange NNTP

	Article: Q268785
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55kbfaq
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A newsgroup is a collection of messages posted by individuals interested in a
	particular subject. A newsfeed is essentially a specified collection of
	newsgroup articles that are fed by one server to another.
	
	MORE INFORMATION
	================
	
	NewNews is the supported command used to pull newsgroups down from one news
	server to another. This is described fully in Request For Comment (RFC) 977, at
	the Internet Engineering Task Force (IETF) Web site:
	
	  http://www.ietf.org/rfc/rfc0977.txt (http://www.ietf.org/rfc/rfc0977.txt)
	
	Usage: NewNews date time [Greenwich mean time]
	
	XOVER is a Network News Transfer Protocol (NNTP) extension that a newsreader
	client uses to list the common headers of articles in a news group.
	
	It is generally used to build your client's list of messages with the subject
	lines, dates, and so forth.
	
	For more information, see the draft NNTP extensions, (9.4.8 OVER) at the
	following IETF Web site:
	
	  http://www.ietf.org/internet-drafts/draft-ietf-nntpext-base-10.txt
	  (http://www.ietf.org/internet-drafts/draft-ietf-nntpext-base-10.txt)
	
	Usage: XOVER [range]
	
	On occasion you may come across the issue where an Internet service provider
	(ISP) has turned off access to the NewNews command, which is something that
	Microsoft NNTP supports.
	
	For additional information how to disable support for pull from an Exchange news
	server, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q173946 XFOR: Disabling Support for Pull Newsfeeds
	
	Also, if the ISP is running Microsoft NNTP, and has a feed configured for this
	customer, then our server can also restrict the set of commands that the client
	may issue over the session.
	
	Oftentimes ISPs run NNTP servers, in which case the customer would want to pull a
	feed from the ISP without using the NewNews command. Unfortunately, the only
	form of pull feed Microsoft NNTP supports is that which uses the NewNews
	command.
	
	In this situation, the customer needs one of the following scenarios to exist to
	make this work:
	
	- The ISP must allow NewNews commands.
	
	  -or-
	
	- The ISP configures a push feed to the customer, who configures a
	  corresponding accept feed in Microsoft NNTP.
	
	Additional query words: INN pull feed
	
	======================================================================
	Keywords          : exc55 kbfaq
	Component         : NNTP
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
