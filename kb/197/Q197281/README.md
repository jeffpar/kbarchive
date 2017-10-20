---
layout: page
title: "Q197281: XCON: MTA Can Stop After Generating an Event ID 9405"
permalink: /kb/197/Q197281/
---

## Q197281: XCON: MTA Can Stop After Generating an Event ID 9405

{% raw %}

	Article: Q197281
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 13-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server message transfer agent (MTA) may generate an event with the
	following text:
	
	  Source: MSExchangeMTA
	  Event ID: 9405
	  Description: An unexpected error has occurred which may cause the MTA to
	  terminate. Error: ExchHeapFree failure 87. [BASE DISP:FANOUT 12] (16)
	
	These events are sometimes associated with the MTA when it appears to stop
	processing messages, and you must stop the service from Task Manager and restart
	it to resume message flow. The Calls.out file may indicate that the Process Heap
	status entry, Heap 0x01070000, owned by MTA routine 142, is invalid.
	
	CAUSE
	=====
	
	The MTA can encounter problems if it is configured to generate content encoding
	for a size of 2 KB, which is turned on when the heuristics bit is set. This
	setting is used to accommodate other X.400 MTAs that are unable to handle
	content encoded to larger sizes. The heuristics bit for 2 KkB-encoding is 256.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Message Transfer Agent (MTA)
	
	  File Name      Version
	  -------------------------
	  Dbserver.sch   5.5.2441.0
	  Dcprods.cat    5.5.2441.0
	  Ems_rid.dll    5.5.2441.0
	  Emsmta.exe     5.5.2441.0
	  Info4log.cfg   5.5.2441.0
	  Infodlog.cfg   5.5.2441.0
	  Infollog.cfg   5.5.2441.0
	  Infotlog.cfg   5.5.2441.0
	  Mtacheck.exe   5.5.2441.0
	  Mtamsg.dll     5.5.2441.0
	  P2.xv2         5.5.2441.0
	  X400om.dll     5.5.2441.0
	  X400omv1.dll   5.5.2441.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 1. This problem was first corrected in Exchange Server
	5.5 Service Pack 2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
