---
layout: page
title: "Q197492: XADM: Information Store Crashes Processing Rules in Public Store"
permalink: kb/197/Q197492/
---

## Q197492: XADM: Information Store Crashes Processing Rules in Public Store

	Article: Q197492
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During normal operation, the Microsoft Exchange information store may quit
	unexpectedly and display an access violation error message. If the correct
	Windows NT and Exchange Server symbols are installed, the resulting Dr. Watson
	log may have a stack dump similar to the following:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  03e1fc1c  005f5279  00001048 00000000 0000000e STORE!FreeLinkedFn+0x26
	  03e1fcd4  005f30a7  0c9cdc30 00000009 03e1fd78
	   STORE!EcRulentryFromRulesData+0x919
	  03e1fd90  005f383f  03e1ff08 03e1ff28 0012f3cc STORE!EcRulesSync+0x147
	  03e1ff48  005bd845  00000001 00000000 00000000 STORE!FRulesSync+0x3cf
	  03e1ffb8  77f04f3e  00000000 00000219 0012f3cc STORE!EcProcessTask+0x2b5
	  03e1ffec  00000000  00000000 00000000 00000000
	   KERNEL32!BaseThreadStart+0x51
	
	CAUSE
	=====
	
	When processing the actions of a particular rule set on a public folder, the
	information store encountered an error. A problem in the code to handle this
	error condition resulted in memory being freed twice for a particular pointer.
	This double free caused the access violation and the STORE process to quit.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	  File Name    Version
	  ---------------------
	  Gapi32.dll   5.5.2511
	  Mdbmsg.dll   5.5.2511
	  Store.exe    5.5.2511
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: crash hang GPF general protection fault
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
