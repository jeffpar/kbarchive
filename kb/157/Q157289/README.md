---
layout: page
title: "Q157289: Memory Leak Using RegConnectRegistry API"
permalink: /kb/157/Q157289/
---

## Q157289: Memory Leak Using RegConnectRegistry API

{% raw %}

	Article: Q157289
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT 4.0, each call to RegConnectRegistry increases the private page
	bytes of the process by more than 200 bytes.
	
	CAUSE
	=====
	
	The following program loop seems to cause the process's "private pages" shown in
	Pview.exe (or the "VM Mem" in Windows NT Task Manager) to increase at a rate of
	approximately 2K per minute:
	
	       int i = 100000;
	       while (i > 0)
	       {
	       rtn = RegConnectRegistry(_T("CASSOWAY"),
	       HKEY_LOCAL_MACHINE, &result);
	       if (rtn == ERROR_SUCCESS)
	       rtn = RegCloseKey(result);
	       }
	       printf("%ld, %ld\n",i);
	       Sleep(5000);
	       i--;
	       }
	
	RESOLUTION
	==========
	
	Install the new version of Advapi32.dll mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
