---
layout: page
title: "Q83561: Using Setup /C During Setup of Windows 3.1"
permalink: /kb/083/Q83561/
---

## Q83561: Using Setup /C During Setup of Windows 3.1

{% raw %}

	Article: Q83561
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The Microsoft Windows operating system version 3.1 analyzes the
	configuration files and system memory of your machine during Setup. If
	Setup encounters problems while searching memory for incompatible
	terminate-and-stay-resident (TSR) programs, it may hang and display
	the following message on the screen:
	
	 
	
	  Analyzing Running Software
	
	If this occurs, run Setup with the /C switch. This prevents Setup from
	searching for incompatible TSRs. If you use this switch, be sure to
	remark out any unnecessary TSRs that are loaded from the CONFIG.SYS or
	AUTOEXEC.BAT files.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
