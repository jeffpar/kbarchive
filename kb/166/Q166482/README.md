---
layout: page
title: "Q166482: DUMPCHK.EXE Incorrectly Reports Some Dump Files as Invalid"
permalink: /kb/166/Q166482/
---

## Q166482: DUMPCHK.EXE Incorrectly Reports Some Dump Files as Invalid

{% raw %}

	Article: Q166482
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbusagekbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	While in the phase where Dumpchk.exe validates all virtual addresses, the
	program reports that specific memory dump files are corrupt. These same memory
	dump files are not corrupt and may be debugged without any problems.
	
	CAUSE
	=====
	
	Dumpchk.exe does not correctly handle a situation where there are "large pages"
	in the memory dump file. This leads the program to incorrectly conclude that
	memory dump files with large pages are corrupt.
	
	RESOLUTION
	==========
	
	Obtain the hotfix mentioned below.
	
	MORE INFORMATION
	================
	
	Memory dump files are generated when a system STOP error occurs provided the
	system has been correctly configured to save debug information through the
	Control Panel.
	
	These memory dump files can often be used to diagnose the cause of the system
	STOP error. Because these files are often very large, Dumpchk.exe is often used
	to determine whether a given dump file was generated successfully or whether it
	might be corrupt and therefore not useful. The problem described here can result
	in some files being rejected when they are not corrupt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbusage kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
