---
layout: page
title: "Q129777: System Instabilities Playing .WAV Files"
permalink: /kb/129/Q129777/
---

## Q129777: System Instabilities Playing .WAV Files

{% raw %}

	Article: Q129777
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to play a 16-bit, 44-kHz .WAV file that is stored in uncompressed
	PCM format, you may experience any of the following problems:
	
	- Data corruption.
	
	- You may receive "Fatal Exception" errors in various system components. For
	  example, you may receive the following error message:
	
	  Fatal Exception 0E in VXD VWIN32(01)
	
	CAUSE
	=====
	
	The Hidden Refresh option in your computer's CMOS settings is enabled. When this
	option is enabled, it can cause the symptoms listed above.
	
	
	RESOLUTION
	==========
	
	To correct this problem, disable the Hidden Refresh option in your computer's
	CMOS settings. For information about how to modify settings in your computer's
	CMOS settings, please contact the computer's manufacturer.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
