---
layout: page
title: "Q166113: PRB: User-defined Modules Can't Be Used Through ODBC or DAO"
permalink: /kb/166/Q166113/
---

## Q166113: PRB: User-defined Modules Can't Be Used Through ODBC or DAO

{% raw %}

	Article: Q166113
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2 5.0 6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbDAOsearch kbDatabase kbMFC kbODBC kbVC
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Microsoft Access, you can create code modules in an .mdb file that can be
	used by predefined queries. When you open the query in Access, the code works as
	expected. However, if you use ODBC or DAO to access the predefined query, the
	following error message appears:
	
	  Undefined function '<function name>' in expression
	
	For example, assume that a function, called PlusTen, that adds 10 to some value
	is defined in Access as follows:
	
	     Public Function PlusTen(ByVal inVal As Long) As Long
	       PlusTen = inVal + 10
	     End Function
	
	You could have the following SQL statement in a predefined query:
	
	     Select PlusTen(column1) from table1
	
	With the Access 7.0 or Access 97 ODBC Drivers included with Visual C++ versions
	4.x and Visual C++ version 5.0, you receive an error similar to the following:
	
	  
	
	  Undefined function 'PlusTen' in expression
	  State:37000, Native:-3102, Origin:[Microsoft][ODBC Microsoft Access 97
	  Driver]
	
	If you use DAO 3.0 (included with Visual C++ 4.x) or DAO 3.5 (included with
	Visual C++ 5.0), the following message appears in the Output window of the
	debugger:
	
	  
	
	  DAO Call Failed.
	      m_pQueryDef->m_pDAOQueryDef->OpenRecordset(
	        COleVariant((long)m_nOpenType), COleVariant((long)m_nOptions),
	        &m_pDAORecordset)
	      In file daocore.cpp on line 3327
	      scode = 800A0C0D
	  Error Code = 3085
	  Source = DAO.Database
	  Description = Undefined function 'PlusTen' in expression.
	
	CAUSE
	=====
	
	ODBC and DAO do not use or know anything about the code modules inserted into an
	.MDB file by Access. Only Access recognizes the modules.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: Jet kbvc400 kbvc410 kbvc420 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbProgramming kbDAOsearch kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : 4.0 4.1 4.2 5.0 6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
