---
layout: page
title: "Q326552: SNA Server and HIS Web Client Not Supported When in TN Mode"
permalink: /kb/326/Q326552/
---

## Q326552: SNA Server and HIS Web Client Not Supported When in TN Mode

	Article: Q326552
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 Kbhostintegserv2000
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Web Client that is included with SNA Server and Host Integration Server 2000
	is not supported when you run the 3270 and 5250 emulators in Telnet (TN) mode.
	That is, when you run the emulators in either TN3270 or TN5250 mode.
	
	MORE INFORMATION
	================
	
	The 3270 and 5250 emulators that are included with SNA Server and Host
	Integration Server allow support for the following two interfaces:
	
	- Native SNA Server or Host Integration Server client/server interface
	- TN interface
	
	Configure the Interface for the Emulator
	----------------------------------------
	
	In the emulator for which you want to configure the interface, on the
	Session/Session configuration menu, click the option that you want as follows:
	
	- For the 5250 emulator:
	
	   - To configure for native SNA mode, click Microsoft SNA Service.
	
	   - To configure for TN mode, click TN 5250.
	
	- For the 3270 emulator:
	
	   - To configure for native SNA mode, click SNA Server Connection.
	
	   - To configure for TN mode, click TN3270E Server Connection.
	
	The Web Client that is included with SNA Server and Host Integration Server is
	intended to distribute and configure the 3270 and 5250 clients to use the native
	SNA Server or Host Integration Server client/server interface.
	
	
	For additional information about the Web client, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q279003 Understanding and Configuring the SNA Server/HIS 2000 Web Client
	
	  Q281825 Users Cannot Change Web Client Configuration Settings
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
