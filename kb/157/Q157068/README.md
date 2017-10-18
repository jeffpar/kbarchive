---
layout: page
title: "Q157068: XCON: MTA Server Work Queue Increases Perfmon Unrealistically"
permalink: kb/157/Q157068/
---

## Q157068: XCON: MTA Server Work Queue Increases Perfmon Unrealistically

	Article: Q157068
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After restarting the Microsoft Exchange message transfer agent (MTA), and
	viewing the Performance Monitor object (MSExchangeMTA, Work Queue Length), the
	value for this counter continues to increase at an unrealistic rate, and does
	not accurately reflect the number of work queue items on the work queue.
	
	CAUSE
	=====
	
	During recovery (a process initiated shortly after an MTA restart when it checks
	and rebuilds the various routing queues), the MTA could loop on an object.
	
	
	WORKAROUND
	==========
	
	There is no workaround available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	
	MORE INFORMATION
	================
	
	Recovery is the process of rebuilding the MTA's queues. After recovery
	completes, fanout begins. Fanout is the process of placing objects onto the
	various queues. Enabling medium level logging on "MSExchangeMTA, X.400 Service"
	allows a log of useful association and send (271)\receive (272) events to be
	generated. Examining 271 and 272 events can confirm that the MTA has completed
	recovery and started fanout and delivery of mail.
	
	A formula for calculating the approximate number of messages currently awaiting
	processing by the MTA is:
	
	  <the number of *.dat files in \MTADATA>/2
	
	Fanout can be expected after the Work Queue Length approaches this calculated
	estimate. (The perfmon counter may exceed this estimate by 15 to 20 percent
	before fanout is observed.)
	
	If all of these conditions are met, it is likely you are experiencing this
	problem and should obtain the fix noted in the "Status" section of this
	article:
	
	- The Work Queue Length grows quickly after startup.
	
	- The Work Queue Length continues growing.
	
	- The Work Queue Length exceeds the calculated number above significantly.
	
	- The MTA has not begun fanout.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
