---
layout: page
title: "Q163252: FIX: Cannot Remove BS_PUSHLIKE in Resource Editor"
permalink: kb/163/Q163252/
---

## Q163252: FIX: Cannot Remove BS_PUSHLIKE in Resource Editor

	Article: Q163252
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10 4.20 5.00
	Operating System(s): 
	Keyword(s): kbcode kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Once you set the push-like (BS_PUSHLIKE) style for a radio button or check box
	and close the dialog editor window, you cannot remove the push-like style from
	the resource file.
	
	You can deselect this style in the button's properties, but this change does not
	hold and the push-like style remains set.
	
	RESOLUTION
	==========
	
	The only way to remove the BS_PUSHLIKE style once it has been set is by editing
	the .RC file in a text editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	MORE INFORMATION
	================
	
	Here is an example of a dialog resource with both a radio button and a check box
	with BS_PUSHLIKE:
	
	  IDD_DIALOG1 DIALOG DISCARDABLE  0, 0, 183, 92
	  STYLE DS_MODALFRAME | WS_POPUP | WS_CAPTION | WS_SYSMENU
	  CAPTION "Dialog"
	  FONT 8, "MS Sans Serif"
	  BEGIN
	      DEFPUSHBUTTON   "OK",IDOK,126,7,50,14
	      PUSHBUTTON      "Cancel",IDCANCEL,126,24,50,14
	      CONTROL         "Radio1",IDC_RADIO1,"Button",BS_AUTORADIOBUTTON |
	                      BS_PUSHLIKE,18,22,39,10
	      CONTROL         "Check1",IDC_CHECK1,"Button",BS_AUTOCHECKBOX |
	                      BS_PUSHLIKE | WS_TABSTOP,19,49,41,10
	  END
	
	Here's the same dialog with the BS_PUSHLIKE style removed:
	
	  IDD_DIALOG1 DIALOG DISCARDABLE  0, 0, 183, 92
	  STYLE DS_MODALFRAME | WS_POPUP | WS_CAPTION | WS_SYSMENU
	  CAPTION "Dialog"
	  FONT 8, "MS Sans Serif"
	  BEGIN
	      DEFPUSHBUTTON   "OK",IDOK,126,7,50,14
	      PUSHBUTTON      "Cancel",IDCANCEL,126,24,50,14
	      CONTROL         "Radio1",IDC_RADIO1,"Button",BS_AUTORADIOBUTTON,
	                      18,22,39,10
	      CONTROL         "Check1",IDC_CHECK1,"Button",BS_AUTOCHECKBOX |
	                      WS_TABSTOP,19,49,41,10
	  END
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Kelly Marie
	Ward, Microsoft Corporation
	
	
	Additional query words: check box AppStudioIss
	
	======================================================================
	Keywords          : kbcode kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : 4.00 4.10 4.20 5.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
