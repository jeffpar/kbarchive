---
layout: page
title: "Q119204: Setup Problems on NEC Docking Station When Checking for APM"
permalink: /kb/119/Q119204/
---

## Q119204: Setup Problems on NEC Docking Station When Checking for APM

{% raw %}

	Article: Q119204
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Windows for Workgroups on an NEC docking station, Setup
	stops responding (hangs) during the text-based (real-mode) portion.
	
	CAUSE
	=====
	
	This problem occurs when Setup tries to determine whether the machine supports
	advanced power management (APM).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To work around this problem, either run SETUP /I to disable hardware detection,
	or comment out any APM drivers in your CONFIG.SYS and/or AUTOEXEC.BAT files.
	
	Additional query words: 3.11 apm
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
