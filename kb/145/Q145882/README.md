---
layout: page
title: "Q145882: STOP 0x3f and Events 1001 and 2021 Appear On Heavily Used IIS"
permalink: /kb/145/Q145882/
---

## Q145882: STOP 0x3f and Events 1001 and 2021 Appear On Heavily Used IIS

{% raw %}

	Article: Q145882
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following STOP error message appears on a heavily used Internet Information
	Server:
	
	  STOP: 0x0000003f (0x00000000, 0x00000000, 0x00000000, 0x00000000)
	
	The following events appear in Event Viewer:
	
	  Event ID 1001
	  Description: The computer has rebooted from a bugcheck. The bugcheck
	  was: 0x0000003f (0x00000000, 0x00000000, 0x00000000, 0x00000000).
	  Microsoft Windows NT [v15.1057]. A dump was saved in: C:\MEMORY.DMP.
	
	  Event ID 2021
	  Description: The server was unable to allocate a work item 1 times in
	  the last 60 seconds.
	
	  Data:
	  0000: 00000000 00480003 00000000 800007e5
	  0010: 00000000 c000009a 00000000 00000000
	  0020: 00000000 00000000
	
	CAUSE
	=====
	
	The default system pages of 10,000 are not enought for the server due to many
	pages being locked down during transmission.
	
	RESOLUTION
	==========
	
	To work around this problem, increase the number of system pages for the server
	in the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management
	
	2. Select SystemPages. From the Edit menu, select DWORD.
	
	3. For Data, enter 20000 (Decimal).
	
	4. Click OK and quit Registry Editor.
	
	5. Shut down and restart Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 1.0 We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
