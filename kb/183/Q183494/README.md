---
layout: page
title: "Q183494: XCON: Store Access Violates After Upgrade to Exchange 5.0 SP 2"
permalink: kb/183/Q183494/
---

## Q183494: XCON: Store Access Violates After Upgrade to Exchange 5.0 SP 2

	Article: Q183494
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Following the Service Pack 2 upgrade of an Exchange Server 5.0 computer, the
	information store service may stop with an access violation. This problem often
	occurs shortly after the Internet Mail Service is started.
	
	CAUSE
	=====
	
	While processing Internet mail messages, the heap can be corrupted by a memory
	allocation error. Later operations on the corrupt heap result in an access
	violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0,
	with SP2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	
	Additional query words: crash drwatson drwtsn32 outbound inbound SMTP IMC administrator dr watson RtlAllocateHeapSlowly RtlAllocateHeap XADM XFOR
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
