---
layout: page
title: "Q258157: HOWTO: Deploy the SQL Distributed Management Objects w/ the PDW"
permalink: /kb/258/Q258157/
---

## Q258157: HOWTO: Deploy the SQL Distributed Management Objects w/ the PDW

{% raw %}

	Article: Q258157
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,5.0 SP1,5.0 SP2,5.0 SP3,6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbDeployment kbSQLServ kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport kbC
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 5.0 SP1, 5.0 SP2, 5.0 SP3, 6.0, 6.0 SP3 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 5.0 SP1, 5.0 SP2, 5.0 SP3, 6.0, 6.0 SP3 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 5.0 SP1, 5.0 SP2, 5.0 SP3, 6.0, 6.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to use the Microsoft Visual Basic Package and
	Deployment Wizard to successfully deploy a Visual Basic application that
	references the SQL-DMO library.
	
	The following definition for SQL-DMO is found in Microsoft SQL Server Books
	Online:
	
	  SQL Distributed Management Objects (SQL-DMO) is a collection of objects
	  encapsulating Microsoft(r) SQL Server(tm) database and replication
	  management.
	
	In Microsoft Visual Basic, if you set a reference to the SQL-DMO library, you can
	then use Visual Basic to view and modify database schemas and perform common
	database management tasks.
	
	MORE INFORMATION
	================
	
	The SQL-DMO library consists of eight redistributable files. These files, with
	their default installation folders, are:
	
	+---------------------------------------------+
	| File Name    | Path                         | 
	+---------------------------------------------+
	| Sqldmo.dll   | \Mssql7\Binn\                | 
	+---------------------------------------------+
	| Sqldmo.rll   | \Mssql7\Binn\Resources\1033\ | 
	+---------------------------------------------+
	| Sqlresld.dll | \Mssql7\Binn\                | 
	+---------------------------------------------+
	| Sqlsvc.dll   | \Mssql7\Binn\                | 
	+---------------------------------------------+
	| Sqlsvc.rll   | \Mssql7\Binn\Resources\1033\ | 
	+---------------------------------------------+
	| Sqlwoa.dll   | \Windows\System32\           | 
	+---------------------------------------------+
	| Sqlwid.dll   | \Windows\System32\           | 
	+---------------------------------------------+
	| W95scm.dll   | \Mssql7\Binn\                | 
	+---------------------------------------------+
	
	These files must be deployed as part of any application that references the
	SQL-DMO objects. The Microsoft Visual Basic Package and Deployment Wizard does
	not recognize all the dependencies of the Sqldmo.dll file and therefore, does
	not automatically include all the necessary files.
	
	For additional information about dependency (.dep) files, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q228940 INF: VB .DEP Files not Available for SQL 7.0 Redistributable
	  Components
	
	In order to properly deploy the SQL-DMO library, you must add all the preceding
	files to the list of the Included Files dialog box of the Package and Deployment
	Wizard during the packaging phase. When you are prompted with the File Open
	dialog box, you will find these files in the folders listed in the preceding
	table.
	
	In the Install Locations dialog box, set the Install Location of the Sqlwoa.dll
	file to $(WinSysPath). The other files will default to $(AppPath) and can be
	left unchanged.
	
	NOTE: If you are installing the SQL-DMO Objects as shared, you may want to
	relocate the other components to a common location such as the Windows System
	Path as well.
	
	Finally, the setup application must be instructed to register the Sqldmo.dll
	file. The Package and Deployment Wizard will not automatically register the
	file. To instruct the setup application to register this component, open the
	Setup.lst file that was generated with the package, and then edit the following
	line:
	
	  File7=@sqldmo.dll,$(AppPath),,,2/8/00 3:42:08 AM,2625536,2000.2.8.0
	
	Add "$(DLLSelfRegister)", the instruction to register the dll, after the install
	location constant, as follows:
	
	  File7=@sqldmo.dll,$(AppPath),$(DLLSelfRegister),,2/8/00 3:42:08 AM,2625536,2000.2.8.0
	
	NOTE: The file number, date, time and version number of your files may be
	different than the ones shown in the code sample.
	
	Save the Setup.lst file. This completes the steps required to deploy the SQL-DMO
	Objects support files with your Visual Basic application.
	
	REFERENCES
	==========
	
	SQL Server Books Online; topic: "SQL-DMO"
	
	SQL Server 7.0 Standard and Enterprise CD-ROM; Redist.txt
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbDeployment kbSQLServ kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB600SP3
	Version           : :5.0,5.0 SP1,5.0 SP2,5.0 SP3,6.0,6.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
