---
layout: page
title: "Q169693: XADM: Private Byte Memory Leak in Store.exe"
permalink: /kb/169/Q169693/
---

## Q169693: XADM: Private Byte Memory Leak in Store.exe

	Article: Q169693
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Over time, the Windows NT system responsiveness starts to appears sluggish and
	clients may report a gradual decrease in system performance.
	
	You may observe that the amount of Private Bytes for Store.exe increases over
	time. You can track this by monitoring the following counters in the Windows NT
	Performance Monitor:
	
	  Object: Process
	  Instance: STORE
	  Counter: Private Bytes
	
	CAUSE
	=====
	
	Under certain conditions, when a Microsoft Exchange or Outlook client sets focus
	to a message folder on the Microsoft Exchange Server that has a filter defined,
	a small number of private bytes are leaked.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: leak performance gradual high paging activity
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
