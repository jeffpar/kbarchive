---
layout: page
title: "Q240397: INFO: Adding a VCCE ActiveX Control to a VBCE Form"
permalink: /kb/240/Q240397/
---

## Q240397: INFO: Adding a VCCE ActiveX Control to a VBCE Form

{% raw %}

	Article: Q240397
	Product(s): Microsoft C Compiler
	Version(s): 1.0,3.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrlCreate kbOSWinCEsearch kbGrpDSMFCATL
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0, used with:
	   - The Microsoft Active Template Library (ATL) 3.0 
	   - The Microsoft Foundation Classes (MFC) 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Following is the two-step process used to add a Windows CE Toolkit for Visual
	C++ (VCCE) control to a Windows CE Toolkit for Visual Basic (VBCE) form:
	
	1. The VCCE control needs to converted into a desktop/Win32 version of the
	  control.
	
	2. The control needs to be registered and marked as usable in Windows CE using
	  the Control Manager utility.
	
	MORE INFORMATION
	================
	
	Here are some common problems faced by Windows CE developers when trying to add
	an ActiveX Control written using VCCE to a VBCE form:
	
	1. After building and registering a Windows CE ActiveX control, there is no way
	  to insert it onto a dialog box in the Resource Editor. In VCCE, the control
	  does not appear in the Insert ActiveX Control dialog box. The control also
	  does not appear in the list of controls in the "Components and Controls
	  Gallery." In VBCE, the control does not appear in the list of components to
	  be inserted on the form.
	
	The problem is that the Resource Editor and the Components and Controls Gallery
	can only recognize desktop ActiveX controls. This problem is addressed in the
	following Knowledge Base article:
	
	  Q229579 PRB: CE ActiveX Control Is Not in List of Insertable Controls
	
	2. After converting the Windows CE control to a desktop/Win32 version of the
	  control, and when trying to add the control to a VBCE form, you receive the
	  following error:
	
	  The Control you have selected is not marked usable in a Windows CE Project.
	
	  After converting the Windows CE control to a desktop/Win32 version, the
	  control is usable in a Windows CE MFC or Windows CE ATL container. But the
	  error message mentioned above prevents the control from being added to a VBCE
	  form. To work around this problem, the Control Manager Utility should be used
	  to register the control for Emulation or Device. Control Manager is shipped
	  with the Windows CE Toolkit for Visual Basic 6.0 and can be accessed from the
	  Windows CE menu option in Visual Basic or from the Start menu choose
	  Programs, then select Microsoft Visual Studio 6.0, and CE Toolkit for Visual
	  Basic 6.0.
	
	  To add the control to a VBCE form, using the Control Manager tool, the control
	  must be marked usable for Desktop Design and Emulation and/or Device.
	
	REFERENCES
	==========
	
	Under MSDN lookup:
	
	Windows CE Toolkit for Visual C++, Version 6.0 Release Notes
	
	Windows CE Toolkit for Visual Basic 6.0 Release Notes
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand Rajpathak, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrlCreate kbOSWinCEsearch kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch
	Version           : :1.0,3.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
