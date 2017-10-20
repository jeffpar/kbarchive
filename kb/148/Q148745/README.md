---
layout: page
title: "Q148745: PRB: DAO Can't Be Used in an ISAPI DLL"
permalink: /kb/148/Q148745/
---

## Q148745: PRB: DAO Can't Be Used in an ISAPI DLL

{% raw %}

	Article: Q148745
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbVCkbbuglist
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	DAO fails inside an ISAPI DLL. A call to CoGetClassObject() or
	CoCreateInstance() for the database engine will fail. You may receive the
	following HRESULTS:
	
	E_OUTOFMEMORY                  (    0x8007000EL )
	REGDB_E_IIDNOTREG            (    0x80040155L )
	
	CAUSE
	=====
	
	DAO wasn't tested or designed to work in an ISAPI DLL. The problem lies within
	the way the Internet Information Server handles OLE.
	
	RESOLUTION
	==========
	
	Do one of the following:
	
	- Don't use DAO. Because DAO is non-thread safe, Microsoft recommends that you
	  not use it in an ISAPI DLL. The SQL Server ODBC driver works well with an
	  ISAPI DLL and is a good choice for scaleable solutions.
	
	  -or-
	
	- Use the Internet Data Connector feature of the Microsoft Internet Information
	  Server to connect to the database file. See the online documentation for the
	  Microsoft Internet Information Server for more information about the Internet
	  Data Connector.
	
	  -or-
	
	
	- Write a CGI application to get to DAO rather than calling DAO in an ISAPI
	  DLL.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	Tech note 67 (TN067), "Database Access from an ISAPI Server Extension"
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbVC kbbuglist
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch
	Version           : :4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
