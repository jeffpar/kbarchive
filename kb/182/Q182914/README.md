---
layout: page
title: "Q182914: SNA Server Can Be &quot;Paused&quot; to Force New Users to Other Servers"
permalink: kb/182/Q182914/
---

## Q182914: SNA Server Can Be &quot;Paused&quot; to Force New Users to Other Servers

	Article: Q182914
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server 3.0 Service Pack 1 (SP1) and later versions supports the ability to
	"Pause" and "Continue" the SNA Server service (SnaServer). When paused, the SNA
	Server continues to support existing client connections, but refuses new client
	session requests. This applies to 3270, LUA (including TN3270) and APPC LU
	types. Administrators can still administer the SNA Server while it is paused. As
	users stop and restart their SNA session access, users connect against alternate
	servers that are configured to provide SNA access for the users. This allows an
	SNA Server to be brought out of service with minimal user disruption.
	
	Using SNA Server 3.0 (SP1 or later), the SNA Server service can be paused and
	continued, using the Windows NT Control Panel "Services" function. The SNA
	Server 3.0 Manager interface doesn't support the ability to pause and to resume
	the server. However, the SNA Server 4.0 Manager and Microsoft Management Console
	interface do support the ability to pause and resume the server directly from
	the SNA Server 4.0 management interface.
	
	MORE INFORMATION
	================
	
	When the SNA Server service is paused, new user connection requests are refused.
	If alternate SNA Servers in the SNA subdomain are configured with SNA session
	resources and are available to the user, the user will automatically connect to
	the alternate servers. However, if there is a single SNA Server and it is
	paused, the following behavior will be observed on the client who attempts to
	connect to a paused server:
	
	- An APPC application's [MC_]ALLOCATE request will fail, with the following
	  error:
	
	  primary_rc = 0xF004 (COMM_SUBSYSTEM_NOT_LOADED)
	  secondary_rc = 0x010000F0 (or 0xF0000001)
	
	- A CPIC application's CMALLC request will fail with Error 20
	  (CM_PRODUCT_SPECIFIC_ERROR)
	
	- When opening a 3270 emulation session, the Microsoft SNA Server 3270 program
	  displays the following message:
	
	  No SNA Server found in domain.
	
	A 3270 message trace shows that the emulator's Open(SSCP) request fails with an
	OPEN SSCP RSP ERROR, with Err1:0000, Err2:0000.
	
	- When opening a TN3270 session through the SNA Server TN3270 Server, where LUA
	  LUs are owned by an SNA Server that has been paused, the SNA Server TN3270
	  program displays the following error:
	
	  [TN3270-36] ERROR
	
	- An error occurred during device type/name processing
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
