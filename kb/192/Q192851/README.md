---
layout: page
title: "Q192851: PRB: Ten or More Parameters in an Oracle Procedure Call Fails"
permalink: kb/192/Q192851/
---

## Q192851: PRB: Ten or More Parameters in an Oracle Procedure Call Fails

	Article: Q192851
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,Build 2.573.2927,Build 2.573.3711,Build 2.573.4202,Build 2.573.4403
	Operating System(s): 
	Keyword(s): kb3rdparty kbATM kbDatabase kbDriver kbMDAC kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbD
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3711, Build 2.573.4202, Build 2.573.4403 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Oracle Stored Procedures that use 10 or more output parameters, you
	receive an Access Violation or ActiveX Data Objects (ADO) error. Two sample
	errors follow:
	
	- Access Violation (0xC0000005) in ORA804.DLL @01B20002.
	
	  -or-
	
	- Microsoft OLE DB Provider for ODBC Drivers error '80040e14' [Microsoft][ODBC
	  driver for Oracle]Syntax error or access violation Auth.asp, line 342
	
	CAUSE
	=====
	
	There is a problem with Oracle's 8.0.4.0.0 and 8.0.4.0.4 client files. This
	problem was also found in the Windows 95 client for Oracle version 8.0.5.
	
	RESOLUTION
	==========
	
	To correct the problem you must upgrade the Oracle Client software to version
	8.0.4.2.0 or higher. The Windows 95 client patches will need to be fixed by
	Oracle. There is no resolution at the moment. Please contact Oracle Corporation
	for the patches.
	
	NOTE: This problem does not occur with the early release of the Oracle client
	software version 8.0.3.0.0.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following World Wide Web URL:
	
	http://www.oracle.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	For information about how to contact , click the appropriate article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbATM kbDatabase kbDriver kbMDAC kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210SP2 kbMDAC250 kbGrpDSODBC 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbODBCOracle25732927
	Version           : :2.5,Build 2.573.2927,Build 2.573.3711,Build 2.573.4202,Build 2.573.4403
	Issue type        : kbprb
	
	=============================================================================
	
