---
layout: page
title: "Q247822: How to Use Demo SDLC Link Service for 3270 Client Testing"
permalink: kb/247/Q247822/
---

## Q247822: How to Use Demo SDLC Link Service for 3270 Client Testing

	Article: Q247822
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can test IBM 3270 terminal emulation connections with the Demo SDLC Link
	Service included with Microsoft SNA Server.
	
	MORE INFORMATION
	================
	
	The Demo SDLC Link Service emulates a live connection to a mainframe computer.
	The Demo SDLC Link Service is used to demonstrate the capabilities of SNA Server
	without a live connection to the host. The Demo SDLC Link Service receives
	messages from the SNA Server computer, and then responds to the messages itself.
	By loading script files (which are provided), you can run an emulation of a 3270
	host. Connections that use the Demo SDLC Link Service appear to the rest of the
	SNA Server computer as ordinary SDLC connections.
	
	The following steps are required to install a 3270 demo link service and use it
	for testing:
	
	1. In the SNA Server Manager, expand the SNA subdomain until the Link Services
	  are displayed
	
	2. Right-click the Link Services folder, and then insert a link service. Choose
	  Demo Link Service, and then click Add. A new service named SnaDemo1 is
	  created.
	
	3. From the Script File list box, select either the 3270 Continuous Demo script
	  or the 3270 Logon Demo script.
	
	  The 3270 Continuous Demo script runs a test transaction program that
	  continuously sends full screens of data to the emulator.
	
	  The 3270 Logon Demo script emulates the 3270 logon and logoff to a mainframe
	  computer.
	
	4. Click OK.
	
	5. Create a new SDLC connection on the SNA Server computer.
	
	6. Create one display LU under that new connection and make sure the LU number
	  is 2. The 3270 Display Demo scripts only work on LU number 2.
	
	7. Assign that LU to either a Pool or a Configured User or Group of Users that
	  need to do the testing.
	
	The Demo SDLC Link Service can help troubleshoot WAN connectivity problems, SNA
	Server client setup issues, 3270 Terminal Emulation issues, and can generally be
	used a starting point for any connectivity troubleshooting.
	
	REFERENCES
	==========
	
	For more information, see the "What Is a Demo SDLC Link Service?" topic in
	Chapter 2 of the SNA Administration Guide.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,4.0
	
	=============================================================================
	
