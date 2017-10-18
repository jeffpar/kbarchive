---
layout: page
title: "Q147625: Configuring Connections Using Eicon SDLC Link Services"
permalink: kb/147/Q147625/
---

## Q147625: Configuring Connections Using Eicon SDLC Link Services

	Article: Q147625
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure a connection using an Eicon Technologies V3R3 SDLC Link
	Service, make sure that all parameters are set up correctly in the WAN Services
	Configuration software. The parameters are also available in Connection
	Properties of the SNA Server Admin, but they do not over-ride the parameters set
	in the WAN Services Configuration software.
	
	MORE INFORMATION
	================
	
	The following Advanced Connection Properties parameters of SNA Server Admin on
	SNA Server 2.x, or the SDLC and Address tab in the Connection Properties in SNA
	Server manager on SNA Server 3.0 are ignored by the Eicon WAN Services SDLC Link
	Service:
	
	- Encoding (NRZ/NRZI)
	
	- Duplex (Half/Full)
	
	- Idle Timeout
	
	- Idle Retries
	
	- Data Rate (Low/High)
	
	The following parameters are not ignored. However, the configuration in the WAN
	Services takes precedence.
	
	- Max BTU Length (Frame Size N1)
	
	- Timers
	
	- Retry Counters
	
	Any Discrepancies between the values displayed in SNA Server and the values in
	the Eicon SDLC card generally result in unreliable connections. For example, if
	the Max BTU Length (Frame Size N1) is set to a small value in the WAN Services
	Configuration software, the connection becomes active, but you are unable to
	connect to the LUs. This is due to problems with the BTU size for the LU.
	
	If connecting to a host using the Microsoft 3270 emulator, you will receive the
	following error at the bottom of the applet after trying to start a session:
	
	Host Communications Link Error. Session Lost.
	
	The following error will also be displayed in the application log of the event
	viewer:
	
	Event ID 23:
	
	Connection <connection_name> using Link Service <link_service_name>
	failed.
	
	Qualifier = 0015
	
	SUBCODE INFORMATION: X'1152'
	
	The Eicon WAN Services Configuration program is in the WAN Services Configuration
	Program group. In addition, if you use the link service included in SNA Server
	Service 2.11 Service Pack 1, click Advanced in the link service configuration
	window to the run the WAN Services Configuration program. After you make any
	changes in the program, reboot the computer.
	
	For more information, look at Chapter 5 of the Eicon WAN Services for NT System
	Guide or WANNT.HLP included in the Eicon V3R3 Drivers and Link Service
	software.
	
	The Eicon products discussed here are manufactured by Eicon Technology
	Corporation, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0
	
	=============================================================================
	
