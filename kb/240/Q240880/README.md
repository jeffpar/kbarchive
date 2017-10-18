---
layout: page
title: "Q240880: PRB: ActiveX Control Pack Unavailable for Download for VCCE 6.0"
permalink: kb/240/Q240880/
---

## Q240880: PRB: ActiveX Control Pack Unavailable for Download for VCCE 6.0

	Article: Q240880
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbActiveX kbCOMt kbCtrlCreate kbVC600 kbOSWinCEsearch kbCompGallery k
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Release Notes for the Windows CE Toolkit for Visual C++ version 6.0 include
	this passage:
	
	  ActiveX Controls Missing in Component Gallery
	
	  ActiveX controls in Windows CE are not available in the Component Gallery,
	  because the ActiveX Control Pack is not included in this release of the
	  Windows CE operating system.
	
	  See the Windows CE web page for an updated ActiveX Control Pack.
	
	However, the Windows CE Web page does not offer an ActiveX Control Pack to
	download.
	
	CAUSE
	=====
	
	No such download opportunity is provided because an ActiveX Control Pack is not
	available for Windows CE Toolkit for Visual C++ version 6.0 at this time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Workaround
	----------
	
	To work around this problem, you have these options:
	
	- Write the ActiveX controls yourself.
	
	- Windows CE Toolkit for Visual Basic 6.0 ships with some of the common Windows
	  CE ActiveX controls. You can install this Visual Basic CE Toolkit 6.0 to
	  register and use the controls.
	
	  Please note: even though most of the controls shipped with the Visual Basic CE
	  Toolkit 6.0 may work correctly under VCCE environment, these controls are
	  neither tested nor supported for a VCCE environment.
	
	- Register and use third-party ActiveX controls.
	
	- Using the source code for the controls that ship with source code, port the
	  Win32 ActiveX controls to Windows CE ActiveX controls.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual C++ 6.0 and Windows CE Toolkit for Visual C++ 6.0.
	
	2. Using the WCE MFC AppWizard (exe), create a default dialog-based application.
	
	3. Switch to the Resource View tab for the Project Workspace.
	
	4. Open the Dialog Resource and right-click on the dialog box to select ActiveX
	  controls.
	
	5. Note that no Windows CE ActiveX controls are available to be added to the
	  dialog resource.
	
	REFERENCES
	==========
	
	See the following MSDN documents:
	
	  Windows CE Toolkit for Visual C++, Version 6.0 Release Notes
	  (http://msdn.microsoft.com/library/wcedoc/vcce/rlnvcce6.htm)
	
	  Windows CE Toolkit for Visual Basic 6.0 Release Notes
	  (http://msdn.microsoft.com/library/wcedoc/vbce/readme.htm)
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand Rajpathak, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbActiveX kbCOMt kbCtrlCreate kbVC600 kbOSWinCEsearch kbCompGallery kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbWinCETK600VC
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
