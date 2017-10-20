---
layout: page
title: "Q242077: SP4 on Windows NT 4.0 Enterprise Edition Records Event ID 43"
permalink: /kb/242/Q242077/
---

## Q242077: SP4 on Windows NT 4.0 Enterprise Edition Records Event ID 43

{% raw %}

	Article: Q242077
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply Service Pack 4 to a computer running Microsoft Windows NT 4.0,
	Enterprise Edition, you may receive the following error message in Event
	Viewer:
	
	  Event ID 43
	  Description: Crash Dump Is disabled!
	  NT Failed to Initialize the boot partition Paging File For Crash Dump.
	
	CAUSE
	=====
	
	This behavior can occur if the paging file size is set incorrectly.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the initial size of the paging file to the amount of
	physical memory plus 12 megabytes (MB):
	
	1. In Control Panel, double-click the System icon.
	
	2. Click the Performance tab, and then click Change.
	
	3. In the Drive box, click the drive on which the paging file is located.
	
	4. In the Initial Size (MB) box, type an initial paging file size that is equal
	  to the amount of physical memory plus 12 MB. For example, if the computer has
	  256 MB of physical memory, the initial size of the paging file should be 268
	  MB.
	
	5. In the Maximum Size (MB) box, type the maximum size of the paging file.
	
	  NOTE: If the size of the paging file appears to be set correctly, delete the
	  current values, and then create a new paging file.
	
	6. Click Set.
	
	7. Click OK, and then click Close.
	
	8. Click Yes when you are prompted to restart the computer.
	
	Additional query words: nt 4.0 event
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
