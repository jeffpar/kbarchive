---
layout: page
title: "Q269588: XADM: Heap Corruption in MAPI Causes MTA to Stop Responding"
permalink: kb/269/Q269588/
---

## Q269588: XADM: Heap Corruption in MAPI Causes MTA to Stop Responding

	Article: Q269588
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP5fix kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The message transfer agent (MTA) may stop responding (crash) with a call stack
	that is similar to the following:
	
	  
	
	  0514efcc 77f640fc 04930000 40530000 0514eff8 NTDLL!RtlpFindAndCommitPages+0xde
	  0514f008 77f64830 04930000 000000b0 048b0588 NTDLL!RtlpExtendHeap+0x56
	  0514f0d0 6fff1921 04930000 00000001 000000a8 NTDLL!RtlAllocateHeap+0x1ae
	  0514f0f4 6fff1383 00000015 00000000 0000009e EXCHMEM!MpHeapAlloc+0x101
	  0514f104 6facfa8b 0000009e 6facfb25 048b0588 EXCHMEM!ExchMHeapAlloc+0x13
	  0514f10c 6facfb25 048b0588 00000000 0000009e MAPI32!LH_IntHeapAlloc+0xb
	  0514f11c 6fa960bf 048b0588 00000000 0000009e MAPI32!LH_ExtHeapAlloc+0x15
	  0514f138 6fa96118 00000001 048b0588 0514f16c MAPI32!MAPIAllocateBufferExt+0x2f
	  0514f14c 00593ce1 00000096 0514f16c 00000001 MAPI32!MAPIAllocateBuffer+0x28
	  0514f16c 00593ae3 063c7428 405904fc 00000000 EMSMTA!HrStrAToStrW+0x67
	  00000001 00000000 00000000 00000000 00000000 EMSMTA!HrTrackWriteLogA+0x187
	
	
	CAUSE
	=====
	
	This problem can occur because of a problem in the Mapi32.dll file.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MTA
	
	+--------------------------+
	| File name  | Version     | 
	+--------------------------+
	| Mapi32.dll | 5.5.2652.85 | 
	+--------------------------+
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, disable message tracking on the affected servers,
	both for the information store and the MTA. You can do so on a site level by
	using the Exchange Server Administrator program, or on a for-each-server basis.
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q148963 XADM: Disabling Message Tracking For One or More Servers
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: is crashes Mapi32 dll
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP5fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
