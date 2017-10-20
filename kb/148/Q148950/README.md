---
layout: page
title: "Q148950: Changing the Windows NT Redirector Time-Out Value"
permalink: /kb/148/Q148950/
---

## Q148950: Changing the Windows NT Redirector Time-Out Value

{% raw %}

	Article: Q148950
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use NET USE or NET VIEW across a Dial-On-Demand router or slow link and
	the connection attempt is longer than 45 seconds, a "Semaphore Timeout" error
	message appears.
	
	MORE INFORMATION
	================
	
	By default, the Windows NT redirector time-out value is 45 seconds, which limits
	the length of time a connection is made. To change the redirector time-out
	value, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services\Rdr\Parameters
	
	2. From the Edit menu, select Add Value.
	
	3. Enter the following:
	
	  Value Name: ConnectMaxTimeout
	  Data Type: REG_DWORD
	  Data: <Number of seconds>
	
	4. Click OK and quit the Registry Editor.
	
	5. Shut down and restart Windows NT.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
