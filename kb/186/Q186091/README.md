---
layout: page
title: "Q186091: Streets 98 Err Msg: The Main Application Could Not Be Launched"
permalink: /kb/186/Q186091/
---

## Q186091: Streets 98 Err Msg: The Main Application Could Not Be Launched

{% raw %}

	Article: Q186091
	Product(s): Microsoft Automap
	Version(s): WINDOWS:1.0,98
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets 98 Deluxe, version 1.0 
	- Microsoft Expedia Streets 98, version 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Expedia Streets 98, you may receive the following
	error message:
	
	  The main application could not be launched; Please rerun setup.
	
	CAUSE
	=====
	
	This behavior can occur if you are running a third-party program that conflicts
	with Expedia Streets 98.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable any third-party programs that are started from
	the "Load=" or "Run=" line in the Win.ini file. To do so, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "win.ini" (without the quotation marks), and then click
	  OK.
	
	3. Locate the "Load=" and "Run=" lines.
	
	4. Type a semicolon (;) at the beginning of both lines.
	
	  NOTE: If there are multiple "Load=" or "Run=" lines in the Win.ini file, make
	  sure you type a semicolon at the beginning of all "Load=" and "Run=" lines.
	
	5. On the File menu, click Save.
	
	6. On the File menu, click Exit.
	
	7. Restart the computer.
	
	If the issue continues to occur, start Windows without loading any
	terminate-and-stay-resident (TSR) programs or device drivers (this is called a
	clean boot). For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	Additional query words: 98 street streetsplus automap a-map auto map
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets98 kbExpediaStreets98del
	Version           : WINDOWS:1.0,98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
