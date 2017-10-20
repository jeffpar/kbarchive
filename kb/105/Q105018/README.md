---
layout: page
title: "Q105018: X400: Err Msg: Could Not Activate Local TSAP from TTXT.EXE"
permalink: /kb/105/Q105018/
---

## Q105018: X400: Err Msg: Could Not Activate Local TSAP from TTXT.EXE

{% raw %}

	Article: Q105018
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the new Microsoft Mail Gateway to X.400 utility TTXT.EXE, you may get
	the following error message:
	
	  Could not activate local TSAP
	
	CAUSE
	=====
	
	A transport service access point (TSAP) is the point at which the application
	(in this case TTXT, but normally X400GATE.EXE) hooks into the network
	transport.
	
	The message indicates that the TTXT utility tried to activate a TSAP, but could
	not do so because the TSAP was unavailable (for instance, it was already being
	used by another process). TSAPs must be unique for each process running on the
	local system. Occasionally, all system TSAPs are in use or otherwise
	unavailable.
	
	RESOLUTION
	==========
	
	Retype the command line. Specify a TSAP that is available. Otherwise, restart
	the system and try again.
	
	MORE INFORMATION
	================
	
	The Microsoft Mail Gateway to X.400 provides a new transport level not available
	in previous releases: TP4 or connectionless protocol (CLNP). TP4 also supplies
	testing and diagnostic utilities.
	
	usage: ttxt -n rx_nsap [-d] [-v] [-q] [-e] [-b size] [-c ntc]
	
	                      [-s interval] [-r rx_tsap] [-t tx_tsap]
	                      [-x cmds] [-u driver]
	
	-n: rx_nsap specifies the receiver NSAP address
	-d: do data integrity checking
	-v: variable buffer size
	-q: quiet (non-verbose) mode
	-e: test expedited data transfers
	-b: size specifies the receive buffer
	-c: ntc specifies number of transport connections
	-s: interval specifies the reporting interval size
	-r: rx_tsap specifies the receiver TSAP
	-t: tx_tsap specifies the transmitter TSAP
	-x: cmds specifies number of outstanding commands
	-u: driver specifies the device driver to be used
	
	
	Additional query words: 3.20 errmsg 3.2
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
