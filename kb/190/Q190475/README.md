---
layout: page
title: "Q190475: INFO: Understanding Microsoft's Oracle ODBC Driver Versions"
permalink: kb/190/Q190475/
---

## Q190475: INFO: Understanding Microsoft's Oracle ODBC Driver Versions

	Article: Q190475
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.0,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.573.44
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Oracle (Build 2.06325), version 1.0 
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.01, Build 2.73.7283.03, Build 2.73.7356 
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202, Build 2.573.4403, Build 2.573.5303, Build 2.573.6019, Build 2.573.6526, Build 2.573.7326, Build 2.573.7713.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft has released several different versions of the Microsoft Oracle ODBC
	driver. This article describes the versions up through 2.573.4202, and indicates
	where to find ongoing versioning information for newer drivers as they are
	released.
	
	MORE INFORMATION
	================
	
	The following is a list of all the Microsoft Oracle versions that have been
	released up through MDAC 2.1 SP2. For later driver information, please refer to
	DLLHelp at web site:
	
	  http://support.microsoft.com/servicedesks/fileversion/dllinfo.asp
	
	
	  Version        Build Number    When and Where it Became Available
	  -------------------------------------------------------------------
	
	  1.0            2.00.6325       Visual C++ 4.2 & Visual Basic 5.0
	                                 Enterprise Edition
	
	  2.0            2.73.7269       Visual Studio 97 & MDAC 1.5a
	
	  2.0 updated    2.73.7283.01    IIS 4.0
	
	  2.0 updated    2.73.7283.03    MDAC 1.5b & 1.5c
	
	  2.0 updated    2.73.7356       ODBC 3.5 SDK
	
	  2.5            2.573.2927      Visual Studio 6.0 & Data Access SDK 2.0
	                                 (Also part of MDAC 2.0)
	
	  2.5 updated    2.573.3513      MDAC 2.1 with SQL Server 7.0 & SQL 
	                                 Server 6.5 SP5
	
	  2.5 updated    2.573.3711      MDAC 2.1 GA, Office 2000, IE5a
	
	  2.5 updated    2.573.4202      MDAC 2.1 SP2
	
	  2.5 updated    2.573.4403      MDAC 2.5, Windows 2000
	
	  2.5 updated    2.573.5303      MDAC 2.5 SP1, Microsoft Windows 2000 SP1
	
	  2.5 updated    2.573.6526      MDAC 2.6, Microsoft SQL Server 2000
	
	  2.5 updated    2.573.6019      MDAC 2.5 SP2, Microsoft Windows 2000 SP2
	
	  2.5 updated    2.573.7326      MDAC 2.6 SP1,Microsoft SQL Server 2000 SP1
	  2.5 updated    2.573.7713.2    MDAC 2.7
	
	Build 2.00.6235 was the first release of the Microsoft ODBC driver and it was
	named version 1. After the release of the first version, a new naming convention
	was adopted.
	
	For example, 2.73.7283.03 is broken up into the following distinct components:
	
	  2 = The version number.
	  73 = The version of Oracle Server the driver is designed to work with.
	  7283.03 = The build number of the driver.
	
	With the 2.5 release (2.573.2973) and higher, the version information changes.
	This has lead to some confusion over 2.573 being less than 2.73, but each
	section of the build should be looked at individually not as a whole. The number
	573 is larger than 73, hence it is a newer version. Also, the 2.5 indicates the
	version number in the latest driver.
	
	
	Additional query words: Visigenic BetaPublic MSORCL32.DLL GA
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBCOracle206325 kbODBCOracle2737269 kbODBCOracle273728303 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbODBCOracle25734403 kbODBCOracle25736526 kbODBCOracle273728301 kbODBCOracle2737356 kbodbcoracle25735303 kbODBCOracle25736019 kbODBCOracle25737326 kbODBCOracle257377132 kbODBCOracle100Search kbODBCOracle200Search kbODBCOracle250Search
	Version           : :1.0,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.573.4403,Build 2.573.5303,Build 2.573.6019,Build 2.573.6526,Build 2.573.7326,Build 2.573.7713.2,Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03,Build 2.73.7356
	Issue type        : kbinfo
	
	=============================================================================
	
