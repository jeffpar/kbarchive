---
layout: page
title: "Q157865: Hellbender Requires 16 MB of Virtual Memory"
permalink: /kb/157/Q157865/
---

## Q157865: Hellbender Requires 16 MB of Virtual Memory

{% raw %}

	Article: Q157865
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	1.00
	WINDOWS
	kbother
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Hellbender for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Hellbender may display the following error message when there is less than 16 MB
	of virtual memory available to run:
	
	  Hellbender may not function properly without 16 MB of available physical
	  and/or virtual memory. Please close unused applications to free additional
	  memory.
	
	RESOLUTION
	==========
	
	This problem can be resolved as follows:
	
	- Close other applications before running Hellbender.
	
	  -or-
	
	- Free up disk space.
	
	  -or-
	
	- Ensure the Disable Virtual Memory check box is not selected:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click System.
	
	  c. Click Performance.
	
	  d. Click Virtual Memory.
	
	  -or-
	
	- If you are using the "Let me specify my own virtual memory settings" option
	  in the Virtual Memory settings, make sure it displays an adequate minimum
	  amount of memory to run Hellbender.
	
	For information about how to perform these tasks in Windows, see your Windows
	online Help.
	
	MORE INFORMATION
	================
	
	After the error message, you can click the OK button and the game may load
	without any further problems. However, this is not recommended.
	
	Hellbender lists 8 MB of memory (RAM) on the system requirements section of the
	Hellbender box. However, the computer must have 16 MB of virtual memory. For
	example, on a machine with 8 MB of RAM, and an 8 MB swap file must exist.
	
	Additional query words: 1.00 Hellbender memory physical error 16
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbZNotKeyword kbHellBender
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
