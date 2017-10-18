---
layout: page
title: "Q192053: XADM: Information Store Access Violates When Freeing Memory"
permalink: kb/192/Q192053/
---

## Q192053: XADM: Information Store Access Violates When Freeing Memory

	Article: Q192053
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix exc5 exc55
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During normal operation the Microsoft Exchange Information Store may terminate
	unexpectedly with an access violation. If the correct Windows NT and Exchange
	Server symbols are installed the resulting Dr. Watson log may have a stack dump
	similar to the following:
	
	  function: RtlEnterCriticalSection
	  77f67410 648b0d18000000   move   cx,fs:[00000018]
	   fs:00000018=????????
	  77f67417 8b542404         mov    edx,[esp+0x4]
	   ss:35cfdd07=????????
	  FAULT:
	  77f6741b 837a1400         cmp    dword ptr [edx+0x14],0x0
	   ds:21531e85=????????
	  77f6741f 754f             jnz    RtlEnterCriticalSection+0x60
	   (77f67470)
	  77f67421 f0ff4204         lock   inc dword ptr [edx+0x4]
	   ds:21531e86=????????
	  77f67425 7519             jnz    RtlEnterCriticalSection+0x30
	   (77f67440)
	  77f67427 8b4124           mov    eax,[ecx+0x24]
	   ds:80e7ca06=????????
	  77f6742a 89420c           mov    [edx+0xc],eax
	   ds:21531e85=????????
	  77f6742d c7420801000000   mov    dword ptr [edx+0x8],0x1
	   ds:21531e85=????????
	  77f67434 33c0             xor    eax,eax
	  77f67436 c20400           ret    0x4
	  77f67439 2e8bc0           mov    eax,cs:eax
	  77f6743c 2e8bc0           mov    eax,cs:eax
	  77f6743f 90               nop
	
	*----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  34ddf2fc 10002bb3 2061347f ffffffff 000002c1 00403648
	   ntdll!RtlEnterCriticalSection
	  34ddf38c 100016ae 20613437 00000000 34ddf410 34ddf3e8
	   exchmem!_NULL_IMPORT_DESCRIPTOR
	  34ddf3a0 00403b04 34ddf414 34ddf634 2c0f0c9c 00000000
	   exchmem!MpHeapValidate
	  34ddf3b8 005b5d33 34ddf540 2c0f0c9c 020e0e7c 00000002 store!FreePrv
	  34ddf42c 005b7538 00000002 34ddf62c 34ddf470 34ddf46c
	   store!EcGetCategPrv
	  34ddf4ec 005b7ef2 2d790ff8 00000000 00000000 00000002
	   store!EcBuildHeaderList
	  34ddf5b4 005b88a8 2c0f0c9c 2d790ff8 00000000 00000000
	   store!EcModifyMidFromCateg
	  34ddf69c 004c7c45 2cfe0c9c 020e0e74 00000000 020e0e7c
	   store!EcCategorizeMessage
	  34ddf6d8 0040d89c 020e0e74 020e0e7c 00000000 2ddd0fc8
	   store!EcProcessCategMessageEvent_1128ool_7571e
	  34ddf6fc 0044cf9f 020e0e74 020e0e7c 00000000 2ddd0fc8
	   store!EcSearchMessageEvent
	  34ddf79c 0044c599 00000000 00000000 34ddf7d0 00000000
	   store!RTFHTML::ScPopRTFToken
	  34ddf80c 0056a3ce 00000000 00000061 00000000 00000000
	   store!OMSG::EcSaveChanges
	  34ddf878 005a2b0f 0f0e0f54 020e0e3c 07750e3c 00000001
	   store!EcResolveMsgConflict
	  34ddf924 005a2e79 34ddf944 07750e75 00004000 07750e3c
	   store!OMSG::EcICSConflictCheck
	  34ddf94c 004e6687 34ddf97c 34ddf978 00000000 00000021
	   store!OMSG::EcUpdateICSProps
	  34ddf9b0 0045b747 00000004 00000061 00000000 00000000
	   store!OMSG::EcSaveChanges_9910gs_22p_14862091e
	  34ddf9dc 0045b634 00000000 00000000 00000021 34ddfa1c
	   store!EcSaveChangesMessageOp
	  34ddfa20 004044ce 00000021 00000000 00000006 0021970a
	   store!EcSaveChanges
	  00000006 00000000 00000000 00000000 00000000 00000000 store!EcRpc
	   [omap]
	
	
	CAUSE
	=====
	
	A message saved into a public folder replica does not contain a value for a
	specific property tag. When a user opens the message, modifies it, and tries to
	save it in the public folder, the call to get the value of this property tag
	fails so that no memory is allocated. However, the information store erroneously
	tries to free this block of memory, resulting in the access violation and
	termination of the Store.exe process.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	Additional query words: crash hang GPF
	
	======================================================================
	Keywords          : exc55sp2fix exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
