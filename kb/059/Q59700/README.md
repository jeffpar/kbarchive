---
layout: page
title: "Q59700: Unloading TSRs Manually; Still Get TSR Support Message"
permalink: /kb/059/Q59700/
---

## Q59700: Unloading TSRs Manually; Still Get TSR Support Message

{% raw %}

	Article: Q59700
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	If you run a TSR (terminate and stay resident) program, such as SideKick,
	in an MS-DOS virtual machine under Microsoft Windows version 3.0 enhanced
	mode and then unload the TSR and exit the virtual machine, you continue to
	receive the "Windows TSR Support" message even though the TSR has been
	unloaded.
	
	This is because although there is a mechanism for Windows to determine if a
	TSR has been loaded, there is no way for Windows to tell if the TSR has
	been unloaded. Once it is loaded, a flag is set that a TSR is present.
	Thus, you receive the TSR support message even if you have unloaded the TSR
	manually.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
