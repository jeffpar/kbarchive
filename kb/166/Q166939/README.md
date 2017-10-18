---
layout: page
title: "Q166939: BUG: CRecordset::Update Fails After Upgrading"
permalink: kb/166/Q166939/
---

## Q166939: BUG: CRecordset::Update Fails After Upgrading

	Article: Q166939
	Product(s): Microsoft C Compiler
	Version(s): 4.2 4.2b 5.0
	Operating System(s): 
	Keyword(s): kbVC500bugkbbuglist
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you recompile it with Visual C++ 4.2 or Visual C++ 5.0, an MFC/ODBC
	application built with Visual C++ 4.0 or 4.1 begins to fail in
	CRecordset::Update.
	
	CAUSE
	=====
	
	MFC 4.2 removes the "FOR UPDATE OF" clause from SELECT statements generated for
	all CRecordset objects.
	
	Some ODBC drivers depend on this syntax and will fail to process the SQL when it
	is not found.
	
	RESOLUTION
	==========
	
	A member variable CDatabase::m_bAddForUpdate was added in MFC 4.2 to internally
	control the inclusion of the "FOR UPDATE" clause.
	
	Setting this variable to TRUE before opening the recordset will cause "FOR
	UPDATE" to be appended to the generated SQL statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	CDatabase::m_bAddForUpdate is an undocumented member of CDatabase and as such is
	not guaranteed to have the same use or even exist in future versions of MFC.
	
	It is offered for use in this article as a workaround only for this current
	problem.
	
	This problem is not believed to affect many ODBC drivers.
	
	Additional query words: kbvc420bug kbvc500bug kbmfc kbdatabase kbodbc
	
	======================================================================
	Keywords          : kbVC500bug kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC32bitSearch kbVC420b kbVC500Search
	Version           : 4.2 4.2b 5.0
	Issue type        : kbbug
	
	=============================================================================
	
