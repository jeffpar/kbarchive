---
layout: page
title: "Q136377: Invalid RawWorkItems Calculated on Some MP Computers"
permalink: kb/136/Q136377/
---

## Q136377: Invalid RawWorkItems Calculated on Some MP Computers

	Article: Q136377
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Advanced Server, version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On an x86-based multiprocessor (MP) computer with an odd number of processors
	and 512 megabytes or more of RAM, the following error message appears when you
	the Server process starts:
	
	  Insufficient Resources
	
	CAUSE
	=====
	
	There is an integer divide problem when calculating the initial number of raw
	mode work items. The server is trying to create more than the configured maximum
	allowed for raw mode work items. This error only occurs on multiprocessor x86
	systems with 512 megabytes or more of RAM and an odd number of processors.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters
	
	3. From the Edit menu choose Add Value.
	
	4. Add the following:
	
	  Value Name: MaxWorkItems
	  Data Type: REG_DWORD
	  Data: 100
	  Radiux: Decimal
	
	NOTE: MaxWorkItems has a valid range of 1 to 512.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Windows NT version 3.51. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.51 multi processor mp
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTAdvSerSearch kbWinNTAdvServ351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
