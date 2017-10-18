---
layout: page
title: "Q171950: Buffer Pool Error 685 Printing Two Large Jobs Simultaneously"
permalink: kb/171/Q171950/
---

## Q171950: Buffer Pool Error 685 Printing Two Large Jobs Simultaneously

	Article: Q171950
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When SNA Server attempts to process two large print jobs (approximately 700
	pages), the SNA 3270 Emulator logs an event 685, indicating that a failure to
	extend a buffer pool occurred. The affected component is terminated and both
	print jobs fail.
	
	  ID 685 Event Details
	
	  An attempt was made to extend a buffer pool, but the related pool had
	  reached its maximum size. The affected component is terminating, and an
	  audit of the buffer pools just before termination is attached
	
	  Pool               Free     Alloced      Max
	  Trusted Hdr         122        157     100000
	  Trusted Elts         50        112     500000
	  Non-Trusted Hdrs      1       2993       3000
	  Non-Trusted Elts     87       3142      10000
	
	  Comname      Pid      Trusted      Hdrs       Elts
	  SNABASE    00000072      Y            0          0
	  MNGAGENT   000000A7      Y            8         11
	  MNGCLI     000000C1      Y           12         36
	  SNASERVR   00000068      Y            5          5
	  SNADLC2    00000106      Y            5          5
	  SNADLC1    000000F3      Y            5          5
	  WIN3270    000000F0      N            0          0
	  SNAPRINT   0000005A      N         2992       3055
	
	  EXPLANATION
	  This error is almost always due to either an SNA component (including
	  possibly an emulator) losing buffers or a slow emulator (or RUI
	  application) using a session without pacing.
	
	  ACTION
	  Contact your support personnel.
	
	CAUSE
	=====
	
	The print server will occasionally produce an extra credit message. Normally
	this would not cause a problem. The print server would cope with the extra
	message. However, in the case of a very large job, the print server never has
	time to catch up with the extra messages. The input queue increases until the
	buffer limit is reached (3,000 outstanding messages).
	
	RESOLUTION
	==========
	
	Defer sending credit messages until the print server is capable of processing
	the message immediately, so that the message is not put back on the input queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 Service Pack 1
	(SP1). This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
