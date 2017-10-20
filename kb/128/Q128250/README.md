---
layout: page
title: "Q128250: Correct Wallpaper Not Displayed on Remote Workstation"
permalink: /kb/128/Q128250/
---

## Q128250: Correct Wallpaper Not Displayed on Remote Workstation

{% raw %}

	Article: Q128250
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95 4.00
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a workstation other than your own, the correct wall- paper is
	not displayed even though User Profiles is enabled.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- The wallpaper specified in your user profile does not exist on the
	  workstation you have logged on to.
	
	- The wallpaper specified in your user profile exists on the workstation you
	  have logged on to, but it is not located in the same directory as it is on
	  your local workstation.
	
	WORKAROUND
	==========
	
	To work around this behavior, place a copy of the wallpaper file that you want
	to use on the workstation you are logging on to. You must place the wallpaper
	file in the same directory as it is on your local workstation.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The registry entry that contains the wallpaper setting for your user profile
	stores the entire path for the wallpaper file. If the wallpaper file does not
	exist in the path specified for your user profile, Windows 95 cannot find or
	display the wallpaper.
	
	
	Additional query words: 4.0
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWin95search kbZNotKeyword3
	Version           : 95 4.00
	
	=============================================================================
	

{% endraw %}
