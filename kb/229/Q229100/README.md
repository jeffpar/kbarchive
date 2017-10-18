---
layout: page
title: "Q229100: PRB: VFP ODBC Driver Cannot Be Used With ODBC Connection Pooling"
permalink: kb/229/Q229100/
---

## Q229100: PRB: VFP ODBC Driver Cannot Be Used With ODBC Connection Pooling

	Article: Q229100
	Product(s): Microsoft FoxPro
	Version(s): 2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbODBC351 kbGrpDSFox k
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If connection pooling is enabled for the following ODBC drivers:
	
	- Microsoft Visual FoxPro Driver
	- Microsoft FoxPro VFP Driver (*.dbf)
	- Microsoft dBase VFP Driver (*.dbf)
	
	The following error may occur:
	
	  "Exception occurred within ODBC driver <driver name> during disconnect
	  operation, likely not thread-safe ..."
	
	CAUSE
	=====
	
	The ODBC manager requires that all ODBC drivers that use Connection Pooling be
	threadsafe. Despite the entry in the help file, the Visual FoxPro ODBC driver
	(Vfpodbc.dll) is not a threadsafe ODBC driver.
	
	RESOLUTION
	==========
	
	Do not enable connection pooling for the Visual FoxPro driver.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To ensure that connection pooling is not enabled for the Visual FoxPro ODBC
	driver, check the Microsoft FoxPro VFP Driver (*.dbf) and the Microsoft Visual
	FoxPro Driver entry in the Connection Pooling tab of the ODBC Control Panel.
	Both of these entries should say <not pooled>.
	
	For the ODBC 3.5 Driver Manager, connection pooling is controlled on a driver by
	driver basis through the CPTimeout registry setting. If the setting is not
	present, or if it is set to <not pooled>, connection pooling is disabled
	for that driver. Other valid entries will be a string value that specifies the
	timeout in seconds.
	
	For the ODBC 3.0 Driver Manager, connection pooling is enabled by default, and
	cannot be disabled through the registry.
	
	The connection pooling setting is kept in a registry entry for each ODBC driver.
	The following registry key is created by default when installing the Visual
	FoxPro ODBC driver:
	
	HKEY_LOCAL_MACHINE\Software\ODBC\ODBCINST.INI\<driver name>\[CPTimeout]
	
	Where <driver name> is Microsoft FoxPro VFP Driver (*.dbf), Microsoft
	Visual FoxPro Driver, and Microsoft dBase VFP Driver (*.dbf).
	
	REFERENCES
	==========
	
	Microsoft Developer Network; search on: "Microsoft Transaction Server FAQ:
	Databases and Transactions"; topic: "ODBC Connection Pooling"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbODBC351 kbGrpDSFox kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
