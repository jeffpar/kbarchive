---
layout: page
title: "Q167692: FIX: Assertion Line 257 in File Dlgprop.cpp"
permalink: /kb/167/Q167692/
---

## Q167692: FIX: Assertion Line 257 in File Dlgprop.cpp

	Article: Q167692
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbDlg kbMFC KbUIDesign kbVC500bug kbVS97sp1fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you display a property sheet using MFC (with DIALOG-type templates for the
	property pages) on a Windows 95 machine with ComCtl32 version 4.00 and
	MFC42X.dll version 4.21.7022, assertions occur on line 257 of DlgProp.cpp. An
	assertion is generated for each page that is present on the property sheet.
	
	CAUSE
	=====
	
	This behavior is due to a bug in the code that checks whether the template is
	DIALOGEX type.
	
	RESOLUTION
	==========
	
	The assertion can be safely ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an Appwizard-generated application.
	
	2. Add code to display a Property Sheet with pages on it.
	
	3. Make sure the dialog templates for the pages are the DIALOG type.
	
	4. Compile the program and run it on a computer that has the versions of the
	  DLLs mentioned above in the SUMMARY section.
	
	5. Invoke the code to display the property sheet.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Sridhar S.
	Madhugiri, Microsoft Corporation
	
	
	Additional query words: assert property page sheet
	
	======================================================================
	Keywords          : kbDlg kbMFC KbUIDesign kbVC500bug kbVS97sp1fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
