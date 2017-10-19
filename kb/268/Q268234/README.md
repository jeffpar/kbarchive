---
layout: page
title: "Q268234: INF: Host Requirements for COMTI"
permalink: /kb/268/Q268234/
---

## Q268234: INF: Host Requirements for COMTI

	Article: Q268234
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As documented in the Readme file of both SNA Server and Host Integration Server
	2000, the minimum host requirements required to use the COM Transaction
	Integrator component are as follows:
	
	- MVS with either CICS version 3.3 or IMS 4.0 or later and MVS APPC. IMS
	  version 6.0 or later must be used for atomic transactions.
	
	- VSE V2.1.0 and CICS 2.1.0 or later.
	
	- TCP/IP V3R2 or later if TCP/IP is used .
	
	IBM has since changed the names and version numbers of some of these core host
	systems, which can lead to questions on whether or not a host system meets the
	minimum requirements for COMTI.
	
	Specifically, MVS has been renamed to OS/390, and CICS has been renamed to CICS
	TS (Transaction Server). The version numbers have also been changed, so it is
	possible to have a version number that is smaller than the version numbers in
	the preceding minimum requirements list. Because these products are actually
	newer than the minimum requirements, all versions of OS/390 and CICS TS meet the
	minimum requirements for COMTI, and are considered supported environments.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	
	=============================================================================
	
