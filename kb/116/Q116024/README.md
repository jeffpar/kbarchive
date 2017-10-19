---
layout: page
title: "Q116024: PRB: Errors Occur when Using Database Classes with Access 2.0"
permalink: /kb/116/Q116024/
---

## Q116024: PRB: Errors Occur when Using Database Classes with Access 2.0

	Article: Q116024
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbprb
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Access version 2.0 installs an ODBC driver to allow the Microsoft
	Office products (that is, Word and Excel) to use an Access version 2.0 database.
	If an application uses the database classes with the Microsoft Foundation
	Classes to store and retrieve data from an Access version 2.0 database using the
	ODBC driver, errors may occur. (Typically, a "Jet Error -1003" error occurs.)
	
	CAUSE
	=====
	
	The Access version 2.0 ODBC driver provided with Microsoft Office cannot be used
	with the Microsoft Foundation Classes database code. The helpfile DRVACC2.HLP
	(located in the WINDOWS\SYSTEM directory) states:
	
	- The ODBC Microsoft Access driver allows users of the Microsoft Office family
	  of products to open and query a Microsoft Access database through the Open
	  Database Connectivity (ODBC) interface. This driver is only supported for use
	  with the Microsoft Office family of products.
	
	RESOLUTION
	==========
	
	There are two solutions to this proble. They are:
	
	1. Use the Access version 2.0 ODBC driver supplied with the ODBC Driver Pack,
	  version 2.0. The database clases provided with the Microsoft Foundation
	  Classes work with this version of the driver. For more information on the
	  Access drivers and the ODBC Driver Pack, please see the following article in
	  the Microsoft Knowledge Base:
	
	  Q124815 Explanation of the Two Available Access Drivers
	
	-or-
	
	2. Keep the databases in the Access version 1.1 format and use the Access
	  version 1.0 and 1.1 ODBC driver. You can then use the Access version 1.1
	  files with Access version 2.0. For more information, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q112122 Using Version 1.1 Databases in Version 2.0
	
	
	Additional query words: ODBC 1.50 2.50 2.51 2.52
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbprb 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
