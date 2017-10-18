---
layout: page
title: "Q234664: BUG: Containers Show &lt;Unknown Verb&gt; for MFC Static OCXs"
permalink: kb/234/Q234664/
---

## Q234664: BUG: Containers Show &lt;Unknown Verb&gt; for MFC Static OCXs

	Article: Q234664
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbContainer kbCtrl kbCtrlCreate kbMFC kbVC600bug kbGrpDSMFCATL
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an ActiveX control linked to an MFC static library is placed in a test
	container, the Edit/ActiveX control object menu item shows <unknown verb>
	menu items instead of names of verbs available on the object, such as edit &
	properties.
	
	When the same control is placed on a dialog in Visual C++ resource editor, the
	context menu shows <unknown verb> menu items under ActiveXcontrol object
	sub menu.
	
	When the same control is placed on a Visual Basic form, the context menu shows
	<unknown verb> menu items.
	
	CAUSE
	=====
	
	String resources for these verbs are defined in Afxctl.rc. This file is not
	included in an ActiveX control project by default. When project settings are
	changed to link to MFC static library, this file should be included in the
	project by Visual C++ IDE.
	
	RESOLUTION
	==========
	
	- Open an ActiveX control project in IDE.
	
	- Select the view/resource includes menu item.
	
	- Add #include <afxctl.rc> statement in compile-time directives list.
	
	- Ignore the warning you receive when you click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ActiveX control project using AppWizard and selecting Available in
	  Insert Object dialog in step 2.
	
	2. Select Project/Settings.
	
	3. Change Use MFC in shared DLL to Use MFC in static library.
	
	4. Insert the control in the test container.
	
	5. Select Edit/ActiveX control object to see <unknown verb> entries.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbContainer kbCtrl kbCtrlCreate kbMFC kbVC600bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
