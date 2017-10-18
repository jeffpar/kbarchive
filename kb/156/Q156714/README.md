---
layout: page
title: "Q156714: XFOR: Dir-Sync Requestor Updates Not Being Updated Properly"
permalink: kb/156/Q156714/
---

## Q156714: XFOR: Dir-Sync Requestor Updates Not Being Updated Properly

	Article: Q156714
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Exchange Server that is a dir-sync requestor may send improper
	updates to the dir-sync server. This occurs when the requestor is configured to
	send updates and not receive updates. Under these conditions, the ReqTX number
	is not updated although dir-sync transactions have been submitted.
	
	This problem occurs when the Receive Updates option is not selected.
	
	CAUSE
	=====
	
	When the server replies, the Directory Synchronization service (DXA) presumes
	(incorrectly) that there will always be an attachment. When it does not find one
	it goes to the error recovery section of the code, but never updates the status
	information. Thus the dir-sync loop is not complete and further transactions
	cannot be sent to the server.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. On the File menu, click Properties, then click Settings.
	
	2. Select the Receive Updates option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
