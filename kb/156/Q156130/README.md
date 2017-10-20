---
layout: page
title: "Q156130: OLE DB Redistributable Components"
permalink: /kb/156/Q156130/
---

## Q156130: OLE DB Redistributable Components

{% raw %}

	Article: Q156130
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	OLE DB applications, providers, and consumers can use redistributable components
	from the OLE DB SDK to enhance their products. This article provides some
	guidelines for redistributing these SDK components, and describes specific
	scenarios and the components required to support each scenario.
	
	MORE INFORMATION
	================
	
	OLE DB applications, providers, and consumers should install all OLE DB SDK
	redistributable files to the directory specified by the registry subkey
	HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\MSSetup. The system library
	Msvcrt40.dll, which is required by all OLE DB implementations, should be
	installed in the user's system directory.
	
	All Providers Should Install the Root Enumerator Object
	-------------------------------------------------------
	
	All OLE DB providers should install the OLE DB root enumerator object, to ensure
	that applications and consumers can find the provider on the user's computer.
	The provider's installation should install the following files:
	
	  Msdaenum.dll
	  Msdatt.dll
	  Msdatl.dll
	
	Providers Requiring Error Services
	----------------------------------
	
	OLE DB providers that require the services of the Error object must compile with
	the Msdaguid.h header file. The provider's installation should install the
	following files on the user's computer:
	
	  Msdaer.dll
	  Msdaerr.dll
	  Msdatl.dll
	
	Providers Requiring Data Conversion Services
	--------------------------------------------
	
	OLE DB providers that require the services of the Data Conversion object must
	compile with the Msdaguid.h header file. The provider's installation should
	install the following file on the user's computer:
	
	  Msdadc.dll
	
	Implementations Requiring Access to SQL Data
	--------------------------------------------
	
	OLE DB applications and consumers that require access to SQL data can use the
	ODBC provider. These implementations must compile with the Msdasql.h header
	file. The implementation's installation should install the following files:
	
	  Msdasql.dll
	  Msdasqlr.dll
	  Msdaer.dll
	  Msdaerr.dll
	  Msdadc.dll
	  Msdatt.dll
	  Msdatl.dll
	  Msdaenum.dll
	
	Additional query words: ODBC
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
