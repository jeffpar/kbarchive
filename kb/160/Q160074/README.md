---
layout: page
title: "Q160074: SetFieldNull Asserts or Crashes When Called for Parameter"
permalink: kb/160/Q160074/
---

## Q160074: SetFieldNull Asserts or Crashes When Called for Parameter

	Article: Q160074
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbfile kbDatabase kbMFC kbODBC kbVC kbVC500fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CRecordset::SetFieldNull() causes an assert or an access violation if called for
	a parameter. Even if no assert or access violation occurs, the parameter may not
	be set to Null.
	
	If SetFieldNull() is called before the recordset is open, the assert occurs in
	DBRFX.CPP at line 48:
	
	     ASSERT(prs->m_hstmt != SQL_NULL_HSTMT);
	
	If SetFieldNull() is called after the recordset is open, then a call to
	CRecordset::Requery() may assert in DBCORE.CPP at line 4055 or line 4062:
	
	     ASSERT(nParam < m_nParams);
	
	If SetFieldNull() is called after the recordset is closed and before it is
	reopened, you will see an access violation in DBCORE.CPP at line 4057:
	
	      m_pbParamFlags[nParam] |= AFX_SQL_FIELD_FLAG_NULL;
	
	or at line 4064:
	
	      m_pbParamFlags[nParam] &= ~AFX_SQL_FIELD_FLAG_NULL;
	
	NOTE: Visual C++ 5.0 has a new function called SetParamNull() that you can use to
	avoid this problem. SetFieldNull() in Visual C++ 4.2 was not designed to be
	called before calling CRecordset::Open(), and was not designed to handle
	parameters. The following files are available for download from the Microsoft
	Download Center:
	
	Paramset.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. The problem has been fixed with Visual C++ version
	5.0 by adding a new function called SetParamNull().
	
	MORE INFORMATION
	================
	
	Once you have downloaded Paramset.exe and run the EXE to extract the CParamSet
	class files, add CParamSet.CPP to your project.
	
	Change your recordsets to be derived from CParamSet rather than CRecordset.
	
	CRecordset::SetFieldNull() cannot be called before the recordset is open. If you
	want to call SetFieldNull() to set parameters to Null before calling
	CRecordset::Open(), then call CParamSet::SetParamNull() instead. You will have
	to change the parameters that are passed to SetParamNull() because
	SetFieldNull() requires a pointer to the parameter and SetParamNull() requires a
	zero-based index.
	
	In your implementation of the DoFieldExchange() function, change each call to an
	RFX function for a parameter to a call to the corresponding Param_RFX function.
	
	REFERENCES
	==========
	
	Visual C++ Books Online: CRecordset::SetFieldNull
	
	Additional query words: kbVC420bug kbDSupport assert gpf crash
	
	======================================================================
	Keywords          : kbfile kbDatabase kbMFC kbODBC kbVC kbVC500fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
