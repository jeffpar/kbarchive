---
layout: page
title: "Q138564: PRB: Windows 95 Common Controls Not Supported by Ctl3d32.dll"
permalink: kb/138/Q138564/
---

## Q138564: PRB: Windows 95 Common Controls Not Supported by Ctl3d32.dll

	Article: Q138564
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprb
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.2, 4.0 
	   - Win32s version 1.30 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows 95 common controls can be used under Win32s version 1.3 and Windows
	NT version 3.51. However, these controls will not appear in 3D if 3D controls
	are enabled under Windows NT version 3.51 and Win32s version 1.3. These controls
	will show up in 3D if 3D controls are enabled under Windows 95 only.
	
	CAUSE
	=====
	
	The 3D look of standard controls under Windows NT 3.51 and Win32s version 1.3 is
	provided by Ctl3d32.dll. Ctl3d32.dll does not support 3D effects for any of the
	Windows 95 common controls. These controls show up as 3D under Windows 95
	because the drawing for these controls is handled by User32.dll under Windows
	95.
	
	RESOLUTION
	==========
	
	To give Windows 95 common controls a 3D look under Windows NT 3.51 and Win32s
	version 1.3 in an MFC application, perform these steps:
	
	1. In your override of CWinApp::InitInstance, call Enable3dControls(). This will
	  initialize the Ctl3d32.dll file.
	
	2. For each control you want to have the 3D effect, call the CWnd member
	  function SubclassCtl3d, and pass a parameter of 1 for the nControlType
	  parameter (the only parameter this function takes). Call this function before
	  the control is displayed -- for a CDialog object this would be in the
	  OnInitDialog function; for a CFormView, this would be in the OnInitialUpdate;
	  and for any other window, this should be done right after the control is
	  created.
	
	To perform step 2, you need to have a member variable that is associated with the
	control, or you need to get a CWnd pointer (*) that is associated with the
	control. The Sample code at the end of this article shows both techniques.
	
	NOTE: If you plan to use this approach, you need to have the proper version of
	Ctl3d32.dll on your system. This DLL should reside in the <Windows NT
	Dir>\System32 directory for 32-bit systems or in the <Windows
	Dir>\System directory for 16-bit systems using Win32s. The version of the DLL
	you must use is 2.29.00 or later.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Calling Enable3dControls in your override of CWinApp::InitInstance will load and
	initialize Ctl3d32.dll. If you call the CWnd member function Subclass3dCtl and
	pass a parameter of 1 for the following controls, they will appear with a 3D
	looking border around them in your application:
	
	  Progress Control
	  TreeView Control
	  ListView Control
	  Slider Control
	  Tab Control
	  Animate Control
	  Spin Control
	
	Calling Subclass3dCtl will call the Ctl3d32.dll function Ctl3dSubclassCtlEx and
	pass it the HWND of your control and the value of 1 for the ControlID. The valid
	control IDs that can be used with Ctl3d32.dll are listed in the header file
	Ctl3d.h under the heading:
	
	     /* Ctl3d Control ID*/ 
	
	The value 1 corresponds to a list box control, so actually what you are telling
	Ctl3d32.dll is that you are subclassing a list box control. Because the DLL only
	handles the painting of the border of the control, this method should work with
	the previously listed controls.
	
	Please note that this is a workaround to the problem that Ctl3d32.dll does not
	support Winodws 95 common controls, it is not a limitation of the Win32s or the
	Windows NT 3.51 operating systems because they are not inherently 3D. (Any 3D
	support found in these operating systems is provided by another support such as
	Ctl3d32.dll.) Ctl3d32.dll is designed to give a 3D look only to the controls
	listed in the /* Ctl3d Control ID*/ section of Ctl3d.h. If you choose to use
	this workaround, you should test your programs thoroughly. Furthermore, there is
	no guarantee that Ctl3d32.dll would support this capability in future releases.
	
	Sample Code
	-----------
	
	  // This code shows how to give Windows 95 common controls a 3D look
	  // in an MFC application.
	
	  // Initialize Ctl3d32.dll as shown below. A default
	  // AppWizard-generated application will already have this code:
	
	  CMyApp::InitInstance()
	  {
	    Enable3dControls();
	    ...
	  }
	
	  // If you have a member variable associated with the control,
	  // use code similar to the following in your OnInitDialog or your
	  // OnInitialUpdate function.
	
	     m_Progress.SubclassCtl3d(1);
	
	  // If you do not have a variable associated with the control,
	  // then you can use GetDlgItem to obtain one, for example:
	
	     GetDlgItem(IDC_PROGRESS1)->SubclassCtl3d(1);
	
	REFERENCES
	==========
	
	For more information, please see the article "Adding 3-D Effects to Controls" by
	Wes Cherry and Kyle Marsh. This article can be found on the MSDN July 1995
	compact disc in the following place:
	
	  Technical Articles
	     Windows Articles
	        User Interface Articles
	           Windows(16-bit)Only
	
	This article discusses the implementation of earlier versions of Ctl3d32.dll.
	
	Additional query words: 2.20 3.2 3.20 4.00
	
	======================================================================
	Keywords          : kbprb 
	Technology        : kbAudDeveloper kbMFC
	Issue type        : kbprb
	
	=============================================================================
	
