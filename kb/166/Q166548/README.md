---
layout: page
title: "Q166548: XADM: Administrators Cannot Add Accounts to Private IS"
permalink: /kb/166/Q166548/
---

## Q166548: XADM: Administrators Cannot Add Accounts to Private IS

	Article: Q166548
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are an administrator of Microsoft Exchange Server version 5.0, when you
	try to add Windows NT accounts to the private information store with the Admin
	Role the following error message appears:
	
	  Microsoft Exchange Administrator
	  An internal processing error has occurred: the attribute or value
	  exists.
	  Try restarting the Administrator program or the Microsoft Exchange
	  Server computer, or both.
	  Microsoft Exchange Directory
	  ID no: DS_E_ATTRIBUTE_OR_VALUE_EXISTS
	
	CAUSE
	=====
	
	Microsoft Exchange Server is not reading the Windows NT security descriptor for
	the store correctly when a modification is made.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	
	=============================================================================
	
