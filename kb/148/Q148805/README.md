---
layout: page
title: "Q148805: FIX: CDaoTableDef CreateField Cannot Set &quot;Allow Zero Length&quot;"
permalink: /kb/148/Q148805/
---

## Q148805: FIX: CDaoTableDef CreateField Cannot Set &quot;Allow Zero Length&quot;

	Article: Q148805
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbProgramming kbDAOsearch kbDatabase kbMFC kbVCkbbuglist kbfixlist
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CDaoFieldInfo structure has a member variable, m_bAllowZeroLength, that
	allows you to set the "Allow Zero Length" property for a text or memo field in a
	Microsoft Access table. However, m_bAllowZeroLength cannot be set to TRUE in an
	MFC DAO application. The application does not complain when you call
	CDaoTableDef::CreateField () to set this to TRUE, but the table in Microsoft
	Access shows that the field property does not allow zero length. Later if you
	try to put a NULL value in the field, a CDAOException is thrown which says
	"Field cannot be Null."
	
	CAUSE
	=====
	
	AfxSetFieldInfo in Daocore.cpp (which is called by CreateField) has this code:
	
	     if (!fieldinfo.m_bAllowZeroLength)
	        DAO_CHECK(pDAOField->put_AllowZeroLength(AFX_DAO_FALSE));
	
	Because the default in Microsoft Access is FALSE (does not allow zero length),
	the above code doesn't set it to TRUE.
	
	RESOLUTION
	==========
	
	1. Copy the code for AfxSetFieldInfo() from Daocore.cpp into your project as a
	  separate function. Then modify the line containing the bug. Remove the
	  exclamation mark (!) in the first line, and change AFX_DAO_FALSE to
	  AFX_DAO_TRUE in the second line:
	
	     void MyCreateField()
	     {
	     CDaoDatabase db;
	     db.Open("c:\\msdev\\projects\\daoenrol\\stdreg32.mdb",
	        FALSE, FALSE);
	
	     // create a tabledef
	     CDaoTableDef td ( &db );
	     td.Create(_T("Table1"),0,_T("Table1"), NULL);
	
	     // create a FieldInfo structure
	     struct CDaoFieldInfo m_FI;
	
	     m_FI.m_nOrdinalPosition = 0;
	
	     // always initialize the rest
	     m_FI.m_strName = _T("MyField");
	     m_FI.m_nType = dbText ;
	     m_FI.m_lSize = 20;
	     m_FI.m_bAllowZeroLength = TRUE;  // To set "Allow Zero Length"
	
	     m_FI.m_strDefaultValue = _T("");
	     m_FI.m_bRequired = FALSE;
	     m_FI.m_lAttributes = dbUpdatableField;
	
	     m_FI.m_strValidationRule = _T("");
	     m_FI.m_strValidationText = _T("");
	
	     // Copy code from CDaoTableDef::CreateField()
	
	     DAOField* pDAOField;
	
	     // Create the DAO field object (setting basic properties)
	
	     // DAO_CHECK(m_pDAOTableDef->CreateField(
	     DAO_CHECK(td.m_pDAOTableDef->CreateField(
	        COleVariant(m_FI.m_strName, VT_BSTRT),
	        COleVariant(m_FI.m_nType),
	        COleVariant(m_FI.m_lSize), &pDAOField));
	
	     TRY
	     {
	     // Basic properties already set, so set the rest
	     MyAfxSetFieldInfo(pDAOField, m_FI);
	
	     // Append the field object to the fields collection
	     if (td.m_pDAOFields == NULL)
	         // cannot call private member function
	         //td.InitFieldsCollection();
	         DAO_CHECK(td.m_pDAOTableDef->get_Fields (&(td.m_pDAOFields)));
	
	     DAO_CHECK(td.m_pDAOFields->Append(pDAOField));
	     }
	     CATCH_ALL(e)
	     {
	        pDAOField->Release();
	        THROW_LAST();
	     }
	     END_CATCH_ALL
	
	     pDAOField->Release();
	
	     td.Append();
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbDAOsearch kbDatabase kbMFC kbVC kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
