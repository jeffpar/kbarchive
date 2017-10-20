---
layout: page
title: "Q182715: XADM: Store Stops in STORE!COLLECT::EcImportHierChange"
permalink: /kb/182/Q182715/
---

## Q182715: XADM: Store Stops in STORE!COLLECT::EcImportHierChange

{% raw %}

	Article: Q182715
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server information store stops with a Dr. Watson error in
	STORE!COLLECT::EcImportHierChange.
	
	The following is an example of what the failing call stack may look like in the
	Drwtsn32.log:
	
	Function Name
	STORE!COLLECT::EcImportHierChange+0x1e1(0x08C785AC, 0x00566467,
	0x00000006, 0x08c944bc,  0x00000008)
	STORE!EcImportHierChgOp+0x87(0x08C94514, 0x08c9450c, 0x0050e25b,
	0x00000006, 0x08c944bc,  0x00000008, 0x08CD9C4C)
	STORE!EcImportHierChange+0xcb(0x08C94514, 0x0040f9a2, 0x00000000,
	0x08c944bc)
	STORE!EcRpc+0xd42(0x00000000, 0x0040EC1E, 0x011efb0c, 0x08c94514)
	STORE!EcDoRpc+0x3e(0x77E11841, 0x06879FC0, 0x08D1593C, 0xbbc4)
	RPCRT4!Invoke+0x28
	RPCRT4!NdrStubCall2+0x745
	RPCRT4!NdrStubCall2+0x716
	RPCRT4!NdrStubCall2+0x47e
	RPCRT4!DispatchToStubInC+0x34
	RPCRT4!?DispatchToStubWorker@RPC_INTERFACE@@AAEJPAU_RPC_MESSAGE@@IPAJ@Z+0xb
	0
	RPCRT4!?DispatchToStub@RPC_INTERFACE@@QAEJPAU_RPC_MESSAGE@@IPAJ@Z+0x41
	RPCRT4!?ReceiveOriginalCall@OSF_SCONNECTION@@QAEHPAUrpcconn_common@@I@Z+0x1
	4b
	RPCRT4!?DispatchPacket@OSF_SCONNECTION@@QAEHPAUrpcconn_common@@IPAVOSF_ADDR
	ESS@@@Z+0x91
	RPCRT4!?ReceiveDirect@OSF_SCONNECTION@@QAEXXZ+0xb6
	RPCRT4!?RecvDirectWrapper@@YGXPAVOSF_SCONNECTION@@@Z+0x9
	RPCRT4!?BaseCachedThreadRoutine@@YGXPAVCACHED_THREAD@@@Z+0x1c
	RPCRT4!?ThreadStartRoutine@@YGJPAVTHREAD@@@Z+0x17
	KERNEL32!BaseThreadStart+0x51
	
	CAUSE
	=====
	
	This is caused when a user with a corrupt offline storage file (OST) attempts to
	synchronize with the Microsoft Exchange Server information store.
	
	
	WORKAROUND
	==========
	
	To correct this problem, try to determine which user has the corrupt OST file.
	Have the user delete the OST file and create a new OST file.
	
	After you apply the fix described in the STATUS section below, the information
	store will no longer stop responding when this particular user tries to
	synchronize his or her OST file. Instead, the user will receive an error message
	that synchronization failed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : 5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
