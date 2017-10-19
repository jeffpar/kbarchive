---
layout: page
title: "Q186740: XFOR: cc:Mail Migration Fails with Event ID 1004"
permalink: /kb/186/Q186740/
---

## Q186740: XFOR: cc:Mail Migration Fails with Event ID 1004

	Article: Q186740
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to migrate users' mailboxes from a Lotus cc:Mail postoffice
	using the Microsoft Exchange Migration Wizard, the following Event ID may be
	received in the application event log:
	
	  Event ID: 1004
	  Source: MSExchangeMig
	  CCMail: EXPORT.EXE error exporting user 'lastname, firstname'
	   - Bad Parameters on the command line. Error with call to the MS-DOS
	  version of cc:Mail EXPORT.EXE. See document "Migrating from Lotus
	  cc:Mail" for more information about using EXPORT.EXE.
	  Command Line 'Export /P******** /BATCH /N"lastname, firstname"
	  /Dc:\ccdata\ /DATE/1 /FILES/MACBIN2 /ITEMSIZE /FOLDER /MSGS/ALL
	  /@c:\TEMP\sd1.2'.
	
	CAUSE
	=====
	
	The cc:Mail postoffice has the Pre-expired Passwords option enabled.
	
	WORKAROUND
	==========
	
	To successfully migrate mailboxes from a cc:Mail postoffice, the Pre- expired
	Passwords feature must be disabled. Check to ensure that this option has been
	disabled in the cc:Mail Administration Program.
	
	MORE INFORMATION
	================
	
	The Pre-expired Passwords option on the cc:Mail postoffice allows an
	administrator to reset a mailbox's password and then require the user to change
	his or her password at the next logon. During the migration process, the
	Exchange Migration Wizard resets the password on each mailbox selected for
	migration. The new password specified by the Migration Wizard is then used
	during the Export process to migrate the mailbox. If this Pre-expired Passwords
	feature is enabled, the mailbox expects the password to be changed at the next
	logon attempt after modifying the password.
	
	Additional query words: 1004 migrate ccmail
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
