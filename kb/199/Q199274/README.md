---
layout: page
title: "Q199274: XCON: Event 13005 During POP3 Logon"
permalink: kb/199/Q199274/
---

## Q199274: XCON: Event 13005 During POP3 Logon

	Article: Q199274
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,8.0,8.01,8.02,8.03,8.5; winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to Exchange Server version 5.5 computer with a POP3
	client, you may receive the following error message:
	
	  Event ID 13005
	
	  Source MSEchangePOP3
	
	  Description:
	  Logon attempt by USERNAME from IP ADDRESS to EXCHANGE SERVER has failed:
	  EcGetMailboxDN call failed with error. There is no such mailbox on this
	  server.
	
	CAUSE
	=====
	
	The credentials being passed from the client to the Exchange Server computer do
	not match the user's Windows NT account and/or mailbox.
	
	RESOLUTION
	==========
	
	1. Check the client configuration; please note that the steps for checking the
	  configuration will vary depending on the type of client being used.
	
	2. Change the account name to the format of
	  <NT_domain>\<NT_account>\<Exchange_alias>.
	
	3. Set the password to match the Windows NT password.
	
	4. Save the changes, exit the client, and restart the client.
	
	5. Connect to the Exchange Server POP3 service.
	
	For an alternate resolution to this issue::
	
	Change the alias name of the mailbox to the same as the NT account name. This
	will enable you to use one account name (instead of typing in the full path as
	described above).
	
	If the connection still fails, follow the troubleshooting steps in the following
	article in the Microsoft Knowledge Base:
	
	  Q161118 XCLN: Troubleshooting POP3 Connections to Exchange Server
	
	NOTE: The format of <NT_domain>\<NT_account>\<Exchange_alias>
	should work when using Outlook 98 or Outlook Express clients. Results may vary
	when other clients are being used.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,8.0,8.01,8.02,8.03,8.5; winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
