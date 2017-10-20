---
layout: page
title: "Q273561: XCLN: How To Use IMAP4 to Migrate E-Mail"
permalink: /kb/273/Q273561/
---

## Q273561: XCLN: How To Use IMAP4 to Migrate E-Mail

{% raw %}

	Article: Q273561
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure Internet Message Access Protocol 4
	(IMAP4) to migrate mail items from Outlook Express to Exchange Server 5.5.
	
	MORE INFORMATION
	================
	
	You cannot initiate direct migration from Outlook Express to an Exchange Server
	mailbox. However, it is possible to migrate existing mail items from Outlook
	Express to an Exchange Server mailbox using IMAP4 protocol.
	
	NOTE: For this configuration to be successful, the computer that is running
	Exchange Server must have IMAP4 enabled, and it must have access to an SMTP
	server (the server does not need to be running Exchange Server).
	
	1. In Outlook Express, create a new mail account for the Exchange Server-based
	  computer.
	
	2. Configure this account as an IMAP4 mail account. Use the Exchange Server
	  mailbox SMTP address for your e-mail address.
	
	3. Enter the Windows NT domain name and the Windows NT account alias separated
	  by a back slash. For example, <domainname>/<username>.
	
	4. Enter your Windows NT account password as the password.
	
	  NOTE: Both the IMAP and SMTP server names are the same name as the Exchange
	  Server-based computer. (Technically, an SMTP server is not required for this
	  operation, but Outlook Express requires this field to create an account.)
	
	5. Connect Outlook Express to the newly created IMAP4 account and create a new
	  folder or use the Inbox folder.
	
	6. Click the mail items from the Outlook Express account(s) that you want to
	  move and drag them to the folder in the Exchange Server mailbox. Messages are
	  then copied to the Exchange Server mailbox.
	
	You should be able to log on using an Exchange Server client and view the mail
	items that you migrated from Outlook Express. The original recipient addresses
	and the date and time information are preserved.
	
	This procedure can be applied to any third-party mail client computers that can
	use IMAP4.
	
	Additional query words: Outlook Express, Migrate, Mac, OE
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
