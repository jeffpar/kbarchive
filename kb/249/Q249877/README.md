---
layout: page
title: "Q249877: XWEB: Outlook Web Access First Chance Exception in Emsmdb32.dll"
permalink: kb/249/Q249877/
---

## Q249877: XWEB: Outlook Web Access First Chance Exception in Emsmdb32.dll

	Article: Q249877
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you debug Microsoft Outlook Web Access (OWA), you may receive the following
	first chance exception in a call stack similar to the following:
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	018af3f4  6273888f  00002b87 018af480 80000000 EMSMDB32!CNCT::GetPropTagInfo+0x29
	018af568  6273d0a6  00000000 018af59c 018af5d8 EMSMDB32!CNCT::EcForceRpc+0xcff
	018af57c  62756cf3  00000000 00002b87 80000000 EMSMDB32!CNCT::EcGetPropsAll+0x76
	018af5d4  627570a3  110270bc 018af618 0000000e EMSMDB32!PROPOBJ::EcGetPropsAll+0x83
	018af610  62763fbb  110270bc 00000000 80000000 EMSMDB32!PROPOBJ::GetProps+0x223
	018af64c  6278cdba  110270bc 00000000 80000000 EMSMDB32!FOLDOBJ::GetProps+0x26b
	018af674  6f078c32  10da53e8 00000000 80000000 EMSMDB32!RFLD_GetProps+0x3a
	018af6c8  6f0798ca  00000000 00000fff 6f079a1a CDO!CPropArray::M_ScLoadCache+0x112
	018af6f0  6f07b6b6  0fff0102 018af710 018af71c CDO!CPropArray::M_ScFindID+0xa
	018af710  6f07348d  0fff0102 00010001 00000000 CDO!CPropArray::M_ScGetProp+0x86
	018af724  6f06ca10  17ec6240 110206b8 00000000 CDO!CFolder::V_HrInvoke+0x5d
	018af734  6b602859  110206b8 0000000e 6b650378 CDO!CDispatchObj::Invoke+0xa0({...})
	018af860  6b602a04  17f008f0 110206b8 0000000e VBSCRIPT!InvokeDispatch+0x2cb
	018af888  6b604c1f  17f008f0 110206b8 0000000e VBSCRIPT!InvokeByName+0x43
	17f008f0  17ec6240  00000000 00000000 00000000 VBSCRIPT!CScriptRuntime::Run+0xe56
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
