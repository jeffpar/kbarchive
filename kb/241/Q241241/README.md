---
layout: page
title: "Q241241: INF: Using DTS With Custom ATL OLE-DB Providers"
permalink: /kb/241/Q241241/
---

## Q241241: INF: Using DTS With Custom ATL OLE-DB Providers

{% raw %}

	Article: Q241241
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0,7.0
	Operating System(s): 
	Keyword(s): kbSQLServ700
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft SQL Server version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual C++ 6.0 provides the ability to create custom OLE-DB providers with the
	Active Template Library (ATL) Provider Templates. However, the default
	implementation of these providers does not work with the Data Transformation
	Services (DTS) provided by SQL Server 7.0.
	
	This article describes the steps and required interfaces necessary to enable a
	custom ATL OLE-DB provider to work with DTS. The steps described herein concern
	the use of DTS through the DTS Designer and DTS Wizard. For direct programmatic
	access to the DTS Package and DTS DataPump, the requirements for interface
	support vary according to what operations are attempted and are outside the
	scope of this article.
	
	MORE INFORMATION
	================
	
	First, the following articles should be used with an ATL Provider to ensure that
	the provider is working correctly before continuing:
	
	  Q198520 BUG: ATL OLE DB Provider Fails When Called from SQL 7.0 Query
	
	  Q198921 FIX: Visual C++ ATL Provider Fails when Used with SQL DTS
	
	  Q200921 PRB: OpenQuery with ATL Provider Fails When Set Up with SEM
	
	General Provider Problems:
	
	ODBC Drivers
	Use of ODBC Drivers is provided by the OLEDB Provider for ODBC (MSDASQL), which
	requires that the ODBC Driver be at least ODBC version 2.5 compliant.
	
	Non-Thread Safe Providers
	DTS prompts each driver to determine if it is thread safe. When the driver
	reports it is thread safe, DTS attempts multiple simultaneous connections to it
	for parallelism. Some drivers report they are thread safe, when they are not. To
	force a package to run all steps on a single thread use the following Visual
	Basic code sample:
	
	  Public Sub ChangeAllStepsToRunOnMainThread(oPkg As DTS.Package)
	      Dim nStepCount As Integer
	      For nStepCount = 1 To oPkg.Steps.Count
	          oPkg.Steps(nStepCount).ExecuteInMainThread = True
	      Next nStepCount
	  End Sub
	
	
	Lack of Support for Service Components
	Some drivers fail when executed as a step due to the driver's failure to properly
	handle service components. Change the package properties to turn off OLEDB
	service components.
	
	
	Driver Error Messages
	SQL Server 7.0 service pack 1 (SP1) addresses some issues with DTS not correctly
	returning error messages from the provider. It also adds some additional
	information in the error message on what step was being executed when the
	failure occurred, as most providers do not give an error message.
	
	An error message in the wizard of "a critical error occurred" means that the
	driver generated an exception but DTS handled the exception.
	
	
	Required Interfaces:
	
	For DTS to fully support the custom ATL OLE-DB provider the following interfaces
	must be implemented:
	
	- IAccessor: Implemented in the IAccessorImplBase and IAccessorImpl templates.
	
	- IColumnsInfo: Implemented in the IColumnsInfoImpl template.
	
	- IDBCreateSession: Implemented in the IDBCreateSessionImpl template.
	
	- IDBInfo: This interface is not implemented in ATL.
	
	- IDBInitialize: Implemented in the IDBInitializeImpl template.
	
	- IDBProperties: Implemented in the IDBPropertiesImpl template.
	
	- IOpenRowset: Implemented in the IOpenRowsetImpl template.
	
	- IRowset: Implemented in the IRowsetImpl template.
	
	- ISessionProperties: Implemented in the ISessionPropertiesImpl template.
	
	- IDBSchemaRowset: Implemented in the IDBSchemaRowsetImpl template. These are
	  the schemas DTS may request:
	
	  DBSCHEMA_PROVIDER_TYPES: This is the only one that MUST be supported.
	  DBSCHEMA_TABLES
	  DBSCHEMA_CATALOGS
	  DBSCHEMA_PRIMARY_KEYS
	  DBSCHEMA_FOREIGN_KEYS
	  DBSCHEMA_INDEXES
	  DBSCHEMA_TABLE_CONSTRAINTS
	  DBSCHEMA_CHECK_CONSTRAINTS
	
	Required Properties:
	
	- DataSource: Implemented in the IGetDataSourceImpl template
	
	Optional Interfaces:
	
	The following interfaces are optional but provide for the full experience with
	DTS:
	
	- IDBCreateCommand: Implemented in the IDBCreateCommandImpl template. Used for
	  creating table(s)/queries and so forth.
	
	- ICommandText: Implemented in the ICommandTextImpl and ICommandImpl templates.
	  Used for creating table(s)/queries and so forth.
	
	- ICommandPrepare: This interface is not implemented in ATL. Used for creating
	  table(s)/queries and so forth.
	
	- ICommandWithParameters: This interface is not implemented in ATL. Used for
	  Data Driven queries.
	
	- ITransactionJoin: This interface is not implemented in ATL. Used by DTS
	  Package to support transactions across steps.
	
	- IRowsetChange: This interface is not implemented in ATL. Used by DTS to
	  support changes to the recordset including inserts, updates or deletes. This
	  interface is not required if the provider will only be used as a source of
	  data.
	
	Additional query words: VC SEM Designer task package
	
	======================================================================
	Keywords          : kbSQLServ700 
	Technology        : kbVCsearch kbSQLServSearch kbAudDeveloper kbSQLServ700 kbVC600 kbVC32bitSearch
	Version           : winnt:6.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
