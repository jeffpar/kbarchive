---
layout: page
title: "Q236818: VSE Support for OLE DB to DB2/ODBC"
permalink: /kb/236/Q236818/
---

## Q236818: VSE Support for OLE DB to DB2/ODBC

	Article: Q236818
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 18-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Currently, the OLE DB provider for DB2 does not support ODBC connections to VSE
	mainframe environments. Also, support is not available for SQL/DS - DB2/VM. An
	excerpt from the Readme file (located on the SNA Server 4.0 Service Pack 2 CD)
	states:
	
	  9.5.5 DB2 for VM and VSE
	  -------------------------
	
	  OLE DB Provider for DB2 and ODBC Driver for DB2 have not been tested with
	  SQL/DS - DB2/VM or DB2/VSE. These platforms are not supported with this
	  release of the OLE DB Provider and ODBC Driver.
	
	  For more information on Microsoft OLE DB Provider for DB2 limitations, please
	  see the section about programming considerations using OLE DB Provider for
	  DB2 in the SNA Server SDK online documentation.
	
	MORE INFORMATION
	================
	
	Although OLE DB does not currently support VSE environments, the StarSQL driver
	included with SNA Server 4.0 and SNA Server 4.0 Service Pack 1 does support the
	VSE version 3.3 or later. An excerpt from the Odbcreadme.txt file (located on
	the SNA server 4.0 Service Pack 1 CD) states:
	
	  HOST DATABASES
	  --------------
	
	  StarSQL can connect to any of the following host databases:
	
	- DB2 MVS (DB2 for OS/390) 2.3 and later
	- SQL/DS (DB2 for VM and VSE) v3.3 and later
	- DB2/400 (OS/400 v2r2 and later)
	- DB2 Common Server (Universal Database) for UNIX, OS/2, and Windows NT 2.1 and
	  later
	
	Also, after you install the StarSQL driver with SNA server 4.0 or 4.0 Service
	Pack 1, updating to Service Pack 2 or later service packs does not remove the
	installed StarSQL driver. Therefore, it is still possible to continue to apply
	service packs to SNA Server 4.0 and maintain the latest service level.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	Readme.txt (SNA Server 4.0 SP2) and Odbcreadme.txt (SNA Server 4.0 SP1).
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
