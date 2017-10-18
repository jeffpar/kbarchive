---
layout: page
title: "Q228530: BUG: Crash in Ole32.dll When Creating an ATL Composite Control"
permalink: kb/228/Q228530/
---

## Q228530: BUG: Crash in Ole32.dll When Creating an ATL Composite Control

	Article: Q228530
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbpatch kbActiveX kbATL kbCOMt kbContainer kbCtrl kbCtrlCreate kbInprocSvr kbLic
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an ATL Composite control with other ActiveX controls embedded in
	it, you may get an access violation in Ole32.dll. Usually, a message box is
	displayed with the following error message:
	
	  Unhandled exception in EXENAME.EXE(OLE32.DLL): 0xC0000005: Access Violation"
	  is displayed.
	
	You may also see a Web Browser control displayed with the following message,
	instead of the child ActiveX control:
	
	  This page cannot be displayed.
	
	Usually, these controls work correctly on computers with Visual C++ installed,
	but do not work on computers without Visual C++ installed.
	
	CAUSE
	=====
	
	The ActiveX controls embedded in the Composite control may be licensed controls.
	Composite controls and ATL containment do not directly support creation of
	licensed controls.
	
	When the Composite control attempts to create a licensed control on a computer
	without providing a run-time license, the Composite control fails with an
	HRESULT of 0x80040112 (CLASS_E_NOTLICENSED - Class is not licensed for use). The
	default handling of this failure creates a Web Browser control; the default
	handling also tries to initialize the Web Browser control with persisted
	properties of the licensed control. This mismatch of properties may result in an
	access violation in the Ole32.dll file.
	
	If there is no access violation, the Web Browser control attempts to navigate to
	a URL that is the string representation of the licensed control's CLSID. This
	action results in the error message "The page cannot be displayed."
	
	RESOLUTION
	==========
	
	Download the Atlhostlic.h file (contained in ATLHostLic.exe and a modified
	version of the Atlhost.h file), which allows licensed controls inserted on
	Composite controls to work correctly. Copy this file to your project directory
	and change all #include statements that reference the original Atlhost.h file to
	reference the Atlhostlic.h file.
	
	Note that this solution works only for debug and minimum-dependency builds. All
	changes from the original Althost.h file are marked with the comments "BEGIN
	CHANGE" and "END CHANGE".
	
	This solution may not work when creating ActiveX controls dynamically by using
	the Win32 CreateWindow function with the control properties passed in as the
	last parameter.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q218442 HOWTO: Dynamically Add ActiveX Controls to ATL Composite Control
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ATLHostLic.exe
	
	Release Date: Apr. 13, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ATL DLL project and insert a Composite control object in the
	  project.
	
	2. In the Composite control dialog box, insert the Microsoft TreeView Control.
	
	3. Build and test the control on any container.
	
	4. Test the control on a computer without Visual C++ installed and you should
	  see the error described in the "Symptoms" section.
	
	Additional query words: C0000005 ATLHostLic proxy error 11004 80040112 "no data record is available" kbATL 0x80040112 0xC0000005 license host atlhost.h hosting
	
	======================================================================
	Keywords          : kbfile kbpatch kbActiveX kbATL kbCOMt kbContainer kbCtrl kbCtrlCreate kbInprocSvr kbLicensing kbVC600bug kbVS600bug kbATL300bug kbDSupport kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
