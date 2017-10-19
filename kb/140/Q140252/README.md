---
layout: page
title: "Q140252: PRB: ClassWizard Disables Add Function &amp; Add Variable Buttons"
permalink: /kb/140/Q140252/
---

## Q140252: PRB: ClassWizard Disables Add Function &amp; Add Variable Buttons

	Article: Q140252
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC kbSSafe400 kbVC400 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If either the header (.h) or implementation (.cpp) file for a class is a
	read-only file, the following buttons will be grayed out in ClassWizard:
	
	- Add Function button on the Message Map tab.
	
	- Add Variable button on Member Variables tab.
	
	- Add Method and Add Property buttons on the OLE Automation tab.
	
	- Add Event button on the OLE Event tab.
	
	In Visual C++, versions 5.0 and 6.0, the OLE Automation tab is named Automation,
	and OLE Event is now ActiveX Events. Also, the following additional buttons will
	be dimmed:
	
	- Delete Function button on the Message Map tab.
	
	- Delete Variable button on Member Variables tab.
	
	Having a project's .odl file tagged as read-only causes the same behavior, and
	having the .clw file tagged as read-only produces this message:
	
	  The ClassWizard database <path to the .clw file> is read-only.
	  ClassWizard cannot continue.
	
	CAUSE
	=====
	
	This is by design. ClassWizard checks the attributes of the header and
	implementation files for a class when a class is selected from the Class Name
	combo box. If either file is read-only, ClassWizard can't add a new method,
	function, or variable to the file, so the buttons are disabled.
	
	If the files are checked-in to a source management system such as Microsoft
	SourceSafe, they are read-only until they are checked out.
	
	RESOLUTION
	==========
	
	A simple workaround is to remove the read-only attribute from those files. If
	the files are under source management, checking the file out removes the
	read-only attribute as well.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbSSafe400 kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
