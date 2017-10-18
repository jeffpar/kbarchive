---
layout: page
title: "Q130291: Mac 3270 Err Msg After Installing Windows NT 3.5 Service Pack 2"
permalink: kb/130/Q130291/
---

## Q130291: Mac 3270 Err Msg After Installing Windows NT 3.5 Service Pack 2

	Article: Q130291
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2; win
	Operating System(s): 
	Keyword(s): kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	- the operating system: Microsoft Windows NT 3.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Microsoft Windows NT 3.5 U.S. Service Pack 2, Macintosh 3270
	applications (such as DCA IRMA Workstation for the Macintosh) are not be able to
	establish a connection to an SNA server. The following error message appears:
	
	  Getting configuration record: Unable to obtain configuration
	  information from the server
	
	NOTE: This problem does not affect Macintosh file and print services.
	
	CAUSE
	=====
	
	The Windows NT AppleTalk protocol does not work correctly after you install
	Microsoft Windows NT 3.5 U.S. Service Pack 2. This regression affects
	applications which use the sockets interface over AppleTalk, such as SNA Server.
	
	WORKAROUND
	==========
	
	To work around this problem, reinstall Services for Macintosh (SFM) from the
	original installation media.
	
	RESOLUTION
	==========
	
	Microsoft has modified the SFM driver, SFMATALK.SYS, to correct this problem.
	Microsoft plans to include the new driver in Windows NT 3.5 U.S. Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 Service
	Pack 2. This problem has been corrected in the latest U.S. Service Pack for
	Windows NT version 3.5. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	The Macintosh computer and AppleTalk protocol are manufactured by Apple Computer,
	Inc., a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	Additional query words: prodsna 2.10 3.50 mac clients
	
	======================================================================
	Keywords          : kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbOSWinSearch kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbOSWinNTSearch
	Version           : WINDOWS:2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2; winnt:3.5 U.S. Service Pack 2
	
	=============================================================================
	
