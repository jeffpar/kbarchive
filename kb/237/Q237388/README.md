---
layout: page
title: "Q237388: PRB: 32-Bit ODBC Drivers Can't Be Used from 16-Bit Applications"
permalink: kb/237/Q237388/
---

## Q237388: PRB: 32-Bit ODBC Drivers Can't Be Used from 16-Bit Applications

	Article: Q237388
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 1.5,2.0,2.1,2.5,2.6
	Operating System(s): 
	Keyword(s): kbDatabase kbMDAC kbVC kbOSWin95 kbGrpDSVCDB kbGrpDSMDAC kbDSupport
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 98 
	- Microsoft Data Access Components versions 1.5, 2.0, 2.1, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft 32-bit ODBC drivers fail when called from a 16-bit application
	through the ODBC thunking layer. Particularly under Windows 95 and Windows 98,
	you will not be able to connect without the application failing.
	
	
	CAUSE
	=====
	
	The Microsoft 32-bit ODBC drivers were not designed or tested to be used from
	16-bit applications. Furthermore, drivers, such as the Access and SQL server
	drivers, create multiple threads, which thunking in Windows 95 and Windows 98
	doesn't support.
	
	RESOLUTION
	==========
	
	If you need to access databases using the newer 32-bit ODBC drivers from a
	16-bit application, you cannot do it directly. You will need to take the
	database access portion out of the 16-bit application. Build a brand new 32-bit
	application that will perform the database access. Then you can re-code your
	16-bit application to use interprocess communication such as Sockets, DDE, and
	OLE Automation in order to transfer data to and from new 32-bit application.
	
	As it might turn out to be too much work, perform the above steps only if you
	have huge 16-bit application and data access is only a small part of it. If you
	have a smaller 16-bit application, it is best to reprogram and rebuild the
	application with the 32-bit version of Visual C++.
	The 16-bit SQL Server ODBC driver, which is included with SQL Server 6.5 can be
	used against SQL Server 7.0, although you will have some limitations, such not
	being able to use the new SQL 7.0 data types.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbMDAC kbVC kbOSWin95 kbGrpDSVCDB kbGrpDSMDAC kbDSupport 
	Technology        : kbOSWin98 kbAudDeveloper kbOSWinSearch kbMDACSearch kbMDAC150 kbMDAC200 kbMDAC210 kbMDAC250 kbMDAC260
	Version           : :1.5,2.0,2.1,2.5,2.6
	Issue type        : kbprb
	
	=============================================================================
	
