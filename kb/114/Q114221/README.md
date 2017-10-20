---
layout: page
title: "Q114221: Windows for Workgroups Client Session Dropped"
permalink: /kb/114/Q114221/
---

## Q114221: Windows for Workgroups Client Session Dropped

{% raw %}

	Article: Q114221
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A session between a Windows for Workgroups 3.11 client and a Windows NT Advanced
	Server over IPX with NetBIOS protocol may be dropped. Several problems may occur
	with Windows for Workgroups clients when this happens, including experiencing a
	general protection (GP) fault, or receiving an Server Message Block (SMB) error
	1,6 indicating an Invalid File Handle during file I/O after the session has been
	idle for three or four minutes.
	
	This problem usually occurs when Windows for Workgroups clients are running
	applications of the Windows NT Advanced Server and have several files open on
	the server. Net Sessions on the Windows NT Advanced Server displays the active
	sessions on the server; if the session remains idle for a few minutes, the
	session is dropped and when you attempt any operation related to the open files,
	you may experience a GP fault.
	
	CAUSE
	=====
	
	The network sessions get dropped because the Windows for Workgroups client does
	not respond to the keep-alive packets from the server if they are sent at
	30-second intervals, which is the default of NWNBLINK.
	
	WORKAROUND
	==========
	
	To work around this problem, change the KeepAliveTimeout value in the Windows NT
	Advanced Server Registry from 60 (this value represents half- seconds) to 30.
	The Registry entry for KeepAliveTimeout is in the following location:
	
	  LocalMachine\System\CurrentControlSet\Services\NWNBLINK\Parameters
	
	When you change the KeepAliveTimeout value to 30, the keep-alive packets are sent
	every 15 seconds. This helps maintain the session and eliminates GP faults.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words: prodnt gpfault gpf wfw wfwg
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
