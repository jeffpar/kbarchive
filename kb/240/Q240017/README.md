---
layout: page
title: "Q240017: FIX: Selecting Multiple ResourceView Controls Causes VC to Fail"
permalink: kb/240/Q240017/
---

## Q240017: FIX: Selecting Multiple ResourceView Controls Causes VC to Fail

	Article: Q240017
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): _IK920 kbEditor kbide kbVC500 kbVC500bug kbVC600 kbVC600bug kbDSupport kbGrpDSTools kbN
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Selecting multiple controls in the ResourceView and changing their language will
	cause Visual C++ to crash.
	
	RESOLUTION
	==========
	
	Select the controls individually and change the language option one at a time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project called Test using the MFC(EXE) AppWizard. In Step 1 of the
	  MFC(EXE) AppWizard, select Multiple Documents and then click Finish.
	
	2. Click the ResourceView tab.
	
	3. Expand the Test Resources folder and then expand the Menu folder.
	
	4. Select IDR_MAINFRAME and IDR_TESTTYPE, then right-click and select Properties
	  from the pop-up menu.
	
	5. In the Multiple Selection Properties window, change the language using the
	  Language combo box. For example, if it is currently set to English (U.S.),
	  change it to English (U.K.). Visual C++ may crash when you try to change the
	  language.
	
	6. Press ENTER or select the Condition edit window, and Visual C++ will crash.
	
	Because of this crash, Visual C++ isn't removed from memory so you will have to
	end the Msdev.exe process using Task Manager or you will get error messages when
	you try to open the Test workspace in another instance of Visual C++.
	
	REFERENCES
	==========
	
	For more information on Visual C++ resource editors see the following topic in
	the MSDN Online Libraries:
	
	  Visual C++ Documentation; Using Visual C++; Visual C++ User's Guide; Resource
	  Editors
	  (http://msdn.microsoft.com/library/devprods/vs6/visualc/vcug/_asug_Home_Page.3a_.Resource_Editors.htm)
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK920 kbEditor kbide kbVC500 kbVC500bug kbVC600 kbVC600bug kbDSupport kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
