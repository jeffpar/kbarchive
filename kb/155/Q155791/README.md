---
layout: page
title: "Q155791: FIX: Some Intermediate Files not Deleted by FileView"
permalink: /kb/155/Q155791/
---

## Q155791: FIX: Some Intermediate Files not Deleted by FileView

	Article: Q155791
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbui kbusage kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can delete intermediate files (files created during a project build) created
	by Visual C++ by invoking a context menu inside the FileView of the IDE. To
	accomplish this task, select the project in the FileView pane of the Project
	Workspace window. With the mouse pointer over the selected project, click the
	right mouse button to display the pop-up menu. In Visual C++ 4.x, click Delete
	Intermediate Files. In Visual C++ 5.0 and 6.0, click Clean.
	
	Most of the intermediate files are deleted but you may notice that a few remain.
	
	Generating the default Visual C++ 4.x AppWizard application and selecting this
	option results in four intermediate ( .ilk, .idb, and two .pdb) files not being
	removed. In Visual C++ 5.0, following these steps on the default MFC (EXE)
	AppWizard results in one intermediate file remaining (.pch).
	
	RESOLUTION
	==========
	
	If it is necessary to remove these files, the files must be deleted outside of
	the Developer Studio Environment.
	
	STATUS
	======
	
	This bug was corrected in Microsoft Visual C++, version 6.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui kbusage kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
