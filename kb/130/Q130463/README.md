---
layout: page
title: "Q130463: HOWTO: How to Import Microsoft Access Data"
permalink: /kb/130/Q130463/
---

## Q130463: HOWTO: How to Import Microsoft Access Data

{% raw %}

	Article: Q130463
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp600 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While Visual FoxPro has the ability to import a number of different file
	formats, it is not possible to import a Microsoft Access database directly into
	Visual FoxPro. You must use ODBC.
	
	MORE INFORMATION
	================
	
	The structure of a Microsoft Access database is substantially different from
	something like a text file or an Excel spreadsheet. The .MDB file of a Microsoft
	Access database is a container that holds the tables, forms, and reports for use
	by Microsoft Access. The manner in which the data is stored is somewhat the same
	as the way it is stored in an SQL Server database where you must first access
	the database itself to gain access to the tables.
	
	Because Visual FoxPro does not understand the format and structure of the
	Microsoft Access database, you cannot import data directly from a Microsoft
	Access database by using the Import Wizard.
	
	To import the data, you need to use ODBC to pull data from the Microsoft Access
	tables. To learn how to use ODBC with Microsoft Access tables, please see the
	"Access data, using in Visual FoxPro" topic in the Visual FoxPro Help file.
	
	Additional query words: VFoxWin Access Import ODBC
	
	======================================================================
	Keywords          : kbvfp300 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP600
	Version           : WINDOWS:2.5,3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
