---
layout: page
title: "Q153121: XFOR: Migrating from WGPO to Exchange"
permalink: /kb/153/Q153121/
---

## Q153121: XFOR: Migrating from WGPO to Exchange

	Article: Q153121
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information about migrating users from a Microsoft Windows
	for Workgroups postoffice (WGPO) to Microsoft Exchange Server.
	
	MORE INFORMATION
	================
	
	Migrating users to Microsoft Exchange Server from a WGPO is the same as
	migrating users from a Microsoft Mail 3.x postoffice. The basic architecture of
	a WGPO and a Microsoft Mail postoffice is the same; therefore, using the
	Microsoft Exchange Migration Wizard against a WGPO to migrate users to Microsoft
	Exchange works the same way with Windows for Workgroups as it does with
	Microsoft Mail.
	
	Two things to be aware of when migrating from a WGPO:
	
	- When you use the Migration Wizard, an administrator account needs to be
	  selected. With Microsoft Mail 3.x, the account named ADMINISTRATOR was the
	  primary administrator account. With a WGPO, a user account with
	  administration rights is the primary account. This user account is the
	  account that is used as the administrator account by the Microsoft Exchange
	  Migration Wizard.
	
	- With a WGPO, the default location for a user's mail message file(MMF) is the
	  user's local hard disk drive. Migrate the user to Microsoft Exchange and then
	  import the data from the local MMF to the Microsoft Exchange Server-based
	  inbox or to their local Personal Information Store (PST) file.
	
	For details on migrating Microsoft Mail users to Microsoft Exchange, see chapter
	4 of the Microsoft Exchange Migration Guide. Also see the document on the
	Microsoft Exchange Server compact disc about Migrating Microsoft Mail users to
	Exchange. The document can be found with the following path:
	
	  <cd path>\migrate\docs\msmailpc.rtf
	
	Additional query words: migration workgroup wgpo
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
