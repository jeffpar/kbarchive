---
layout: page
title: "Q255647: Resource Monitor Problem Results in Event 1116"
permalink: /kb/255/Q255647/
---

## Q255647: Resource Monitor Problem Results in Event 1116

{% raw %}

	Article: Q255647
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a Resource Monitor process experiences a problem and quits, the Cluster
	service initiates another Resource Monitor process to control the resources of
	the previous process. When this occurs, the following system event is logged:
	
	  Event: 1116
	  Source: Clussvc
	  Description: The Cluster Resource Monitor died unexpectedly, an attempt will
	  be made to restart it.
	
	MORE INFORMATION
	================
	
	With Windows NT 4.0 Service Pack 4 and earlier, a Resource Monitor process
	problem results in an entry in the Cluster Diagnostic log file, but no entry in
	the System event log. With Service Pack 5 or later, the event is logged in the
	System event log. Such a problem is rare, and may indicate problems within a
	third-party resource dynamic-link library (DLL).
	
	If a Resource Monitor quits, regardless of which service pack is installed, the
	following error message appears in the Cluster Diagnostic log file (if logging
	is enabled) and a new Resource Monitor is created to replace it:
	
	  [FM] Resource monitor terminated!
	
	Additional query words: mscs fail failure
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTS400search
	Version           : winnt:4.0 SP5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
