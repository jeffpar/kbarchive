---
layout: page
title: "Q275647: XCON: MTA Stops Unexpectedly in GwartCopyDoorwayList()"
permalink: /kb/275/Q275647/
---

## Q275647: XCON: MTA Stops Unexpectedly in GwartCopyDoorwayList()

{% raw %}

	Article: Q275647
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): kberrmsg exc55sp3 kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server version 5.5 Service Pack (SP3) message transfer agent (MTA)
	may stop unexpectedly with a call stack similar to the following:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  061acccc  004dda19  03036309 061ad91c 02e85dfc EMSMTA!GwartCopyDoorwayList+0x55
	  061ad928  00537d42  02e85dfc 02e8287c 061af694 EMSMTA!otpmrgwy+0x649
	  061afc58  004f1c8b  02e82874 00000006 02e82874 EMSMTA!orprmtsr+0xe82
	  061afc74  004ef337  00554a17 02e82874 02e80002 EMSMTA!otpmrout+0xab
	  061afee8  004ed0b1  00554a17 00000000 00000001 EMSMTA!otpmrd+0x2b7
	  061aff4c  004ea07a  00554a17 000041e8 00000398 EMSMTA!otpmrcd+0x6b1
	  061aff8c  00554ac8  000041e8 02e82705 00000017 EMSMTA!otpmmain+0x38a
	  061affb8  77f04ee8  00000017 000041e8 02e82705 EMSMTA!sbpiwbep+0x58
	
	The MTA may log several 9405 events in the Application event log before it stops
	with the above call stack logged in the Drwtsn32.log file. The 9405 events
	appear similar to the following:
	
	  Event ID: 9405
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Releasing unowned write lock 5589271. [BASE DISP:ROUTER 23] (16)
	
	  Event ID: 9405
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Access violation (0xc0000005) at Address 0x49863e reading from 0x45495049.
	  [BASE DISP:ROUTER 14] (16)
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	WORKAROUND
	==========
	
	If you run MTACheck several times, it may allow the MTA to restart.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 4.
	
	Additional query words: xmrp
	
	======================================================================
	Keywords          : kberrmsg exc55sp3 kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
