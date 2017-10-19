---
layout: page
title: "Q120511: PRB: Error: &quot;Invalid cursor name&quot; &amp; &quot;No cursor name available&quot;"
permalink: /kb/120/Q120511/
---

## Q120511: PRB: Error: &quot;Invalid cursor name&quot; &amp; &quot;No cursor name available&quot;

	Article: Q120511
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbprb
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program using the Microsoft Foundation Class Library Database Classes may
	receive one of the following ODBC error messages when trying to update a record
	following a call to CRecordset::Requery():
	
	  Invalid cursor name
	  State:34000,Native:0,Origin:[Microsoft][ODBC Cursor Library]
	
	-or-
	
	  No cursor name available
	  State:S1015,Native:0,Origin:[Microsoft][ODBC SQL Server Driver]
	
	The following code produces the the S1015 ODBC error:
	
	      CMyRecordSet set;
	      set.m_strFilter = "CustNo = ?";
	      set.m_CustNoParam = 1;
	      set.Open();
	      set.m_CustNoParam = 1;
	      set.Requery();
	      set.Edit();
	      set.m_CustNo = 2;
	      set.Update();
	
	NOTE: The ODBC drivers that shipped with VC++ 1.52 are ODBC 2.0 compliant and
	should not exhibit this behavior. No Microsoft 32-bit driver should exhibit this
	behavior.
	
	CAUSE
	=====
	
	The MFC database classes do not explicitly set a cursor name with the
	SQLSetCursorName call. Thus the MFC database classes depend on implicit cursor
	names given by the ODBC driver by default. The 1.0 ODBC Specification did not
	specify that an implicit cursor remain with the statement handle until the hstmt
	was dropped. Hence, the implicit cursor name in the SQL Server driver goes away
	just before the recordset.Update() call in the above example, resulting in the
	"No Cursor Name available" message when the MFC Database classes call
	SQLGetCursorName (Line 2421 in the UpdateInsertDelete method in dbcore.cpp).
	
	You can receive the "Invalid cursor name" message under similar circumstances
	especially after you have traversed a recordset and before requerying.
	
	RESOLUTION
	==========
	
	The version 2.0 "ODBC Specification" requires that implicit cursor names must
	remain until statement handles have been dropped. The drivers provided with the
	ODBC Driver pack, version 2.0, have been changed to conform to the 2.0
	specification. These drivers may be used with the MFC library database classes
	without running into the above problem.
	
	STATUS
	======
	
	For more information on version 2.0 of the ODBC Driver pack, please see the file
	ODBCDD20.DOC (in Microsoft Word format) or the file ODBCDD20.WRI (in Microsoft
	Write format), which are available via ftp.microsoft.com, under the directory
	/BUSSYS/SQL_ODBC/ODBC-MRKTG. Information can also be obtained by calling the
	Microsoft Sales Information Center at (800) 426-9400.
	
	
	Additional query words: 1.50 1.51 2.51
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbprb 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
