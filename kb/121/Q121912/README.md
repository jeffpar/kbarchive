---
layout: page
title: "Q121912: PING Hangs or Reboots Workstation"
permalink: kb/121/Q121912/
---

## Q121912: PING Hangs or Reboots Workstation

	Article: Q121912
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
	
	When you run the PING command before you start Windows for Workgroups version
	3.11 with Microsoft TCP/IP-32, the computer hangs or reboots automatically.
	
	WORKAROUND
	==========
	
	Start Windows for Workgroups version 3.11 and then run the PING command from the
	command prompt. Microsoft TCP/IP-32 runs as a virtual device driver (VxD), which
	requires Windows for Workgroups version 3.11 to be started.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the TCP/IP-32 utility. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodtcp32 3.11 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	
