---
layout: page
title: "Q149362: XADM: Using Local Groups to Assign Permissions in Exchange"
permalink: /kb/149/Q149362/
---

## Q149362: XADM: Using Local Groups to Assign Permissions in Exchange

	Article: Q149362
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT local groups cannot be used for purposes of permission assignment to
	Microsoft Exchange Server site objects unless all Microsoft Exchange Server
	computers, the local group, the user account to be added to the local group, and
	the machine account that the Administrator program is run on were all created
	within the same domain as the Exchange Server computers that you are trying to
	administer. Note that adding a two-way trust between multiple domains cannot be
	used as a workaround. All accounts involved have to be in the same domain before
	you will be able to use local groups to administer any Exchange Server objects.
	
	If any of the above mentioned accounts are not in the same domain as the Exchange
	Server computer you are trying to administer, you may receive the following
	error:
	
	  "You do not have the permissions required to complete the operation:
	  "Microsoft Exchange Directory ID no: DS_E_INSUFFICIENT_ACCESS_RIGHTS"
	
	MORE INFORMATION
	================
	
	In Exchange Server 4.0, the user and machine accounts did not have to be in the
	same domain. They could be located in a second domain, and the user account
	could just be added to the local group in the Exchange Server computer's domain.
	However, this had the potential of exposing problems when the data is written to
	the remote Directory Service. With Exchange Server 5.0 and 5.5 the architecture
	has been changed to require that all accounts involved have to be in the same
	domain as the Exchange Server computer. Local groups that do not have all the
	accounts in the Exchange Server computer's domain will not be supported in
	Exchange Server versions 5.0 and 5.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
