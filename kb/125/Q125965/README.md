---
layout: page
title: "Q125965: MSVC++ 1.1 Err Msg Under Windows NT: All Pipe Instances Busy"
permalink: /kb/125/Q125965/
---

## Q125965: MSVC++ 1.1 Err Msg Under Windows NT: All Pipe Instances Busy

{% raw %}

	Article: Q125965
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to compile with Microsoft Visual C version 1.1 while your Windows
	NT printer is configured to print to NUL, the following error appears:
	
	  All pipe instances busy
	
	Under the same sircomstances with Microsoft Visual C++ version 2.0, the following
	error message appears:
	
	  Error spawning cl.exe.
	
	WORKAROUND
	==========
	
	To work around this problem, stop and restart the Spooler Service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here as it becomes
	available.
	
	
	Additional query words: 1.51 msvc MFC link port prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
