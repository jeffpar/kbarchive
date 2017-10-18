---
layout: page
title: "Q123833: Connecting SNA Server over X.25/QLLC"
permalink: kb/123/Q123833/
---

## Q123833: Connecting SNA Server over X.25/QLLC

	Article: Q123833
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server supports SNA connections over X.25/QLLC using any SDLC adapter
	supported by SNA Server, or through special X.25 link services available from
	several third-party vendors listed in the SNA Server product companion catalog
	included with the product.
	
	For SNA Server configuration information, see the SNA Server Admin program's
	Online Help, the SNA Server "Administrator's Guide," and/or the appropriate
	third-party vendor's documentation.
	
	MORE INFORMATION
	================
	
	If the connection still fails to activate after you follow the configuration
	information and you're connecting to a host system, the following settings
	should also be checked in the SNA Server 2.11 Admin Advanced Setup dialog box
	for the SNA Server X.25 connection. For SNA Server 3.0 and 4.0 these settings
	can be accessed in X.25 connection properties in SNA Manager.
	
	- XID Format
	
	  For 3270 communication to a host system over X.25/QLLC, some host systems
	  require Format 0.
	
	- User Data
	
	  Host systems require that C3 is configured here to indicate that X.25/QLLC
	  protocol is being requested.
	
	Additional query words: prodsna x.25 eicon qllc
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
