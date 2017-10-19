---
layout: page
title: "Q200062: XFOR: Hide Doesn't Remove User From MS Mail Global Address List"
permalink: /kb/200/Q200062/
---

## Q200062: XFOR: Hide Doesn't Remove User From MS Mail Global Address List

	Article: Q200062
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 05-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Exchange Server administrator hides a user who participates in directory
	synchronization (dirsync), the user is not removed from the Microsoft Mail (MS
	Mail) global address list. If the administrator uses the Hide From Address Book
	option in the user's Advanced property page, the user is still not removed from
	the global address list.
	
	This problem does not occur if a new user is created and hidden before dirsync
	occurs. In this case, the user is not propagated to the MS Mail postoffice
	global address lists.
	
	CAUSE
	=====
	
	The Hide From Address Book option does not create a delete transaction for the
	hidden user.
	
	WORKAROUND
	==========
	
	Use one of the following three options to delete a user from the MS Mail global
	address list:
	
	- Lower the trust level of the export container. When you alter the trust level
	  on the dirsync export container, a full replace transaction
	  (Rpcm:Exchnet/Exchpo) is sent to the MS Mail postoffices. The replace
	  transaction consists of a delete transaction of all the users in the
	  Recipient container, followed by an add transaction for all nonhidden users.
	  You must do this for all the users in the container, because you cannot send
	  an individual delete transaction.
	
	- Select the Export on Next Cycle option for the requestor.
	
	- On the MS Mail postoffice, start the MS Mail Administrator program, select
	  Config, select Dirsync, select Requestor, and then select Import.
	
	NOTE: If the MS Mail postoffice is the dirsync server, the third option above is
	not available.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
