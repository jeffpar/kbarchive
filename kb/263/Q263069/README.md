---
layout: page
title: "Q263069: XADM: Dr. Watson in Exchange Server Information Store"
permalink: kb/263/Q263069/
---

## Q263069: XADM: Dr. Watson in Exchange Server Information Store

	Article: Q263069
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server information store (Store.exe) may stop working, and the
	following information may be found in the Dr. Watson log file, Drwtsn32.log:
	
	  EXCHMEM!ExchHeapFree+0x15
	  LIBXDS!memmgr__free+0xf
	  LIBXDS!OMP_idesc_struct__deallocate+0xad
	  LIBXDS!OMP_iobject_struct__deallocate+0x28
	  LIBXDS!OMP_idesc_struct__get_sub+0x8d
	  LIBXDS!OMP_idesc_struct__get+0x89
	  LIBXDS!OMP_iobject_struct__get+0x16e
	  LIBXDS!OMP_idesc_struct__get_sub+0x7c
	  LIBXDS!OMP_idesc_struct__get+0x89
	  LIBXDS!OMP_iobject_struct__get+0x16e
	  LIBXDS!spub__spub+0x71
	  LIBXDS!pri__get+0xba
	  LIBXDS!_OMP_get+0x1b7
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	WORKAROUND
	==========
	
	A short term workaround is to restart the Information Store service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550sp4Fix 
	Component         : MDB
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
