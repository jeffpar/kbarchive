---
layout: page
title: "Q130956: PRB: MFC DB Classes Don't Update NULL Field Values to Non-NULL"
permalink: /kb/130/Q130956/
---

## Q130956: PRB: MFC DB Classes Don't Update NULL Field Values to Non-NULL

{% raw %}

	Article: Q130956
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbDatabase kbMFC kbODBC kbVC kbprb
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MFC Database classes that come with Visual C++ version 2.0 are used,
	any field that has a NULL value cannot be updated to a non-NULL value
	successfully.
	
	After opening a recordset on a SQL Server table that has fields with NULL values,
	the Edit() and Update() methods of the recordset fail to update the value of the
	field to a non-NULL value. For example, the following code isn't able to do the
	update:
	
	     CMyRecordSet rs;
	     rs.Open();
	     rs.Edit();
	     rs.m_Name="Test"; //m_Name allows NULLs and is NULL for current record
	     rs.Update();
	
	The Update() function doesn't return any error, but the m_Name value is still set
	to NULL.
	
	RESOLUTION
	==========
	
	Use the MFC Database Classes that come with Visual C++ version 2.1 or above.
	Otherwise, for the field to be updated, force the bNull flag of the
	SetFieldNull() method to FALSE before calling the Update(). The following code
	works:
	
	     CMyRecordSet rs;
	     rs.Open();
	     rs.Edit();
	     rs.m_Name="Test";  //m_Name allows NULLs and is NULL for current record
	     rs.SetFieldNull(&rs.m_Name, FALSE);
	     rs.Update();
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 2.00 3.00 ODBC
	
	======================================================================
	Keywords          : kbcode kbDatabase kbMFC kbODBC kbVC kbprb 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
