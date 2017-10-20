---
layout: page
title: "Q141351: PRB: &quot;Invalid argument&quot; with dbAttachedTable or dbAttachedODBC"
permalink: /kb/141/Q141351/
---

## Q141351: PRB: &quot;Invalid argument&quot; with dbAttachedTable or dbAttachedODBC

{% raw %}

	Article: Q141351
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbProgramming kbDAOsearch kbDatabase kbMFC kbVC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to pass dbAttachedTable or dbAttachedODBC as arguments to the
	CDaoTableDef::Create() function or the CDaoTableDef::SetAttributes() function,
	you will receive this DAO error:
	
	  Error Code = 3001
	  ....
	  Description = Invalid argument.
	
	CAUSE
	=====
	
	The Visual C++ documentation is incorrect. The values dbAttachedTable and
	dbAttachedODBC cannot be passed as arguments. These attributes are read- only
	attributes that are set internally by DAO based on the information provided in
	the connect string of the table.
	
	RESOLUTION
	==========
	
	Do not try to set these attributes. DAO will set the attributes based on what is
	contained in the connect string for the table. For example, look at this code:
	
	     td.Create(_T("Table1"),0,_T("Table1"),
	        _T("FoxPro 2.6;DATABASE=d:\\mydatabase\\"));
	
	DAO will set the dbAttachedTable attribute flag for that table. A call to
	CDaoTableDef::GetAttributes() will show the flag has been set.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbDAOsearch kbDatabase kbMFC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
