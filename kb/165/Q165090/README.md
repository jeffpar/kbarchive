---
layout: page
title: "Q165090: Memory Leak in SNA Server Windows NT Client When Using APPC"
permalink: /kb/165/Q165090/
---

## Q165090: Memory Leak in SNA Server Windows NT Client When Using APPC

{% raw %}

	Article: Q165090
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you stop a WinAPPC application or unload the Windows NT SNA Server client
	server interface (Snabase), the memory consumed by these processes may not be
	released. This applies to running the WinAPPC application on an SNA Server
	Windows NT Client or the SNA Server itself.
	
	CAUSE
	=====
	
	Several DLLs do not close all open handles when they are unloaded from memory by
	a FreeLibrary() call.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snafaqtop
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
