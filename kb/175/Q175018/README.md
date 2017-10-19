---
layout: page
title: "Q175018: HOWTO: Acquire and Install the Microsoft Oracle ODBC Driver"
permalink: /kb/175/Q175018/
---

## Q175018: HOWTO: Acquire and Install the Microsoft Oracle ODBC Driver

	Article: Q175018
	Product(s): Open Database Connectivity (ODBC)
	Version(s): Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202
	Operating System(s): 
	Keyword(s): kbsetup kbDatabase kbDriver kbODBC kbOracle kbGrpDSMDAC kbMDAC200 kbMDAC210
	Last Modified: 10-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the procedures for acquiring and installing the Microsoft
	Oracle ODBC Driver version 2.5, which is a component of the Microsoft Data
	Access Components (MDAC) version 2.0 and higher.
	
	MORE INFORMATION
	================
	
	The Microsoft Oracle ODBC Driver version 2.5 is part of the Microsoft Data
	Access Components version 2.0 and 2.1. You will need to download this "stack"
	from the Microsoft Web site and install them. The Microsoft Oracle ODBC Driver
	version 2.5 is available with Visual Studio 6.0, MDAC 2.0 and 2.1, and the Data
	Access Software Development Kit (SDK) 2.0.
	
	NOTE: There is no way to acquire the Microsoft Oracle ODBC Driver v2.0 outside of
	the MDAC stack. The driver was developed and tested with the components in the
	stack and that is the best way to install and use the driver.
	
	Step-by-Step Example
	--------------------
	
	1. Go to the Microsoft Universal Data Access Web site located at the following
	  Web URL:
	
	  http://www.microsoft.com/data/
	
	2. On the Web site, click the Downloads link listed under the UDA Contents on
	  the left of the page. This displays a page that lists the available free
	  downloads.
	
	3. Click the link titled "Download MDAC 2.1.1.4202.3 (GA)" to open the download
	  page for the MDAC 2.1 SP2 stack. Please read through the information on this
	  page pertaining to system and software requirements.
	
	4. Follow the on download intructions given on the website.
	
	5. Click on the link titled "Download the Microsoft Data Access SDK version 2.0
	  and the Microsoft Data Access Components version 2.0".
	
	6. Once the MDAC 2.1 SP2 installation is complete, you should see the Microsoft
	  Oracle ODBC Driver version 2.5 listed under the Drivers tab of your ODBC
	  Manager as follows:
	
	     NAME:      Microsoft ODBC for Oracle
	
	     VERSION:   2.573.4202
	
	     COMPANY:   Microsoft Corporation
	
	     FILE:      MSORCL32.DLL
	
	     DATE:      6/4/99
	
	For information about setting up a data source name (DSN) for the Microsoft
	Oracle ODBC Driver version 2.5, please consult the Help file for the driver. The
	Help file for the driver was installed in the appropriate SYSTEM directory (i.e.
	SYSTEM for Windows 95 and Windows 98, and SYSTEM32 for NT) along with the driver
	DLL. The name of the Help file is MSORCL32.HLP.
	
	REFERENCES
	==========
	
	For more information on how to use this driver with RDO version 2.0,please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q167225 HOWTO: Access an Oracle Database Using RDO
	
	  Q174679 HOWTO: Retrieve Resultsets from Oracle Stored Procedures
	
	  Q174981 "HOWTO: Retrieve Typical Resultsets From Oracle Stored Procedures
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Sam Carpenter, Microsoft Corporation
	
	
	Additional query words: oracle odbc driver mdac mdac1.5 ado rds
	
	======================================================================
	Keywords          : kbsetup kbDatabase kbDriver kbODBC kbOracle kbGrpDSMDAC kbMDAC200 kbMDAC210 
	Technology        : kbAudDeveloper kbODBCSearch kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbODBCOracle250Search
	Version           : :Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202
	Issue type        : kbhowto
	
	=============================================================================
	
