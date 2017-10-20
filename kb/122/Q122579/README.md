---
layout: page
title: "Q122579: PC WSPlus: Dynamic Connections Not Released"
permalink: /kb/122/Q122579/
---

## Q122579: PC WSPlus: Dynamic Connections Not Released

{% raw %}

	Article: Q122579
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When dynamic connections are used in version 1.0 of Schedule+ for Windows to
	open appointment books on other servers, the connection to the other server is
	not released until you Exit and Sign Out of Schedule+. This is true for
	Microsoft LAN Manager, Windows NT, and Windows for Workgroups networks.
	
	This problem can also cause the following error to appear in Schedule+ when you
	try to open an Appointment Book:
	
	  The Schedule file could not be opened. You may not have the necessary access
	  privileges or the file may be unavailable.
	
	RESOLUTION
	==========
	
	To work around this problem, increase the value of the SESSION entry in the
	PROTOCOL.INI file. This does not correct the problem, but it allows the
	workstation to connect to additional servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0 of Schedule+ for
	Windows. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: schedule plus 1.00 dynamic
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
