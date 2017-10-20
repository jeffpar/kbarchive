---
layout: page
title: "Q194615: FIX: Project Deletes Precompiled Header Created by Other Project"
permalink: /kb/194/Q194615/
---

## Q194615: FIX: Project Deletes Precompiled Header Created by Other Project

{% raw %}

	Article: Q194615
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbservicepack kbide kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If one project uses a pre-compiled header (using compiler option /Yu) that was
	created by another project, then the pre-compiled header is deleted when you
	perform a Clean or Rebuild-All command in Developer Studio.
	
	RESOLUTION
	==========
	
	In the workarounds that follow, a YC project refers to the project that creates
	the pre-compiled header (PCH); a YU project refers to a project that uses, but
	does not create, the pre-compiled header.
	
	
	Option 1
	--------
	
	Use a custom build step to create the PCH file. This does not impact the YU
	projects.
	
	In this case you can modify Project Settings for the Stdafx.cpp file so that it
	is built with custom build rules rather than the standard method for building
	the PCH file.
	
	To do this from the YC project:
	
	1. On the Project menu, click Settings to bring up the Project Settings dialog
	  box.
	
	2. From the tree view in the left window, select Stdafx.cpp in the Source Files
	  folder.
	
	3. Click the General tab in the right window and select Always use custom build
	  step.
	
	4. Click the Custom Build tab.
	
	5. In the Commands window, enter the following (where Yc.pch is the name of your
	  project pre-compiled header file):
	
	  attrib -r $(OutDir)\yc.pch
	  cl [compiler switches] /Yc"stdafx.h" stdafx.cpp
	  attrib +r $(OutDir)\yc.pch
	
	6. In the Outputs window, enter the following (where Yc.pch is the name of your
	  project pre-compiled header file):
	
	  $(OutDir)\yc.pch
	  $(OutDir)\stdafx.obj
	
	7. Click Dependencies. Type the following in the user-defined Dependencies
	  window:
	
	  stdafx.h
	
	8. Click OK.
	
	NOTES:
	
	- You get the following error at the beginning of your Rebuild-All or Clean:
	
	  Error: Could not delete file "filename" : Access is denied.
	
	- The pre-compiled header is not deleted even in the YC project when a Clean or
	  Rebuild-All command is executed in Developer Studio. This behavior is
	  consistent with Microsoft Visual C++, version 5.0.
	
	Option 2
	--------
	
	Use an environment variable to set the PCH switch in the YU projects. This does
	not impact the YC project(s).
	
	1. In the Windows NT Setting, Control Panel applet, select the System icon. Then
	  select the Environment tab.
	
	2. In the Variable field, type in "YCREL" (without the quotation marks).
	
	3. In the Value field, enter:
	
	  /Fp"..\Release/yc.pch" /Yu"stdafx.h"
	
	  (This uses relative paths although it is not required). Note that you also
	  need an environment variable for the debug build, such as YCDBG. That is, you
	  need two environment variables for each project that produces PCH files.
	
	  NOTE: In Windows 95 or Windows 98, you must make system-wide environment
	  variable setting changes by adding appropriate MS-DOS SET commands to the
	  Autoexec.bat file and rebooting.
	
	4. In the Project Settings dialog box for the YU project, select the main node
	  of the project labeled YU in the file tree.
	
	5. In the C/C++ tab, select the Precompiled Headers category.
	
	6. Click Not using precompiled headers. This turns off the /Fp and /Yu compiler
	  switches.
	
	7. In the Project Options window (at the bottom of the Project Settings dialog
	  box) add $(YCDBG) for your debug build or $(YCREL) for the Release build.
	
	8. Click OK.
	
	9. If you have not restarted Developer Studio since setting the environment
	  variables, you must close it and reopen it.
	
	NOTES:
	
	- You can unintentionally delete or modify the environment settings.
	
	- Build settings are hidden, which may make trouble-shooting build-related
	  problems more difficult.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This bug was corrected in Visual Studio
	6.0 Service Pack 3. For more information about Visual Studio service packs,
	please see the following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create two MFC AppWizard DLL projects in the same workspace.
	
	2. Switch to the Win32 Release configuration for each project.
	
	3. In Project2, delete the Stdafx.cpp file from the project.
	
	4. In Project2, in the Project Settings dialog box, change the /Fp option to
	  point to the PCH file from Project1.
	
	5. Build Project1.
	
	6. Build Project2.
	
	7. Rebuild All Project2 only.
	
	RESULT:
	
	  fatal error C1083: Cannot open precompiled header file: 'filename': No such
	  file or directory
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbservicepack kbide kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
