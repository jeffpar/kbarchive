---
layout: page
title: "Q236105: Maximum BTU Limit for Dumb SDLC Interface"
permalink: /kb/236/Q236105/
---

## Q236105: Maximum BTU Limit for Dumb SDLC Interface

	Article: Q236105
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 23-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the IBM SDLC Dumb interface, the maximum BTU (Basic Transmission
	Unit) is 521 bytes. The IBM SDLC interface is provided by the Ibmsdlc.dll file.
	This dynamic link library is provided by Microsoft and only supports up to the
	521-byte limit.
	
	However, the maximum BTU length for an SDLC connection is dependent on the
	interface used by the link service of the SDLC adapter OEM (Original Equipment
	Manufacturer). Some adapters support up to 2,048 bytes for a BTU length. In
	these instances, the adapter manufacturer is not using the IBM SDLC Dumb
	interface (Ibmsdlc.dll) for the link service. The OEM is providing its own link
	service for this purpose as well as other features.
	
	MORE INFORMATION
	================
	
	Even though the graphical user interface (GUI) allows for an entry above the
	521-byte limit, this is not an indication of support beyond this limit. If such
	a limit were written into the GUI for MAX BTU, third-party developers would have
	to provide a unique solution to circumvent such a limitation. Therefore, there
	is no apparent limitation set by the GUI for MAX BTU.
	
	REFERENCES
	==========
	
	For additional information, please see the Software Development Kit (SDK) for
	SNA Server and the SNA Device Interface Specification (SNADIS) located in the
	documentation of your SNA Server CD.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
