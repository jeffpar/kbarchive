---
layout: page
title: "Q269158: XCON: Message Transfer Agent Stops Responding in emsmta!onpugtck"
permalink: /kb/269/Q269158/
---

## Q269158: XCON: Message Transfer Agent Stops Responding in emsmta!onpugtck

	Article: Q269158
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server message transfer agent (MTA) may stop responding in
	emsmta!onpugtck and may generate the following stack trace:
	
	  
	
	  ChildEBP RetAddr  Args to Child
	
	  0503fdd8 0054c79b 0203a008 ffff8f93 0503fe00 emsmta!onpugtck+0x6c 
	  0503fdf8 00406ef0 00000001 0503fe40 ffff8f93 emsmta!oppkaget+0x55 
	  0503fe48 00551717 0000001c 00000c2c ffff8f93 emsmta!ospadeco+0x12d 
	  0503fe84 005519c8 00000000 00000c2c 0000001c emsmta!oppprcp+0xb7 
	  0503febc 00564fe3 0000001c 0069932c 01f0efc0 emsmta!oppprcv+0x21a 
	  0503fed4 0055d1e3 0000001c 0069932c 01f51d00 emsmta!oppssout+0x62 
	  0503ff08 00564174 0000001c 0069932c 01f0efc0 emsmta!oppsstdt+0x291 
	  0503ff30 00565a9b 01f0f940 01f51d00 01f0efc0 emsmta!oppssprc+0x97 
	  0503ff60 004ac21c 0000001c 00000460 00e6fe48 emsmta!oppsitps+0xcf 
	  0503ff8c 00435c86 00e6fe48 77f90184 0000001c emsmta!oppsin+0x253 
	  0503ffb8 77f04f3e 0000001c 00e6fe48 77f90184 emsmta!sbpiwbep+0x57
	
	CAUSE
	=====
	
	This issue can occur if a new message is inbound to the MTA and the index for
	the message is exceeded.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words: dat x400
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
