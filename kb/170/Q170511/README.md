---
layout: page
title: "Q170511: PRB: WizardBar Notification Slows Down Dialog Editor"
permalink: kb/170/Q170511/
---

## Q170511: PRB: WizardBar Notification Slows Down Dialog Editor

	Article: Q170511
	Product(s): Microsoft C Compiler
	Version(s): 5.0 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbResourceEd kbVC kbVC500bug kbVC600 kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience significantly slow performance when using the dialog editor
	in Visual C++ 5.0 if the projects you are using have several complex dialog
	boxes that use many controls. You might experience this slowness when you change
	from one control to another, when you start the Class Wizard, or when you access
	the properties of a control.
	
	CAUSE
	=====
	
	Complex queries need to update the WizardBar while the Dialog Editor is running,
	and this slows performance.
	
	RESOLUTION
	==========
	
	You can work around this problem by disabling the Wizard Bar as follows:
	
	1. On the Tools menu, select Customize.
	
	2. In the Customize dialog box, select the Toolbars tab.
	
	3. In the Toolbars list, scroll to the Wizard Bar check box and de-select it.
	
	4. Shut down Developer Studio and restart.
	
	  NOTE: The Wizard Bar will not be disabled until you shut down Developer
	  Studio.
	
	This should help resolve the main symptoms.
	
	Double-clicking a control in the Resource Editor will re-invoke hidden WizardBar
	functionality (the WizardBar will not be displayed). To stop this behavior:
	
	1. Always use Ctrl+Tab to toggle between two windows.
	
	-or-
	
	2. Disable the "Double-click in dialog editor edits code (MFC only)" option. To
	  do this, on the Tools menu, select Options, select the Compatibility tab, and
	  then de-select the "Double-click in dialog editor edits code (MFC only)"
	  check box.
	
	Finally, deleting or renaming the .CLW (Class Wizard) file may provide some
	relief. The .CLW file is located in the same directory as your project's files
	(.DSW and .DSP). It is possible to use a batch file that can be called from a
	toolbar button that is designed to do this. If you do this, a new CLW file will
	be generated every time you use the Class Wizard.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Visual C++ 5.0. This
	problem has been addressed in Visual C++ 6.0 with some performance gains.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbResourceEd kbVC kbVC500bug kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : 5.0 6.0
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
