---
layout: page
title: "Q159956: FIX: Dirty Flag Not Cleared During Edit() or Update()"
permalink: /kb/159/Q159956/
---

## Q159956: FIX: Dirty Flag Not Cleared During Edit() or Update()

	Article: Q159956
	Product(s): Microsoft C Compiler
	Version(s): 4.2 4.2b
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Foundation Classes (MFC) ODBC to update a record that
	has not been modified since the last call to CRecordset::Update(), the fields
	within the record show up as dirty.
	
	CAUSE
	=====
	
	Neither the CRecordset::Edit() function nor the CRecordset::Update() function
	clear the dirty flag.
	
	RESOLUTION
	==========
	
	Override CRecordset::Update() and clear the dirty flags for your recordset after
	calling the base class CRecordset::Update().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The following sample code displays the problem. The second sample shows how to
	implement the workaround:
	
	Sample Code 1
	-------------
	
	     // m_pSet is a pointer to a CRecordset derived class, called CMySet,
	     // that has a text member variable called m_Name.
	
	     m_pSet->Edit();
	     m_pSet->m_Name = "NewName";
	     m_pSet->Update();
	
	     m_pSet->Edit();
	     if( m_pSet->IsFieldDirty( &(m_pSet->m_Name) ) )
	         TRACE( "Name is dirty\n" );
	     // The next call will update the record, even though the data has
	     // not changed.
	     m_pSet->Update();
	
	Sample Code 2
	-------------
	
	     // Override CRecordset::Update and clear the dirty flags:
	     BOOL CMySet::Update()
	     {
	        BOOL bReturn = CRecordset::Update();
	        if (m_bCheckCacheForDirtyFields &&
	           !(m_dwOptions & optimizeBulkAdd))
	        {
	           SetFieldDirty(NULL, FALSE);
	        }
	        return bReturn;
	     }
	
	Additional query words: kbVC420bug kbDSupport
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbVC500fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.2 4.2b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
