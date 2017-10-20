---
layout: page
title: "Q249914: STOP 0x0000007b Inaccessible Boot Disk After Applying SSD 2.12c"
permalink: /kb/249/Q249914/
---

## Q249914: STOP 0x0000007b Inaccessible Boot Disk After Applying SSD 2.12c

{% raw %}

	Article: Q249914
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Compaq Software Support Disk (SSD) version 2.12c and then
	reboot your computer, you may receive a STOP 0x0000007b error message citing an
	inaccessible boot disk.
	
	RESOLUTION
	==========
	
	To resolve this behavior, copy the Cpqarray.sys file from a parallel
	installation of Microsoft Windows NT 4.0. Follow these steps:
	
	1. Install a parallel copy of Windows NT 4.0.
	
	2. Apply Service Pack 5 to the parallel installation. Do not apply the Compaq
	  SSD.
	
	3. Restart the computer in the parallel installation.
	
	4. Rename the Cpqarray.sys file in the original Windows NT 4.0 installation.
	
	5. Copy the Cpqarray.sys file from the parallel installation to the original
	  installation.
	
	6. Restart the computer in the original installation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
