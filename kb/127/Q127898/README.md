---
layout: page
title: "Q127898: BUG: Err Msg: Control Caused Stack Fault in Module XBS200.DLL"
permalink: /kb/127/Q127898/
---

## Q127898: BUG: Err Msg: Control Caused Stack Fault in Module XBS200.DLL

{% raw %}

	Article: Q127898
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJET: 2000 (2.00.2317)
	
	SYMPTOMS
	========
	
	When you set up or modify a Microsoft FoxPro or Dbase data source using the ODBC
	Administrator icon in the Microsoft Windows Control Panel, and you use the
	Select Indexes... dialog box, the following error may occur:
	
	  Control caused a Stack Fault in module XBS200.DLL at <xxxx:xxxx>
	
	MORE INFORMATION
	================
	
	For additional information, please see the README.WRI included with ODBC Desktop
	Database Drivers version 2.0.
	
	WORKAROUND
	==========
	
	Use the ODBC Administrator to set up your Dbase and FoxPro ODBC data sources.
	The executable to run the ODBC Administrator is ODBCADM.EXE.
	
	Notes:
	
	- If you do not have the ODBC Administrator installed as an icon in one of your
	  Program Manager groups, you can create one.
	
	- If you do not have the ODBC Administrator executable, it can be installed
	  from the latest version of the ODBC Software Development Kit, available with
	  the Microsoft Developer Network Level 2 CDs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Dbase and FoxPro Drivers
	version 2.00.2317. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00.2317 Desktop Database
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
