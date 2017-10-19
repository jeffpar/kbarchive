---
layout: page
title: "Q194126: XFOR: How to Create an Active File to Use with NNTP"
permalink: /kb/194/Q194126/
---

## Q194126: XFOR: How to Create an Active File to Use with NNTP

	Article: Q194126
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server 5.0 and 5.5 allow you to import newsgroups for a particular news
	feed through what is known as an active file, which can be provided by the
	Usenet hub, or you can create one using Telnet.
	
	MORE INFORMATION
	================
	
	1. To create an active file using Telnet, first connect to the NNTP Server on
	  port 119 using Telnet by clicking Start, then Run, and typing the following
	  command:
	
	  telnet <newsvr> 119
	
	2. If the NNTP server requires authentication you will need to authenticate
	  yourself using the Authinfo command. See the following example:
	
	  authinfo user <domainname\username> authinfo pass <Password>
	
	3. In Telnet, turn on logging by selecting Start Logging from the Terminal menu
	  option. Choose any file name you like. The new NewsFeed Wizard doesn't
	  require a specific file name. Then type the following:
	
	  list active
	
	  This will dump the list of all of the newsgroups the server knows about.
	
	4. When you are done, turn off the logging by selecting Stop Logging on the
	  Terminal menu.
	
	The newly created file will be an active list for you to use on the server. The
	file can also be edited for your needs if necessary.
	
	Additional query words: active list nntp creating
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
