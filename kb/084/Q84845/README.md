---
layout: page
title: "Q84845: Setting Up Shared Program Groups"
permalink: /kb/084/Q84845/
---

## Q84845: Setting Up Shared Program Groups

{% raw %}

	Article: Q84845
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pages 274 and 275 of the Microsoft Windows Resource Kit discuss how to set up
	shared program groups with Microsoft Windows 3.1. Step 2 on page 275 says that
	the group files (.GRP) must be marked read-only. However, doing so may produce
	the following error if you change the Windows video display driver on a
	workstation:
	
	  Group File Error: Program group file <filename> is write protected.
	  Its icons cannot be updated for the new display device.
	
	MORE INFORMATION
	================
	
	The .GRP files contain icon display information. If the video display driver is
	changed, the group icon information is also changed.
	
	After the errors for each group are displayed, the icons may appear visually
	correct. However, after some usage in Windows, the icons may become blotchy or
	incorrectly displayed.
	
	To avoid this problem, create separate directories containing display-specific
	groups for different display drivers. The PROGMAN.INI file for each workstation
	should point to the correct directory containing the display-specific groups.
	
	For more information on this problem, query on the following words in the
	Microsoft Knowledge Base:
	
	  icon and extraction and error
	
	Additional query words: 3.10 3.11 WRK strange appearance
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
