---
layout: page
title: "Q152688: HOWTO: Change the Name of a Microsoft Access Field w/MFC DAO"
permalink: kb/152/Q152688/
---

## Q152688: HOWTO: Change the Name of a Microsoft Access Field w/MFC DAO

	Article: Q152688
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2 4.2b 5.0 6.0
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MFC DAO classes do not provide a programmatic way to change the name of a
	Microsoft Access field. The example code in this article changes a field's Name
	property by directly calling DAO using the m_pDAOFields data member of
	CDaoTableDef.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /////////////////////////////////////////////////////////////////// 
	     // CTabDef - class definition
	
	     class CTabDef : public CDaoTableDef
	     {
	     public:
	         CTabDef( CDaoDatabase* pDB) : CDaoTableDef( pDB )
	         { }
	
	         ~CTabDef() {}
	
	         void ChangeFieldProperty(LPCTSTR szOldName, LPCTSTR szNewName);
	     };
	
	     ///////////////////////////////////////////////////////////////// 
	     // CTabDef - implementation
	     void CTabDef::ChangeFieldProperty( LPCTSTR szOld, LPCTSTR szNew )
	     {
	       // To be used as an "in" param to get_Item
	       DAOField* pDAOField = NULL;
	
	       if (m_pDAOFields == NULL)
	            InitFieldsCollection();
	
	         // Enumerate the fields collection and find the field.
	         // Then replace the name property with the new string.
	         try
	         {
	         DAO_CHECK( m_pDAOFields->get_Item(
	                    COleVariant(szOld, VT_BSTRT), &pDAOField ) );
	
	           DAO_CHECK( pDAOField->put_Name(
	                    COleVariant(szNew, VT_BSTRT).bstrVal ) );
	         }
	         catch( CDaoException* e )
	         {
	             AfxMessageBox( e->m_pErrorInfo->m_strDescription );
	             goto term;
	         }
	         catch(...)
	         {
	             AfxMessageBox( _T( "unknown exception" ) );
	             goto term;
	         }
	
	         term:
	         if( pDAOField )
	             pDAOField->Release();
	     }
	
	======================================================================
	Keywords          : kbcode kbProgramming kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.0 4.1 4.2 4.2b 5.0 6.0
	Issue type        : kbhowto
	
	=============================================================================
	
