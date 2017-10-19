---
layout: page
title: "Q165987: XWEB: Error Message: Failed to Get Inbox"
permalink: /kb/165/Q165987/
---

## Q165987: XWEB: Error Message: Failed to Get Inbox

	Article: Q165987
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.0,5.0
	Operating System(s): 
	Keyword(s): kbtshoot kbusage
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a mailbox on a computer running Microsoft Exchange Server
	using the Exchange Active Server Components, you may receive the following error
	upon trying to log on:
	
	  Failed to get Inbox.
	
	CAUSE
	=====
	
	This error is caused by an account permissions problem for the mailbox you are
	trying to access. Verify that the Windows NT account you are signed in as has
	permission to the Exchange Server mailbox you are trying to access.
	
	This error typically occurs when you are using Window NT Challenge\Response
	Authentication (also referred to as NTLM) to access Internet Information Server.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Use only basic (clear text) authentication. You will be asked for user
	  credentials every time you log on to your mailbox using a Web browser. If a
	  higher level of security is needed, configure Secure Sockets Layer (SSL) to
	  this computer running Internet Information Server. For extra security, use
	  basic (clear text) authentication over the secure connection provided by SSL.
	
	MORE INFORMATION
	================
	
	This error typically occurs when you are using Window NT Challenge\Response
	Authentication (also referred to as NTLM) to access Internet Information Server.
	Below is an example of the expected behavior you should see when using Internet
	Explorer (IE), Exchange Active Server Components, and NTLM authentication.
	
	NOTE: Currently Netscape Navigator 2.0 and 3.0 do not support NTLM
	authentication.
	
	Configuration:
	
	- IIS\Exchange Machine domain: DomainA
	
	- Exchange Mailbox: User1
	
	- Exchange Mailbox Primary NT account: DomainA\User1
	
	- Windows NT Challenge\Response authentication enabled for IIS
	
	Scenario:
	
	1. Logged on to the computer running Internet Explorer as DomainA\User1 trying
	  to access Mailbox User1.
	
	   - With IE 3.0, you should be logged on to the mailbox normally.
	
	   - With IE 3.01, you should be logged on to the mailbox normally.
	
	2. Logged onto the computer running Internet Explorer as DomainA\User2 trying to
	  access Mailbox User1.
	
	   - With IE 3.0, you will receive the "Failed to get Inbox" error message.
	
	   - With IE 3.01, you will receive the "Failed to get Inbox" error message.
	
	3. Logged on to the computer running Internet Explorer as DomainB\UserX (where
	  UserX is any account) trying to access Mailbox User1.
	
	   - With IE 3.0, you will receive the "Failed to get Inbox" error message.
	
	   - With IE 3.01, you will receive be prompted to enter user name and
	     password. Entering DomainA\User1 for the user name and the correct
	     password should allow access to the mailbox.
	
	Additional query words: Kluane
	
	======================================================================
	Keywords          : kbtshoot kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:3.0,5.0
	
	=============================================================================
	
