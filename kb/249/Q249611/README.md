---
layout: page
title: "Q249611: FIX: The HENV Isn't Accessible When You Use MFC ODBC Classes"
permalink: /kb/249/Q249611/
---

## Q249611: FIX: The HENV Isn't Accessible When You Use MFC ODBC Classes

{% raw %}

	Article: Q249611
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbMFC kbODBC kbVC600fix kbGrpDSVCDB kbDSupport
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When a program dynamically links to Microsoft Foundation Classes (MFC), the MFC
	Open Database Connectivity (ODBC) classes use an ODBC environment handle (HENV)
	that is declared local to the MFC DLL. Therefore, these programs do not have
	access to the MFC HENV.
	
	CAUSE
	=====
	
	This behavior occurs because the MFC ODBC classes are not designed to make the
	HENV available to the programmer.
	
	STATUS
	======
	
	This problem has been fixed with Microsoft Visual C++ 6.0.
	
	Use the global MFC function AfxGetHENV to obtain the HENV.
	
	REFERENCES
	==========
	
	For more information about the full syntax of the AfxGetHENV function, please
	refer to the following Microsoft Web site:
	
	  MSDN Online
	
	Additional query words: Q167910 henv 167910 CRecordset CDatabase couldn't cannot can't get
	
	======================================================================
	Keywords          : kbMFC kbODBC kbVC600fix kbGrpDSVCDB kbDSupport 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
