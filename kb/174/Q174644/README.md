---
layout: page
title: "Q174644: Perfmon Degrades SNA Server When Many 3270 LUs in Use"
permalink: /kb/174/Q174644/
---

## Q174644: Perfmon Degrades SNA Server When Many 3270 LUs in Use

{% raw %}

	Article: Q174644
	Product(s): Microsoft SNA Server
	Version(s): winnt:2.11 (all SP),3.0 (all SP),4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Windows NT Performance Monitor to monitor any SNA performance
	objects every second, SNA Server performance degrades significantly when 150
	users or more have an active 3270 session. Users with active 3270 sessions
	receive host response delays from 20 seconds to two minutes.
	
	CAUSE
	=====
	
	When you monitor SNA Server performance objects, SNA Server reports response
	time monitor (RTM) performance data on every active 3270 LU. When a large number
	of 3270 LUs are in use, this reporting can degrade 3270 performance for current
	3270 users if a small Performance Monitor reporting interval is chosen (such as
	the default one-second reporting interval in Windows NT Performance Monitor).
	
	RESOLUTION
	==========
	
	To prevent the problem from occurring with SNA Server 2.11 or 3.0, follow these
	steps:
	
	1. Choose an infrequent Performance Monitor reporting interval, such as one
	  minute or more, rather than the default of one second.
	
	2. Do not continuously monitor SNA Server performance objects during production
	  use
	
	STATUS
	======
	
	Microsoft has confirmed this behavior with SNA Server versions 2.11, 3.0, and
	4.0 and is investigating how to address this issue in future releases.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	The updated SNA Server 4.0 modules are:
	
	  <snaroot>\system\snaservr.exe
	  <snaroot>\system\trcservr.exe
	  <snaroot>\system\snaperf.dll
	
	
	MORE INFORMATION
	================
	
	For additional information about another possible performance problem, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q168717 SNA Server Performance Degrades If Domain Controller Down
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400NT kbSNAServ211NTSP1 kbSNAServ211NTSP2
	Version           : winnt:2.11 (all SP),3.0 (all SP),4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
