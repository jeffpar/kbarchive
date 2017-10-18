---
layout: page
title: "Q169536: XFOR: cc:Mail DB8 Migration Creates Randomized Password"
permalink: kb/169/Q169536/
---

## Q169536: XFOR: cc:Mail DB8 Migration Creates Randomized Password

	Article: Q169536
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Exchange Migration Wizard to migrate cc:Mail users to Exchange
	Server, the Exchange Migration Wizard sets the users old cc:Mail postoffice
	passwords to random strings and stores them in the password list. The password
	list will show the current passwords.
	
	CAUSE
	=====
	
	The Exchange Migration Wizard selects the randomized passwords by design. This
	is to prevent users from continuing to use their old cc:Mail accounts. It is
	unlikely that users will ever need their cc:Mail accounts again.
	
	In the event of some sort of migration failure, along with a failure in the
	original backup of the cc:Mail postoffice, the password list will serve as the
	key to getting back into the mailboxes. If users need their old cc:Mail
	accounts, an administrator can look up the cc:Mail passwords in the password
	list.
	
	Additional query words: ccmail migration db8 random characters migration
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	
	=============================================================================
	
