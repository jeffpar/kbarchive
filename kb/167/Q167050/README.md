---
layout: page
title: "Q167050: CPU Usage Limited to 100% on Multiprocessor Computer"
permalink: /kb/167/Q167050/
---

## Q167050: CPU Usage Limited to 100% on Multiprocessor Computer

	Article: Q167050
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.00
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.00 
	- Microsoft Windows NT Server versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CPU usage at the process level appears to be truncated at 100 percent on
	multiprocessor systems. When summing the thread data on multiprocessor computers
	for a busy process, the sum will exceed 100 percent while the process metric
	will only show 100 percent. As the collection interval increases, the sum of the
	thread CPU usage does not equal the process metrics, even when the usage is less
	than 100 percent of a single CPU.
	
	CAUSE
	=====
	
	All percentages are capped at 100 percent.
	
	RESOLUTION
	==========
	
	After applying the hotfix mentioned below, the following registry parameter will
	allow the percentage to exceed 100 percent.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Registry value:
	Location: HKEY_CURRENT_USER\Software\Microsoft\PerfMon
	Parameter: CapPercentsAt100
	Value: 1 default percent capped at 100.
	Value: 0 New functionality, percent greater than 100.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and
	4.00. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: smp performance monitor
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.00
	Issue type        : kbbug
	
	=============================================================================
	
