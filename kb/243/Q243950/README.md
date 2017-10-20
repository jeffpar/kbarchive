---
layout: page
title: "Q243950: High CPU Utilization in Store.exe"
permalink: /kb/243/Q243950/
---

## Q243950: High CPU Utilization in Store.exe

{% raw %}

	Article: Q243950
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP5,5.5 SP2
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	You may see a spike in Store.exe in Performance Monitor under the Page File
	Bytes counter. Store.exe continues to rise until resources are exhausted. CPU
	utilization is extemely high, as seen in the DPC Queued/sec counter, and you may
	be unable to log on to the console. All appearances point to a memory leak in
	Exchange Server Store.exe as Pool Nonpaged Bytes mirror the trend seen in the
	above counters.
	
	CAUSE
	=====
	
	This behavior can occur if you are using ArcServe Agent for Exchange Server
	Backup. ArcServe may be referencing the wrong memory allocation.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, use the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DBAGENT\Type
	
	3. On the Edit menu, click DWORD, type "10" (without the quotation marks)
	  (hexadecimal value), and then click OK.
	
	4. Quit Registry Editor.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP5,5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
