---
layout: page
title: "Q128831: FIX: CFile Exception: badSeek, OS error information = -1"
permalink: /kb/128/Q128831/
---

## Q128831: FIX: CFile Exception: badSeek, OS error information = -1

	Article: Q128831
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVCkbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Foundation Classes (MFC), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling IsFieldDirty() twice, directly or indirectly, the following
	exception occurs:
	
	  CFile exception: badSeek, OS error information = -1.
	
	This simplified example demonstrates how to see the error:
	
	     CSomeRecordset rs;
	     rs.Open();
	     rs.Edit();
	     rs.IsFieldDirty(NULL);
	     rs.m_field1="somevalue";
	     rs.Update();
	     rs.Close();
	
	IsFieldDirty() is called twice -- once explicitly and then indirectly in the
	Update() call.
	
	CAUSE
	=====
	
	The problem lies in the MarkForUpdate() function. Here is the code shown in
	\MSVC20\MFC\SRC\DBCORE.CPP:
	
	  void CRecordset::MarkForUpdate()
	  {
	     ASSERT_VALID(this);
	     ASSERT(m_hstmt != SQL_NULL_HSTMT);
	
	     // Must have already stored field values in memfile
	     ASSERT(m_pmemfile != NULL);
	
	     CFieldExchange fx(CFieldExchange::MarkForUpdate, this);
	     m_pmemfile->SeekToBegin();
	
	     ASSERT(m_par != NULL);
	     delete m_par;
	     m_par = NULL;
	     m_par = new CArchive(m_pmemfile, CArchive::load);
	     fx.m_par = m_par;
	
	     DoFieldExchange(&fx);
	  }
	
	The SeekToBegin() call is made while the CArchive object pointed to by m_par is
	still attached to the file. The CArchive doesn't know that the memfile's file
	pointer has been moved by the SeekToBegin() call. When the archive is deleted,
	its Flush() member function is called. In that function, the archive attempts to
	move the file pointer back from where it thinks the current file position is to
	the beginning of the file. Because the current file position is already at the
	beginning of the file, a bad seek CFileException is thrown.
	
	RESOLUTION
	==========
	
	The solution is to move the SeekToBegin() function to a position following the
	delete of the CArchive that is attached to the file.
	
	To do this, copy four functions (Update(),UpdateInsertDelete(), IsFieldDirty(),
	and MarkForUpdate()) from DBCORE.CPP to your CRecordset .CPP file. The Update()
	function is virtual so by copying these functions to your recordset class, you
	will guarantee that your new (instead of old) MarkForUpdate() function is
	called.
	
	The only change you need to make to the code is to the MarkForUpdate() function.
	Place the code that deletes the archive before the call to SeekToBegin() as
	shown here:
	
	  void CSomeRecordset::MarkForUpdate()
	  {
	     ASSERT_VALID(this);
	     ASSERT(m_hstmt != SQL_NULL_HSTMT);
	
	     // Must have already stored field values in memfile
	     ASSERT(m_pmemfile != NULL);
	
	     ASSERT(m_par != NULL);
	     delete m_par;
	     m_par = NULL;
	
	     CFieldExchange fx(CFieldExchange::MarkForUpdate, this);
	     m_pmemfile->SeekToBegin();
	
	     m_par = new CArchive(m_pmemfile, CArchive::load);
	     fx.m_par = m_par;
	
	     DoFieldExchange(&fx);
	  }
	
	Again, copy the Update(), UpdateInsertDelete(), and IsFieldDirty() functions from
	the code in DBCORE.CPP to functions of the same name in your new
	CRecordset-derived class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 2.2
	
	Additional query words: 2.00 2.10 3.0 3.1 3.00 3.10
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
