---
layout: page
title: "Q186742: XFOR: MS Mail Migration Fails With EventID 7017"
permalink: /kb/186/Q186742/
---

## Q186742: XFOR: MS Mail Migration Fails With EventID 7017

{% raw %}

	Article: Q186742
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
	
	When performing a two-step migration from Microsoft Mail for PC Networks to
	Exchange Server, selecting to migrate a user's mail and address book information
	in the Migration Wizard may cause the migration to fail with the following Event
	ID:
	
	  EventID: 7017
	  Source: MSExchangeMig
	  Type: Error
	  Category: None
	  Description:
	
	  Could not log onto the Message Store for Account: <username>
	
	CAUSE
	=====
	
	This error will occur when the MS Mail user already has an existing Exchange
	Server mailbox with an alias name that is different than the MS Mail mailbox
	name.
	
	WORKAROUND
	==========
	
	When performing a two-step migration from MS Mail to Exchange Server while the
	user already has an existing Exchange Server mailbox, the following steps need
	to be taken:
	
	1. Using a text editor or Excel, edit the Mode field in the .csv file so that
	  the field is blank. This, in effect, performs an Update function.
	
	2. Edit the Common-Name field in the .csv file so that the name matches the
	  Directory Name for the existing mailbox. (Usually the alias name is the
	  directory name; checking Raw Mode Properties will confirm.)
	
	  WARNING: Using the raw mode of the Exchange Server Administrator program
	  (admin/r) incorrectly can cause serious problems that may require you to
	  reinstall Microsoft Windows NT Server and/or Microsoft Exchange Server.
	  Microsoft cannot guarantee that problems resulting from the incorrect use of
	  raw mode can be solved. Use raw mode at your own risk.
	
	  You can check the Raw Properties of a mailbox by starting the Microsoft
	  Exchange Administrator program in Raw Mode. To do this:
	
	  a. Start the Microsoft Exchange Server Administrator program in raw mode by
	     typing the following at a command prompt:
	
	  admin/r
	
	  b. Select the mailbox and from the File menu, click Raw Properties.
	
	3. During the second step of the two-step migration, in the dialog that comes up
	  after choosing the .csv file, clear the Information to Create Mailboxes check
	  box.
	
	4. If asked to create a Windows NT account, do not create one.
	
	Following these steps will allow you to migrate a user's mail and address book
	information from an MS Mail (PC) account to an existing Exchange Server
	mailbox.
	
	
	Additional query words: migration two-step wizard
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
