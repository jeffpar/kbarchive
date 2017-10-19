---
layout: page
title: "Q157443: INFO: Testing TN3270 Server Using DEMO Link Services"
permalink: /kb/157/Q157443/
---

## Q157443: INFO: Testing TN3270 Server Using DEMO Link Services

	Article: Q157443
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TN3270 Server component can be tested using the DEMO SDLCLink Services
	included with SNA Server.
	
	MORE INFORMATION
	================
	
	The 3270 Continuous or Logon DEMO SDLC Link Service included with SNA Server
	version 2.11 can be used to test the TN3270 Server service without having host
	connectivity.
	
	To test the TN3270 service using the DEMO SDLC Link Service use the following
	steps:
	
	1. Run the SNA Server Setup program and chose the option to configure Link
	  Services.
	
	2. In the Available Link Services dialog box of the Link Service Installation
	  dialog box, select the DEMO SDLC Link Service.
	
	3. Click the Install button.
	
	4. Select either the 3270 Continuous Demo or the 3270 Logon Demo from the Script
	  File pull-down list box.
	
	5. Click Continue and exit the SNA Server Setup program.
	
	6. Configure the connection in the Servers and Connections by adding an LUA LU
	  with an LU number of 2. Give the LU any name, but be sure to select a Display
	  Model of 2.
	
	7. Configure the TN3270 Server Service, and add the LU to the TN3270
	  configuration.
	
	The LU for the demo Link Service will act in the same way as an LU for a host
	system. The screen display will vary according to the demo chosen.
	
	Using the DEMO Link Service can help identify WAN connectivity problems, in
	abstract from any problems that may be introduced by trying to acquire an LU
	from a host system. For more information on the DEMO Link Services see Chapter 2
	of the SNA Server [ASCII 147]Enhancements Guide,[ASCII 148] included with SNA
	Server 2.11. This manual is available in electronic format on the compact disc
	in the following directory:
	
	\DOCS\HELP\ENHANCE.HLP
	
	Additional query words: telnet
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
