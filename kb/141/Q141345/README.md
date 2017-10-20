---
layout: page
title: "Q141345: BUG: Duplicating Resource Causes Resource ID Collision"
permalink: /kb/141/Q141345/
---

## Q141345: BUG: Duplicating Resource Causes Resource ID Collision

{% raw %}

	Article: Q141345
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbui _IK920 kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you duplicate a resource a few times in the resource browser by using copy
	and paste, you will find that it is possible to run into resource ID collisions
	when you try to rename the resources using the resource property dialog box.
	That is, when you try to rename your resources, you will find that the resource
	editor may try to assign your new resource name an integer ID that already
	exists. This will cause a resource editor error message.
	
	CAUSE
	=====
	
	This problem is the result of the Resource Editor not correctly assigning new
	IDs to resource names when you try to give a resource a new name. The Resource
	Editor actually is trying to assign the new resource name an integer ID that is
	already used by another resource. This will cause the resource ID collision.
	
	RESOLUTION
	==========
	
	After you have duplicated your resources and before you start to rename them,
	take the following steps to ensure that your resource names have unique integer
	identifiers:
	
	1. If you are using Visual C++, versions 2.x, make sure the resource file is
	  open by double-clicking the .rc file in the project window. In Visual C++,
	  versions 4.x, click the Resource tab in the Project window. In Visual C++,
	  vrsions 5.0 and 6.0, click the ResourceView tab in the Project Workspace
	  pane.
	
	2. If you are using Visual C++ 2.x, open the Symbols dialog box (on the Resource
	  menu, click Symbols). For Visual C++, versions 4.0, 4.1, 4.2, 5.0, and 6.0,
	  click Resource Symbols on the View menu.
	
	3. Click the New button. The New Symbol dialog box appears.
	
	4. In the name edit control, type the new symbol name you want to use.
	
	5. In the Value edit control, type the new symbol value you want to use. You
	  must make sure this value isn't being used by any of the resources listed in
	  the Resource Symbols dialog box.
	
	6. Close the New Symbol dialog box by clicking OK.
	
	7. Close the Symbols Browser by clicking OK.
	
	You can now rename your resources using the symbols you created without worrying
	about whether the symbol has already been defined.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Use Appwizard to generate a new MDI application.
	
	2. In Visual C++ 2.x, open the .rc file in the project window. In Visual C++
	  4.0, 4.1, or 4.2, click the Resource tab in the Project window to view the
	  resources. In Visual C++, versions 5.0 and 6.0, click the ResourceView tab in
	  the Project Workspace pane.
	
	3. Expand the Accelerator, Icon, Menu, and Toolbar resource folders.
	
	4. Select the IDR_MAINFRAME Accelerator resource.
	
	5. Press CTRL+C
	
	6. Press CTRL+V four times to make four copies of the Accelerator table
	  IDR_MAINFRAME. There are now five versions of the Accelerator table named
	  IDR_MAINFRAME through IDR_MAINFRAME4
	
	7. Repeat steps 4 through 6 for the Icon, Menu, and Toolbar resources. You may
	  notice inconsistencies in the default naming of the pasted resources. That
	  is, you may see the default names come up as IDR_MAINFRAME, IDR_MAINFRAME2,
	  IDR_MAINFRAME3, IDR_MAINFRAME4 and so on (IDR_MAINFRAME1 was skipped).
	
	8. Start renaming all of the Accelerators so that you have IDR_MAINFRAME and
	  IDR_TEST1 through IDR_TEST4
	
	9. Start renaming all of Icons in the same way the accelerators were named in
	  step 8. You won't be able to because you will get an error message that
	  says:
	
	  The resource 'IDR_XTYPE' of this type uses the same identifier value.
	
	  Where X is the project name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui _IK920 kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
