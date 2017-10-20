---
layout: page
title: "Q142625: NETBIOS Defaults To 16 Sessions on Windows NT"
permalink: /kb/142/Q142625/
---

## Q142625: NETBIOS Defaults To 16 Sessions on Windows NT

{% raw %}

	Article: Q142625
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On your computer running Windows NT, after your NETDDE application connects to
	16 nodes a NetDDE error is reported periodically to the event log and a 17th
	connection to another node is prohibited.
	
	In Windows NT, the default maximum number of sessions (connections) that a NetDDE
	application program can request is 16. For NetDDE applications, each NetBIOS
	session is a connection to another node. Therefore, the maximum number of nodes
	that a DDE server can connect with NetBIOS is currently limited to 16 nodes.
	
	CAUSE
	=====
	
	In the NetDDE NetBIOS dynamic link library (NDDENB32.DLL), the NetBIOS reset
	command is currently set to the default value of 16 for the maximum number of
	sessions.
	
	RESOLUTION
	==========
	
	Install the fix referenced below (under STATUS) and modify the registry as
	follows:
	
	WARNING: Using Registry Editor can cause serious, system-wide errors that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Run the Registry Editor(REGEDT32.EXE).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  Software\Microsoft\NetDDE\Parameters\NetBIOS
	
	3. If the value is not defined in the right window pane, choose Add Value from
	  the Edit menu.
	
	4. Type or select the following information when prompted with the field names
	  on the left:
	
	   Value Name: MaxSessions
	    Date Type   : REG_DWORD
	    Data              : <number of maximum sessions>
	
	  where <number of maximum sessions> is a value from 0 to 254. If it is
	  set to zero, it defaults to 16 sessions maximum.
	
	NOTE: If the value is not defined in the registry, it defaults to 16 maximum
	sessions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	This problem was corrected in the latest Windows NT U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
