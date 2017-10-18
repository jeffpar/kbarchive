---
layout: page
title: "Q166524: XADM: Offline Defrag Fails with Error -1605"
permalink: kb/166/Q166524/
---

## Q166524: XADM: Offline Defrag Fails with Error -1605

	Article: Q166524
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When performing an offline defragmentation on one of the Microsoft Exchange
	Server database files (Priv.edb, Pub.edb, or Dir.edb) using Edbutil.exe, the
	process terminates with the following error message:
	
	  -1605 ((0xfffff9bb) = JET_errKeyDuplicate).
	
	CAUSE
	=====
	
	Edbutil stops when it encounters a duplicate key on Mailboxes, Message
	Tombstones, and Folder Tombstones.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: crash hang JET error db
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
