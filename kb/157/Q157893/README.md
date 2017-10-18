---
layout: page
title: "Q157893: FIX: Closing an ActiveX Control Project Crashes DevStudio"
permalink: kb/157/Q157893/
---

## Q157893: FIX: Closing an ActiveX Control Project Crashes DevStudio

	Article: Q157893
	Product(s): Microsoft C Compiler
	Version(s): 4.20
	Operating System(s): 
	Keyword(s): kbole kbCtrl _IK920 kbVC kbVC420bug kbGrpDSToolskbbuglist kbfixlist
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening or closing a project in Developer Studio, you may see an access
	violation with the following error message:
	
	  
	
	  [ASCII 147]MSDEV CAUSED AN INVALID PAGE FAULT IN MODULE
	    MSVCRES.DLL at   0137:503126ba.[ASCII 148]
	
	This behavior occurs if the Properties window for a ControlWizard- generated
	ActiveX Control is invoked in the dialog editor.
	
	CAUSE
	=====
	
	This is due to a bug in the MFC 4.2 libraries.
	
	RESOLUTION
	==========
	
	To obtain this patch, please refer to the following article in the Microsoft
	Knowledge Base:
	
	  Q156934 Visual C++ 4.2b Patch
	
	The problem occurs because IOleObject::SetClientSite(NULL) does not release its
	existing pointer to ambient property interface. For example,
	COleControl::XOleObject::SetClientSite(NULL) doesn[ASCII 146]t call
	pThis->m_ambientDispDriver.ReleaseDispatch();.
	
	The problem was fixed by adding the following line to
	COleControl::XOleObject::SetClientSite in the MFC source code:
	
	     // Release existing pointer to ambient property dispinterface.
	     pThis->m_ambientDispDriver.ReleaseDispatch();
	     if (pClientSite != NULL)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.2B patch.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new ActiveX Control using Control Wizard, and then build the control
	  to register it.
	
	2. Create a new MFC Control Container application, and insert this OLE control
	  into the About box.
	
	3. Double-click on the control to bring up the Properties window. Click on any
	  tab of the Properties window.
	
	4. Close the project workspace, open a new project workspace, or close Developer
	  Studio. Note that Developer Studio crashes with a page fault message.
	
	If you have an existing project that has a Control Wizard-generated control built
	with Visual C++ 4.2 in a dialog resource, click on the [ASCII 147]Control[ASCII
	148] tab in the Properties window for the control, and then close the project,
	open a new project, or close Developer Studio.
	
	Additional query words: 4.20 vcfixlist420 kbdsi
	
	======================================================================
	Keywords          : kbole kbCtrl _IK920 kbVC kbVC420bug kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.20
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
