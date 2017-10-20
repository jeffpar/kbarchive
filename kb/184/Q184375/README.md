---
layout: page
title: "Q184375: PRB: Security Implications of RDS 1.5, IIS 3.0 or 4.0, and ODBC"
permalink: /kb/184/Q184375/
---

## Q184375: PRB: Security Implications of RDS 1.5, IIS 3.0 or 4.0, and ODBC

{% raw %}

	Article: Q184375
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.1,2.0,2.5; winnt:4.0
	Operating System(s): 
	Keyword(s): kbATM kbGrpDSMDAC kbDSupport kbMDAC250 kbGrpDSASPDB
	Last Modified: 06-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Remote Data Service for ADO versions 1.1, 2.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Because the RDS Datafactory (a single component of RDS) allows implicit remoting
	of data access requests by default, it can be exploited to allow unauthorized
	Internet clients to access OLE DB datasources available to the server.
	
	A malicious user may be able to gain access to ODBC data, such as data held in
	Microsoft SQL Server or Microsoft Access, when connecting to Internet
	Information Server (IIS) 4.0 with Microsoft Remote Data Services installed.
	
	RESOLUTION
	==========
	
	Method One: Remove RDS Functionality
	------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To disallow all RDS functionality, you must remove the following registry entries
	from the server hosting IIS.
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. Remove the following registry keys and any subkeys:
	
	  
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \W3SVC\Parameters\ADCLaunch\RDSServer.DataFactory
	
	  
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \W3SVC\Parameters\ADCLaunch\AdvancedDataFactory
	
	  
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  W3SVC\Parameters\ADCLaunch\VbBusObj.VbBusObjCls
	
	NOTE: Each of the preceding registry keys is one path; it has been word wrapped
	for readability.
	
	Active Server Pages (ASPs) that depend on just ADO (ActiveX Data Objects) for
	database connectivity will continue to run.
	
	The Benefits part of the IIS 4.0 sample site, Exploration Air, may not function
	correctly if this change is made. There are no other standard features in IIS
	4.0 that require RDS.
	
	Method Two: Enforce Correct Security Policy
	-------------------------------------------
	
	The following are recommendations that should be followed by all Web developers
	who are publishing data in ASP pages:
	
	- Remove all nonessential ODBC drivers, especially the Microsoft Text Driver.
	
	- Tighten NTFS permissions (ACLs) to restrict access to only those you trust.
	
	- If using SQL Server, then enforce strong security measures, such as:
	
	- Run SQL Server as a low-privileged user account.
	
	- Do not allow extended stored procedures.
	
	MORE INFORMATION
	================
	
	Description of RDS Datafactory
	------------------------------
	
	Remote Data Services (RDS) is part of the Data Access Components installed by
	default with Windows NT 4.0 Option Pack and IIS 4.0. With RDS, Web clients can
	issue client-based SQL queries to OLE DB data sources hosted on the Web server.
	
	The DataFactory object allows you to connect to a specified data source (such as
	SQL Server), using a specified UserID and password, and execute a query against
	that server and then return the result set back to the client.
	
	The data source, UserID, password, and SQL statement are passed as parameters to
	the method exposed on the DataFactory object. If the registry keys stated above
	are removed however, the user will be unable to create the object, therefore
	removing any possibility of abuse.
	
	Additional query words: visual studio 98 vulnerability kbDatabase kbRDS kbMDAC
	
	======================================================================
	Keywords          : kbATM kbGrpDSMDAC kbDSupport kbMDAC250 kbGrpDSASPDB 
	Technology        : kbiisSearch kbAudDeveloper kbADOsearch kbiis400 kbMDACSearch kbMDAC250 kbRDSSearch kbRDS110 kbRDS200
	Version           : WINDOWS:1.1,2.0,2.5; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
