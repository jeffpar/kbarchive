---
layout: page
title: "Q125264: PC WSPlus: Forced to Work Off Line"
permalink: /kb/125/Q125264/
---

## Q125264: PC WSPlus: Forced to Work Off Line

{% raw %}

	Article: Q125264
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start up Schedule+ for Windows, you may only have the option to work
	off line.
	
	CAUSE
	=====
	
	Any of the following scenarios will force you to work off line:
	
	1. The following option may be enabled in the SCHDPLUS.INI file in the
	  [MICROSOFT SCHEDULE+] section:
	
	        StartupOffline=1
	      
	
	2. Remote Mail for Windows may be installed on the machine and the SYSTEM
	  SELECTOR may be set to the Remote driver.
	
	3. You could have the wrong transport in the SCHDPLUS.INI file in the [MICROSOFT
	  SCHEDULE+] section with the ScheduleTransport= option.
	
	RESOLUTION
	==========
	
	1. From the Options menu, choose General Options and clear the selection for
	  Startup Offline.
	
	  NOTE: You can also set the StartupOffline= option to 0 in the SCHDPLUS.INI
	  file.
	
	2. Run SYSTEM SELECTOR and set the driver back to the Microsoft Mail for PC
	  Networks driver.
	
	3. Change the ScheduleTransport= to TRNSCHED.DLL.
	
	Additional query words: schedule plus 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
