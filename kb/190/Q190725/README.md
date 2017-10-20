---
layout: page
title: "Q190725: SqlOleDb.h Not Installed by VC++ 6.0"
permalink: /kb/190/Q190725/
---

## Q190725: SqlOleDb.h Not Installed by VC++ 6.0

{% raw %}

	Article: Q190725
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbDatabase kbOLEDB kbProvider kbSQLServ kbVC600 kbDSupport kbMDAC250
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	OLE DB consumer applications that use SQLOLEDB provider specific properties
	require the SqlOleDb.h C++ header file.
	
	When you install Visual C++ 6.0 (with Data Access options), SqlOleDb.h is not
	installed.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Sqloledb.exe
	  (http://download.microsoft.com/download/vc60std/File/1/WIN98/EN-US/Sqloledb.exe)
	
	Release Date: Aug-10-1998
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Visual C++ OLE DB Wizards work without SqlOleDb.h. Active Template Library
	(ATL) consumer templates also build and work without this header file as long as
	you don't use any provider-specific features of SQLOLEDB provider. To see a
	description of SQLOLEDB provider-specific properties and interfaces, please see
	the SQLOLEDB Online Help in the Microsoft Developer Network:
	
	  Platform SDK: Database and Messaging Services; Microsoft Data Access SDK; OLE
	  DB; OLE DB Providers; OLE DB SQL Server Provider
	
	Additional query words: Sqloledb
	
	======================================================================
	Keywords          : kbfile kbDatabase kbOLEDB kbProvider kbSQLServ kbVC600 kbDSupport kbMDAC250 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
