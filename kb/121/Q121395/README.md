---
layout: page
title: "Q121395: Running NetBEUI in Real Mode with WFW 3.11"
permalink: kb/121/Q121395/
---

## Q121395: Running NetBEUI in Real Mode with WFW 3.11

	Article: Q121395
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
	
	On a Windows for Workgroups (WfWG) version 3.11 computer with TCP/IP-32, if you
	load NetBEUI into real mode (conventional memory) prior to starting Windows you
	may encounter problems such as network errors, inability to make network
	connections, other machines not able to connect to your shares, or your computer
	may stop responding (hang) when attempting to make a network connection.
	
	NOTE: To load NetBEUI into conventional memory, run the following command at the
	command prompt prior to starting Windows, or add it to the AUTOEXEC.BAT file:
	
	     Net Start NetBEUI
	
	WORKAROUND
	==========
	
	Remove TCP/IP, or do not load NetBEUI in real mode.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups, and
	TCP/IP-32. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodtcp32 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	
