---
layout: page
title: "Q138971: BUG: Default Dialog-Based Application Doesn't Work in Win32s"
permalink: /kb/138/Q138971/
---

## Q138971: BUG: Default Dialog-Based Application Doesn't Work in Win32s

	Article: Q138971
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbprogramming kbui kbnokeyword kbwizard kbMFC kbVC kbVC400bug kbVC410bug kbOSWin32s kbG
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A dialog-based application generated using AppWizard will not run properly under
	Win32s.
	
	CAUSE
	=====
	
	When AppWizard generates a dialog-based application, it uses a DIALOGEX resource
	for the main dialog. Win32s, however, does not support DIALOGEX resources. As a
	result, the dialog box looks incorrect on Win32s. This problem is documented in
	the Vcread.wri file that ships with Visual C++ version 4.0 and 4.1.
	
	RESOLUTION
	==========
	
	To get your dialog-based application working in Win32s, you must change the
	DIALOGEX resource to a DIALOG resource, and remove the WS_EX_APPWINDOW style.
	This can be done as follows:
	
	1. Open the .rc file as a text file
	
	2. Search for the DIALOGEX statement and change DIALOGEX to DIALOG.
	
	3. Remove the line containing the extended style WS_EX_APPWINDOW for this dialog
	  box.
	
	4. In OnInitDialog() for the main dialog, add the extended style by adding the
	  following line: "
	
	     ModifyStyleEx(0, WS_EX_APPWINDOW);
	
	  " (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as soon as it becomes
	available.
	
	Visual C++ versions 4.2 and later do not support building Win32s applications.
	
	MORE INFORMATION
	================
	
	The following is from the .rc file for a dialog-based application:
	
	     ...
	     IDD_DIALOGBASED_DIALOG DIALOGEX  0, 0, 185, 92
	     STYLE DS_MODALFRAME | WS_POPUP | WS_VISIBLE | WS_CAPTION
	     | WS_SYSMENU
	     EXSTYLE WS_EX_APPWINDOW
	     ...
	
	After the changes, these lines should look like this:
	
	     ...
	     IDD_DIALOGBASED_DIALOG DIALOG  0, 0, 185, 92
	     STYLE DS_MODALFRAME | WS_POPUP | WS_VISIBLE | WS_CAPTION
	     | WS_SYSMENU
	     ...
	
	REFERENCES
	==========
	
	Visual C++ version 4.0 Vcread.wri file.
	
	Additional query words: CDialog
	
	======================================================================
	Keywords          : kbprogramming kbui kbnokeyword kbwizard kbMFC kbVC kbVC400bug kbVC410bug kbOSWin32s kbGrpDSMFCATL kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	
	=============================================================================
	
