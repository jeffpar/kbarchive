---
layout: page
title: "Q149982: BUG: GetDlgItem() Returns NULL Under Win32s"
permalink: /kb/149/Q149982/
---

## Q149982: BUG: GetDlgItem() Returns NULL Under Win32s

{% raw %}

	Article: Q149982
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbprogramming kbDlg kbMFC KbUIDesign kbVC kbVC400bug kbVC410bug kbOSWin32s kbGrpDSMFCAT
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling GetDlgItem() to get the CWnd pointer of a control in a dialog can fail
	and return NULL under Win32s. DoDataExchange(), which calls DDX functions, also
	ends up calling GetDlgItem(). This can result in an assert in Dlgdata.cpp, line
	43.
	
	CAUSE
	=====
	
	This is caused by having extended styles in any of the controls in the dialog.
	Any extended style converts the dialog resource to a DIALOGEX resource. Win32s
	does not support DIALOGEX resources. None of the controls in the dialog are be
	created and the dialog does not display correctly. For details on how to replace
	the DIALOGEX style, please see the "More Information" section of this article.
	
	RESOLUTION
	==========
	
	Remove all extended styles in all the controls in the dialog resource.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching the problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Visual C++ versions 4.2 and later do not support building Win32s applications.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q138971 BUG: Default Dialog-Based Application Doesn't Work in Win32s
	
	Additional query words: Dialog based hangs
	
	======================================================================
	Keywords          : kbprogramming kbDlg kbMFC KbUIDesign kbVC kbVC400bug kbVC410bug kbOSWin32s kbGrpDSMFCATL kbbuglist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
