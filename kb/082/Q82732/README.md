---
layout: page
title: "Q82732: Meaning of the SETUP.INF's &quot;noclobber&quot; Entries"
permalink: /kb/082/Q82732/
---

## Q82732: Meaning of the SETUP.INF's &quot;noclobber&quot; Entries

{% raw %}

	Article: Q82732
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "noclobber" and "rename" items in the [ini.upd.31] section of the SETUP.INF
	are operators used to tell Setup to either rename a .INI entry or not to remove
	(clobber) an existing .INI entry.
	
	MORE INFORMATION
	================
	
	The following is a sample of the [ini.upd.31] section of the SETUP.INF:
	
	  [ini.upd.31]
	  ;
	  ; File,section,Line to be removed,Line to be added,Optional operator
	  ;
	  system.ini,386Enh, "device=vpicda.386","device=*vpicd"
	  system.ini,drivers,"midi4=adlib.drv",  "midi4=msadlib.drv",rename
	  system.ini,386Enh, "keyboard=" ,       "keyboard=*vkd",    noclobber
	
	The first line causes Setup to remove the line device=vpicda.386 from the
	[386Enh] section of SYSTEM.INI and add the line "device=*vpicd" to the same
	section in SYSTEM.INI.
	
	The second line causes Setup to replace the line "midi4=adlib.drv" with the line
	"midi4=msadlib.drv." Note: the replacement is done only if the line to be
	replaced exists; therefore, this has the effect of renaming.
	
	The third line causes Setup to replace the line "keyboard=" with "keyboard=*vkd"
	only if the line "keyboard=" does not exist in the [386Enh] section of
	SYSTEM.INI.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
