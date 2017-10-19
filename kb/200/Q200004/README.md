---
layout: page
title: "Q200004: XFOR: Unable to Log On to Migrated Mailbox"
permalink: /kb/200/Q200004/
---

## Q200004: XFOR: Unable to Log On to Migrated Mailbox

	Article: Q200004
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes when administrators migrate users from Microsoft Mail to Exchange
	Server, the mailboxes migrate with no errors, but neither administrators nor
	users can log on to the new Exchange Server mailboxes. This occurs with both
	single-step and two-step migration, where administrators are telling the
	Migration wizard to make passwords from the alias names.
	
	Usually, the administrator must enter a new password under User Manager for
	Domains in order to access the mailboxes.
	
	There are no problems with the password generation of the Migration wizard. The
	common cause for this issue is a minimum password length set for the Windows NT
	domain, which is a larger number than the alias name of the migrated user. In
	these cases, the Migration wizard pads the password with lowercase "x"s. The
	password can be found in the Accounts.password file.
	
	MORE INFORMATION
	================
	
	An example is a mailbox whose alias name is three letters long, like the
	initials of the user. This mailbox is migrated to Exchange Server, whose domain
	has a minimum password length of four. When the administrator (or user) attempts
	to log on to the new mailbox, he or she is denied with a "password incorrect"
	error message. To get into the mailbox, the administrator must either reset the
	password under User Manager for Domains, or enter the password with enough
	following "x"s to match the minimum password.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
