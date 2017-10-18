---
layout: page
title: "Q235515: FIX: Calling IDBInfo::GetKeywords() Causes AV w/ OLE DB Provider"
permalink: kb/235/Q235515/
---

## Q235515: FIX: Calling IDBInfo::GetKeywords() Causes AV w/ OLE DB Provider

	Article: Q235515
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,2.1,3.5,3.51,3.6,3.7
	Operating System(s): 
	Keyword(s): kbMDAC kbODBC kbOLEDB kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250fix kbMDACNoSweep
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 3.5, 3.51, 3.6, 3.7 
	- Microsoft Data Access Components versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ODBC drivers that return keywords outside the range of Absolute to Zone cause an
	access violation in the Microsoft OLEDB Provider for ODBC (MSDASQL) that ships
	with Microsoft Data Access Components (MDAC) 2.0 and 2.1 when the
	IDBInfo::GetKeywords() method is called.
	
	CAUSE
	=====
	
	This occurs because of a code problem in the binary search algorithm used by
	MSDASQL.
	
	RESOLUTION
	==========
	
	To work around this behavior, modify the driver so that it does not return
	keywords outside the range Absolute - Zone.
	
	For example, if the driver returns the keyword Abort, the Microsoft OLEDB
	Provider for ODBC (MSDASQL) gets an access violation.
	
	STATUS
	======
	
	This has been fixed as of MDAC 2.5.
	
	MORE INFORMATION
	================
	
	You can find the default list of Reserved Keywords in the ODBC Programmer's
	Reference, Volume 2. The default keywords range from ABSOLUTE to ZONE.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMDAC kbODBC kbOLEDB kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250fix kbMDACNoSweep 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC200 kbMDAC210 kbODBC360 kbODBC350 kbODBC351 kbODBC370
	Version           : :2.0,2.1,3.5,3.51,3.6,3.7
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
