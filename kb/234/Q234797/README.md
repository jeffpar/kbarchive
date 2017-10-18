---
layout: page
title: "Q234797: BLOB Data Doesn't Update with CRecordset::Open appendOnly Option"
permalink: kb/234/Q234797/
---

## Q234797: BLOB Data Doesn't Update with CRecordset::Open appendOnly Option

	Article: Q234797
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call CRecordset::Open with the appendOnly option, you can't update any
	data that is in CLongBinary member variables. The Update call does not cause any
	errors, but the data in that field is not written to the database.
	
	CAUSE
	=====
	
	The CLongBinary member variable is not being bound to the table's column in the
	RFX_LongBinary function. RFX_LongBinary only binds the column if the recordset
	is updateable [CanUpdate() returns TRUE], but when opened with the appendOnly
	option, the recordset is only appendable and not updateable.
	
	NOTE: If a driver does not support SQL_GD_BOUND for the SQL_GETDATA_EXTENSIONS
	value of SQLGetInfo(), MFC will attempt to perform SQL updates rather than
	positioned updates using SQLSetPos(), and therefore you will not see this
	problem. For example, if you are using a SQL Server datasource, you will not see
	a problem.
	
	RESOLUTION
	==========
	
	Use one of the following three workarounds:
	
	- Don't use the appendOnly option.
	
	- Use a CByteArray for your member variable instead of CLongBinary. In this
	  case, use the RFX_Binary function for data transfer; this function doesn't
	  conditionally bind the column.
	
	- Create your own version of the RFX_LongBinary function that also binds the
	  column when the recordset is appendable. In your DoFieldExchange function,
	  call this new function instead of MFC's version. Just copy RFX_LongBinary
	  from the MFC source file Dbrfx.cpp, then change the code below from the
	  following:
	
	  case CFieldExchange::BindFieldToColumn:
	       // Don't bind if using update SQL, just do SQLGetData on Fixup.
	       if (!pFX->m_prs->m_bUseUpdateSQL && pFX->m_prs->CanUpdate())
	
	  to the following:
	
	  case CFieldExchange::BindFieldToColumn:
	       // Don't bind if using update SQL, just do SQLGetData on Fixup.
	       if (!pFX->m_prs->m_bUseUpdateSQL && (pFX->m_prs->CanUpdate() || pFX->m_prs->CanAppend()))
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem:
	
	1. Use the AppWizard to create a new MFC application that contains a
	  CRecordset-derived class that is based on a table that contains a long binary
	  column (such as an OLE object field in Microsoft Access).
	
	2. Use code similar to the following to open the recordset with the appendOnly
	  option and add a new record to the table (this code can be used with the
	  sample Northwind database):
	
	       CMyRecordset rs;
	       rs.Open(CRecordset::dynaset, NULL, CRecordset::appendOnly);
	
	       CFile myBitmap("c:\\temp\\myBitmap.bmp", CFile::modeRead);
	  		
	       //Read from bitmap file into buffer.
	       LONG nTotalBytes = myBitmap.GetLength();
	
	       //Allocate a buffer for the input and read from file.
	       BYTE * inputBuf = new BYTE[nTotalBytes];
	       UINT nBytesRead = myBitmap.Read(inputBuf, nTotalBytes);
	  	
	       rs.AddNew();
	  	
	       rs.m_FirstName = "Cleo";
	       rs.m_LastName = "Haw";
	
	       //Copy the data into the CLongBinary member variable.
	       LPVOID pVoid = NULL;
	       DWORD bmpSize = nTotalBytes;
	       rs.m_Photo.m_hData = ::GlobalAlloc(GMEM_MOVEABLE,bmpSize);
	       pVoid = ::GlobalLock(rs.m_Photo.m_hData);
	       ::memcpy(pVoid,inputBuf,bmpSize);
	       ::GlobalUnlock(rs.m_Photo.m_hData);
	       rs.m_Photo.m_dwDataLength =::GlobalSize(rs.m_Photo.m_hData);
	
	       rs.SetFieldNull(&rs.m_Photo,FALSE);
	       rs.SetFieldDirty(&rs.m_Photo,TRUE);
	
	       rs.Update();
	   
	       delete [] inputBuf;
	       ::GlobalFree(rs.m_Photo.m_hData);
	
	RESULTS: You will see that the record has been added but the binary field is
	Null.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Sarah Parra, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	- MFC Technical Note 45: MFC/Database Support for Long Varchar/Varbinary
	
	- Documentation for RFX_LongBinary
	
	Additional query words: blob updatable canappend
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
