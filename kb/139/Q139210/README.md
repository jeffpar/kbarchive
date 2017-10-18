---
layout: page
title: "Q139210: LUA App Fails with Secondary_rc = 0x87 (COMMAND_COUNT_ERROR)"
permalink: kb/139/Q139210/
---

## Q139210: LUA App Fails with Secondary_rc = 0x87 (COMMAND_COUNT_ERROR)

	Article: Q139210
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the underlying SNA Server client software is unable to establish a connection
	with an SNA Server, an LUA application encounters the following errors:
	
	  - WinRUIStartup or WinSLIStartup returns "1" (WLUASYSNOTREADY)
	
	  - RUI_INIT and SLI_OPEN returns:
	
	  primary return code = 0x0014 (LUA_UNSUCCESSFUL)
	  secondary return code = 0x00000087 (LUA_COMMAND_COUNT_ERROR)
	
	MORE INFORMATION
	================
	
	The SNA Server client computer where the LUA application is running should be
	examined to determine why it's unable to establish a connection with an SNA
	Server. The following steps should be taken:
	
	- Run the SNA Server Client Setup program and check that the network interface
	  being used to communicate to the SNA Server (or servers) is correct. Since
	  the SNA client software can communicate to the server over various interfaces
	  (i.e. named pipes, native ipx/spx, tcp/ip sockets and Banyan IP), each
	  interface option requires appropriate settings in order to "find" an SNA
	  Server in the domain.
	
	- Make sure that the user who's running the LUA application has authority to
	  establish a network session to the SNA Server computer.
	
	- If the above settings appear to be correct, collect the following SNA Server
	  client traces and pass them to a Microsoft Support Professional:
	
	   - On Windows NT or Windows 95, capture SnaBase full internal tracing and SNA
	     Application full internal tracing, LUA API and 3270 message tracing
	   - on Windows 3.x, capture an SNA client full internal trace, RUI/SLI API
	     traces and 3270 message traces.
	
	For additional information on generating SNA Server Windows 3.x client traces,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q123256 Enabling SNA Server Windows 3.x Client Traces
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
