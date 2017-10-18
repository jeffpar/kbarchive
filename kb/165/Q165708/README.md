---
layout: page
title: "Q165708: Trap in SNAPrint when Stopping Logical Printer"
permalink: kb/165/Q165708/
---

## Q165708: Trap in SNAPrint when Stopping Logical Printer

	Article: Q165708
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An access violation may occur when stopping a printer in SNA Server Manager. The
	following is the stack trace depicting the problem. The fault is in
	AIMLogStatusChange():
	
	ChildEBP RetAddr  Args to Child
	106afefc 01002ee8 008aabc8 01010200 60da1d10
	snaprint!AIMLogStatusChange+0x10e (FPO: [EBP
	0x00165dd8] [2,12,4])
	106aff1c 60d87b36 008aabc8 01010200 00000000
	snaprint!AIMStatusCallback+0x208 (FPO: [EBP
	x60da1d10] [3,1,4])
	106aff40 60d839b9 60213b0a 60da1c70 00343970 ppd3270!StopPPDDevice+0x176
	(FPO: [EBP 0x000
	0004] [1,1,4])
	106aff58 60d86097 00000002 60da1c70 00000001 ppd3270!s3pcsctl+0x159 (FPO:
	[EBP 0x60da1c70
	[1,0,4])
	106aff70 60d8666b 00884828 00884828 60d99830 ppd3270!s3pddctl+0x287 (FPO:
	[EBP 0x60da1c70
	[0,0,4])
	106aff7c 60d99830 00030009 00000002 00000000 ppd3270!s3pdproc+0x18b (FPO:
	[3,0,2])
	106affa4 60d86b4e 106affec 00000000 77f1c4f7 ppd3270!s3psproc+0xb0 (FPO:
	[0,4,2])
	106affb8 77f04f32 60da1c70 00000000 77f1c4f7 ppd3270!s3pmain+0x10e (FPO:
	[EBP 0x106affec]
	[1,0,4])
	106affec 00000000 60d86a40 60da1c70 00000000
	KERNEL32!BaseThreadStart+0x51(FPO: [Non-Fpo]
	
	CAUSE
	=====
	
	There is a timing window freeing up the printer's control block on session
	deactivation.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem. To resolve this problem, obtain the
	hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
