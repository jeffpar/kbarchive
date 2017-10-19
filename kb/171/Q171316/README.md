---
layout: page
title: "Q171316: FIX: Setting Default Value Using CreateField Gives Wrong Value"
permalink: /kb/171/Q171316/
---

## Q171316: FIX: Setting Default Value Using CreateField Gives Wrong Value

	Article: Q171316
	Product(s): Microsoft C Compiler
	Version(s): 5.0sp1
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbVC kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp1 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MFC DAO application built using Visual C++ version 4.2x and linked to
	MFC42.DLL incorrectly sets the default value for a field. For example, if
	CDaoTableDef::CreateField() is called with the CDaoFieldInfo::m_strDefaultValue
	set to "default value", you will find that a "d" is added as the default value
	instead of the whole string.
	
	For sample code that demonstrates the problem, see the MORE INFORMATION section
	below.
	
	CAUSE
	=====
	
	There is a bug in version 4.21.7160 of MFC42.DLL (this is the MFC DLL that comes
	with Visual C++ 5.0 Service Pack 1). In the AfxSetDefaultValue() function
	located in DAOCORE.CPP, you can see the following code:
	
	     .
	     .
	     .
	     else
	     {
	        // Call DAO 3.0 method
	        // put_DefaultValue takes BSTR param not VARIANT
	        HRESULT (STDMETHODCALLTYPE DAOField::*pMethod)(BSTR) =
	        (HRESULT (STDMETHODCALLTYPE
	         DAOField::*)(BSTR))pDAOField->put_DefaultValue;
	        BSTR bstr = strDefaultValue.AllocSysString();
	        DAO_CHECK((pDAOField->*pMethod)(bstr));
	        SysFreeString(bstr);
	     }
	
	The bstr value needs to be created as an ANSI BSTR, which DAO expects in a
	non-UNICODE application rather than a UNICODE BSTR that the code is creating.
	
	RESOLUTION
	==========
	
	You can work around this problem by deriving a new class from CDaoTableDef that
	defines a new CreateField() function. If you use this code in your Visual C++
	4.2x application and later decide to build your application with Visual C++ 5.0
	or greater (which uses DAO 3.5 and doesn't experience the bug), you don't want
	to use new class. The code demonstrates one way that you can check the _MFC_VER
	constant to determine whether the code is needed:
	
	.H File
	-------
	
	     #if _MFC_VER <0x0421
	     class CNewDaoTableDef: public CDaoTableDef
	     {
	     public:
	        CNewDaoTableDef(CDaoDatabase * pDatabase):CDaoTableDef(pDatabase){};
	
	        void CreateField(CDaoFieldInfo& fieldinfo);
	        void SetFieldInfo(DAOField* pDAOField, CDaoFieldInfo& fieldinfo);
	     };
	     #endif  // _MFC_VER <0x421
	
	.CPP File
	---------
	
	     #if _MFC_VER <0x0421
	     void CNewDaoTableDef::CreateField(CDaoFieldInfo& fieldinfo)
	     {
	        ASSERT_VALID(this);
	
	        DAOField* pDAOField;
	
	        // Create the DAO field object (setting basic properties)
	        DAO_CHECK(m_pDAOTableDef->CreateField(
	                  COleVariant(fieldinfo.m_strName, VT_BSTRT),
	                  COleVariant(fieldinfo.m_nType),
	                  COleVariant(fieldinfo.m_lSize), &pDAOField));
	        TRY
	        {
	           SetFieldInfo(pDAOField, fieldinfo);
	
	           // Append the field object to the fields collection
	           if (m_pDAOFields == NULL)
	              InitFieldsCollection();
	
	           DAO_CHECK(m_pDAOFields->Append(pDAOField));
	         }
	         CATCH_ALL(e)
	         {
	           pDAOField->Release();
	           THROW_LAST();
	         }
	         END_CATCH_ALL
	
	         pDAOField->Release();
	     }
	
	     void CNewDaoTableDef::SetFieldInfo(DAOField* pDAOField, CDaoFieldInfo&
	                                        fieldinfo)
	     {
	        // Assumes name, type and size set on direct DAO CreateField call
	        ASSERT(pDAOField != NULL);
	
	        if (fieldinfo.m_lAttributes != 0)
	          DAO_CHECK(pDAOField->put_Attributes(fieldinfo.m_lAttributes));
	
	        if (fieldinfo.m_nOrdinalPosition != 0)
	        {
	        DAO_CHECK(pDAOField
	                  ->put_OrdinalPosition(fieldinfo.m_nOrdinalPosition));
	        }
	
	        if (fieldinfo.m_bRequired)
	           DAO_CHECK(pDAOField->put_Required(AFX_DAO_TRUE));
	
	        if (fieldinfo.m_bAllowZeroLength)
	           DAO_CHECK(pDAOField->put_AllowZeroLength(AFX_DAO_TRUE));
	
	        if (!fieldinfo.m_strForeignName.IsEmpty())
	        {
	           COleVariant var(fieldinfo.m_strForeignName, VT_BSTRT);
	           DAO_CHECK(pDAOField->put_ForeignName(V_BSTR(&var)));
	        }
	
	        if (!fieldinfo.m_strValidationRule.IsEmpty())
	        {
	          COleVariant var(fieldinfo.m_strValidationRule, VT_BSTRT);
	          DAO_CHECK(pDAOField->put_ValidationRule(V_BSTR(&var)));
	        }
	
	        if (!fieldinfo.m_strValidationText.IsEmpty())
	        {
	          COleVariant var(fieldinfo.m_strValidationText, VT_BSTRT);
	          DAO_CHECK(pDAOField->put_ValidationText(V_BSTR(&var)));
	        }
	
	        if (!fieldinfo.m_strDefaultValue.IsEmpty())
	        {
	          COleVariant var(fieldinfo.m_strDefaultValue, VT_BSTRT);
	          DAO_CHECK(pDAOField->put_DefaultValue(V_BSTR(&var)));
	        }
	     }
	     #endif // _MFC_VER <0x0421
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	This sample code fails if the application is built with Visual C++ 4.2x and you
	use the newer MFC42.DLL (the one with Visual C++ 5.0 service pack 1).
	
	     CDaoDatabase db;
	     db.Open(_T("db.mdb"));
	
	     CDaoTableDef td(&db);
	     // Replace the line above with the following code to fix the problem:
	     // #if _MFC_VER < 0x0421
	     //   CNewDaoTableDef td(&db);  // need to use new class w/ VC++ 4.2x
	     // #else
	     //   CDaoTableDef td(&db); // building with VC++ 5.0 the bug doesn't
	     // exist #endif
	
	     td.Create(_T("FieldTest"));
	
	     CDaoFieldInfo fi;
	     fi.m_strName = _T("testfield");
	     fi.m_nType = dbText;
	     fi.m_lSize = 50;
	     fi.m_lAttributes = dbFixedField;
	     fi.m_nOrdinalPosition = 0;
	     fi.m_bRequired = FALSE;
	     fi.m_bAllowZeroLength = TRUE;
	     fi.m_lCollatingOrder = dbSortGeneral ;
	     fi.m_strDefaultValue = _T("default value");
	     td.CreateField(fi);
	     td.Append();
	
	     CDaoRecordset rs(&db);
	     rs.Open(dbOpenDynaset, _T("Select * from FieldTest3"));
	     rs.AddNew();
	     rs.Update();
	     rs.Close();
	     db.Close();
	
	Additional query words: 4.2b
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbVC kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbVC500SP1 kbVC500Search
	Version           : 5.0sp1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
