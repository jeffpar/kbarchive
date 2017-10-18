---
layout: page
title: "Q167650: FIX: Problems with ToolTips on Windows 95"
permalink: kb/167/Q167650/
---

## Q167650: FIX: Problems with ToolTips on Windows 95

	Article: Q167650
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbMFC kbToolTip KbUIDesign kbVC500bug kbVS97sp1fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an MFC Application on Windows 95 with ComCtl32.dll version 4.00 and
	MFC42x.dll version 4.21.7022, the following behavior occurs.
	
	Debug version of the application:
	
	  Assertion on line 383 and/or 402 in Tooltip.cpp.
	  Tooltips are not displayed.
	
	Release version of the application:
	
	  Tooltips are not displayed.
	
	CAUSE
	=====
	
	MFC 4.21 uses a new version of CommCtrl.h (version 1.2) which has modified the
	TOOLINFO structure. When MFC tries to add a tool to the ToolTip using this new
	structure, the call fails.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Sridhar S.
	Madhugiri, Microsoft Corporation
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Sridhar S. Madhugiri, Microsoft Corporation
	
	
	Additional query words: tooltip assert
	
	======================================================================
	Keywords          : kbMFC kbToolTip KbUIDesign kbVC500bug kbVS97sp1fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
