---
layout: page
title: "Q293093: Browser Causes Computer to Stop Responding"
permalink: /kb/293/Q293093/
---

## Q293093: Browser Causes Computer to Stop Responding

{% raw %}

	Article: Q293093
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT400PreSP7Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you shut down the computer, the browser service may cause the computer to
	stop responding; the occurrence of this problem is very rare.
	
	CAUSE
	=====
	
	This problem occurs because there are not enough worker threads available.
	
	
	RESOLUTION
	==========
	
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, increase the number of threads in the delayed work
	queue:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the <--value name --> value under the following key in the
	  registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session
	  Manager\Executive\AdditionalDelayedWorkerThreads
	
	3. On the Edit menu, click DWORD, type "6" (without the quotation marks), and
	  then click OK.
	
	4. Quit Registry Editor.
	
	By setting this value to 6, you are providing a total of nine threads, which
	allows for the delayed work items to run and signal the timer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
