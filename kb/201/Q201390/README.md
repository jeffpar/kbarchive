---
layout: page
title: "Q201390: PRB: CDynamicAccesor Does Not Handle String Columns Correctly"
permalink: kb/201/Q201390/
---

## Q201390: PRB: CDynamicAccesor Does Not Handle String Columns Correctly

	Article: Q201390
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbATL kbDatabase kbProvider kbVC600 kbGrpDSVCDB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to update a text column using SetValue function of class
	CDynamicAccessor, the column is not updated properly. Furthermore, the debug
	version of your OLE DB client program may ASSERT on the following line in
	ATLDBCLI.H:
	
	  ATLASSERT(m_pColumnInfo[nColumn].ulColumnSize == sizeof(ctype));
	
	CAUSE
	=====
	
	The SetValue function of CDynamicAccessor is a templated function to set the
	value of columns of most data types. This function does not handle strings
	correctly.
	
	Following is sample code that tries to update a text column using the SetValue
	function:
	
	     void UpdateCol()
	     {
	        HRESULT hr;
	             char szColVal[] = "Newval";
	        CDataSource ds;
	        CSession ses;
	        hr = ds.Open("MSDASQL","Ram","sa","");
	        hr = ses.Open(ds);
	        CDBPropSet   propset(DBPROPSET_ROWSET);
	        propset.AddProperty(DBPROP_IRowsetChange, true);
	        propset.AddProperty(DBPROP_UPDATABILITY,
	                                 DBPROPVAL_UP_CHANGE |
	                                 DBPROPVAL_UP_INSERT |
	                                 DBPROPVAL_UP_DELETE);
	        CTable< CDynamicAccessor > tb;
	        // Open a rowset on a table with Dynamic accessor
	        hr = tb.Open(ses,"Authors",&propset);
	        tb.MoveFirst();
	        tb.SetValue((ULONG)1L,(char *)szColVal);
	        // Call this function to set the data
	        hr = tb.SetData();
	     }
	
	This code does not update the column with the given value.
	
	RESOLUTION
	==========
	
	To avoid this problem with text columns, copy the following string directly to
	the column's buffer:
	
	   void CMultipleDlg::OnUpdate()
	     {
	        HRESULT hr;
	        char szColVal[] = "Newval";
	        CDataSource ds;
	        CSession ses;
	        hr = ds.Open("MSDASQL","Ram","sa","");
	        hr = ses.Open(ds);
	        CDBPropSet   propset(DBPROPSET_ROWSET);
	        propset.AddProperty(DBPROP_IRowsetChange, true);
	        propset.AddProperty(DBPROP_UPDATABILITY,
	                                 DBPROPVAL_UP_CHANGE |
	                                 DBPROPVAL_UP_INSERT |
	                                 DBPROPVAL_UP_DELETE);
	        CTable<CDynamicAccessor> tb;
	        // Open a rowset on a table with Dynamic accessor
	        hr = tb.Open(ses,"Authors",&propset);
	        tb.MoveFirst();
	        void *pName;
	        // Get the address of the buffer for the second column
	        pName = tb._GetDataPtr(1L);
	        // copy the string to be set to the buffer
	        strcpy((char *)pName,szColVal);
	        // Call this function to set the data
	        hr = tb.SetData();
	     }
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	OLE DB template classes documentation on MSDN
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbATL kbDatabase kbProvider kbVC600 kbGrpDSVCDB 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	
