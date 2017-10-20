---
layout: page
title: "Q239916: FIX: ATL ActiveX Fails on Win95 when Hosting ActiveX Controls"
permalink: /kb/239/Q239916/
---

## Q239916: FIX: ATL ActiveX Fails on Win95 when Hosting ActiveX Controls

{% raw %}

	Article: Q239916
	Product(s): Microsoft C Compiler
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbContainer kbCtrlCreate kbDCOM kbDlg kbLicensing kbVC600bug kbOSWin95
	Last Modified: 02-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Windows 95 without DCOM installed, an ATL AppWizard generated
	composite control will not create properly if it hosts any ActiveX controls
	whether they are licensed or unlicensed.
	
	CAUSE
	=====
	
	When ATL calls CoCreateInstance to create the contained controls it uses
	CLSCTX_SERVER for the context parameter. CLSCTX_SERVER is a combination of
	CLSCTX_INPROC_SERVER, CLSCTX_LOCAL_SERVER and CLSCTX_REMOTE_SERVER.
	CoCreateInstance will look at CLSCTX_REMOTE_SERVER first because this is not
	valid on Windows 95 without DCOM; it will cause the creation of the contained
	control to fail. This will ultimately cause the composite control to fail during
	creation also.
	
	RESOLUTION
	==========
	
	Following are three workarounds for this situation.
	
	1. Open ATLHost.h from the \atl\include directory:
	
	  a. Find the function CreateNormalizedObject in Atlhost.h.
	
	  b. In CreateNormalizedObject, find the calls to CoCreateInstance on lines 28,
	     43 and 49. Change the parameter CLSCTX_SERVER to CLSCTX_INPROC_SERVER.
	
	  c. Save the modified ATLHost.h file.
	
	  d. Rebuild the project.
	
	2. Comment out the following lines in Stdafx.h:
	
	  /*  comment this block of code out if you intend to run without DCOM!
	  #define STRICT
	  #ifndef _WIN32_WINNT
	  #define _WIN32_WINNT 0x0400
	  #endif
	  */ 
	
	3. Install DCOM for Windows 95. You can get it from the following Web site:
	  Windows Update Site. You could also install Internet Explorer 4 or higher as
	  it will install DCOM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ATL composite control.
	
	2. Place an ActiveX control on the composite control using the resource editor;
	  for instance, use Microsoft Calendar control.
	
	3. Build the project using the Release MinDependency build configuration to
	  limit redistribution components needed on target computers.
	
	4. Create an MFC Dialog-based application and accept all of the defaults.
	
	5. Add the ATL composite control to the dialog using the resource editor.
	
	6. Link to MFC statically by going to Projects, Settings, and then click the
	  General tab. This will again limit redistribution components needed on target
	  computers.
	
	7. Build the MFC project.
	
	8. Install the MFC application on Windows 95 without DCOM installed.
	
	9. Register the control on the computer with Windows 95.
	
	10. Attempt to run the MFC application.
	
	You should get a failure to show the dialog on the computer with Windows 95.
	
	Additional query words: Regsvr32.exe host composite fail ATLHOST
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbContainer kbCtrlCreate kbDCOM kbDlg kbLicensing kbVC600bug kbOSWin95 kbATL300bug kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
