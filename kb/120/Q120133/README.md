---
layout: page
title: "Q120133: Can't Change &quot;Windows In Foreground&quot; Settings in Control Panel"
permalink: kb/120/Q120133/
---

## Q120133: Can't Change &quot;Windows In Foreground&quot; Settings in Control Panel

	Article: Q120133
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changes made to the Windows In Foreground setting in the Enhanced dialog box of
	Control Panel do not take effect after restarting Windows. Control Panel shows
	different values from those specified for the WinTimeslice= entry of the
	[386Enh] section of the SYSTEM.INI file.
	
	CAUSE
	=====
	
	This problem occurs when the Performance Priority setting in the Startup
	Settings dialog box of Control Panel (accessed by choosing the Network icon and
	then the Startup button) is set to Resources Shared Fastest or a value too high
	(that is, too close to the Resources Shared Fastest end).
	
	RESOLUTION
	==========
	
	Move the Performance Priority indicator toward the Applications Run Fastest end.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.10 3.1 3.11 4500 5000 slow printing background slider bar
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
