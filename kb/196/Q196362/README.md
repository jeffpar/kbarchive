---
layout: page
title: "Q196362: XFOR: AV in ExchINS with Very Long MessageID"
permalink: /kb/196/Q196362/
---

## Q196362: XFOR: AV in ExchINS with Very Long MessageID

{% raw %}

	Article: Q196362
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	ExchINS (Exchange NNTP) will cause an access violation error while attempting to
	send an IHAVE message with an excessively long MessageID.
	
	The debug stack is as follows:
	
	Access Violation c0000005 in ExchINS
	> kv
	026efd54  00414b45  EXCHINS!CNNTPPost::SendIHave+0x128 (FPO: [ebp 00057e40]
	[1,1,4])
	026efd8c  00409355  EXCHINS!CNNTPOutboundStreamServer::HrGetStream+0xb5
	(FPO: [ebp 00bf05c0] [2,8,4])
	026efdc8  6f787b54  EXCHINS!CCollector::ImportMessageChangeAsAStream+0xd5
	(FPO: [5,10,2])
	026efe18  6f786321  EMSMDB32!IXMSGSYNC::EcUpdateCollector+0x174 (FPO: [ebp
	02991474] [4,10,4])
	026efe38  6f773300  EMSMDB32!IXMSGFXRCV::EcRcv+0x151 (FPO: [1,0,3])
	026efe48  6f7784c9  EMSMDB32!FXRCVCTX::EcRcv+0x10 (FPO: [1,0,2])
	026efe58  6f78715e  EMSMDB32!FXRCVMGR::EcDoClient+0x39 (FPO: [2,0,2])
	026efe88  6f7880a5  EMSMDB32!IXCHGSYNC::EcSynchronize+0x5e (FPO: [ebp
	77f674e0] [3,5,4])
	026efea4  00408a71  EMSMDB32!IXMSGSYNC::Synchronize+0x25 (FPO: [3,0,2])
	026effb8  77f04f2c  EXCHINS!HrGetOutboundThread+0x2c1 (FPO: [ebp 77f64b1c]
	[1,61,4])
	77f64b1c  0cc25de5  KERNEL32!BaseThreadStart+0x51(UKNOWN FPO TYPE)
	
	CAUSE
	=====
	
	This is because of ExchINS not comparing the length of the MessageID with the
	amount of available buffer space.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: NNTP
	
	  File Name     Version
	  -------------------------
	  Exchins.dll   5.5.2399.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	
	MORE INFORMATION
	================
	
	The updated component limits MessageIDs to 256 characters, and will discard
	messages with IDs longer than this.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
