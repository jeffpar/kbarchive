---
layout: page
title: "Q165689: INFO: Visual C++ 5.0 Readme, Enterprise Edition Issues"
permalink: /kb/165/Q165689/
---

## Q165689: INFO: Visual C++ 5.0 Readme, Enterprise Edition Issues

{% raw %}

	Article: Q165689
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Enterprise Edition Issues
	-------------------------
	
	Change in Terminology for Data View and SQL Debugging Database Projects Default
	or Identity Values Are Not Displayed When You Enter New Records into a Table
	Converting VC 4.2 Projects When the Data Connection is Offline
	
	MORE INFORMATION
	================
	
	Change in Terminology for Data View and SQL Debugging
	-----------------------------------------------------
	
	In the context of Data View and SQL Debugging in Visual C++ 4.2 Enterprise
	Edition, the term "Data Source" was used to describe the set of data that a
	database application accesses. In Visual C++ 5.0 Enterprise Edition, this term
	was changed to "Data Connection" to be consistent with terminology used across
	Visual Studio Products.
	
	Database Projects
	-----------------
	
	In Visual C++ 4.2 Enterprise Edition, you could add a Data Connection to any type
	of Visual C++ project by selecting Data Connection from the Insert menu.
	
	In Visual C++ 5.0 Enterprise Edition, a new project type has been created to
	allow more effective management of Data Connections. The new project type is
	called a Database Project. Data Connections can only be added to Database
	Projects by selecting Add to Project, then Data Connection from the Project
	menu.
	
	For more information about working with Database projects, see the following
	sections of the online documentation:
	
	- Working with Database Projects in the Visual Database Tools node
	- Microsoft Visual Database Tools Overview in the Visual Database Tools node.
	- Data View in the Developer Studio Environment User's Guide
	
	Default or Identity Values Are Not Displayed When You Enter New Records
	into a Table
	------------------------------------------------------------------------------------
	
	To display these values, requery the table by choosing Run from either the Query
	toolbar or from the Tools menu.
	
	Converting VC 4.2 Projects When the Data Connection is Offline
	--------------------------------------------------------------
	
	Opening a Visual C++ 4.2 project that contains a data connection in the Visual
	C++ 5 development environment will attempt to create a workspace that contains
	the converted project and a database project that contains the data connection.
	If the database that the data connection refers to is offline, error messages
	will be displayed and the database project will not be created.
	
	WORKAROUND
	==========
	
	Manually add a database project that refers to the appropriate data connection.
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	
	=============================================================================
	

{% endraw %}
