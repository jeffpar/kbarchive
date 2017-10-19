---
layout: page
title: "Q123336: &quot;Messages Suppressed&quot; in SNA Server Level 2 Tracing."
permalink: /kb/123/Q123336/
---

## Q123336: &quot;Messages Suppressed&quot; in SNA Server Level 2 Tracing.

	Article: Q123336
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The output of an SNA Server level 2 trace may include the following line:
	
	  ...
	  |000000a5.000000a1 SDLC   --------------------------------08:17:36.79
	  |000000a5.000000a1 SDLC   ***** 63965  messages suppressed ****
	  ...
	
	This indicates that the message that is passing between the SNA Server Link
	service and the actual driver is the same as the message that was just logged in
	the trace file. The message suppressing function was added to level 2 tracing to
	keep SDLC trace files manageable and not let them get too large. It uses the
	following algorithm:
	
	1. Each time the trace code is asked to trace an SDLC message, it compares it
	  with the two previous messages that it received.
	
	2. If either message matches, it increments the count of messages suppressed,
	  traces nothing, and updates the buffer of the last two messages received.
	
	3. If there is no match, it checks to see if it was suppressing messages. If it
	  was, it traces the XXXX messages suppressed line, then traces the message and
	  updates the buffer of the last two messages received.
	
	By doing this, an active SDLC line which has the following activity:
	
	  Tx RR
	  Rx RR
	  Tx RR
	  Rx RR
	  Tx RR
	  Rx RR
	  ...
	
	will only take 3 lines in a trace file, no matter how many times the same message
	repeats. The result, in a simple form, will look like the following:
	
	  Tx RR
	  Rx RR
	  X messages suppressed.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	
	=============================================================================
	
