---
layout: page
title: "Q194648: High CPU Usage Using SNA Server Performance Monitor Counters"
permalink: /kb/194/Q194648/
---

## Q194648: High CPU Usage Using SNA Server Performance Monitor Counters

	Article: Q194648
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Performance Monitor to monitor SNA Server throughput, the
	Performance Monitor process (Perfmon.exe) may cause CPU utilization to reach 100
	percent.
	
	This behavior was observed when using Performance Monitor to monitor CPU
	utilization and the number of active TN3270 Server sessions. CPU utilization
	increased as the number of TN3270 sessions increased. CPU utilization did not
	approach 100 percent until there were approximately 8,000 active TN3270
	sessions.
	
	NOTE: This may occur when tracking any of the available SNA Server performance
	counters, and not just the TN3270 counter mentioned in the scenario cited here.
	
	CAUSE
	=====
	
	The high CPU utilization by the Perfmon.exe process is caused by the following
	issues related to how SNA Server collects performance data and passes it to
	Performance Monitor:
	
	- The SNA Server Performance Monitor DLL (Snaperf.dll) returns all of the
	  performance data it captures even if Performance Monitor only asks for a
	  subset of the captured data. Snaperf.dll always returns all performance data
	  for connections, links, Response Time Monitor (RTM), and sessions. This can
	  result in a large amount of extraneous data being sent to Performance Monitor
	  at each update interval.
	
	- The SNA Server service writes its session performance data on a session-
	  by-session basis, but Performance Monitor requires the data on a LU-by- LU
	  basis, where each LU can have multiple sessions. Each time Performance
	  Monitor calls Snaperf.dll, the required LU-by-LU data is recalculated based
	  on the available session-by-session data. This process is not very efficient
	  and can result in a large amount of processing at each update interval.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server Versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA
	Server version 3.0 and will post more information here in the Knowledge Base as
	it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	
