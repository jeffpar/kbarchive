---
layout: page
title: "Q177424: HOWTO: Convert Multiple Projects in Visual C++ 5.0 and 6.0"
permalink: kb/177/Q177424/
---

## Q177424: HOWTO: Convert Multiple Projects in Visual C++ 5.0 and 6.0

	Article: Q177424
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0, 6.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to convert multiple projects created with Microsoft
	Visual C++ version 4.x into Microsoft Visual C++ version 5.0 or version 6.0
	projects. If you are converting projects from earlier versions of Microsoft
	Visual C++ (versions 2.2 or earlier), replace files of extension .MDP with .MAK
	in the following instructions.
	
	MORE INFORMATION
	================
	
	To convert a single project, select "Open Workspace" from the File menu and
	select the project you wish to convert (the project has a .MDP extension). This
	method can be tedious if you have a large number of projects to convert. The
	following steps can help streamline this process.
	
	1. Use the Microsoft Windows Explorer to find all files with a .MDP extension.
	  This list contains the entire list of Microsoft Visual C++ version 4.x
	  projects. Select a parent folder (this could be the root of a drive). From
	  the Tools menu, select Find, then "Files or Folders." The Find dialog box is
	  displayed with the proper drive and folder selected. In the "Named" field,
	  enter *.MDP. Click the "Find Now" button.
	
	2. Press SHIFT+click and CTRL+click to select the projects you wish to convert.
	
	3. Drag and drop this list of files into Microsoft Developer Studio. If
	  Microsoft Developer Studio is minimized, while you are dragging, hold the
	  mouse cursor over the button for Microsoft Developer Studio on the System
	  Tray and wait for Microsoft Developer Studio to be activated. Then drop the
	  list in Microsoft Developer Studio.
	
	4. At this point, you are prompted several times for each project. Read each
	  dialog box carefully.
	
	This method converts each project separately. That is, use of this procedure does
	not result in a single workspace with all of the converted projects.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0, 6.0
	Issue type        : kbhowto
	
	=============================================================================
	
