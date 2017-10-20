---
layout: page
title: "Q184608: HOWTO: Programmatically Create a DSN for SQL Server with VB"
permalink: /kb/184/Q184608/
---

## Q184608: HOWTO: Programmatically Create a DSN for SQL Server with VB

{% raw %}

	Article: Q184608
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to programmatically create a Data Source Name
	(DSN) for SQL Server using Visual Basic. The technique discussed in this article
	uses Windows Application Programming Interface (API) functions to create and
	manipulate entries in the Windows Registry.
	
	MORE INFORMATION
	================
	
	DSNs are usually created through the ODBC Data Source Administrator window,
	which is accessible from the Windows Control Panel (or Administrator Tools in
	Windows 2000). Other techniques that provide access to ODBC-compliant databases
	include using RegisterDatabase (a Data Access Object (DAO) method), using the
	SQLConfigDataSource ODBC API function, or using a DSN-less connection string.
	
	However, it is possible to establish a new DSN by manually creating and
	manipulating values in the Windows Registry. The following technique uses the
	RegCreateKey, RegSetValueEx, and RegCloseKey API functions to create a system
	DSN for a SQL Server database.
	
	Step-by-Step Procedures
	-----------------------
	
	1. Open a new Visual Basic project. Form1 is created by default. Put a
	  CommandButton on Form1 (Command1), and put the following code in the General
	  Declarations section of the code for Form1:
	
	      Option Explicit
	
	      Private Const REG_SZ = 1    'Constant for a string variable type.
	      Private Const HKEY_LOCAL_MACHINE = &H80000002
	
	      Private Declare Function RegCreateKey Lib "advapi32.dll" Alias _
	         "RegCreateKeyA" (ByVal hKey As Long, ByVal lpSubKey As String, _
	         phkResult As Long) As Long
	
	      Private Declare Function RegSetValueEx Lib "advapi32.dll" Alias _
	         "RegSetValueExA" (ByVal hKey As Long, ByVal lpValueName As String, _
	         ByVal Reserved As Long, ByVal dwType As Long, lpData As Any, ByVal _
	         cbData As Long) As Long
	
	      Private Declare Function RegCloseKey Lib "advapi32.dll" _
	         (ByVal hKey As Long) As Long
	
	2. Place the following code in the click event of the Command1 button on Form1:
	
	  Change the values of the DataSourceName, DatabaseName, Description,
	  DriverPath, LastUser, and Server variables as appropriate for your
	  environment. Any of the drivers listed on the ODBC Drivers tab of the ODBC
	  Data Source Administrator window can be used as part of the DriverPath
	  variable. All of these drivers can be found in C:\Windows\System for Windows
	  95 or Windows 98 machines and C:\Winnt\System32 for Windows NT.
	
	     Private Sub Command1_Click()
	
	     Dim DataSourceName As String
	     Dim DatabaseName As String
	     Dim Description As String
	     Dim DriverPath As String
	     Dim DriverName As String
	     Dim LastUser As String
	     Dim Regional As String
	     Dim Server As String
	
	     Dim lResult As Long
	     Dim hKeyHandle As Long
	
	     'Specify the DSN parameters.
	
	     DataSourceName = "<the name of your new DSN>"
	     DatabaseName = "<name of the database to be accessed by the new DSN>"
	     Description = "<a description of the new DSN>"
	     DriverPath = "<path to your SQL Server driver>"
	     LastUser = "<default user ID of the new DSN>"
	     Server = "<name of the server to be accessed by the new DSN>"
	     DriverName = "SQL Server"
	
	     'Create the new DSN key.
	
	     lResult = RegCreateKey(HKEY_LOCAL_MACHINE, "SOFTWARE\ODBC\ODBC.INI\" & _
	          DataSourceName, hKeyHandle)
	
	     'Set the values of the new DSN key.
	
	     lResult = RegSetValueEx(hKeyHandle, "Database", 0&, REG_SZ, _
	        ByVal DatabaseName, Len(DatabaseName))
	     lResult = RegSetValueEx(hKeyHandle, "Description", 0&, REG_SZ, _
	        ByVal Description, Len(Description))
	     lResult = RegSetValueEx(hKeyHandle, "Driver", 0&, REG_SZ, _
	        ByVal DriverPath, Len(DriverPath))
	     lResult = RegSetValueEx(hKeyHandle, "LastUser", 0&, REG_SZ, _
	        ByVal LastUser, Len(LastUser))
	     lResult = RegSetValueEx(hKeyHandle, "Server", 0&, REG_SZ, _
	        ByVal Server, Len(Server))
	
	     'Close the new DSN key.
	
	     lResult = RegCloseKey(hKeyHandle)
	
	     'Open ODBC Data Sources key to list the new DSN in the ODBC Manager.
	     'Specify the new value.
	     'Close the key.
	
	     lResult = RegCreateKey(HKEY_LOCAL_MACHINE, _
	        "SOFTWARE\ODBC\ODBC.INI\ODBC Data Sources", hKeyHandle)
	     lResult = RegSetValueEx(hKeyHandle, DataSourceName, 0&, REG_SZ, _
	        ByVal DriverName, Len(DriverName))
	     lResult = RegCloseKey(hKeyHandle)
	
	     End Sub
	
	3. Run the project and click on the Command1 command button. Then open up the
	  ODBC Data Source Administrator from the Control Panel (or Administrator Tools
	  in Windows 2000). Your new DSN will appear along with the other system DSNs
	  that you have already created.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q166392 HOWTO: Use "DSN-Less" ODBC Connections with RDO
	
	  Q147875 HOWTO: Use "DSN-Less" ODBC Connections with RDO and DAO
	
	  Q171146 HOWTO: Create and Remove a DSN in Visual Basic
	
	  Q123008 HOWTO: Set Up ODBC Data Sources When Distributing Apps
	
	Additional query words: kbVBp500 kbVBp kbWinOS98 kbDSupport kbdse kbODBC kbVBp600
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
