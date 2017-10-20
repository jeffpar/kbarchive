---
layout: page
title: "Q172405: FIX: &quot;Unhandled exception&quot; in MFC DAO App After VC++ 5.0 SP1"
permalink: /kb/172/Q172405/
---

## Q172405: FIX: &quot;Unhandled exception&quot; in MFC DAO App After VC++ 5.0 SP1

{% raw %}

	Article: Q172405
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS NT:5.0sp1
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
	
	After installing the MFC42.dll (version 4.21.7160) that ships with Visual C++
	5.0 Service Pack 1, applications that were compiled with Visual C++ 4.2 and use
	MFC DAO may fail with an unhandled exception or MFC may display a "Command
	Failed" error message. Specifically, the exception will occur when creating
	index fields (CDaoTableDef::CreateIndex) or retrieving information about index
	fields (CDaoTableDef::GetIndexInfo). If you catch the exception to examine the
	error message you will see "No error message is available".
	
	CAUSE
	=====
	
	Apps compiled with Visual C++ 4.2 should use DAO 3.0. DAO 3.0 GUIDs were
	redefined (in DBDAOID.H) after DAO 3.5 was released and MFC DAO source was not
	modified to use the new definitions.
	
	There are two places where MFC DAO uses the wrong GUIDs.In DaoCore.cpp:
	
	1. Line 5527 inside AfxGetIndexFields(), IID_IDAOIndexFields is used instead of
	  IID30_IDAOIndexFields.
	
	2. Line 5580 inside AfxGetIndexFieldInfo(), IID_IDAOField is used instead of
	  IID30_IDAOFields.
	
	Any application that directly or indirectly calls these functions will fail.
	
	
	RESOLUTION
	==========
	
	There are three possible workarounds for this problem:
	
	- Recompile your application with Visual C++ 4.2 and statically link to MFC.
	
	  -or-
	
	- Recompile your application with Visual C++ 5.0.
	
	  -or-
	
	- Place the MFC 4.2 dll (from Visual C++ 4.2) inside your application's
	  directory so it will be used instead of the newer one.
	
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
	
	Following is an excerpt from DBDAOID.H included with Visual C++ 5.0:
	
	     //   The pre-3.5 GUIDs have been redefined with "30" added to the ID.
	     //      For example:
	     //   IID_IDAOIndex becomes IID30_IDAOIndex
	     // 
	
	This way both the 30 and 3.5 GUIDs can be used at once.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code will reproduce the error:
	
	     CString strFilename = _T("c:\\db1.mdb");
	
	     // Create a dao database
	
	     CDaoDatabase database;
	     database.Create(strFilename);
	
	     // Create "DEFAULT" table
	
	     CDaoTableDef tableDef(&database);
	     tableDef.Create(_T("DEFAULT"));
	
	     // Create a single field "IDENTIFIER"
	
	     CDaoFieldInfo fieldInfo;
	     fieldInfo.m_strName = _T("IDENTIFIER");
	     fieldInfo.m_nType = dbText;
	     fieldInfo.m_lSize = 255;
	     fieldInfo.m_lAttributes = 0;
	     fieldInfo.m_nOrdinalPosition = 0;
	     fieldInfo.m_bRequired = FALSE;
	     fieldInfo.m_bAllowZeroLength = FALSE;
	     fieldInfo.m_lCollatingOrder = 0;
	     tableDef.CreateField(fieldInfo);
	
	     // Create the primary key
	
	     CDaoIndexFieldInfo indexFieldInfo;
	     indexFieldInfo.m_strName = _T("IDENTIFIER");
	     indexFieldInfo.m_bDescending = FALSE;
	
	     CDaoIndexInfo indexInfo;
	     indexInfo.m_strName = _T("IDENTIFIER");
	     indexInfo.m_pFieldInfos = &indexFieldInfo;
	     indexInfo.m_nFields = 1;
	     indexInfo.m_bPrimary = TRUE;
	     indexInfo.m_bUnique = TRUE;
	     indexInfo.m_bClustered = FALSE;
	     indexInfo.m_bIgnoreNulls = FALSE;
	     indexInfo.m_bRequired = TRUE;
	     indexInfo.m_bForeign = TRUE;
	     indexInfo.m_lDistinctCount = 0;
	     tableDef.CreateIndex(indexInfo); // Generates exception
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbVC kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbVC500SP1 kbVC500Search
	Version           : WINDOWS NT:5.0sp1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
