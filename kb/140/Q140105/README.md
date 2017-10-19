---
layout: page
title: "Q140105: PRB: Assertion While Switching Property Pages in OLE Control"
permalink: /kb/140/Q140105/
---

## Q140105: PRB: Assertion While Switching Property Pages in OLE Control

	Article: Q140105
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrlCreate kbMFC kbPropSheet kbVC200 kbVC210 kbVC220 kbVC400 kbGrpDS
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have implemented an OLE control that uses a basic MFC CPropertySheet as a
	user interface, you may receive the following error when trying to switch pages
	by clicking the tab:
	
	  Assertion Failed
	  OC30D.DLL: File DlgCore.CPP Line 194
	
	CAUSE
	=====
	
	This assertion occurs in _AfxCheckDialogTemplate, when MFC cannot find the
	dialog template resource for the property page.
	
	RESOLUTION
	==========
	
	The solution is to override CPropertyPage::OnSetActive and use AFX_MANAGE_STATE
	as in the following code:
	
	Sample Code
	-----------
	
	     /* Compile options needed - none
	        Add the following code to each of your CPropertyPage-derived classes.
	     */ 
	     BOOL CYourPropPage::OnSetActive()
	     {
	       AFX_MANAGE_STATE(_afxModuleAddrThis);
	       return CPropertyPage::OnSetActive();
	     }
	
	The prototype for OnSetActive must also be added to your CPropertyPage- derived
	class header file.
	
	REFERENCES
	==========
	
	For information on AFX_MANAGE_STATE, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q127074 How to Use AFX_MANAGE_STATE in an OLE Control
	
	Additional query words: kbvc200 kbvc210 kbvc220 kbvc400 kbmfc
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrlCreate kbMFC kbPropSheet kbVC200 kbVC210 kbVC220 kbVC400 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0
	Issue type        : kbprb
	
	=============================================================================
	
