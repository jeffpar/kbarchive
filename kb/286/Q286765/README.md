---
layout: page
title: "Q286765: INFO: Two-Phase Commit is Not Supported over TCP/IP for DB2OLEDB"
permalink: kb/286/Q286765/
---

## Q286765: INFO: Two-Phase Commit is Not Supported over TCP/IP for DB2OLEDB

	Article: Q286765
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbCOMPlus kbDriver kbDTC kbMTS kbODBC kbOLEDB kbProvider kbGrpDSVCDB kbDSupp
	Last Modified: 08-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft OLE DB Provider for DB2 (DB2OLEDB) and Microsoft ODBC Driver for
	DB2 that ship with Host Integration Server 2000, do not support two-phase commit
	(2PC) distributed transactions over a TCP/IP network connection. Distributed
	transactions are only supported when connecting to DB2 by way of SNA LU 6.2.
	
	MORE INFORMATION
	================
	
	DTC-Driven 2PC Support for DB2 for OS/390 and AS/400 Using LU 6.2:
	
	In Host Integration Server 2000, the OLE DB Provider for DB2 and ODBC Driver for
	DB2 are enhanced to support the DRDA Two-Phase Commit protocols over LU 6.2.
	This enables COM+ applications to participate in a Distributed Transaction
	Coordinator (DTC)-driven, two-phase commit transaction between SQL Server and
	DB2 databases on OS/390 and OS/400. Distributed transactions across an SNA LU
	6.2 network to DB2 UDB for AIX and DB2 UDB for Windows NT are not supported.
	
	Distributed transactions are a new feature of Microsoft Host Integration Server
	2000. The provider and driver that ship with SNA Server 4.0 do not have this
	feature.
	
	Working with Microsoft Transaction Server:
	
	Because Microsoft Transaction Server (MTS) uses DTC, DB2OLEDB and the Microsoft
	ODBC Driver for DB2 cannot be used under MTS transaction when TCP/IP
	connectivity is used. DB2OLEDB and the Microsoft ODBC Driver for DB2 can be used
	under MTS transaction when SNA LU 6.2 connectivity is used.
	
	
	Additional query words: 2PC two phase
	
	======================================================================
	Keywords          : kb3rdparty kbCOMPlus kbDriver kbDTC kbMTS kbODBC kbOLEDB kbProvider kbGrpDSVCDB kbDSupport kbDB2 kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
