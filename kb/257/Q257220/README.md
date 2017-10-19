---
layout: page
title: "Q257220: XCON: Newsfeeds Unavailable in Internet Information Services 5.0"
permalink: /kb/257/Q257220/
---

## Q257220: XCON: Newsfeeds Unavailable in Internet Information Services 5.0

	Article: Q257220
	Product(s): Internet Information Server
	Version(s): WINDOWS:2000; winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbOSWin2000 exc55kbfaq
	Last Modified: 06-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Newsfeeds are not supported in the Microsoft Windows 2000 version of Network
	News Transfer Protocol (NNTP). Newsfeeds cannot be configured in Internet
	Information Services (IIS) 5.0.
	
	Although the Default NNTP Virtual Server properties contain "Allow feed postings"
	and "Allow servers to pull news articles from this server" options, these
	options and complete newsfeed capability are not available.
	
	You can use Exchange Server or other newsfeed software for newsfeed support.
	
	MORE INFORMATION
	================
	
	The flow of items from one USENET site to another is called a newsfeed. A
	newsfeed replicates items in newsgroups between host computers. One or more
	servers, or hosts, running NNTP make up a USENET site.
	
	Each USENET site that receives a newsfeed can be configured to accept and
	generate an NNTP connection and newsfeed. The host computer that receives your
	newsfeed is configured as the outbound host. The host computers that provide
	your newsfeed are configured as the inbound hosts. A host computer can be
	configured as both the inbound and outbound host.
	
	Additional query words: newsgroup
	
	======================================================================
	Keywords          : kbOSWin2000 exc55 kbfaq
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500
	Version           : WINDOWS:2000; winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
