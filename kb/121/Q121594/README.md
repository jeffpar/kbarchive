---
layout: page
title: "Q121594: Tasking Option Affects Server Service Priority"
permalink: /kb/121/Q121594/
---

## Q121594: Tasking Option Affects Server Service Priority

{% raw %}

	Article: Q121594
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Process and threads in Windows NT run at a variety of priorities. Higher
	priority processes get more CPU time. The Windows NT server service priority is
	tied to the priority of the active foreground process. When tuning the
	performance of your system, it is important to understand the relationship
	between the server service priority and the foreground process priority.
	
	By default, the server service priority is the same as the foreground process
	priority. Changing the Tasking option in the System applet of the Control Panel
	will affect the server service priority.
	
	In addition, it is possible to change the relationship between the foreground and
	server priority through a Registry parameter.
	
	MORE INFORMATION
	================
	
	In order to change the priority of all server threads in relation to the base
	priority of the foreground process, you can configure it through the Windows NT
	Registry.
	
	NOTE: Higher priority can give better server performance at the cost of local
	responsiveness. Lower priority balances server needs with the needs of other
	processes on the system.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services \LanmanServer\Parameters
	
	2. From the Edit menu, choose Add Value.
	
	3. Enter the following values:
	
	    Value Name: ThreadPriority
	    Data Type:  REG_DWORD
	    Decimal:     <value below>
	
	    Decimal Description
	    -------------------
	     0      Process running at background priority
	     1      Server threads running at same priority as foreground
	            (Default)
	     2      Server threads running one priority higher than foreground
	    15      Server threads running at real-time priority (Not Recommended)
	
	  NOTE: A value of 15 should never be used in production. If the server becomes
	  busy, other important system process could become resource starved.
	
	4. Quit Registry Editor and restart Windows NT.
	
	WARNING: With the default Server ThreadPriority set to 1, changing the tasking
	option to "Foreground and Background Applications Equally Responsive" sets the
	server service priority to the same level as the foreground and background
	priorities. This could cause your server service to degrade in performance
	because it must now share time equally with other background processes.
	
	REFERENCES
	==========
	
	"Inside Windows NT," by Helen Custer, Microsoft Press Microsoft Windows NT
	Resource Kit
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	

{% endraw %}
