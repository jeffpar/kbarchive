---
layout: page
title: "Q198709: XADM: Client Cannot Enroll in Exchange Server 5.0 KMS"
permalink: kb/198/Q198709/
---

## Q198709: XADM: Client Cannot Enroll in Exchange Server 5.0 KMS

	Article: Q198709
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The user cannot enroll in Exchange Server 5.0 Key Management Server (KMS) after
	security is revoked.
	
	If a user is enabled to participate in advanced security, and does not enroll on
	the client side before the administrator revokes that user, the user will never
	be able to enroll. The user will be unable to enroll in advanced security, even
	after the administrator recovers the keys.
	
	CAUSE
	=====
	
	The problem is that the .ini file that contains the user's keys is missing the
	NumSCerts component and gets marked as being in the "Recovery" state, when in
	fact the record should be in the "New" state.
	
	WORKAROUND
	==========
	
	On the KMS, the security database is a collection of .ini files. The files are
	located in the Security\Mgrent\Clients folder and look like Mxclfr4zqvktn.ini.
	To find the correct .ini file for the mailbox, use Global Regular Expression
	Print (GREP, a POSIX-based tool included in the Windows NT Resource Kit) or a
	utility similar to it. The file needs to have the "State = 4" changed to "State
	= 1". This will set the record back to the "Undefined" state. The user's mailbox
	will then be able to "Enable," and the user should be allowed to fully enroll in
	the KMS.
	
	Upgrading to Exchange 5.5
	-------------------------
	
	The software that upgrades the KMS database is able to handle this issue. Once
	the upgrade has taken place, recover the mailbox, and the user will be able to
	fully enroll.
	
	Additional query words: security
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
