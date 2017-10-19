---
layout: page
title: "Q145687: DOC: CFileDialog Filter String Won't Work Under Windows 95"
permalink: /kb/145/Q145687/
---

## Q145687: DOC: CFileDialog Filter String Won't Work Under Windows 95

	Article: Q145687
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.2,4.0
	Operating System(s): 
	Keyword(s): kbdocfix kbnokeyword kbCmnDlgFileO kbMFC KbUIDesign kbVC220bug kbVC400bug kbVC410fix kb
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If sample code that lists an example filter string at the bottom of the
	CFileDialog::CFileDialog page in the Class Library Reference is used as a filter
	string with a CFileDialog, the filter string will not work properly on the
	Windows 95 Explorer-style common file dialog.
	
	MORE INFORMATION
	================
	
	The Explorer-style common dialog will not accept spaces around the '|' vertical
	bar characters used to separate elements of the filter string.
	
	The line of sample code should read:
	
	  static char BASED_CODE szFilter[] =
	      "Chart Files (*.xlc)|*.xlc|Worksheet Files(*.xls)|*.xls|
	      Data Files (*.xlc;*.xls)|*.xlc;*.xls|All Files (*.*)|*.*||";
	
	This documentation problem was fixed in Visual C++ 4.1.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words: 2.20 4.00 4.10 CFileDialog m_ofn lpszFilter
	
	======================================================================
	Keywords          : kbdocfix kbnokeyword kbCmnDlgFileO kbMFC KbUIDesign kbVC220bug kbVC400bug kbVC410fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.2,4.0
	Solution Type     : kbfix
	
	=============================================================================
	
