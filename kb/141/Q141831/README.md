---
layout: page
title: "Q141831: System Locks Up When Accessing Floppy Drive"
permalink: /kb/141/Q141831/
---

## Q141831: System Locks Up When Accessing Floppy Drive

{% raw %}

	Article: Q141831
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbHardware
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt a drag-and-drop operation on files, either to or from a floppy
	disk, the system may stop responding.
	
	CAUSE
	=====
	
	Some high performance video cards enable Uncached Speculative Write Combining
	(USWC) memory. In combination with some motherboard BIOSes, this may cause a
	memory conflict in the Graphical User Interface (GUI), which may cause the
	system to stop responding.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, you can either boot using the VGA mode or add the
	following registry key:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  KEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\GraphicsDrivers
	
	2. On the Edit menu, click Add Key.
	
	3. Enter the following:
	
	  Key Name: DisableUSWC
	  Class: <leave blank>
	
	4. Click OK and quit the Registry Editor.
	
	5. Shut down and restart Windows NT.
	
	The presence of the DisableUSWC key will cause the miniport to not use USWC. With
	USWC disabled, the memory conflict will not occur and the system will not stop
	responding for this reason.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server version 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: hang freeze frozen hung lock locked stop stopped halt halts halted gui ui prodnt
	
	======================================================================
	Keywords          : kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
