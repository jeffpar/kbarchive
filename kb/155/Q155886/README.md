---
layout: page
title: "Q155886: Domain Controller Not Found When Using DNS"
permalink: /kb/155/Q155886/
---

## Q155886: Domain Controller Not Found When Using DNS

	Article: Q155886
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have configured your Windows NT Workstation or Member Server to participate
	in a domain. You only have a domain controller across an IP router and you
	resolve the name of the domain with Domain Name System (DNS). As soon as
	possible, log on. You can also configure the computer for AutoAdminLogon.
	
	After some time you receive the message that a domain controller cannot be found.
	If you have logged on before, you will be logged on using cached information. If
	you log off and try to log on, after a while, you will be able to log on
	successfully.
	
	CAUSE
	=====
	
	When Windows NT starts, the network services begin when the dialog box "Press
	Ctrl+Alt+Del to log on" appears. The component in Windows NT that sends DNS
	requests starts later in this process, so the logon process runs into a time-out
	and stops waiting for the connection to the domain controller.
	
	RESOLUTION
	==========
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	Add the "Group" value type REG_MULI_SZ with the entry "TDI" under the following
	two registry keys:
	
	  HKEY_LOCAL_MACHINE\SYSTEM
	
	     \CurrentControlSet
	        \Services
	           \LMHOSTS
	
	and
	
	  HKEY_LOCAL_MACHINE\SYSTEM
	
	     \CurrentControlSet
	        \Services
	           \TCPIP
	
	This information does not apply to Windows NT 4.0 because the needed registry
	entries exist by default.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
