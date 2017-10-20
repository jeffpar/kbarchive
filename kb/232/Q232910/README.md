---
layout: page
title: "Q232910: Error 1044 When Attempting to Create a New Cluster"
permalink: /kb/232/Q232910/
---

## Q232910: Error 1044 When Attempting to Create a New Cluster

{% raw %}

	Article: Q232910
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Cluster Service (MSCS) and restart your computer,
	when you attempt to create a new cluster the following error message may be
	displayed in the System event log:
	
	  Event ID 1044: The cluster IP address resource could not create the required
	  netbios interface.
	
	CAUSE
	=====
	
	This behavior can occur if third-party network drivers are added to the computer
	and the installed Windows NT service pack is not reapplied.
	
	RESOLUTION
	==========
	
	To resolve this issue, reapply the currently installed Windows NT service pack.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
