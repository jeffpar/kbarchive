---
layout: page
title: "Q244704: INFO: Dragging EXE File Doesn't Default to &quot;Create Shortcut&quot;"
permalink: /kb/244/Q244704/
---

## Q244704: INFO: Dragging EXE File Doesn't Default to &quot;Create Shortcut&quot;

{% raw %}

	Article: Q244704
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
	
	SUMMARY
	=======
	
	If you try to create a shortcut by dragging and dropping an unregistered 16-bit
	or 32-bit executable file, the application may not run properly.
	
	MORE INFORMATION
	================
	
	Windows 2000 physically moves the EXE file to its drop destination rather than
	creating a shortcut.
	
	This behavior is new in Windows 2000. If the application is registered using the
	Windows Installer, users will be able to create a shortcut as in previous
	versions of Windows. For unregistered applications, the procedure is to
	right-click and drag to create a shortcut.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
