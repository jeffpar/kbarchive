---
layout: page
title: "Q172400: PRB: Class Wizard Overridables Are Not Added to Converted Proj"
permalink: /kb/172/Q172400/
---

## Q172400: PRB: Class Wizard Overridables Are Not Added to Converted Proj

	Article: Q172400
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.52; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC kbVC400bug kbVC500fix kbVC600 kbClassWizard kbDSupport kbGrpDSMFCAT
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++, version 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ClassWizard generated applications created in Visual C++ versions 2.0 and later
	give the user the ability to override some MFC virtual functions through the
	ClassWizard interface. However, ClassWizard projects converted to Visual C++
	32-bit edition from Visual C++ 16-bit edition do not have this ability.
	
	MORE INFORMATION
	================
	
	To reproduce this problem:
	
	1. Start Visual C++, 16-bit edition, and create an AppWizard-generated
	  application.
	
	2. Close Visual C++, 16-bit edition.
	
	3. Start Visual C++, 32-bit edition.
	
	4. From the File menu, open the 16-bit project's make file by selecting Open in
	  Visual C++ 2.x, or Open Workspace in Visual C++ 4.0 and later. Visual C++
	  will ask if you want to convert the make file. Click yes.
	
	5. Start ClassWizard. From the dialog box, choose the CWinApp-derived class name
	  from the Class Name list box, then choose the CWinApp-derived class name from
	  the Object IDs list box. Notice that no messages are listed in the Messages
	  list box.
	
	6. Close this project and create a new AppWizard-generated application in Visual
	  C++ versions 2.0 and later. Repeat step 5. Notice the overridable functions
	  available to the CWinApp-derived class in ClassWizard.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC kbVC400bug kbVC500fix kbVC600 kbClassWizard kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : WINDOWS:1.52; winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
