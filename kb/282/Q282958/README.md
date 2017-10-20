---
layout: page
title: "Q282958: XADM: Information Store Stops Responding in store!EcCAIFromAI"
permalink: /kb/282/Q282958/
---

## Q282958: XADM: Information Store Stops Responding in store!EcCAIFromAI

{% raw %}

	Article: Q282958
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server 5.5 information store may stop responding and an access
	violation may occur. The stack may look like the following stack:
	
	  
	
	# ChildEBP RetAddr  Args to Child
	  00 05f1f510 0042b0dd 038f8f64 03878fd8 00000000 store!EcCAIFromAI+0xa90 (FPO: [EBP 0x0373ae38] [4,79,4])
	  01 05f1f54c 00402c24 00000000 0067fc40 0373ae98 store!OMSG__EcFlushXAI+0x72 (FPO: [EBP 0x00000000] [1,6,4])
	  02 05f1f55c 0042a3d1 00000001 00000000 0373ae38 store!OMSG__EcFlushXAIs+0x18
	  03 05f1f5c4 004416b4 00000024 00000000 00000000 store!OMSG__EcFlushProps+0xc9 (FPO: [EBP 0x00000001] [4,21,4])
	  04 05f1f660 00440ceb 00000000 00000000 05f1f694 store!OMSG__EcSaveChangesReally+0x27d (FPO: [EBP 0x0373ae38] [5,30,4])
	  05 05f1f6d0 0051ce1e 00000000 00000041 00000000 store!OMSG__EcSaveChanges+0x2b9 (FPO: [EBP 0x0355aed8] [4,18,4])
	  06 05f1f92c 00491a23 03561e38 03580f80 05f1fc1c store!EcAttachFromMDBEF+0x3fb (FPO: [EBP 0x0067fc40] [5,142,4])
	  07 05f1fbc0 00490fac 03561e38 05f1fc1c 00000000 store!EcMessageFromMDBEF+0x732 (FPO: [EBP 0x00000000] [6,155,4])
	  08 05f1fc08 0049127f 05f1fc98 020b2fd8 00000000 store!EcUnpackMDBEF+0x3c8 (FPO: [EBP 0x05f1fd38] [8,7,4])
	  09 05f1fc48 005f5f0e 05f1fc98 00000001 02276f30 store!EcCreateMessage+0x23a (FPO: [EBP 0x00000000] [9,3,4])
	  0a 05f1fdb4 004d3783 034c4bc0 034d6f50 020a0fe4 store!EcDeliverMessage+0x8c6 (FPO: [EBP 0x00000000] [6,77,4])
	  0b 05f1ffa0 004df945 031ff664 77de2f59 05f1ffec store!FStartReceive+0x7f7 (FPO: [EBP 0x0000000a] [0,112,4])
	  0c 05f1ffb8 77f04ede 00000000 031ff664 77de2f59 store!EcProcessTask+0x11c (FPO: [EBP 0x77de2f59] [0,1,4])
	  0d 77de2f59 75ff561c 1075ff14 75ff006a 0875ff0c KERNEL32!BaseThreadStart+0x51 (FPO: [Non-Fpo])
	
	CAUSE
	=====
	
	This problem occurs because of an undersized buffer allocation.
	
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
	
	Component: Information store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2654.46 | 
	+-------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
