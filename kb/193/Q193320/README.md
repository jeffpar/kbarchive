---
layout: page
title: "Q193320: XADM: Store AV When Client Accesses Public Folder Replica"
permalink: /kb/193/Q193320/
---

## Q193320: XADM: Store AV When Client Accesses Public Folder Replica

{% raw %}

	Article: Q193320
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store may generate an access violation
	when an Exchange client accesses a public folder replica. The following
	information may be found on the stack when the access violation occurs:
	
	  >kb
	   FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	   0805f574  77f70a3e  0017d268 00565e6c 0000002b KERNEL32!MapCase+0x62
	   0805f5a4  020b791f  00000404 00000100 00565e6c KERNEL32!LCMapStringW+0x1e0
	   0805f5d4  020b799c  00000404 00010000 00565e6c STORE!EcMakeSortKey+0x18d
	   0805f604  020b7d1c  00000404 00010000 0056ef84 STORE!EcMakeSortKey+0x71
	   0805f63c  020b801e  0056b188 00000404 0805f7a0
	   STORE!TWIR::EcStreamSubstringUnicode+0x3c
	   0805f65c  020b75fe  0056b188 00000404 0805f7a0
	   STORE!TWIR::EcRestrictContent+0xdd
	   0805f680  020b7599  0056b184 00000404 0805f7a0
	   STORE!TWIR::EcRestrictHier+0xc9
	   0805f6a4  020b7520  0057e264 00000404 0805f7a0
	   STORE!TWIR::EcRestrictHier+0x64
	   0805f6c4  020ca356  0057e264 ffffffff 00000000 STORE!TWIR::EcFindRow+0xb5
	   0805f7b8  020c9c46  00000000 0057e264 00000000
	   STORE!VMSG::EcSlowFindRow+0x1ae
	   0805f7dc  020cfdb5  00000000 0057e264 00000000 0x020c9c46
	   0805f814  021089e0  0940a36c 00000012 00000000 STORE!EcFindRowOp+0xbe
	   0805fa90  02003496  0940a36c 0805fac8 00000001 STORE!EcFindRow+0xfb
	   0805faf8  02003cff  001c56b0 005752bc 0805fb1c STORE!EcRpc+0x8dd
	   0805fb20  77e8eb7a  001c56b0 005752bc 001ccc86 STORE!EcDoRpc+0x3d
	   0805fb40  77e8ea3b  02003cc2 0805fd18 00000004
	   RPCRT4!NdrCallServerManager+0x81
	   0805fe28  77e8e876  00000000 00000000 0805ff10 RPCRT4!NdrStubCall+0x1bf
	   0805fe40  77e61438  0805ff10 0805fec8 00000000 RPCRT4!NdrServerCall+0x15
	   0805fe7c  77e61374  02002b3a 0805ff10 0805ff3c
	   RPCRT4!DispatchToStubInC+0x34
	   0805fed0  77e6162d  0805ff10 00000000 0805ff3c
	  RPCRT4!?DispatchToStubWorker@RPC_INTERFACE@@AAEJPAU_RPC_MESSAGE@@IPAJ@Z+0xd
	  6
	   0805fef0  77e6c005  0805ff10 00000000 0805ff3c
	   RPCRT4!?DispatchToStub@RPC_INTERFACE@@QAEJPAU_RPC_MESSAGE@@IPAJ@Z+0x5f
	   0805ff40  77e68657  001ccb18 00000198 77e91180
	  RPCRT4!?ReceiveOriginalCall@OSF_SCONNECTION@@QAEHPAUrpcconn_common@@I@Z+0xd
	  b
	   0805ff60  77e6acb1  001ccb18 00000198 00166110
	  RPCRT4!?DispatchPacket@OSF_SCONNECTION@@QAEHPAUrpcconn_common@@IPAVOSF_ADDR
	  ESS@@@Z+0x1f8
	   0805ff8c  77e6aa73  77e6493b 00166110 00161b88
	   RPCRT4!?ReceiveLotsaCalls@OSF_ADDRESS@@QAEXXZ+0x7f
	   0805ff90  77e6493b  00166110 00161b88 00166920
	   RPCRT4!?ReceiveLotsaCallsWrapper@@YGXPAVOSF_ADDRESS@@@Z+0x9
	   0805ffac  77e64a03  001668f8 00161b88 77f46c2e
	   RPCRT4!?BaseCachedThreadRoutine@@YGXPAVCACHED_THREAD@@@Z+0x1d
	   0805ffb8  77f46c2e  00166920 00161b88 00161b88
	   RPCRT4!?ThreadStartRoutine@@YGJPAVTHREAD@@@Z+0x16
	   0805ffec  00000000  77e649ed 00166920 00000000
	   KERNEL32!BaseThreadStart+0x61
	
	CAUSE
	=====
	
	The problem results from an improperly installed code page.
	
	WORKAROUND
	==========
	
	To work around the problem, remove and re-install any code pages on the problem
	computer. For information about how to do this, please see Knowledge Base
	article Q151701, XADM: How to Manually Add Code Pages for Mixed Languages.
	
	Additional query words: crash dump is private public store.exe
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
