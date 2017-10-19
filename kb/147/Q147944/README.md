---
layout: page
title: "Q147944: FIX: Edit Control's Number Style Check Box Won't Stay Selected"
permalink: /kb/147/Q147944/
---

## Q147944: FIX: Edit Control's Number Style Check Box Won't Stay Selected

	Article: Q147944
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10 4.20
	Operating System(s): 
	Keyword(s): kbVC400bug kbVC410bug kbVC420bug kbVC600fix kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Edit controls that have previously been given the ES_NUMBER style do not have
	the corresponding Number check box selected under the style properties when they
	are loaded into the resource editor.
	
	CAUSE
	=====
	
	This is a display problem in the resource editor. Although the resouce editor
	shows the Number check box as clear, rebuilding the application or opening the
	.rc file in text mode will confirm that the ES_NUMBER style is still being
	applied to the edit control. However, if the dialog box containing the control
	is edited and saved, the ES_NUMBER property will no longer be applied to the
	edit control unless you again select the Number check box.
	
	RESOLUTION
	==========
	
	Select the Number check box for edit controls that should have the ES_NUMBER
	style each time you modify the dialog box containing the edit control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	MORE INFORMATION
	================
	
	The ES_NUMBER style first available in Windows 95 restricts input to the edit
	control to digits only. If an edit control has this style under Windows NT 3.51,
	you can still enter characters other than numbers. However, under Windows 95, an
	edit control with this style accepts digits only.
	
	REFERENCES
	==========
	
	For more information, please see the following sections in Visual C++ 4.0 Books
	Online:
	
	- "Win32 SDK: Win32, Overviews, Window Controls," Edit Control Styles.
	
	- "Win32 SDK: Win32, Reference, Functions," CreateWindow.
	
	- "Programming For The Windows 95 User Interface," Chapter 6, "The New Common
	  Dialog Boxes"
	
	Additional query words: kbVC400bug 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbVC400bug kbVC410bug kbVC420bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : 4.00 4.10 4.20
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
