---
layout: page
title: "Q187226: XCON: MTA Generates Application Exception in Function otpugobj"
permalink: kb/187/Q187226/
---

## Q187226: XCON: MTA Generates Application Exception in Function otpugobj

	Article: Q187226
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The message transfer agent (MTA) creates an application exception when
	processing a message in the FANOUT process of the MTA. The call stack in the Dr.
	Watson log causes an exception in EMSMTA!otpugobj.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix or wait for the next Exchange
	Server service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The MTA generates a call stack that resembles the following call stack:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  041ff988  00405fef  0044fc0a 041ffab8 0000011a EMSMTA!otpugobj+0x3f
	  041ffae0  00405bfe  0044fc0a 01010e05 0055f03f EMSMTA!ospadrec+0x917
	  041ffc4c  004056bb  0044fc0a 0000000e 0055f03f EMSMTA!ospadrec+0x526
	  041ffcb0  004aab85  0044fc0a 00000057 00000101 EMSMTA!ospadeco+0x54c
	  041ffce8  00490755  0044fc0a 00000001 01b313e8 0x004aab85
	  041fff50  00469d3a  0044fc0a 666e6f43 00000190
	  EMSMTA!DecodeRelayedAPDU+0x42a
	  041fff8c  0044fc96  666e6f43 72756769 0000000a EMSMTA!otpmmain+0x120
	  041fffb8  77f04f2c  0000000a 666e6f43 72756769 0x0044fc96
	  041fffec  00000000  00000000 00000000 00000000
	  KERNEL32!BaseThreadStart+0x51
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
