---
layout: page
title: "Q164844: XCLN: Meeting Request Booked on Wrong Calendar If Auto-Forwarded"
permalink: /kb/164/Q164844/
---

## Q164844: XCLN: Meeting Request Booked on Wrong Calendar If Auto-Forwarded

{% raw %}

	Article: Q164844
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0a; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0a 
	- the operating system: Microsoft Windows NT, versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are a delegate who accepts a meeting request, Schedule+ may book the
	meeting on your own schedule, rather than the schedule for which you are the
	assistant.
	
	CAUSE
	=====
	
	Schedule+ users may have meeting requests sent only to their assistant.
	Normally, Schedule+ forwards these meeting requests when this option is
	selected. However, the message may be corrupted during the forwarding process.
	
	This problem occurs when a Windows NT 32-bit Schedule+ client forwards the
	meeting request. The client may corrupt the request message during the
	forwarding process.
	
	WORKAROUND
	==========
	
	A supported fix is now available; however, it has not been fully regression-
	tested and should only be applied to systems experiencing this specific problem.
	Unless you are severely impacted by this specific problem, Microsoft recommends
	that you wait for the next service pack that contains this fix. Contact
	Microsoft Product Support Services for more information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51, with service pack SP5. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbOSWinNT350 kbOSWinNT351 kbScheduleSearch kbSchedule100a kbOSWinNTSearch
	Version           : WINDOWS:1.0a; winnt:3.5,3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
