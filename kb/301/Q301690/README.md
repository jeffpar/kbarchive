---
layout: page
title: "Q301690: XIMS: Corrupted Message Header Causes Access Violation"
permalink: kb/301/Q301690/
---

## Q301690: XIMS: Corrupted Message Header Causes Access Violation

	Article: Q301690
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you receive a Simple Mail Transfer Protocol (SMTP) message with a corrupted
	header, an access violation may occur in Msexcimc.exe. If you have the correct
	symbols or if you view a debugger, you see the following stack:
	
	  
	
	  0374f3b4  6fff13c4  00f00588 00f10b40 6facfaab EXCHMEM!MpHeapFree+0x88
	  0374f3c0  6facfaab  00f10b40 6facfb55 00f00588 EXCHMEM!ExchMHeapFree+0x14
	  0374f3c8  6facfb55  00f00588 00000000 00f10b40 MAPI32!LH_IntHeapFree+0xb
	  0374f3d8  6fa95067  00f00588 00000000 00f10b40 MAPI32!LH_ExtHeapFree+0x15
	  0374f3fc  6faa0ebe  00f00588 0374f660 00000000 MAPI32!MAPIFreeBuffer+0x77
	  0374f410  0040b1fe  00f362b8 00000000 0374f478 MAPI32!FreePadrlist+0x1e
	  0374f434  0040b0ab  0374f660 00000000 00000000 MSEXCIMC!CAdrIn::hrCreateSrcAdrLists+0xf7
	  0374f448  0040a5d1  0374f660 00d91018 0374f538 MSEXCIMC!CAdrIn::hrPrepareLists+0xf
	  0374f4c8  0040b7a7  00d93de0 00d93e20 00d91168 MSEXCIMC!hrResolveAddresses+0xd5
	  0374f500  0040ddbd  00474454 0047b040 00d93de0 MSEXCIMC!hrResolveAdrs+0x53(...)
	  0374fe0c  0040c990  00d93d40 00d93358 00d93330 MSEXCIMC!HrSendMessageIn+0x1065
	  0374ff70  004312d8  00d93d40 00d93358 00d93d40 MSEXCIMC!ProcessInboundItem+0xfc
	  0374ff84  0044892d  00d93d40 00000000 00430a42 MSEXCIMC!ProcessInbound+0x4a
	  77f1d363  408b0000  74ffc324 74ff0824 15ff0824 MSEXCIMC!InboundWorkerThread+0x59
	
	CAUSE
	=====
	
	This problem can occur if an error condition causes the Msexcimc.exe code to try
	to free the same memory twice.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
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
	
	Component: Internet Mail Service
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Msexcimc.exe | 5.5.2655.15 | 
	+----------------------------+
	| Imcmsg.dll   | 5.5.2655.15 | 
	+----------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
