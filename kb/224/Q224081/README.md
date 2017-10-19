---
layout: page
title: "Q224081: Performance Monitor Counters Do Not Start from a Shared Bus"
permalink: /kb/224/Q224081/
---

## Q224081: Performance Monitor Counters Do Not Start from a Shared Bus

	Article: Q224081
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork
	Last Modified: 28-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a Microsoft Cluster Server environment, the Windows NT
	Performance Monitor counters do not start from a shared bus in the event of a
	failover.
	
	CAUSE
	=====
	
	This issue occurs if more than one Cluster Server node tries to gain accesss to
	the shared disk at the same time.
	
	RESOLUTION
	==========
	
	To resolve this problem, install all Performance Monitor dynamic-link libraries
	(DLLs) must be installed locally in the system path on each Cluster Server node.
	You must change the Performance Monitor registry keys to reflect the new
	location of the Performance Monitor DLLs.
	
	MORE INFORMATION
	================
	
	When you try to run Performance Monitor extensible counters on more than one
	node in a Cluster Server environment, the DLLs are stored on the shared drive.
	Only one Cluster Server node can access the shared drive at a time. Performance
	Monitor loads the base Performance Monitor DLLs and third-party extensible DLLs
	when Perfmon.exe starts.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
