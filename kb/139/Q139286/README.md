---
layout: page
title: "Q139286: PC WSPlus: Dynamic Connections Limited to 8 Netware Servers"
permalink: /kb/139/Q139286/
---

## Q139286: PC WSPlus: Dynamic Connections Limited to 8 Netware Servers

{% raw %}

	Article: Q139286
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Schedule+ for Windows connected to a postoffice via Novell NetWare,
	and you attempt to open other user's appointment book, you may receive the
	following error:
	
	  The schedule file could not be opened. You may not have the necessary access
	  privileges or the file is unavailable.
	
	CAUSE
	=====
	
	This will only occur if you are using Dynamic Connections and already have eight
	(8) or more connections from the workstation to NetWare servers.
	
	RESOLUTION
	==========
	
	Disconnect one of your existing mappings to another NetWare server until the
	number of connections is below seven (7).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 1.0 and 1.0a of
	Microsoft Schedule+ for Windows. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	With Schedule+, you can open other appointment books across servers. In the
	early implementations of Novell NetWare where NETX and IPX drivers were being
	loaded, NetWare placed a limitation of eight concurrent connections to NetWare
	servers. With the invent of the Novell NetWare Virtual Loadable Modules (VLM),
	the NetWare OS allowed you to connect up to 50 NetWare servers. However, the
	NVCONN.DLL that was written for Schedule+, contained the NetWare code as written
	that limited the concurrent connections to eight.
	
	
	Additional query words: schedule plus novel dynamic connections
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
