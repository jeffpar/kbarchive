---
layout: page
title: "Q162833: XFOR: Event 283 May Occur When Running the Migration Wizard"
permalink: /kb/162/Q162833/
---

## Q162833: XFOR: Event 283 May Occur When Running the Migration Wizard

	Article: Q162833
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5kbbuglist
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Microsoft Exchange Migration Wizard to migrate accounts to a
	Microsoft Exchange Server computer, the following error may be generated in the
	Application event log
	
	  Event ID: 283
	  Source: MSExchangeMIGDS
	  Description: Could not remove object <UserID> because the directory
	  service reported the following error: Changes cannot be written to
	  this directory object. Try connecting to a Microsoft Exchange
	  Server computer in the same site as this object.
	
	where <UserID> is the ID of a user who already exists on the Microsoft
	Exchange server.
	
	MORE INFORMATION
	================
	
	This error may occur if you have insufficient rights or permissions to the
	Microsoft Exchange Directory. In this case, make sure that you are logged into
	the Windows NT domain as a user with sufficient access to the Microsoft Exchange
	Directory.
	
	This error may also occur if an existing mailbox or custom recipient is homed on
	one server in a site and an attempt is made to migrate an account to a server in
	a different site. Microsoft Exchange will attempt to remove the existing
	recipient from the target server and replace it with a new mailbox for the
	migrated account. Since the recipient does not actually exist on the target
	server (it is homed on another server in another site), it cannot be removed. To
	migrate these users, it will be necessary to remove the existing recipients from
	their home server. To do this, perform the following steps:
	
	1. Log on to the Windows NT domain using the Microsoft Exchange Service Account
	  or an account that has administrative permissions for the Microsoft Exchange
	  Server.
	
	2. Use the Microsoft Exchange Server Administrator program to remove the custom
	  recipient or mailbox object for the user that you are trying to migrate from
	  the appropriate recipients container.
	
	3. Allow time for directory replication to occur between the recipient's home
	  server and the target server. This will remove the user from the Global
	  Address List (GAL) of the target server. If you wish to force directory
	  replication to occur, select the Update Now button located on the General tab
	  of the target server's Directory Service Properties dialog.
	
	4. Run the Microsoft Exchange Migration Wizard again.
	
	Additional query words: XADM
	
	======================================================================
	Keywords          : kbusage exc4 exc5 kbbuglist
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
