---
layout: page
title: "Q142012: Error Starting Smtpsrv in NT 3.51 Resource Kit"
permalink: /kb/142/Q142012/
---

## Q142012: Error Starting Smtpsrv in NT 3.51 Resource Kit

{% raw %}

	Article: Q142012
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbsetup kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you set up the Internet Mail Server that comes with the Microsoft Windows
	NT 3.51 Resource Kit, the following error message appears:
	
	  Install
	  Error starting service smtpsrv
	  Press OK to continue, or cancel to stop
	  The data area passed to a system call is too small.
	
	There are also several Event ID: 4000 errors contained in the registry:
	
	  The service is not configured correctly, and data was not found in the
	  registry for path DhcpDomain.
	
	CAUSE
	=====
	
	The Internet Mail Server requires a key called DhcpDomain that is missing from
	the registry.
	
	RESOLUTION
	==========
	
	Add the following value to the registry to correct the problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start REGEDT32.EXE and locate the following Registry subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM
	  \CurrentControlSet\Services\TCPIP\Parameters
	
	2. On the Edit menu, choose Add Value. Type DhcpDomain in the Value Name field.
	
	3. Select REG_SZ for the Data Type. It is not necessary to type any values for
	  the data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT version 3.51
	Resource Kit. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbsetup kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbMSPressSearch kbWinNTS351search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
