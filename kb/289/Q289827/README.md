---
layout: page
title: "Q289827: XFOR: Permission Required to Migrate Lotus Notes Mailboxes"
permalink: kb/289/Q289827/
---

## Q289827: XFOR: Permission Required to Migrate Lotus Notes Mailboxes

	Article: Q289827
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	- Microsoft Exchange 2000 Enterprise Server 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Migration Wizard for Exchange Server 5.5 and Exchange 2000 to
	migrate Lotus Notes users to Exchange Server 5.5 and Exchange 2000, you may
	receive the following error message:
	
	  You do not have the required access to migrate user 'user/org'. If you
	  continue, the user will not be migrated.
	
	CAUSE
	=====
	
	When you migrate the user, you need to specify a Notes ID. The Migration Wizard
	uses this certain user's permission to access and migrate Notes users. If this
	user does not have the permission to access other mailboxes, the error occurs.
	
	By default, in Lotus Notes:
	
	- Users have full permissions on their mailbox.
	
	- The home server also has full permissions on the users' mailbox.
	
	- All other users (including administrator) do not have any permissions.
	
	RESOLUTION
	==========
	
	Grant the Notes ID you use to migrate at least "Reader" permission on each
	user's Notes mailbox that you plan to migrate.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv kbExchange2000EntServ kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	
