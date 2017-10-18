---
layout: page
title: "Q179013: XADM: IS Stops in _mapises&#92;notifysrv.cxx During Shutdown"
permalink: kb/179/Q179013/
---

## Q179013: XADM: IS Stops in _mapises&#92;notifysrv.cxx During Shutdown

	Article: Q179013
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Information Store crashes during shutdown. The
	call stack is similar to the following:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0179ffa0  0046d831  00000000 0110f680 0179ffec
	  STORE!ScanForOutstandingNotifications+0xe3
	  (FPO: [ebp 00000005] [0,2,4]) [ notifsrv.cxx @ 713 ]
	
	CAUSE
	=====
	
	The Microsoft Information Store has freed the shared block of memory and set the
	global pointer for it to NULL (allocated for use with the NT Performance Monitor
	data) before this notification thread has been shutdown. Once this thread
	attempts to access this block of memory using the NULL pointer, an access
	violation occurs.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Release the memory and free the pointer only after the notification thread
	  has completely shutdown.
	
	NOTE: Service Pack 1 must be applied to Microsoft Exchange Server 5.0 prior to
	applying this fix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
