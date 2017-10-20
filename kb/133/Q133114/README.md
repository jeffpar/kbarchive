---
layout: page
title: "Q133114: No Files Found Accessing NetWare Shares from WFW Through GSNW"
permalink: /kb/133/Q133114/
---

## Q133114: No Files Found Accessing NetWare Shares from WFW Through GSNW

{% raw %}

	Article: Q133114
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you connect to two multi-homed NetWare 3.11 servers from a Windows NT
	multi-homed server running the Gateway Service for NetWare (GSNW), Windows for
	Workgroups 3.11 clients cannot access files on the NetWare volumes shared
	through GSNW for about five minutes. After five minutes, the clients can access
	the NetWare volumes, but the following error message appears:
	
	  No Files Found
	
	
	CAUSE
	=====
	
	This problem occurs when you have different gateway accounts for each GSNW to
	NetWare server session.
	
	RESOLUTION
	==========
	
	To correct this problem, create one gateway account for all GSNW to NetWare
	server sessions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt novell 3.11 wfw wfwg multihomed
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
