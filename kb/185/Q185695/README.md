---
layout: page
title: "Q185695: HOWTO: Renaming an ActiveX Control After its Project Is Created"
permalink: kb/185/Q185695/
---

## Q185695: HOWTO: Renaming an ActiveX Control After its Project Is Created

	Article: Q185695
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbActiveX kbCtrl kbMFC kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use ControlWizard to generate an MFC ActiveX control, the registered name
	of the control is usually the same as its project name. For instance, if the
	control's project name is "BABY," then the ActiveX control is named as "BABY
	Control" in the Insert ActiveX Control dialog box of any Visual C++
	application.
	
	However, Visual Basic shows the control's module name instead in its Components
	dialog box.
	
	This article shows you a way to change the control's registered name and module
	name after the control's project has been created.
	
	MORE INFORMATION
	================
	
	The registered name may be found from a string resource in the .rc file of the
	control's project. The string resource always starts with IDS_XXX where XXX is
	the name of the control's project. If the project name is "BABY," then the
	following can be found in the string's table of the control's project:
	
	  IDS_BABY               "BABY Control"
	
	Set a new control name to the IDS_XXX string resource and rebuild the control's
	project. The control is shown in its new name in the Insert ActiveX Control
	dialog box.
	
	The control's module name is defined at the first helpstring in the .odl file of
	the control's project file. The following is found from the .odl file of the
	BABY's project:
	
	  helpstring("BABY ActiveX Control module")
	
	Set a new module name to the helpstring above and rebuild the control's project.
	The control's new module name is shown in Visual Basic's Components dialog box.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Yeong- Kah
	Tam, Microsoft Corporation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbActiveX kbCtrl kbMFC kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
