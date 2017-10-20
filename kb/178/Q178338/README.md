---
layout: page
title: "Q178338: XADM: Information Store Access Violation in hrVerifyAttach"
permalink: /kb/178/Q178338/
---

## Q178338: XADM: Information Store Access Violation in hrVerifyAttach

{% raw %}

	Article: Q178338
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Information Store stops responding during outbound conversion of a
	multipart/report message with an embedded message. When the full fidelity of the
	message is verified, the embedded message and the other attachment are received
	in the wrong order from the store.
	
	CAUSE
	=====
	
	The code that specifically deals with ICTYPE_MESSAGE attempts to extract the
	next content node from the embedded message. Because in this instance it is
	really an attachment, this pointer is null and the Information Store stops
	responding, dereferencing a null pointer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the fix applied, this is fixed in part by verifying there is a
	message/rfc822 instead of attempting full fidelity on all message/content
	types.
	
	If you are experiencing this problem, the call stack shown in the Dr.Watson dump
	(and log) will look like the one below.
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  064ff78c  005dadc1  00000000 00002000 011fdc1c
	  NTDLL!KiUserExceptionDispatcher+0x4
	  064ff7e8  0046fd82  00000000 00002000 011fdf64
	  STORE!CMAPIextr::hrVerifyExtractAtt+0x3b8
	  064ff7f8  0046fd45  0046f940 011fdf64 012039dc
	  STORE!CINETemtr::hrStartMessage+0x31
	  064ff7fc  0046f940  011fdf64 012039dc 00000400
	  STORE!CmcvtrBptStart::hrEmit+0x9
	  064ff824  0046f880  01200134 00002000 064ff8ac
	  STORE!CINETemtr::hrEmit+0xb8
	  064ff864  0046f75f  011fd9fc 01200134 00002000
	  STORE!CConvertStream::Read+0x119
	  064ff888  0046f6a4  00002000 01200134 064ff8ac STORE!EcReadStreamOp+0x7c
	  064ff8ac  00404092  00000001 0000001d 064ff948 STORE!EcReadStream+0x77
	  064ff90c  00403928  064ff928 00002200 064ff92c STORE!EcRpc+0x736
	  064ff928  77e11841  0016f780 01200124 0016fe2c STORE!EcDoRpc+0x3e
	  064ff948  77e52265  004038ea 064ffb3c 00000004 RPCRT4!Invoke+0x28
	  064ff964  77e52236  004038ea 064ffb3c 00000004
	  RPCRT4!NdrCallServerManager+0x15
	  064ffc28  77e51f9e  00000000 00000000 064ffe08 0x77e52236
	  064ffc40  77e1134f  064ffe08 064ffe08 0015e640 RPCRT4!NdrServerCall+0x19
	  064ffc7c  77e11122  00404af4 064ffe08 064ffdc4
	  RPCRT4!DispatchToStubInC+0x34
	  064ffcd0  77e112fb  064ffe08 00000000 064ffdc4
	  RPCRT4!?DispatchToStubWorker@RPC_INTERFACE@@AAEJPAU_RPC_
	  MESSAGE@@IPAJ@Z+0xb0
	  064ffcf0  77e119cf  064ffe08 00000000 064ffdc4
	  RPCRT4!?DispatchToStub@RPC_INTERFACE@@QAEJPAU_RPC_MESSAGE@@IPAJ@Z+0x41
	  064ffdc8  77e12b98  001439a0 064ffe68 064ffe08
	  RPCRT4!?DealWithRequestMessage@WMSG_SASSOCIATION@@QAEXPAT_WMSG_
	  MESSAGE@@0PAU_RPC_MESSAGE@@PAPAVWMSG_SBINDING@@IHH@Z+0x182
	  064ffe40  77e15fff  001439a0 064ffe68 00000000
	  RPCRT4!?DealWithLRPCRequest@WMSG_ADDRESS@@AAEPAT_WMSG_
	  MESSAGE@@PAT2@0HPAVWMSG_ASSOCIATION@@@Z+0xab
	  064fff90  77e162f0  77e163e5 00152640 064fffec
	  RPCRT4!?ReceiveLotsaCalls@WMSG_ADDRESS@@AAEXXZ+0x38001545f0 062effec
	  RPCRT4!?ReceiveLotsaCalls@WMSG_ADDRESS@@AAEXXZ+0x38
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
