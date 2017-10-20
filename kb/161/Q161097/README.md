---
layout: page
title: "Q161097: Cinemania 97: How To Turn Opening Video Off From the Registry"
permalink: /kb/161/Q161097/
---

## Q161097: Cinemania 97: How To Turn Opening Video Off From the Registry

{% raw %}

	Article: Q161097
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1997 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows 1997 edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SUMMARY
	=======
	
	Cinemania 1997 plays a full-screen video as part of the opening sequence. If
	running the video is causing problems with your computer and keeping Cinemania
	from starting, you may need to turn the opening video off.
	
	This article discusses how to turn the opening video off using the Windows
	registry.
	
	MORE INFORMATION
	================
	
	To turn the opening video off, do the following:
	
	- Go to the HKEY_CURRENT_USER\Software\Microsoft\Reference Titles\Cinemania 97\
	  key in the Windows 95 registry and change the value of the StartupVideo entry
	  to 0.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk. The registry is a system-wide database used for storing
	Windows software and hardware configuration settings.
	
	To change the value of the StartupVideo entry, do the following:
	
	1. Click the Start button, and then click Run.
	
	2. Type the following and click OK:
	
	  "regedit" (without the quotation marks)
	
	3. When the Registry Editor appears, double-click the HKEY_CURRENT_USER folder.
	
	4. Double-click the Software folder, and then the Microsoft folder.
	
	5. Double-click the Reference Titles folder, and then the Cinemania 97 folder.
	
	6. Double-click the StartupVideo entry.
	
	7. Change the Value Data from 1 to 0, and then click OK.
	
	8. Click Registry, and then click Exit.
	
	9. Restart Cinemania.
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1997
	Version           : :1997 edition
	
	=============================================================================
	

{% endraw %}
