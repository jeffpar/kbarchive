---
layout: page
title: "Q269626: INFO: Permissions to Create Packages Using DB2OLEDB on DB2"
permalink: kb/269/Q269626/
---

## Q269626: INFO: Permissions to Create Packages Using DB2OLEDB on DB2

	Article: Q269626
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDatabase kbOLEDB kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbDB2
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for DB2, versions 4.0 SP2, 4.0 SP3 
	- Microsoft ODBC Driver for DB2, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft ODBC Driver for DB2 and the Microsoft OLE DB Provider for DB2,
	each of which are implemented as an IBM Distributed Relational Database
	Architecture (DRDA) Application Requester, use packages to issue dynamic SQL
	statements after connecting to DB2 running on supported platforms.
	
	This article describes the minimum permissions a user must have to create these
	packages in an OS/390 (MVS) and AS/400 environment.
	
	MORE INFORMATION
	================
	
	These packages are not required for connecting to the backend, but they are
	necessary before any query will work. There are two ways to create these
	packages:
	
	- Explicitly: By using the CrtpKgw.exe utility that ships with SNA 4.0
	  (SP2/SP3) Server/Client, or with its command line version, Crtpkg.exe.
	
	- Implicitly: If the user does not explicitly create these packages, the driver
	  or provider tries to create them dynamically when a query is run, but the
	  connected user needs to have the required priviliges in order for this to
	  succeed.
	
	All of these packages will be created inside the Collection that is specified in
	the Package Collection property in the datalink file, or in the connection
	string.
	
	If the user does not have the appropriate authority to create packages in the
	specified Collection, or if the specified Collection does not exist, the
	provider or driver might report the following error:
	
	In the case of DB2 (on OS/390 or MVS):
	
	  A SQL error has occurred. Please consult the documentation for your specific
	  DB2 version for a description of the associated Native Error and SQL State.
	  SQLSTATE: 51002, SQLCODE: -567.
	
	In the case of DB2/400:
	
	  A SQL error has occurred. Please consult the documentation for your specific
	  DB2 version for a description of the associated Native Error and SQL State.
	  SQLSTATE: 51002, SQLCODE: -805.
	
	There are two authorities required to create the packages in the case of DB2 (on
	OS/390 or MVS):
	
	- GRANT BINDADD TO "Authorization ID"
	
	- GRANT CREATE IN COLLECTION "Collection ID" TO "Authorization ID"
	
	The "Authorization ID" is the user who needs the permission to create the
	packages. Once an administrator executes the above statements on behalf of a
	non-privileged user, that user can then run the Create Package Utility, which
	would create five sets of packages (one for each of the five isolation levels
	supported on DB2/MVS) for use by "all" (in other words, PUBLIC) users.
	
	The "Collection ID" is the name of the Collection, which the user specifies in
	the datalink file for the Package Collection property. This Collection should be
	a valid Collection within the DB2.
	
	In the case of DB2/400, the user ID must have:
	
	- *CHANGE authority on the DB2 collection
	
	  -or-
	
	- *ALL authority on the DB2 collection
	
	If the user merely has *USE authority, or if the user has *EXCLUDE authority, the
	Create Package process will fail.
	
	REFERENCES
	==========
	
	For additional information on DB2 packages and other related topics, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q235631 Crtpkgw.exe Hangs While Trying to Create Packages in DB2 When
	  Connected over TCP/IP
	
	  Q216810 Creating Packages for Use with ODBC Driver for DB2 and OLE DB
	  Provider for DB2
	
	  Q218590 INF: Configuring Data Sources for the Microsoft OLE DB Provider for
	  DB2
	
	Additional query words: AS/400 OS/400 DB2/MVS MSDB2OLE DB2OLEDB authorities rights
	
	======================================================================
	Keywords          : kbDatabase kbOLEDB kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbDB2 
	Technology        : kbAudDeveloper kbODBCSearch kbOLEDBSearch kbODBCDB2400SP2 kbODBCDB2400SP3 kbOLEDBProvDB2400SP2 kbOLEDBProvDB2400SP3 kbOLEDBProvSearch
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
