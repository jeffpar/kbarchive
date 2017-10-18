---
layout: page
title: "Q202591: FIX: Developer Studio Source and Dialog Editors Respond Slowly"
permalink: kb/202/Q202591/
---

## Q202591: FIX: Developer Studio Source and Dialog Editors Respond Slowly

	Article: Q202591
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): _IK920 kbwizard kbEditor kbide kbVC600bug kbDevStudio kbClassWizard kbGrpDSTools kbNoUp
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When editing source code or a dialog resource with the Visual C++ version 6.0
	source or resource editors, the user may experience a slowdown in performance.
	The resource editor shows a noticeable delay when tabbing between controls. In
	the source editor, the cursor seems to hesitate when passing through function
	definitions when using the arrow keys. In both instances the CPU usage is near
	or at 100%.
	
	CAUSE
	=====
	
	The Visual C++ IDE makes a large number of file accesses to the ClassWizard
	information file (Projectname.clw).
	
	RESOLUTION
	==========
	
	Invoke ClassWizard to regenerate the ClassWizard information file, then dismiss
	the ClassWizard dialog by clicking OK or Cancel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	This performance problem arises under very unique circumstances. Projects that
	exhibit the symptoms described above contain a large number of dialog resources,
	typically 200 or more. A test project which included 130 dialog resources was
	used in writing this article. Two additional events must occur for the symptoms
	to show themselves.
	
	1. First, associate a dialog resource to a new class using ClassWizard.
	
	2. Then, do either of the following:
	
	- Invoke the WizardBar (this happens automatically when navigating code or
	  resources).
	
	- On the Tools menu, click Customize, (dismiss the dialog box by clicking OK or
	  Cancel).
	
	NOTE: The order of events is not important. If the WizardBar has been invoked and
	then dismissed, the WizardBar engine will continue to run in the background. To
	disable the engine, close and restart Developer Studio after closing the
	WizardBar. To dismiss the WizardBar do the following:
	
	1. Click on empty space in the Developer Studio window.
	
	2. Clear the WizardBar item in the toolbar list.
	
	  Q170511 WizardBar Notification Slows Down Dialog Editor
	
	Each subsequent association of a dialog resource to a new class will require this
	resolution to be repeated.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : _IK920 kbwizard kbEditor kbide kbVC600bug kbDevStudio kbClassWizard kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
