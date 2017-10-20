---
layout: page
title: "Q172635: Event 567, RC =10048 When Restarting SNA Server"
permalink: /kb/172/Q172635/
---

## Q172635: Event 567, RC =10048 When Restarting SNA Server

{% raw %}

	Article: Q172635
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the SnaBase or SnaServer services fail with an access violation, the TCP/IP
	socket ports that they use may not be cleaned up properly. When you attempt to
	restart the SnaBase or SnaServer service, you will see the following error
	logged in the event viewer:
	
	  Event ID: 567
	  Description: Creation of a named pipe failed, rc = 10048, pipe = <socket
	  number>
	
	The 10048 error corresponds to Winsock error WSAEADDRINUSE (address in use).
	After this problem occurs, the server must be restarted in order to restart SNA
	Server.
	
	CAUSE
	=====
	
	If SnaBase or SnaServer encounters an access violation, it leaves some sockets
	in the open state.
	
	
	NOTE: You must still investigate the original cause of the access violation. Open
	a case with Microsoft Product Support Services, and provide the following
	information:
	
	  <Ntroot>\Drwtsn32.log
	  <Snaroot>\Traces\Snadump.log
	  Windows NT application logs
	  System event logs
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11.
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, SNA Server cleans up the sockets in the top-level
	exception handler supported by Snadmod.dll. The cleanup will always happen,
	provided the exception handler is invoked, and services can be restarted without
	restarting the computer in such situations.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ300SP1
	Version           : WINDOWS:2.11,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
