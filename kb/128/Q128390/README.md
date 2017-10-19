---
layout: page
title: "Q128390: Different Ways a Macintosh Can Connect Through SNA Server"
permalink: /kb/128/Q128390/
---

## Q128390: Different Ways a Macintosh Can Connect Through SNA Server

	Article: Q128390
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the three ways to connect a Macintosh to a mainframe or
	AS/400 through SNA Server.
	
	MORE INFORMATION
	================
	
	Downstream PU for 3270
	----------------------
	
	On the Macintosh, install a Token Ring card and bind the DLC protocol to it. In
	SNA Server Admin, configure a downstream connection for the Macintosh. For
	instructions on setting up downstream connections see Chapter 9 of the SNA
	Server "Administration Guide."
	
	This configuration works with any Macintosh 3270 emulator that supports 802.2
	connectivity.
	
	NOTE: Macintoshes are not supported as Downstream PUs on Ethernet because there
	is no DLC support for Ethernet on a Macintosh.
	
	NOTE: SNA Server doesn't support 5250 from a downstream PU (DSPU) since 5250
	requires independent LU6.2 which is not support through an SNA Server DSPU.
	
	TN3270/TN5250
	-------------
	
	SNA Server 2.x:
	On the Macintosh, install TCP/IP and use any Macintosh TN3270 emulator. On the
	SNA Server, install the TN3270 Service (<SNACDROOT>\TN3270\setup.bat).
	
	For instructions on how to configure SNA Server Admin for LUA, see Chapter 8 of
	the SNA Server "Administration Guide." For information on configuring the TN3270
	Service, consult the online help in the TN3270 Admin program.
	
	SNA Server 3.x:
	SNA Server 3.x was enhanced with a TN5250 Service. To use this service, install
	TCP/IP on the Macintosh and use any TN5250 emulator for your 5250 sessions.
	
	For instructions on how to configure APPC LUs for use with the TN5250 service or
	for instructions on how to configure the TN5250 Service, consult the online
	documentation within SNA Server Manager.
	
	TN3270 remains the same under 3.x, except the adminstration is built into SNA
	Server Manager and it is installed as an optional component within SNA Server
	3.x's main setup program.
	
	Windows NT Services For Macintosh
	---------------------------------
	
	Configure a Windows NT machine for Services for the Macintosh, and then run
	Attachmate's IRMA Workstation for Macintosh v4.0 or greater and follow the
	instructions outlined in the "Configuring for a Microsoft SNA Server" section in
	Chapter 2 of the Attachmate Irma Workstation for Macintosh User's Guide.
	
	For instructions on how to setup Services for Macintosh on a Windows NT machine
	see "Services for Macintosh" install guide that ships with Windows NT Server.
	
	
	Additional query words: prodsna sfm
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
