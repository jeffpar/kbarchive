---
layout: page
title: "Q176102: MSN Err Msg: The Connection to the Server Has Failed..."
permalink: kb/176/Q176102/
---

## Q176102: MSN Err Msg: The Connection to the Server Has Failed...

	Article: Q176102
	Product(s): The Microsoft Network
	Version(s): 2.5,2.51,2.52,2.6,5.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtlc kbmsn
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send or receive e-mail on MSN, The Microsoft Network, using
	Microsoft Outlook Express, you may receive one of the following error messages:
	
	  The connection to the server has failed. Account: 'MSN Mail', Server:
	  'smtp.email.msn.com', Protocol: SMTP, Port: 465, Secure(SSL): Yes, Socket
	  Error: 10061, Error Number: 0x800CCC0E.
	
	  The connection to the server has failed. Account: 'MSN Mail', Server:
	  'pop3.email.msn.com', Protocol: pop3, Port: 995, Secure(SSL): Yes, Socket
	  Error: 10061, Error Number: 0x800CCC0E.
	
	CAUSE
	=====
	
	This issue may have one of two causes:
	
	- Outlook Express may be attempting to connect to the MSN e-mail server using a
	  Secured Sockets Layer (SSL) secure connection. SSL security is not supported
	  by the MSN e-mail server.
	
	- You have installed MSN Explorer, and your e-mail has been converted to
	  Hypertext Transfer Protocol (HTTP) e-mail.
	
	RESOLUTION
	==========
	
	To resolve this issue, do one of the following:
	
	- Call MSN Internet Access Technical Support at 1-877-635-7019, and ask a
	  Customer Service Representative to run the "POP3 Rollback tool" on your
	  account.
	
	- You can also set up Outlook Express 5 or greater to read your HTTP e-mail,
	  without reverting your e-mail to Post Office Protocol (POP3) by going to:
	  http://supportservices.msn.com/us/oeconfig
	
	If none of the above apply to you, do the following using Outlook Express 5 or
	greater
	
	To remove and reinstall your account with Outlook Express 5 or greater
	
	1. Start Outlook Express.
	
	2. Click Tools, and then click Accounts.
	
	3. Click the Mail tab.
	
	4. Select the account--MSN Mail, pop3.email.msn.com, or similarly named
	  listings, and then click Remove.
	
	5. Click Close.
	
	6. Quit Outlook Express.
	
	7. Connect to the Internet.
	
	8. Go to: http://supportservices.msn.com/us/oeconfig
	
	9. Click Continue.
	
	10. When prompted for sign-in, type your e-mail address (including the @msn.com
	  suffix) and password.
	
	11. Click Sign-In, and then click Continue.
	  The wizard will now install the POP3 account in Outlook Express.
	
	MORE INFORMATION
	================
	
	If this issue continues to occur, or if Outlook Express is not using an SSL
	secure connection, remove and reinstall the MSN Mail account in Outlook Express.
	For information about how to do this, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q173952 How to Configure Microsoft Outlook Express to Work with MSN
	
	Additional query words: 2.50 msnet msnetwork microsoft-net m.s.n. outex
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtlc kbmsn 
	Technology        : kbMSNSearch kbMSN500 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : :2.5,2.51,2.52,2.6,5.0
	Issue type        : kbprb
	
	=============================================================================
	
