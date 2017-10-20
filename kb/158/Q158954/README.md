---
layout: page
title: "Q158954: Fd8xx.sys Times Out Repeatedly with Quantum xp32150"
permalink: /kb/158/Q158954/
---

## Q158954: Fd8xx.sys Times Out Repeatedly with Quantum xp32150

{% raw %}

	Article: Q158954
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Quantum xp32150 SCSI hard disk with a Future Domain
	8xx-series SCSI controller, Fd8xx.sys times out repeatedly. The system may pause
	and application error messages may occur.
	
	CAUSE
	=====
	
	An incompatibility exists between the Quantum xp32150 hard disk and the Future
	Domain 8xx-series controller.
	
	RESOLUTION
	==========
	
	Removing the xp32150 hard disk from the SCSI bus prevents the timeouts from
	occurring.
	
	MORE INFORMATION
	================
	
	When Windows NT is installed on the Quantum hard disk, frequent timeouts can
	result. A demonstration of the timeouts can be performed by running Disk
	Administrator and attempting to detect tape devices at the same time. This can
	cause the system to pause for up to 10 seconds.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
