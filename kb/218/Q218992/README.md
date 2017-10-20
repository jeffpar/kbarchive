---
layout: page
title: "Q218992: INFO: Using Visual Basic 5.0 and RDO 2.0 With SQL Server 7.0"
permalink: /kb/218/Q218992/
---

## Q218992: INFO: Using Visual Basic 5.0 and RDO 2.0 With SQL Server 7.0

{% raw %}

	Article: Q218992
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): _IK12473 kbSQLServ kbVBp500
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When RDO 2.0 was developed for Visual Basic 5.0, SQL Server 7.0 was not yet in
	development. If you have created an application that uses the version of RDO 2.0
	that shipped with Visual Basic 5.0, you may encounter some problems when you use
	your application to communicate to SQL Server 7.0 with the 3.70 version of the
	SQL Server ODBC driver. The most common error is:
	
	  "Runtime error '5': - Invalid Procedure Call or Argument".
	
	Visual Basic 6.0 Enterprise users will not encounter this error. The version of
	RDO 2.0 that is included with Visual Basic 6.0 supports these Unicode data
	types.
	
	MORE INFORMATION
	================
	
	SQL Server 7.0 added Unicode data types. Starting with version 3.70 of the SQL
	Server ODBC driver, Unicode data can be passed to your application. This driver
	is included with SQL Server 7.0, SQL Server 6.5 Service Pack 5, and ADO 2.1.
	Previous versions of the SQL Server ODBC driver will not retrieve Unicode data.
	
	Even if you have not modified the structure of the tables to use these new data
	types, you may encounter problems when using a query such as "SELECT * FROM
	MyTable." Queries against system tables are most likely to fail because those
	tables now use Unicode data types in SQL Server 7.0.
	
	There are two ways to continue to develop with RDO 2.0 and SQL Server 7.0.
	
	The first way is to use the ODBCCmpt utility that ships with SQL Server 7.0. This
	command line utility accepts an application name and creates a registry entry
	for the SQL Server ODBC driver that tells the driver to communicate with SQL
	Server 7.0 with SQL Server 6.5 compatibility enabled. For more information on
	this utility and SQL Server 6.5 compatibility, please see the SQL Server Books
	OnLine.
	
	You can also place ODBCCmpt in a directory that is part of your Path statement
	and therefore invoke it from any directory. Do not include the path to your
	application or its extension:
	
	- If you want to run your project in the Visual Basic 5.0 IDE, you will need to
	  specify "VB5" as the application file name for ODBCCmpt.
	
	- If you have developed an application called MyRDOApp.Exe, you would execute
	  "ODBCCMPT MyRDOApp" from the command line from the directory where ODBCCmpt
	  resides.
	
	- If you have developed an in-process component, you will need to specify the
	  client application that will invoke that component rather than the component.
	
	- If your in-process component will be run in Microsoft Transaction Server,
	  then "MTX" is the application file name that you would provide to ODBCCmpt.
	
	- If your in-process component will be run in Microsoft Internet Information
	  Server, the application file name to use is "INetInfo."
	
	Keep in mind that using these settings for components run in MTS, IIS, and SQL
	Server will affect all other components for those servers that use the SQL
	Server ODBC driver.
	
	The second way to use RDO 2.0 with SQL Server 7.0 is to use the version of RDO
	2.0 that shipped with Visual Basic 6.0. This version of RDO supports the new
	Unicode data types.
	
	You can install the Visual Basic 6.0 version of RDO 2.0 by downloading and
	installing the following file:
	
	http://activex.microsoft.com/controls/vb6/MSRdo20.cab
	
	You can install the Visual Basic 6.0 version of the RemoteData Control by
	downloading and installing the following file:
	
	http://activex.microsoft.com/controls/vb6/MSRdc20.cab
	
	You can install the Visual Basic 6.0 version of the UserConnection Designer
	run-time library by downloading and installing the following file:
	
	http://activex.microsoft.com/controls/vb6/MSCDRun.cab
	
	If you are currently developing an application with Visual Basic 5.0 and RDO 2.0,
	Microsoft recommends downloading the version of RDO 2.0 that shipped with Visual
	Basic 6.0 and using that version to develop your application.
	
	If you have already developed and deployed an application using Visual Basic 5.0
	and RDO 2.0 that will communicate with SQL Server 7.0, Microsoft recommends
	using the ODBCCmpt utility if possible. While your code should not encounter any
	problems as the result of installing the Visual Basic 6.0 version of RDO 2.0,
	third-party bound controls may not function properly if they were not tested
	with Unicode data. If you wish to use the Visual Basic 6.0 version of RDO 2.0
	with your application, you should test your application to make sure it will not
	encounter any problems with this newer version of RDO before installing that
	version onto your users' machines.
	
	NOTE: There are two versions of RDO 2.0 on the SQL Server 7.0 CD. The older of
	the two versions is located in the \x86\System directory and initially shipped
	with Visual Basic 5.0 SP2. The newer of the two versions is located in the
	\x86\RDO directory and is actually a pre-release drop of the version that
	shipped with Visual Basic 6.0. Do not install this version of RDO 2.0 onto your
	machines.
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK12473 kbSQLServ kbVBp500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
