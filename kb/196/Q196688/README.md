---
layout: page
title: "Q196688: XADM: Move Server Wizard Does Not Warn of Encrypted Mail"
permalink: kb/196/Q196688/
---

## Q196688: XADM: Move Server Wizard Does Not Warn of Encrypted Mail

	Article: Q196688
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Move Server Wizard will not warn the administrator that there is encrypted
	mail remaining on the Exchange Server computer. This article summarizes the
	possible affects of not decrypting all messages in the mailboxes being moved.
	
	MORE INFORMATION
	================
	
	Because encryption is done by the client, the Move Server Wizard is not able to
	determine if encrypted mail exists on the client, and because the keys are
	stored on the client, there is NO loss of keys. What is lost, however, is the
	ability to recover a key if the mailbox is re-enrolled in advanced security
	after the move. Therefore, to prevent the possible loss of a key in the future,
	users should decrypt their mail before the move. This is necessary because the
	process of issuing a new key will overwrite any old key, thus losing the old
	key. It is recommended that decryption be done before the move process begins,
	however, as long as the items are decrypted before the user is re-enrolled, then
	the user(s) will not lose mail.
	
	The Move Server Wizard's documentation should be read and understood thoroughly
	before proceeding with the process. An "I Understand" tab has been added to flag
	the importance of the wizard's documentation, so it should not be clicked until
	all documentation has been read and understood.
	
	Additional query words: msw
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
