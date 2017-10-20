---
layout: page
title: "Q168405: PRB: ResourceView Fails to Open Already Loaded .rc File"
permalink: /kb/168/Q168405/
---

## Q168405: PRB: ResourceView Fails to Open Already Loaded .rc File

{% raw %}

	Article: Q168405
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0,97; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbResourceEd kbVC kbVC500 kbVC600 kbVS97 kbVS600 kbprb kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual Studio versions 97, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ResourceView may become confused and fail to open a resource file even
	though the file is already open in the resource editor. Visual Studio may
	generate an error dialog saying "This file is already open in an editor" and the
	string "Load Failed" will appear below the bug project's resources. The MORE
	INFORMATION section below documents how this might occur.
	
	CAUSE
	=====
	
	The .rc file is already open in an editor.
	
	RESOLUTION
	==========
	
	Close the .rc file already open in the development environment then reopen the
	resource file for the project.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new MFC AppWizard (exe) project named "Test". Use the default
	  settings by pressing the Finish button on the first step of the AppWizard.
	
	2. On the File menu, click Open.
	
	3. Type Test.rc in the File Name box.
	
	4. In the Open As list, select Text, and then click OK.
	
	5. On the Workspace pane, click the ResourceView tab.
	
	6. Expand Test Resources to see the Test project's resources. The error message
	  appears.
	
	7. Close Test.rc in the text editor and repeat step 6.
	
	Additional query words: RC ResEdit dlgedit
	
	======================================================================
	Keywords          : kbide kbResourceEd kbVC kbVC500 kbVC600 kbVS97 kbVS600 kbprb kbGrpDSTools 
	Technology        : kbVCsearch kbVSsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVS97 kbVS600 kbVS97Search kbVS600Search kbVC500Search
	Version           : WINDOWS:6.0,97; winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
