---
layout: page
title: "Q253296: How to Disable the &quot;Test&quot; Video Option Upon Reboot"
permalink: /kb/253/Q253296/
---

## Q253296: How to Disable the &quot;Test&quot; Video Option Upon Reboot

{% raw %}

	Article: Q253296
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0; :4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbhw kbHardware
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to disable the "test" video option upon reboot and
	have the specified video resolution and refresh frequency set after the
	installation of a new video driver to reduce the required input.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	WARNING: Incorrect settings can damage your monitor. Consult your monitor
	documentation for the correct display settings.
	
	1. Install the new video drivers.
	
	2. Start Regedt32.exe.
	
	3. Locate the following registry key:
	
	  Hkey_Local_Machine\System\CurrentControlSet\Control\GraphicsDrivers
	
	4. Delete the following two keys:
	
	  NewDisplay
	  RebootNecessary
	
	For additional information about additional video settings, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q102992 REG: Device Driver Entries, PART 5
	
	REFERENCES
	==========
	
	Q102992 Q180647
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdisplay kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0; :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
