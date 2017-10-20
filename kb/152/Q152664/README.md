---
layout: page
title: "Q152664: TcpipClientSupport Fails w/ NetWareClientSupport Specified"
permalink: /kb/152/Q152664/
---

## Q152664: TcpipClientSupport Fails w/ NetWareClientSupport Specified

{% raw %}

	Article: Q152664
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to change a Windows NT password with the Microsoft Exchange Client,
	the change fails to work using TCP/IP. The client error message may be:
	
	  The NT Domain password could not be changed. A required action was not
	  successful due to an unspecified error.
	
	
	CAUSE
	=====
	
	If the primary domain controller (PDC) has the NetWareClientSupport registry
	value specified for the HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\LSA
	key, but the NWLINK protocol is not installed on the PDC, LSASS will not attempt
	to register a socket endpoint on TCP/IP.
	
	
	RESOLUTION
	==========
	
	Remove the registry value NetWareClientSupport if NWLINK is not installed on the
	PDC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
