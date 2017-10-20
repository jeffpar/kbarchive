---
layout: page
title: "Q261155: XFOR: Migration Wizard Limits New Passwords to 14 Characters"
permalink: /kb/261/Q261155/
---

## Q261155: XFOR: Migration Wizard Limits New Passwords to 14 Characters

{% raw %}

	Article: Q261155
	Product(s): Microsoft Exchange
	Version(s): winnt:4.x,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Migration Wizard to move mailboxes into Exchange Server, the
	wizard is able to create new accounts in Microsoft Windows 2000 Server for the
	migrated mailboxes. You have the choice to either create random passwords for
	these accounts or use the user's alias as the password.
	
	In both cases, the wizard only accepts passwords up to 14 characters long. Any
	additional characters are truncated.
	
	MORE INFORMATION
	================
	
	The Migration Wizard was created for earlier versions of the operating system
	(Microsoft Windows NT Server 4.0 and earlier), which had hard limits of
	14-character passwords. Windows 2000 Server accepts passwords of up to 127
	characters.
	
	This behavior is by design.
	
	Additional query words: mailmig; win2000
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange400SP1 kbExchange400SP2 kbExchange400SP3 kbExchange400SP4 kbExchange400SP5
	Version           : winnt:4.x,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
