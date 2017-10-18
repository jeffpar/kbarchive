---
layout: page
title: "Q248792: Connection Wizard Incorrectly Displays Option for DB2 on VM/VSE"
permalink: kb/248/Q248792/
---

## Q248792: Connection Wizard Incorrectly Displays Option for DB2 on VM/VSE

	Article: Q248792
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbODBC kbOLEDB kbGrpDSMDAC kbDSupport kbGrpDSODBC kbGrpDSOLEDB
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mainframe APPC/LU6.2 Connection Wizard in SNA Server Manager incorrectly
	displays the option to connect to DB2 on VM or VSE. DB2 on VM or VSE is not a
	supported platform from DB2OLEDB provider or from ODBC driver for DB2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 Service
	Pack 2 and Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem:
	
	1. Start SNA Server Manager.
	
	2. From the Tools menu, select Mainframe APPC/LU6.2 Connection Wizard.
	
	3. Click Next, and then select OLE DB Provider/ODBC Driver - DB2.
	
	4. Click Next. The following two options for Host Environment are displayed:
	
	   - DB2 for MVS
	
	   - DB2 for VM or VSE (SQL/DS)
	
	These are not a supported platforms.
	
	The OLEDB provider for DB2 (and ODBC Driver for DB2) can access the following DB2
	systems through SNA LU6.2 using Microsoft SNA Server:
	
	- DB2 for MVS V4R1
	
	- DB2 for OS/390 V5R1 and later
	
	- DB2 for OS/400 V3R2 and later
	
	Additionally, the provider/driver supports direct TCP/IP access to the following
	DB2 systems:
	
	- DB2 for OS/390 V5R1 and later
	
	- DB2 for OS/400 V4R2 and later
	
	- DB2 Universal Database for Windows NT V5R2 and later
	
	- DB2 Universal Database for AIX V5R2 and later (with SNA 4.0 SP3)
	
	Additional query words: AS/400 MVS OS/390 DB2OLEDB MSDB2OLE Mainframe
	
	======================================================================
	Keywords          : kbODBC kbOLEDB kbGrpDSMDAC kbDSupport kbGrpDSODBC kbGrpDSOLEDB 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	Issue type        : kbbug
	
	=============================================================================
	
