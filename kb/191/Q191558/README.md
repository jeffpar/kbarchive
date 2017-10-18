---
layout: page
title: "Q191558: XADM: POP3 Secure Password Authentication"
permalink: kb/191/Q191558/
---

## Q191558: XADM: POP3 Secure Password Authentication

	Article: Q191558
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail can not be downloaded or viewed using Microsoft Outlook Express Secure
	Password Authentication (SPA) to access messages on an Exchange Server computer.
	You may receive the following error message:
	
	  You could not be logged on to the mail server using Secure Password
	  Authentication. Please check your account information and verify that
	  your mail server supports Secure Password Authentication.
	
	This functionality requires that Exchange Server has the Windows NT
	Challenge/Response enabled for the POP3 protocol.
	
	CAUSE
	=====
	
	This problem may occur when a client using SPA tries to log on to a mailbox
	where the mailbox alias is different than the Windows NT account. The mail
	client uses the computer's logon credential information for SPA and assumes that
	the mailbox alias will be the same as the Windows NT account.
	
	WORKAROUND
	==========
	
	Change the users mailbox alias to match the Windows NT account in the Exchange
	Server Administrator program.
	
	MORE INFORMATION
	================
	
	You can test this by telneting to port 110 of the server. After you receive the
	server's "ready" response from the Exchange Server computer, type "Auth NTLM,"
	(without the quotation marks) and CRLF. If you get "+ OK," then the server
	supports Secure Password Authentication. Otherwise, you will receive "The NTLM
	Authentication package has been disabled for this protocol."
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	
	=============================================================================
	
