---
layout: page
title: "Q155293: PRB: Time Displayed in IDE Not the Same as System Time"
permalink: /kb/155/Q155293/
---

## Q155293: PRB: Time Displayed in IDE Not the Same as System Time

{% raw %}

	Article: Q155293
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbenv kbui kbide kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The time displayed in the status bar of the development environment in Visual
	C++ is off by one hour.
	
	CAUSE
	=====
	
	The run-time library and tools in Visual C++ use "daylight saving time"
	information from the TZ environment variable if it is set.
	
	RESOLUTION
	==========
	
	Do not set the TZ environment variable, instead use the Date/Time applet in the
	Control Panel in Windows NT, Windows 2000, Windows 95, Windows 98, or Windows
	Millennium Edition (Me). Check the AUTOEXEC.BAT file or other places where you
	may have set the TZ environment variable. If you really need to set it, set it
	to be the same as the operating system settings. For more information about TZ
	environment variable, please refer to _tzset function in the Run-Time Library
	Reference.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbui kbide kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
