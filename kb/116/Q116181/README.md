---
layout: page
title: "Q116181: FIX: ClassWizard Option Isn't Disabled for Non-MFC Projects"
permalink: kb/116/Q116181/
---

## Q116181: FIX: ClassWizard Option Isn't Disabled for Non-MFC Projects

	Article: Q116181
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:; :1.0
	Operating System(s): 
	Keyword(s): kbwizard kbATL kbMFC kbVC kbVC100bug kbVC150bug kbVC200fix kbClassWizardkbbuglist kbfix
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows 
	- Microsoft Visual C++, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ClassWizard menu option within the Microsoft Visual Workbench is not
	disabled when you use a project that is not part of the Microsoft Foundation
	Classes (MFC). When you select ClassWizard from the Browse menu while using a
	non-MFC project, a dialog box appears that contains the following information:
	
	  "The ClassWizard database C:\xxxxxxxx\yyyyyyyy.CLW does not exist. To rebuild
	  your .CLW file, open the project in App Studio and run ClassWizard"
	
	If the project does not use MFC, ClassWizard cannot construct a .CLW file when it
	is run from App Studio.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 2.0.
	
	Additional query words: Class Wizard 1.00 1.50, kbNoUpdate
	
	======================================================================
	Keywords          : kbwizard kbATL kbMFC kbVC kbVC100bug kbVC150bug kbVC200fix kbClassWizard kbbuglist kbfixlist
	Technology        : kbVCsearch kbVSsearch kbAudDeveloper kbvc100
	Version           : WINDOWS:; :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
