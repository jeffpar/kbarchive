---
layout: page
title: "Q257665: Cannot Disable &quot;Stretch Wallpaper&quot; Feature"
permalink: /kb/257/Q257665/
---

## Q257665: Cannot Disable &quot;Stretch Wallpaper&quot; Feature

{% raw %}

	Article: Q257665
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv osr2 win95
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The background wallpaper (picture) for your desktop may be stretched, and you
	may be unable to find a method to turn the "stretch" feature off.
	
	CAUSE
	=====
	
	This behavior can occur if the Plustab.dll file is missing or damaged and the
	WallpaperStyle value in the registry is set to 2.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	Method 1
	--------
	
	Extract the Plustab.dll file from the Plus_3.cab file on your original Microsoft
	Plus! for Windows 95 media to the Windows\System folder. For information about
	how to do so, see the following article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Method 2
	--------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Change the data value for the WallpaperStyle value in the following registry key
	to 0:
	
	  HKey_Current_User\Control Panel\Desktop
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv osr2 win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
