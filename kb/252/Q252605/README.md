---
layout: page
title: "Q252605: PRB: AutoCAD Lt 2000 Uninstall Does Not Work from Start Menu"
permalink: /kb/252/Q252605/
---

## Q252605: PRB: AutoCAD Lt 2000 Uninstall Does Not Work from Start Menu

{% raw %}

	Article: Q252605
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to uninstall AutoCAD Lt 2000 from the Start menu (by clicking
	Start, pointing to Programs, and selecting AutoCAD Lt 2000 Uninstall and then
	Uninstall AutoCAD LT 2000) a dialog box appears with the message, "The filename,
	directory name, or volume label syntax is incorrect."
	
	After you click ok, another message appears announcing that Windows is searching
	for the Unaclt.dll file.
	
	CAUSE
	=====
	
	The installation program does not understand long path names.
	
	RESOLUTION
	==========
	
	To work around this issue, remove the program using the Add/Remove Programs
	utility in Control Panel.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install AutoCAD Lt 2000.
	
	2. Click Start, point to Programs, and select AutoCAD Lt 2000 Uninstall.
	
	3. Remove AutoCAD Lt 2000 by clicking on Uninstall AutoCAD Lt 2000.
	
	The installation program cannot handle the long path name, so the link fails.
	However, you can uninstall the program using Control Panel.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
