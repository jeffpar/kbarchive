---
layout: page
title: "Q143408: FIX: Assertion Failure After Using CDaoWorkspace::Create()"
permalink: /kb/143/Q143408/
---

## Q143408: FIX: Assertion Failure After Using CDaoWorkspace::Create()

{% raw %}

	Article: Q143408
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1; :
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbVC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a CDaoWorkspace object after calling the CDaoWorkspace::Create() function
	may cause an assertion failure in Daocore.cpp line 651 inside the
	CDaoWorkspace::Open() function.
	
	CAUSE
	=====
	
	When a newly created CDaoWorkspace object is used for the first time, the
	CDaoWorkspace::Open() function is called. This function should only be called to
	retrieve either a named workspace or the default workspace from the workspaces
	collection.
	
	MFC relies on the value of the m_bOpen member variable to determine if the
	workspace object's Open() function needs to be called. This member variable is
	set to TRUE only inside the Open() and Append() member functions.
	
	RESOLUTION
	==========
	
	Call CDaoWorkspace::Append() before using a newly created workspace object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++, 32-bit
	Edition, version 4.2.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  CDaoWorkspace wsp;
	  wsp.Create(_T("NewWorkspace"), _T("admin"), _T(""));
	  // Call Append() to set the m_bOpen flag.
	  // This will also append the workspace to the engine's workspaces
	  // collection
	  wsp.Append();
	
	  CDaoDatabase db(&wsp);
	  db.Open(_T("c:\\path\\to\\mdbfile.mdb"), FALSE, FALSE, NULL);
	  ...
	
	Additional query words: kbVC400bug 4.00 4.10 vcfixlist420
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC kbVC410
	Version           : winnt:4.0,4.1; :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
