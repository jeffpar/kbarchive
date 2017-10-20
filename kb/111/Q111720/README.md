---
layout: page
title: "Q111720: Event Log: Error 1501"
permalink: /kb/111/Q111720/
---

## Q111720: Event Log: Error 1501

{% raw %}

	Article: Q111720
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0; :3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Event Viewer, the following error appears:
	
	  The Eventlog service on the local machine is not started.
	
	Then, after you start the Eventlog service from the Services section of Control
	Panel the following error message appears:
	
	  Could not start the Eventlog service on \\<machine name>.
	  Error 1501: No event log file could be opened, so the event logging service
	  did not start.
	
	CAUSE
	=====
	
	This error only occurs when the Windows NT system drive is formatted for NTFS.
	When the Eventlog Service starts, it opens three log files in the
	%SYSTEMROOT%\SYSTEM32\CONFIG directory. If the system does not have the correct
	permissions, it cannot open and write the log files.
	
	RESOLUTION
	==========
	
	For these files to be opened successfully, Read and Write permission in this
	directory must be granted to the Administrators group, the System account, or
	the Everyone group. Any one of these three enables the system to function
	normally.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTAdvSerSearch kbWinNTAdvServ400 kbWinNTAdvServ351 kbWinNTAdvServ350 kbWinNTAdvServ310 kbWinNT310Search
	Version           : winnt:3.5,3.51,4.0; :3.1,3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
