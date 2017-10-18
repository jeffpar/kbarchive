---
layout: page
title: "Q123832: Using SNA Server with SDLC Multidrop Leased Lines"
permalink: kb/123/Q123832/
---

## Q123832: Using SNA Server with SDLC Multidrop Leased Lines

	Article: Q123832
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use SNA Server on an SDLC multidrop leased line, you should use the
	following configuration:
	
	- Disable the Constant RTS checkbox in the SNA Server SDLC link service. This
	  is configured in SNA Server Setup for SNA Server versions 2.0, 2.1, 2.11, and
	  2.11 SP1 and in SNA Server Manager for version 3.0 and 4.0.
	
	  NOTE: In SNA Server 2.0, this option appears as Constant Carrier.
	
	- Duplex: Select Half in the SNA Server SDLC connection Advanced Setup dialog
	  box. This is configured in SNA Server Admin for SNA Server versions 2.0, 2.1,
	  2.11, and 2.11 SP1 and in SNA Server Manager for SNA Server version 3.0 and
	  4.0.
	
	MORE INFORMATION
	================
	
	If either Constant RTS or Full Duplex is selected, SNA Server always raises the
	Request to Send (RTS) flag high and creates a point-to-point connection. As a
	result, other stations on the multidrop line are not able to send data on the
	line and operations through a multiplexor may fail.
	
	If Half Duplex is selected, SNA Server only raises RTS when it has data to send
	to the remote system.
	
	This setting should not be confused with half-duplex or full-duplex data
	transfer. In SNA Server, this setting simply controls SNA Server's use of the
	RTS signal and should be set to full-duplex to improve performance on an SDLC
	point-to-point line.
	
	NOTE: The remote system can still be configured to use full-duplex, even though
	SNA Server is configured as half-duplex.
	
	Additional query words: prodsna leased sdlc multidrop mux
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
