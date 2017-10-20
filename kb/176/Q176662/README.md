---
layout: page
title: "Q176662: Cannot View Tool Box, Color Box, or Thumbnail Tool in Paint"
permalink: /kb/176/Q176662/
---

## Q176662: Cannot View Tool Box, Color Box, or Thumbnail Tool in Paint

{% raw %}

	Article: Q176662
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbdisplay kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry  Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you select the Tool Box, Color Box, or Show Thumbnail tool in Paint, the
	tool may not appear on the screen.
	
	CAUSE
	=====
	
	This behavior can occur when the screen resolution is reduced, causing the Tool
	Box, Color Box, or Show Thumbnail tool to be positioned off of the screen.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods. Try method 1 first. If
	you cannot increase your screen resolution, use method 2.
	
	Method 1
	--------
	
	Increase the screen resolution. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display, and then click the Settings tab.
	
	3. Move the Desktop Area slider to the right, and then click OK.
	
	  NOTE: Your monitor and display adapter determine whether you can change your
	  screen resolution. To increase the screen resolution when the monitor type is
	  unknown, you may need to specify a monitor if you are prompted:
	
	  You have not specified what type of monitor you use. Your new settings may
	  not work correctly. Do you want to specify a monitor now?
	
	4. Click Yes, and then click OK.
	
	5. If you still cannot view the Tool Box, Color Box, or Show Thumbnail tool,
	  repeat steps 1-3 to further increase the screen resolution.
	
	6. When you can view the Tool Box, Color Box, or Show Thumbnail tool, move the
	  tool closer to the upper-left corner of the screen, and then reduce the
	  screen resolution to your preferred setting.
	
	Method 2
	--------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	NOTE: If you use this method, any customizations that you previously made for
	Paint are reset to the default settings.
	
	1. Quit Paint.
	
	2. Use Registry Editor to delete the Paint key in the following registry key:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Applets
	
	3. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	This behavior can occur if you move the Tool Box, Color Box, or Show Thumbnail
	tool to the edge of the screen, quit Paint, and then reduce the screen
	resolution before you start Paint again. This causes the tool to be positioned
	off of the visible portion of the screen.
	
	
	To select the Tool Box or Color Box tool, follow these steps:
	
	1. Click Start, point to Programs, point to Accessories, and then click Paint.
	
	2. On the View menu, click Tool Box or Color Box.
	
	To select the Show Thumbnail tool, follow these steps:
	
	1. Click Start, point to Programs, point to Accessories, and then click Paint.
	
	2. On the View menu, click Zoom, and then click Large Size or Custom.
	
	3. On the View menu, click Zoom, and then click Show Thumbnail.
	
	When you zoom in on a picture with the Large Size or Custom setting enabled and
	the Thumbnail tool selected, a separate smaller window displays a full view of
	the magnified picture.
	
	======================================================================
	Keywords          : kbdisplay kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
