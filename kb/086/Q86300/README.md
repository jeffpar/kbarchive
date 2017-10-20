---
layout: page
title: "Q86300: Perform Pro Can Cause Rumba to Lose Settings"
permalink: /kb/086/Q86300/
---

## Q86300: Perform Pro Can Cause Rumba to Lose Settings

{% raw %}

	Article: Q86300
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Delrina Technologies' Perform Pro version 1.0 can cause Walldata's Rumba version
	3 update 4 to lose selected settings. These settings are reset to their default
	parameters, which include settings for color, printers, and FTX setup.
	
	The problem occurs when Perform Pro is loaded or unloaded.
	
	CAUSE
	=====
	
	Perform Pro sends a Windows message to all top-level windows with a value of
	WM_USER+9. This message should not be sent. Rumba responds to this message by
	resetting its profile to the default values.
	
	RESOLUTION
	==========
	
	This is a known issue between Rumba and Perform Pro, but may also occur with
	other programs. It has been reported that Delrina has confirmed this to be a
	problem and plans to correct it with its next release.
	
	MORE INFORMATION
	================
	
	For more information, contact Delrina Technical Support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 settings 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
