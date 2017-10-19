---
layout: page
title: "Q247356: HOWTO: Execute a SQL Server 7.0 DTS Package from Visual FoxPro"
permalink: /kb/247/Q247356/
---

## Q247356: HOWTO: Execute a SQL Server 7.0 DTS Package from Visual FoxPro

	Article: Q247356
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbCOMt kbSQL kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbSQLServ700 kbGrpDSFox
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SQL Server 7.0 Data Transformation Services (DTS) allows the definition of
	processes which import, export, or transform data and can be saved as packages.
	Each DTS package defines a workflow that includes one or more tasks executed in
	a coordinated sequence as steps. After a DTS package has been created and saved,
	it is completely self-contained and can be retrieved and executed using the
	following:
	
	- The DTS run command prompt utility.
	
	- SQL Server Agent to run a scheduled job that executes the package.
	
	- The DTS Designer user interface.
	
	- The DTS Export and Import Wizard user interfaces.
	
	- The Execute method of a DTS Package object in a custom application.
	
	This article describes how to use the Execute method of a DTS Package object in a
	custom Visual FoxPro application.
	
	MORE INFORMATION
	================
	
	When accessing DTS Packages stored in the Microsoft Repository, the
	LoadFromRepository method is used. This method accepts the following
	parameters:
	
	+-----------------------------------------------------------------------+
	| Parameter              | Data Type                | Required/Optional | 
	+-----------------------------------------------------------------------+
	| RepositoryServerName   | String                   | Required          | 
	+-----------------------------------------------------------------------+
	| RepositoryDatabaseName | String                   | Required          | 
	+-----------------------------------------------------------------------+
	| RepositoryUserName     | String                   | Required          | 
	+-----------------------------------------------------------------------+
	| RepositoryUserPassword | String                   | Required          | 
	+-----------------------------------------------------------------------+
	| Package ID             | String                   | Required          | 
	+-----------------------------------------------------------------------+
	| Version ID             | String                   | Optional          | 
	+-----------------------------------------------------------------------+
	| Package Name           | String                   | Optional          | 
	+-----------------------------------------------------------------------+
	| Flags                  | DTSRepositoryStorageFlag | Optional          | 
	+-----------------------------------------------------------------------+
	| pVarPersistStgOfHost   | Variant                  | Optional          | 
	+-----------------------------------------------------------------------+
	
	When accessing DTS Packages stored in a file, the LoadFromStorageFile method is
	used. This method accepts the following parameters:
	
	+--------------------------------------------------------------------------------------------------+
	| Parameter            | Data Type | Required/Optional                                             | 
	+--------------------------------------------------------------------------------------------------+
	| UNC File Path        | String    | Required                                                      | 
	+--------------------------------------------------------------------------------------------------+
	| Password             | String    | Required                                                      | 
	+--------------------------------------------------------------------------------------------------+
	| Package ID           | String    | Optional. Required if the file contains multiple DTS Packages | 
	+--------------------------------------------------------------------------------------------------+
	| Version ID           | String    | Optional                                                      | 
	+--------------------------------------------------------------------------------------------------+
	| Package Name         | String    | Optional                                                      | 
	+--------------------------------------------------------------------------------------------------+
	| pVarPersistStgOfHost | Variant   | Optional                                                      | 
	+--------------------------------------------------------------------------------------------------+
	
	1. From SQL Server 7.0 Enterprise Manager, create a DTS package and save it to
	  the Repository as DTSPkgAlpha.
	
	2. From SQL Server 7.0 Enterprise Manager, create a second DTS package and save
	  it to a file as DTSPkgBeta.DTS
	
	3. Create a program file named Reposit.prg, using the following code:
	
	  *!* Create a DTS Package Object
	  dtsPkg=CREATEOBJECT('dts.package')
	
	  *!* Change My_Server to reflect the server name.
	  *!* Change My_UserID and My_Password to reflect your User ID and Password
	  *!* Obtain the Package ID and Version ID from the Properties Sheet
	  *!* of the DTS Package
	
	  *!* Load the package to be executed from the Repository
	  dtsPkgName=dtsPkg.LoadFromRepository("My_Server","MSDB","My_UserID",;
	     "My_Password","Package ID","Version ID","DTSPkgAlpha")
	  *!* Execute the DTS Package 
	  dtsPkg.Execute
	  *!* Release the DTS Package
	  RELEASE dtsPkg
	
	4. Run Reposit.prg, and note the results of the DTS Package.
	
	5. Create a program file named Dtsfile.prg using the following code:
	
	  *!* Create a DTS Package Object
	  dtsPkg=CREATEOBJECT('dts.package')
	
	  *!* LoadFromStorageFile() requires the following parameters:
	  *!* UNC path to the .DTS file to be executed
	  *!* User Password
	
	  *!* Load the package to be executed from a file.
	  dtsPkgName=dtsPkg.LoadFromStorageFile("\\UNC_Path_to\DTSPkgBeta.dts","User_Password")
	  *!* Execute the DTS Package 
	  dtsPkg.Execute
	  *!* Release the DTS Package
	  RELEASE dtsPkg
	
	6. Run Dtsfile.prg, and note the results of the DTS Package.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by John
	Desch, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbCOMt kbSQL kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbSQLServ700 kbGrpDSFox kbDSupport kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
