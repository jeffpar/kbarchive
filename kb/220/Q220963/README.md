---
layout: page
title: "Q220963: Object Is Not Displayed in the Multimedia Tool in Control Panel"
permalink: /kb/220/Q220963/
---

## Q220963: Object Is Not Displayed in the Multimedia Tool in Control Panel

	Article: Q220963
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsound
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Under certain circumstances, all objects in the Multimedia tool in Control Panel
	may not be displayed. This may cause problems if you need to configure an object
	using the Multimedia tool.
	
	CAUSE
	=====
	
	This behavior can occur if the size of the following registry key becomes larger
	than 512 bytes:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Drivers32
	
	The Multimedia tool reads this key to obtain a display of objects. If the size of
	this key is larger than 512 bytes, the Multimedia tool cannot read the entire
	list of values (512 bytes are approximately 50 objects).
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, use one of the following methods:
	
	- Remove any unused audio or video codecs, sound card drivers, or video capture
	  devices from the Multimedia tool. After the size of the registry key is less
	  than 512 bytes, objects are properly displayed in the Multimedia tool.
	
	- Change the order of objects in the registry so that the objects that you want
	  displayed are configured to be at the top of the registry key:
	
	  1. Click Start, click Run, and then type "regedit" (without the quotation
	     marks).
	
	  2. Find the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT \CurrentVersion\Drivers32
	
	  3. Click the Drivers32 data value, click the Registry menu, and then click
	     Export Registry File.
	
	  4. Name the file Mm.reg, and then save it to the hard disk.
	
	  5. Right-click the Mm.reg file, and then click Edit. This opens the file in
	     Notepad so you can edit the registry keys.
	
	  6. Cut and paste the entries that you want displayed in the Multimedia tool
	     to the bottom of the file, leaving no blank lines.
	
	  7. Save the changes to the file, and then quit Notepad.
	
	  8. Double-click the Mm.reg file. A message appears, confirming that the
	     registry is updated.
	
	  9. Restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	The fact that an object is not displayed does not affect most programs; the
	driver for a device still loads and is available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsound 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
