---
layout: page
title: "Q121532: NCB_CALL Using Group Names Fails on TCP/IP-32"
permalink: /kb/121/Q121532/
---

## Q121532: NCB_CALL Using Group Names Fails on TCP/IP-32

{% raw %}

	Article: Q121532
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When certain applications (for example, ICL TeamOFFICE, a groupware
	communications application) run on a Windows for Workgroups 3.11 workstation,
	connections with a Windows NT version 3.5 or Windows NT version 3.1 server
	cannot be created when the 32-bit stack is in use. With the older 16-bit TCP/IP
	stack, connections with both Windows NT version 3.5 and Windows NT version 3.1
	are possible.
	
	CAUSE
	=====
	
	The problem only occurs if the applications attempting to communicate with each
	other are using NetBIOS group names. If unique NetBIOS names are used, the
	problem cannot be reproduced.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	ICL TeamOFFICE is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: wfw wfwg prodtcp32
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
