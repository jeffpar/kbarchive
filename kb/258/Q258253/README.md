---
layout: page
title: "Q258253: XADM: How to Set Up Auto-Naming Guidelines for Administrators"
permalink: /kb/258/Q258253/
---

## Q258253: XADM: How to Set Up Auto-Naming Guidelines for Administrators

	Article: Q258253
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 07-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Exchange Server Administrator program, a user can set a default
	auto-naming policy to generate display and alias names for mailboxes and custom
	recipients. When you set these policies in the Administrator program, they are
	stored for each Microsoft Windows NT domain user who opens the Administrator
	program on a given system.
	
	To view the auto-naming settings in the Administrator program, click Options on
	the Tools menu, and then click the Auto Naming tab.
	
	MORE INFORMATION
	================
	
	Because the auto-naming policies are stored for each Windows NT domain user that
	opens the Administrator program on a given system, it can be difficult to
	maintain an enterprise standard for these settings. These difficulties increase
	if you change these policies from the default values. To ensure that the
	enterprise standards are maintained when generating display names and aliases,
	you can modify the registry by using Windows NT logon scripts or by importing a
	registry import (.reg) file that contains these settings.
	
	To create a registry import file, copy the following text to a notepad (text)
	document, and then rename the file to Exadmin.reg:
	
	  
	
	  Windows Registry Editor Version 5.00
	
	  [HKEY_CURRENT_USER\Software\Microsoft\Exchange\MSExchangeAdminCommon]
	  "DNGAutotextFormat"="%First %Last"
	  "ANGAutotextFormat"="%First%1Last"
	
	DNGAutotextFormat refers to the generation of the display name of a user mailbox
	or custom recipient.
	
	ANGAutotextFormat refers to the generation of the alias of a user mailbox or
	custom recipient.
	
	You can implement the Exadmin.reg file by using logon scripts for Exchange Server
	administrators in the organization or by having administrators import the
	Exadmin.reg file manually.
	
	Additional query words: proxy addresses alias names
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
