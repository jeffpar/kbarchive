---
layout: page
title: "Q166402: XCON: MTA Terminates Unexpectedly With 2110 and 9405 Event IDs"
permalink: kb/166/Q166402/
---

## Q166402: XCON: MTA Terminates Unexpectedly With 2110 and 9405 Event IDs

	Article: Q166402
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) may terminate unexpectedly
	with events similar to the following:
	
	  Event ID:9405
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Field Engineering
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Exception e005083e occurred at Address 77f1ccc7.
	  [BASE XFER-IN 23] (16)
	
	  Event ID:2110
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Internal Processing
	  Description:
	  A fatal MTA database server error was encountered. A bad list member
	  length is on object 06000058. File offset: 11816911. Attribute ID: 11.
	  Referenced object 00000000 (0 => N/A). Referenced object error: 0.
	  [DB Server XFER-IN 23 42] (16)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This problem may occur when a corrupted message is queued for the crashing MTA
	on another server. The faulting thread's stack may look similar to the following
	in a Drwtsn32.log file:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0572f7a8  020050db  e005083e 00000000 00000000
	  KERNEL32!UnhandledExceptionFilter+0x1c1
	  0572f84c  02006a72  00000010 00000026 0000083e EMSMTA!sgplinfo
	  0572f920  0207dedc  00000026 0000083e 00000000 EMSMTA!sgpminfo
	  0572fa64  0207f12d  0572fd14 00000001 0250e253 EMSMTA!odpbdrld
	  0572fa9c  0207c9ff  0572fd14 0250e253 010b0002 EMSMTA!odpbdget
	  0572fbe4  02084602  0250e116 0572fd14 f16f7c00 EMSMTA!odpbdrrf
	  0572fdac  02050119  0250e116 0219c338 00e23388 EMSMTA!odpdocpy
	  0572ff24  0204e5dc  0250e017 0250e0f4 00000000 EMSMTA!otpirtid
	  0572ff38  0204e48a  72ffb817 00000000 00000398 EMSMTA!otpixfok
	  0572ff8c  02016f50  00000000 00000000 00000017 EMSMTA!otpimain
	  0572ffb8  77f04f32  00000017 00000000 00000000 EMSMTA!sbpiwbep
	  0572ffec  00000000  02016ef4 00000017 00000000
	  KERNEL32!BaseThreadStart+0x39
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
