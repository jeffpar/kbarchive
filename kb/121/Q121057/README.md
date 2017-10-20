---
layout: page
title: "Q121057: 20 Second Delay in Keystrokes and Mouse Movements in TCP/IP-32"
permalink: /kb/121/Q121057/
---

## Q121057: 20 Second Delay in Keystrokes and Mouse Movements in TCP/IP-32

{% raw %}

	Article: Q121057
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There may be a 20 second delay in keystrokes and mouse movements when you are
	running Windows for Workgroups version 3.11 with TCP/IP-32. This delay may be
	repeated at intervals of 5 to 10 minutes.
	
	This problem occurs when TCP/IP is NOT the default protocol, and the Enable
	LMHOSTS Lookup check box is selected in Network Setup.
	
	After your computer stops responding (hangs) for approximately 20 seconds, the
	following message appears:
	
	  DOS Error 53: The computer name specified in the network path cannot be
	  located.
	
	WORKAROUND
	==========
	
	To work around this problem, make TCP/IP the default protocol.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: wfw wfwg prodtcp32 1.00 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
