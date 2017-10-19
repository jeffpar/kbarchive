---
layout: page
title: "Q125728: FIX: Problems Occur After Destroying Dockable CControlBar"
permalink: /kb/125/Q125728/
---

## Q125728: FIX: Problems Occur After Destroying Dockable CControlBar

	Article: Q125728
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbProgramming kbMFC KbUIDesign kbVC200bug kbVC210fix kbGrpDSMFCATL kbMFCCtrlBarkbbuglis
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Destroying a dockable CControlBar object may cause unexpected behavior. For
	example, an exception may be thrown that if not caught will generate a message
	box containing something similar to this:
	
	  
	
	 Unhandled Exception in myapp.exe (MFC30D.DLL):
	 0xC0000005: Access Violation.
	
	By using the debugger, you will likely see that this Access Violation has
	occurred in the function CObject::IsKindOf.
	
	CAUSE
	=====
	
	This problem occurs because of the way toolbars are handled by the framework.
	MFC implements a CDockBar object for use as the parent of dockable control bars.
	To arrange the control bars docked at the location it manages, this CDockBar
	object maintains a list of the CControlBar objects that it has as children.
	
	The CControlBar destructor does not remove the control bar from the CDockBar's
	list of control bars. Subsequent attempts by the CDockBar object to manipulate
	the pointer maintained in its list will cause unpredictable behavior such as an
	Access Violation.
	
	RESOLUTION
	==========
	
	To work around the problem, make sure that dockable toolbars are removed from
	their parent CDockBar objects before destroying them.
	
	To do this, call CDockBar::RemoveControlBar before destroying the ControlBar
	object. You will need to include the header file <afxpriv.h> to be able to
	call this function. For example:
	
	Change this:
	
	     #include "stdafx.h"
	     ...
	     ...
	     void SomeFunction()
	     {
	       delete pToolBar;
	     }
	
	To this:
	
	     #include "stdafx.h"
	     #include <afxpriv.h>
	     ...
	     ...
	     void SomeFunction()
	     {
	       if(pToolBar->m_pBar!=NULL)
	         pToolBar->m_pBar->RemoveControlBar(pToolBar);
	       delete pToolBar;
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 2.1 (MFC
	3.1).
	
	Additional query words: 3.00 toolbar CToolBar
	
	======================================================================
	Keywords          : kbProgramming kbMFC KbUIDesign kbVC200bug kbVC210fix kbGrpDSMFCATL kbMFCCtrlBar kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
