---
layout: page
title: "Q218127: Migrate User Wizard Does Not Configure Internet Connectivity"
permalink: /kb/218/Q218127/
---

## Q218127: Migrate User Wizard Does Not Configure Internet Connectivity

	Article: Q218127
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.5
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool kbui
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view a user account file, the file may not contain information about
	whether the user can connect to the Internet.
	
	CAUSE
	=====
	
	This issue can occur if you use the Migrate User Wizard to assign or export
	proxy permissions. The Migrate User Wizard does not support this functionality.
	
	RESOLUTION
	==========
	
	To resolve this issue, do not use the use the Migrate User Wizard for this
	purpose, use the User Resource Wizard to grant "Access the Internet"
	permissions.
	
	MORE INFORMATION
	================
	
	In BackOffice Small Business Server (SBS) an administrator can import users from
	another Microsoft Windows NT-based computer by using the Migrate User Wizard.
	This wizard has two execution modes:
	
	- Export Mode
	
	- Import Mode
	
	When you insert SBS CD-ROM number 1, you can choose to export Windows NT user
	accounts and Exchange mailboxes. This creates a text file (the user account
	file) that is used in import mode. Or, an administrator can create the user
	account file manually and then use this file during import mode. On the To Do
	List in the SBS console, the wizard is started in import mode (btuser.exe /i).
	This takes the user account file and creates the Windows NT user accounts and
	Exchange mailboxes on the SBS-based computer.
	
	The following data is not exported from an existing Windows NT or Exchange
	installation to an SBS installation:
	
	- User passwords. When the user account is created, the password is initially
	  set to "abcd12345" (without the quotes). Users should be instructed to
	  manually change their passwords the next time they log on.
	
	- Internet Access Permissions. By default, all users created through the wizard
	  can not use the Internet. This behavior is the same as the Add User Wizard.
	
	- Exchange Distribution Lists. The E-Mail Distribution List Wizard should be
	  used to create the Exchange Distribution Lists.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q268729 SBS: Migrate User Wizard Does Not Set Passwords Correctly
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool kbui 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ450
	Version           : winnt:4.0,4.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
