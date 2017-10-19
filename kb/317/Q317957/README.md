---
layout: page
title: "Q317957: PRB: Connection Information Is Broken After You Check In Without"
permalink: /kb/317/Q317957/
---

## Q317957: PRB: Connection Information Is Broken After You Check In Without

	Article: Q317957
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 08-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Visual SourceSafe version 6.0a/b integration with Visual Studio .NET,
	your connection may break if the solution file is not added to Source Code
	Control (SCC).
	
	NOTE: This behavior does not occur when you use Visual SourceSafe version 6.0c.
	
	CAUSE
	=====
	
	SourceSafe 6.0a/b does not recognize the Visual Studio .NET extensions for
	source control. As a result, SourceSafe writes the connection information to the
	solution file (which is not under source control), instead of writing the
	connection information to the Visual Studio .NET extensions.
	
	RESOLUTION
	==========
	
	Change source control to unbind and then rebind to the original location. To do
	this, follow these steps:
	
	1. On the File menu, click Source Control, and then click Change Source Control.
	
	2. When you receive a prompt, save the solution. The Change Source Control
	  dialog box appears.
	
	3. Unbind and then rebind to the original location. The following dialog box
	  appears:
	
	  Some projects have been bound to server locations that may be incorrect. A
	  location may be incorrect either because it does not contain the majority of
	  the projects' files or because those files are not in the correct location
	  relative to the specified server folder. You should probably fix all the
	  bindings in the solution. However, you may continue and bind these projects
	  to the specified locations even when some may to be incorrect.
	
	4. Click Continue with these bindings, and then ensure that you save the
	  solution when you check in the project (on the File menu, click Save all).
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create two Visual SourceSafe users: set one without project extensions, and
	  set the other with normal project extensions.
	
	  To clear the project extensions, follow these steps:
	
	  a. Open the SourceSafe explorer as the user for which you want to clear the
	     extensions.
	
	  b. On the Tools menu, click Options, click File Types, and then delete the
	     file extensions that appear in the Create SCC file box.
	
	  c. Close the explorer.
	
	2. Create a solution that contains a project.
	
	3. Add the project only to source control as a selection: on the File menu,
	  click Source Control, click "Add selected projects to Source Control", and
	  ensure that you are using the SourceSafe user that has SCC project
	  extensions.
	
	4. Close the shell, and then save the solution when you are prompted.
	
	5. Start Visual Studio .NET.
	
	6. On the File menu, click Source Control, and then click "Open from Source
	  Control". Ensure that you use the user without SCC project file extensions,
	  and that you open the project to a new location.
	
	  You receive the following error message:
	
	  The binding information for project WindowsApplication1 could not be
	  retrieved from its source control provider. This project may have been placed
	  under source control with a different provider configuration from the current
	  one.
	
	  To keep source control working for this project, Visual Studio will now check
	  out the project file so that the binding information can be saved in it.
	  However, if the check out fails and the project is closed without saving, the
	  next time it is opened, it will appear to no longer be under source control.
	
	7. Click OK, and then click Check out.
	
	8. Check in the project.
	
	  The project now seems to be checked in and corrected, and you may think that
	  the connection information has been saved to the project file. In reality,
	  the connection information was written to the solution file and it may be
	  lost if you do not save the solution file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
