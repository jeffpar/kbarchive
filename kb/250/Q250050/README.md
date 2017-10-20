---
layout: page
title: "Q250050: Mouse Error Message with PS/2 Mouse on Windows NT Workstation"
permalink: /kb/250/Q250050/
---

## Q250050: Mouse Error Message with PS/2 Mouse on Windows NT Workstation

{% raw %}

	Article: Q250050
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Windows NT Workstation 4.0 on a computer where you use
	a PS/2 type mouse, you may receive the following error:
	
	  Event ID 7026: Serial mouse failed to start
	
	CAUSE
	=====
	
	This behavior can occur when you have a serial mouse driver installed but no
	serial mouse attached.
	
	RESOLUTION
	==========
	
	To resolve this behavior, disable the serial mouse driver in Control Panel,
	under Devices.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
