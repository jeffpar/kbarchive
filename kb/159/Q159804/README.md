---
layout: page
title: "Q159804: Toolbar or Color Palette Not Visible in Paint"
permalink: /kb/159/Q159804/
---

## Q159804: Toolbar or Color Palette Not Visible in Paint

{% raw %}

	Article: Q159804
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you are using Paint, the toolbar or color palette may not be visible even
	though you have chosen the corresponding command on the View menu. Removing and
	reinstalling Paint does not correct the problem.
	
	CAUSE
	=====
	
	This behavior can occur when you move the toolbar or color palette so that it
	appears in a separate window, and then either of the following events occurs:
	
	- You move the toolbar or color palette so that it is hidden behind the Windows
	  95 taskbar.
	
	- You move the toolbar or color palette to the bottom or right edge of the
	  screen and then configure Windows 95 to use a lower resolution. When you do
	  so, the toolbar or color palette may be located on an area of the desktop
	  that is not visible.
	
	RESOLUTION
	==========
	
	To work around this behavior, use one of the following methods:
	
	- Move the taskbar to a different location. If the toolbar or color palette is
	  then visible, move the toolbar or color palette to a different location and
	  then move the taskbar back to its original location.
	
	- Configure Windows 95 to use the highest resolution supported by your display
	  adapter and monitor. To configure Windows 95 to use a higher resolution,
	  double-click Display in Control Panel, click the Settings tab, and then move
	  the Desktop Area slider to the right.
	
	  If the toolbar or color palette is then visible, move the toolbar or color
	  palette to a different location and then configure Windows 95 to use the
	  original resolution. To prevent the behavior from happening again when you
	  return to the original resolution, move the toolbar or color palette to the
	  upper left corner of the screen or move it so that it does not appear in a
	  separate window. After you return to the original resolution, you can move
	  the toolbar or color palette to the location you want.
	
	- WARNING: Using Registry Editor incorrectly can cause serious problems that
	  may require you to reinstall Windows 95. Microsoft cannot guarantee that
	  problems resulting from the incorrect use of Registry Editor can be solved.
	  Use Registry Editor at your own risk.
	
	  NOTE: For information about how to edit the registry, view the Changing Keys
	  And Values online Help topic in Registry Editor (Regedit.exe). Note that you
	  should make a backup copy of the registry files (System.dat and User.dat)
	  before you edit the registry.
	
	  If the toolbar is not visible when you are using Paint, delete the Floating
	  value under the following registry key:
	
	  Hkey_Current_User\Software\Microsoft\Windows\CurrentVersion\Applets\
	  Paint\General-Bar3
	
	  If the color palette is not visible when you are using Paint, delete the
	  Floating value under the following registry key:
	
	  Hkey_Current_User\Software\Microsoft\Windows\CurrentVersion\Applets\
	  Paint\General-Bar4
	
	  Deleting the appropriate registry value causes the toolbar or color palette to
	  appear in the Paint window instead of appearing as a separate window. You can
	  then move the toolbar or color palette to the location you want.
	
	Additional query words: mspaint.exe
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
