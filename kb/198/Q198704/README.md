---
layout: page
title: "Q198704: XCLN: ErrMsg: 0x800ccc90, 0x800ccc18 &amp; Outlook Express"
permalink: kb/198/Q198704/
---

## Q198704: XCLN: ErrMsg: 0x800ccc90, 0x800ccc18 &amp; Outlook Express

	Article: Q198704
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on to Exchange Server with Outlook Express using Secure
	Password Authentication, you may see the following error messages in Outlook
	Express. Look in the Details of the Error tab after failing to connect.
	
	  * Unable to logon to the server using Distributed Password Authentication.
	  Account:'Company POP3 Server Accnt.',
	  Server: 'server.company.com',
	  Protocol: POP3,
	  Server Response: '-ERR The AUTH protocol exchange was canceled by the
	  client.',Port: 110, Secure(SSL): NO, Server Error: 0x800ccc90, Error Number:
	  0x800ccc18
	
	On the Exchange Server computer you will see the following Event IDs:
	
	  Application event log error:
	  13005 MSExchange Pop3 Authentication
	  Logon attempt by NTDomian\User from 157.57.148.24 to NtDomain/User has failed:
	  EcGetMailboxDN() call failed with error The requested mailbox is not
	  available on this server.
	
	  11310 MSExchange Pop3 Authentication
	  The following error occurred: The requested mailbox is not available on this
	  server.
	
	CAUSE
	=====
	
	Either the Outlook Express POP3 client is not able to access the mailbox because
	it does not exist or there is a custom recipient in the Exchange Server
	organization that has the same alias as you do, and Exchange Server is
	attempting to access the custom recipient before accessing your mailbox.
	
	WORKAROUND
	==========
	
	In Outlook Express, try using Clear Text, which is the "Log on using" option
	under the Servers tab of the mail account.
	
	To do so:
	
	1. On the Tools menu, click Accounts. This will bring up several tabs.
	
	2. If you select any listed mail account, the properties will have a Servers tab
	  with the "Log on using" option.
	
	3. Select the Clear Text option.
	
	If this works, then you were trying to access a non-existent mailbox or the wrong
	mailbox. If this does not work, then the administrator needs to check for and
	remove the custom recipient.
	
	MORE INFORMATION
	================
	
	When a user tries to log on to Exchange Server with Outlook Express and Secure
	Password Authentication, the client will pass the credentials of the user logged
	on to the workstation. If the logon works using the Clear Text option: <NT
	Domain/NT Account/Alias>, the user will have to change his or her mailbox
	alias to the Windows NT account name in order to use Secure Password
	Authentication. This is because Secure Password Authentication will not pass the
	mailbox alias information. It defaults to <NT DOMAIN\NTACCOUNT> and
	Exchange Server assumes the alias to be the Windows NT account.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
