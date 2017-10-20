---
layout: page
title: "Q176078: XFOR: NNTP Newsreader Users Cannot Use Exchange Newsgroups"
permalink: /kb/176/Q176078/
---

## Q176078: XFOR: NNTP Newsreader Users Cannot Use Exchange Newsgroups

{% raw %}

	Article: Q176078
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network News Transfer Protocol (NNTP) newsreaders cannot use Exchange
	newsgroups. Attempts to logon to Exchange Server return the following 201
	message:
	
	  No posting allowed
	
	RESOLUTION
	==========
	
	To enable login, do the following:
	
	1. Access the properties for NNTP Settings found in the Exchange Administrator
	  program on Servers\<server name>\Protocols.
	
	2. On the General tab of the properties for NNTP Settings, uncheck the "Use site
	  defaults for all properties" box, leaving the other defaults undisturbed.
	
	3. On the Anonymous tab of the properties for NNTP Settings, check "Allow
	  anonymous access."
	
	MORE INFORMATION
	================
	
	Exchange newsgroups can be configured to require authenticated access. If
	Exchange Server is configured to require authenticated access, NNTP readers who
	connect to the Exchange Server computer must use clear text or NTLM
	authentication before access to the Exchange Server computer will be allowed. An
	easy way to find out if the Exchange Server computer has been configured to
	require authenticated access is to use telnet.
	
	To test this with telnet:
	
	Using Windows NT, open a command prompt. At the command prompt type "telnet
	<machine name or IP address> 119" (where the machine name is the name of
	the Exchange Server computer). You should get a connection to the Exchange
	Server computer. The server will issue a greeting banner. If the first number in
	the banner is 201, then the server requires authenticated access. If the first
	number is 200, then anonymous access is allowed. ("Posting ok").
	
	Additional query words: NNTP, 201, port 119, posting
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
