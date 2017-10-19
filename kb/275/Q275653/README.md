---
layout: page
title: "Q275653: XCON: MTA Terminates Unexpectedly in SNPUPUTN()"
permalink: /kb/275/Q275653/
---

## Q275653: XCON: MTA Terminates Unexpectedly in SNPUPUTN()

	Article: Q275653
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP5fix kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server version 5.5 Service Pack 3 message transfer agent (MTA) may
	stop unexpectedly with a call stack that is similar to the following when the
	MTA attempts to gain access to a particular object in the MTA database:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  068afb30  004f56d3  08293ae0 00000003 034b8a5a EMSMTA!snpuputn+0x4e
	  068aff28  004ea2f9  00554b13 00694aa8 034e8508 EMSMTA!otpmrfo+0x923
	  068aff48  004ea186  00554b13 0884cf90 000041e8 EMSMTA!otpmmai2+0x129
	  068aff8c  00554b98  000041e8 034e4305 00000013 EMSMTA!otpmmain+0x3c6
	  068affb8  77f04ee8  00000013 000041e8 034e4305 EMSMTA!sbpiwbep+0x58
	  068affec  00000000  00000000 00000000 00000000 KERNEL32!BaseThreadStart+0x51
	
	The MTA may log several events that are similar to the following before the MTA
	stops unexpectedly:
	
	  Event ID: 2182
	  An MTA database server error was encountered while copying an object. Called
	  from MTA. Procedure 124. Database error code: ODXFATAL - Internal or
	  Application Error. Object at fault: 060008AC. [DB Server DISP:FANOUT 19 269]
	  (14)
	
	  Event ID: 9405
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Access violation (0xc0000005) at Address 0x436fde reading from 0x31206. [BASE
	  DISP:FANOUT 19] (16)
	
	  Event ID: 9405
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Releasing unowned write lock 5589790. [BASE DISP:ROUTER 30] (16)
	
	In this particular case, the MTA stops while it attempts to gain access to object
	060008AC or db0008ac.dat, which the MTA referenced in the event ID 2182 error
	message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, run MTACheck several times. This may enable the MTA
	to restart.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	
	Additional query words: xmrp terminates stop responding
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP5fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
