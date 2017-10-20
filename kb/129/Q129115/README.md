---
layout: page
title: "Q129115: PRLNTSS.SYS Error After Applying Compaq SSD"
permalink: /kb/129/Q129115/
---

## Q129115: PRLNTSS.SYS Error After Applying Compaq SSD

{% raw %}

	Article: Q129115
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Compaq Support Software Diskette (SSD) version 1.13 or later,
	a Service Control Manager error may appear indicating a service or device failed
	to start. The system log may contain Event ID 7022 or 7026 referencing
	PRLNTSS.SYS. The error may state: The following boot-start or system-start
	driver failed to load. Source PRLNTSS
	
	
	CAUSE
	=====
	
	This error occurs when you inadvertently install PRLNTSS.SYS when you run Compaq
	SETUP.CMD. PRLNTSS.SYS allows the Compaq Fast SCSI-2 controller to run the
	Compaq external disk array. You do not need it unless you are using an external
	disk array.
	
	RESOLUTION
	==========
	
	To correct this problem, run Control Panel, choose Devices, and disable (stop)
	Compaq Proliant Storage Subsystem.
	
	
	Additional query words: 1.14 cpq prodnt eda
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
