---
layout: page
title: "Q194998: XCON: Client Cannot Retrieve Message in Parts Using SSL"
permalink: /kb/194/Q194998/
---

## Q194998: XCON: Client Cannot Retrieve Message in Parts Using SSL

{% raw %}

	Article: Q194998
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	IMAP4 customers using Netscape Messenger 4.5 enabled for Secure Socket Layer
	(SSL) against an Exchange Server 5.5 IMAP4rev1 computer, might encounter message
	content loss. Messages 6 KB in size or greater might be truncated (this is
	regardless if messages contain attachments or not).
	
	CAUSE
	=====
	
	Netscape Messenger 4.5 has moved to fetching messages in chunks (prior releases
	of Messenger always fetched the entire message). The command Messenger now
	issues to fetch a message is as follows:
	
	  11 UID fetch 320 (UID RFC822.SIZE BODY[]<0.6144>)
	
	When using clear text, the server will respond to the above command with exactly
	6144 bytes of message data. When using SSL, Exchange Server can return more than
	6144 bytes of message data. When more bytes than requested is received by
	Messenger, the client logs out without retrieving any more message data. Hence,
	the message is displayed truncated.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2437.0
	  Mdbmsg.dll   5.5.2437.0
	  Netif.dll    5.5.2437.0
	  Store.exe    5.5.2437.0
	
	
	WORKAROUND
	==========
	
	The obvious work around is to turn off SSL with Netscape 4.5. For customers who
	need to continue using SSL with Netscape Messenger 4.5, a client configuration
	change can be made which will alleviate the problem.
	
	When added to the Netscape user Pref.js file, the following line will turn off
	fetching in chunks:
	
	  user_pref("mail.imap.fetch_by_chunks", false);
	
	Netscape Messenger 4.5 will return to fetching the entire message in one command
	(as was the behavior in Netscape Messenger 4.07). Upon restarting the client,
	messages that were previously truncated can be fetched again and all message
	content displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. We are currently working on a fix to correct this problem.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
