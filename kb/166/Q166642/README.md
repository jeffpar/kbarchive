---
layout: page
title: "Q166642: XFOR: Err Msg: An Unexpected Response (500) Was Received..."
permalink: /kb/166/Q166642/
---

## Q166642: XFOR: Err Msg: An Unexpected Response (500) Was Received...

	Article: Q166642
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform an inbound or outbound push from the Network News Transfer
	Protocol (NNTP) server to another server, some articles may cause the store to
	stop responding during the inbound newsfeed. The following error message may be
	logged in the application event log:
	
	  An unexpected response (500) was received from news server
	  ninou.dns.microsoft.com.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The ending sequence parsing code in NNTP is confused if the following occurs:
	
	- A post (or Ihave newsfeed) comes into a newsgroup that the poster does not
	  have access to.
	
	- The post is greater than 1K in size.
	
	- The character at offset 1k in the posted article is 0xA.
	
	- The last 3 characters (before the real ending sequence) of the article are ".
	  0xD 0xA" ("." 0x0d 0x0a).
	
	- The article is rejected.
	
	Exchange Server prematurely terminates the post and therefore corrupts the data
	stream between the client and server. This can also happen with messages larger
	than the maximum message size. NNTP is treating the last 5 bytes of an article
	as commands, and as a result sends the following error message to the client:
	
	  500 command not recognized
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
