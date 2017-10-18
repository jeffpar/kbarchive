---
layout: page
title: "Q157071: FIX: GetFieldValue Returns Empty String for SQL_LONGVARCHAR"
permalink: kb/157/Q157071/
---

## Q157071: FIX: GetFieldValue Returns Empty String for SQL_LONGVARCHAR

	Article: Q157071
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CRecordset::GetFieldValue() incorrectly returns an empty string for
	SQL_LONGVARCHAR data that is 1 character long.
	
	CAUSE
	=====
	
	GetFieldValue() allocates a buffer and then calls CRecordset::GetData() to
	retrieve data from the field into this buffer. For long binary and character
	data, the length of the data is not known in advance, so GetFieldValue() does
	not know what size of buffer to allocate.
	
	Therefore, for SQL_LONGVARCHAR and SQL_LONGVARBINARY data, GetFieldValue() calls
	GetData() with a buffer length of 1. GetData() tries to retrieve the data and
	will likely fail because the buffer is too small. Whether GetData() fails or
	not, it returns the actual length of the data in the field excluding the NULL
	termination byte. GetFieldValue() then calls the function
	CRecordset::GetLongCharDataAndCleanup() to reallocate the buffer and retrieve
	the rest of the data, if necessary.
	
	GetLongCharDataAndCleanup() must determine whether GetData() was able to retrieve
	the data by checking whether the actual data length is larger than the buffer
	length:
	
	     // If long data, may need to call SQLGetData again
	     if (nLen < nActualSize &&
	         (nSQLType == SQL_LONGVARCHAR || nSQLType == SQL_LONGVARBINARY))
	
	For 1-character SQL_LONGVARCHAR data, GetData() will fail because the buffer must
	be large enough to hold the data plus the NULL termination byte. Then, GetData()
	returns an actual size of 1, which does not include the NULL byte.
	
	GetLongCharDataAndCleanup() fails to consider the space required for the NULL
	termination byte. If the data length is 1, then both nLen and nActualSize are 1,
	which means that GetLongCharDataAndCleanup() will not attempt to get the
	additional data.
	
	RESOLUTION
	==========
	
	Override the GetLongCharDataAndCleanup() function and change the length
	comparison above from "<" to "<=". See the MORE INFORMATION section below
	about how to implement this workaround.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual C++, version 5.0, for Windows.
	
	MORE INFORMATION
	================
	
	The following steps detail one method of making the needed changes to
	GetFieldValue():
	
	1. If you do not currently have a class derived from CRecordset, create one. If
	  you have multiple classes derived from CRecordset, you may want to create a
	  new base class derived from CRecordset and modify your existing recordset
	  classes to be derived from this new base class so that you do not have to
	  make the changes to every recordset class.
	
	  For example, create GetSet.H:
	
	        class CGetSet : public CRecordset
	        {
	        public:
	            CGetSet(CDatabase* pDatabase = NULL);
	        };
	
	        and GetSet.CPP:
	
	        #include "stdafx.h"
	        #include "GetSet.h"
	
	        CGetSet::CGetSet(CDatabase* pdb)
	            : CRecordset(pdb)
	        {
	        }
	
	2. Copy the prototypes of the CRecordset GetFieldValue() and
	  GetLongCharDataAndCleanup() functions from MSDEV\MFC\SRC\AFXDB.H to your
	  recordset .H file as public member functions. Note that all four of the
	  GetFieldValue() prototypes must be copied.
	
	3. Copy the implementations of the CRecordset::GetFieldValue() and
	  CRecordset::GetLongCharDataAndCleanup() functions from
	  MSDEV\MFC\SRC\DBCORE.CPP to your recordset .CPP file. Change the
	  "CRecordset::" prefix to your new class name. Note that all four of the
	  GetFieldValue() implementations must be copied.
	
	4. In your implementation of GetLongCharDataAndCleanup(), replace "<" with
	  "<=".
	
	  Change:
	
	        // If long data, may need to call SQLGetData again
	        if (nLen < nActualSize &&
	            (nSQLType == SQL_LONGVARCHAR || nSQLType == SQL_LONGVARBINARY))
	
	  to:
	
	        // If long data, may need to call SQLGetData again
	        if (nLen <= nActualSize &&
	            (nSQLType == SQL_LONGVARCHAR || nSQLType == SQL_LONGVARBINARY))
	
	5. If you were using the CRecordset class directly, you will need to change your
	  application to use the new class instead.
	
	Additional query words: kbDatabase kbMFC kbVC420bug kbVC500fix kbDSupport
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
