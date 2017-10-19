---
layout: page
title: "Q178757: XADM: Store Logs Error 1203 When You Delete a Mailbox"
permalink: /kb/178/Q178757/
---

## Q178757: XADM: Store Logs Error 1203 When You Delete a Mailbox

	Article: Q178757
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you delete a mailbox that was created but never used, the Microsoft
	Exchange Server Information Store (IS) service logs the following error to the
	event log:
	
	  Event ID: 1203
	  Source:    ExchangeIS Private
	  Type: Error
	  Category: General
	
	  Failed to delete the mailbox of
	   /o=Microsoft/ou=DOMAIN/cn=Recipients/cn=MyMailBox  with    error
	   0x8004010f.
	
	NOTE: Error 0x8004010f is Mapi Error MAPI_E_NOT_FOUND
	
	CAUSE
	=====
	
	Because a user never logged on to the mailbox and never received mail, the
	database entries for the user were never created. When Exchange Server attempts
	to delete the mailbox, the system attempts to locate the database entries, but
	no records are found and the MAPI_E_NOT_FOUND error is reported. This error was
	not logged previously.
	
	WORKAROUND
	==========
	
	When the symptoms occur as described above, the error can safely be ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
