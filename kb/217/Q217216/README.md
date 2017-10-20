---
layout: page
title: "Q217216: FIX: Assertion Or Failure With CDaoDatabase::CreateRelation Meth"
permalink: /kb/217/Q217216/
---

## Q217216: FIX: Assertion Or Failure With CDaoDatabase::CreateRelation Meth

{% raw %}

	Article: Q217216
	Product(s): Microsoft C Compiler
	Version(s): 6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): kbservicepack kbDAOsearch kbMDAC kbVC kbVS600sp2 kbVS600SP1 kbVS600sp3 kbVS600sp3fix kb
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A GPF or assertion occurs when using CDaoDatabase::CreateRelation method against
	Access 2000 database with Visual C++ version 6.0.
	
	CAUSE
	=====
	
	Microsoft confirms that this behavior is due to a bug in the
	CDaoDatabase::CreateRelation() method in DAO 3.6. The implementation of this
	method can be found in Daocore.cpp.
	
	In the CDaoDatabase::CreateRelation() method, a DAOFields pointer and a DAOField
	pointer is declared. In addition, the DAOFields collection is looped through,
	and the DAOField pointer is used to access a field in the DAOFields collection,
	and then release is called. At the end of the method, the following check is
	implemented:
	
	  if (pDAOField != NULL)
	  	    pDAOField->Release();
	
	Since pDAOField was used as a temporary it is not set to NULL. As a result, the
	Release() call draws an assertion in the DAO360.DLL implementation of Release()
	stating that Release() was called too many times. Consequently, Release() cannot
	set the pointer (pDAOField) that referenced it to NULL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	Visual Studio 6.0 Service Pack 3 included the DAO 3.60 bits as part of the MDAC
	2.1 SP1 stack, which fixes this error.
	
	MORE INFORMATION
	================
	
	To compile with the MFC run time version of 0x0601 and load DAO 3.60, reference
	the following article in the Microsoft Knowledge Base:
	
	  Q236991 PRB: Unrecognized Database Format Error with Access 2000 Database
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbDAOsearch kbMDAC kbVC kbVS600sp2 kbVS600SP1 kbVS600sp3 kbVS600sp3fix kbGrpDSVCDB _IK kbMDACNoSweep 
	Component         : dao
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0,6.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
