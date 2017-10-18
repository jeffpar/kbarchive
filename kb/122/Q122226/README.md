---
layout: page
title: "Q122226: HOWTO: Change the Method of Selecting Multiple Controls"
permalink: kb/122/Q122226/
---

## Q122226: HOWTO: Change the Method of Selecting Multiple Controls

	Article: Q122226
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool _IK920 kbVC kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Dialog Editor, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The dialog editor in the Visual C++ development environment selects multiple
	controls only if they are completely enclosed in the selection box. You can
	modify this behavior to include controls partially outside the selection box.
	
	MORE INFORMATION
	================
	
	To change the selection method in the dialog editor, modify the Windows NT
	registry using Regedt32.exe or Regedit.exe. (There is no user interface option
	for this feature in the development environment.) First close Visual C++. Then
	use Regedt32.exe or Regedit.exe to select the Dialog Editor key.
	
	For Visual C++, version 2.0, this key can be found as follows:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Visual C++ 2.0\Dialog Editor
	
	For Visual C++, version 4.0, the Dialog Editor key can be found as follows:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Developer\Dialog Editor
	
	For Visual C++, version 5.0, the Dialog Editor key can be found as follows:
	
	  HKEY_CURRENT_USER\Software\Microsoft\DevStudio\5.0\DialogEditor
	
	For Visual C++, version 6.0, the Dialog Editor key can be found as follows:
	
	  HKEY_CURRENT_USER\Software\Microsoft\DevStudio\6.0\DialogEditor
	
	Modify the value of NetSelectAll from 0 to 1 to enable selection of the partially
	covered controls.
	
	REFERENCES
	==========
	
	For more information about the Dialog editor and selecting controls, see the
	"Using the Dialog Editor" chapter, or search for "Dialog editor", in the Visual
	C++ Books Online. In Visual C++, versions 5.0 and later, use the Index to search
	for "Dialog editor". Note that the feature described in this article is not
	mentioned in the documentation.
	
	Additional query words: selection controls
	
	======================================================================
	Keywords          : kbtool _IK920 kbVC kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbZNotKeyword6 kbDialogEd
	Version           : :2.0,2.1,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
