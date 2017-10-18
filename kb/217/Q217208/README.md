---
layout: page
title: "Q217208: FIX: CMenu::GetMenuString Truncates Strings Longer Than 256 Char"
permalink: kb/217/Q217208/
---

## Q217208: FIX: CMenu::GetMenuString Truncates Strings Longer Than 256 Char

	Article: Q217208
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC600bug kbVS600sp3fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CMenu::GetMenuString truncates menu strings longer than 256 characters. This
	problem is most commonly seen when retrieving a file name from the "most
	recently used" list on the File menu. These file names are occasionally longer
	than 256 characters.
	
	CAUSE
	=====
	
	The CMenu member function int CMenu::GetMenuString(UINT nIDItem, CString&
	rString, UINT nFlags) const, hard codes the maximum length for a retrieved menu
	string at 256 characters. See VC98\MFC\Include\Afxwin.h, line 1043.
	
	RESOLUTION
	==========
	
	To work around this problem, use the LPTSTR version of this function; for
	example, int CMenu::GetMenuString(UINT nIDItem, LPTSTR lpString, int nMaxCount,
	UINT nFlags) const.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use CMenu::AppendMenu(UINT nFlags, UINT nIDNewItem, LPCTSTR lpszNewItem) to
	  append a menu item longer than 256 characters in length.
	
	2. Retrieve the menu item using CMenu::GetMenuString(UINT nIDItem, CString&
	  rString, UINT nFlags).
	
	RESULTS: Note that the string is truncated to a length of 255 characters.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC600bug kbVS600sp3fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
