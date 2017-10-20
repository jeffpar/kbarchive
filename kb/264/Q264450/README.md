---
layout: page
title: "Q264450: Reduced Working Set Size After Installing Windows NT SP6a"
permalink: /kb/264/Q264450/
---

## Q264450: Reduced Working Set Size After Installing Windows NT SP6a

{% raw %}

	Article: Q264450
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT400PreSP7Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The upper limit of a program's minimum working set can be significantly less on
	a Windows NT 4.0 Service Pack 6a-based computer than what it may be when you are
	running Windows NT 4.0 Service Pack 5 or earlier.
	
	CAUSE
	=====
	
	Windows NT 4.0 Service Pack 6 addressed an issue where a user-mode program could
	request more physical memory than what is actually installed on the local
	computer. This could prevent the non-paged pool from expanding, and this can
	cause the system processes to run out of memory.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	 Date      Time               Size       File name      Platform
	 ---------------------------------------------------------------
	 11/03/2000  05:31p           956,672    Ntkrnlmp.exe   Intel
	 11/03/2000  05:30p           936,384    Ntoskrnl.exe   Intel
	 11/03/2000  05:27p           1,409,216  Ntkrnlmp.exe   Alpha
	 11/03/2000  05:27p           1,385,216  Ntoskrnl.exe   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 SP6a.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The memory manager in Windows NT 4.0 Service Pack 6 allows for non-paged pool
	memory to grow to its maximum size before allowing a program to increase its
	minimum working set size. For additional information about calculating non page
	pool memory, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q126402 PagedPoolSize and NonPagedPoolSize Values in Windows NT
	
	By reducing the maximum size of the non-paged pool, programs will be able to
	receive a larger working set size. The non-paged pool can be reduced by
	configuring the following new NonPagedPoolMaximumPercent registry entry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory
	  Management
	
	  Value Name: NonPagedPoolMaximumPercent
	  Data Type: REG_DWORD
	  Radix: Decimal
	  Data: 0 or 5 - 80
	
	  0 = Keeps the old behavior (default)
	  5 - 80 = The percentage of RAM that is allowed to be non-paged pool.
	
	It is important to understand that excessively reducing the size of the non-paged
	pool may prevent Windows NT from functioning correctly. If the non-paged pool
	becomes exhausted, Windows NT generates Stop error messages. The Stop errors
	that are most likely to occur if the non-paged pool becomes exhausted include
	Stop 0x4D NO_PAGES_AVAILABLE, Stop 0x41 MUST_SUCCEED_POOL_EMPTY or other Stop
	error messages.
	
	If the NonPagedPoolMaximumPercent registry value is to be modified from the
	default value of 0, you should determine the current non-paged pool usage. You
	can do so by monitoring the following memory counter with Performance Monitor
	over a period of time. Examine the counter memory / non-paged pool, and find the
	maximum size it grows to. Use this as the minimum size the non-paged pool should
	be set to. However it would be strongly recommended to allocate more non-paged
	pool memory to allow for system usage changes.
	
	The problem with a reduced working set size is very unique, and unless a program
	requests an increase of its minimum working set size very significantly this
	problem will not be noticed.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400search kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
