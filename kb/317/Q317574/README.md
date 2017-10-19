---
layout: page
title: "Q317574: PRB: &quot;Unspecified Error&quot; After Renaming a .NET Subproject in VSS"
permalink: /kb/317/Q317574/
---

## Q317574: PRB: &quot;Unspecified Error&quot; After Renaming a .NET Subproject in VSS

	Article: Q317574
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSSSafe kbSSafeSearch
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Enterprise Architect Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Developer Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you rename a subproject in a Visual Studio .NET Enterprise Template project
	before you check out the solution, Visual SourceSafe updates the solution but
	does not check out the solution.
	
	Later, when another user tries to work with the source code control copy of the
	project, the user may receive "Unspecified Error" messages.
	
	CAUSE
	=====
	
	When you rename the subproject, Visual SourceSafe updates the source control
	information in memory to the solution file. However, because you did not check
	out the solution file, SourceSafe does not change the source control copy of the
	solution.
	
	RESOLUTION
	==========
	
	To work around this issue, follow these steps:
	
	1. Close the solution, which may require you to quit the Visual Studio .NET
	  integrated development environment (IDE).
	
	2. Delete all of the .vsscc, the .vssscc, and the .vspscc files from all of the
	  project and solution folders.
	
	3. Reopen the solution.
	
	4. Remove any projects that will not load, and then add them.
	
	  Projects may not load for several reasons, for example, because the binding
	  information may be incorrect, or because you may receive errors.
	
	5. Add the solution to source code control to a new project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Follow these steps on computer 1:
	
	  a. Create a new Visual Basic simple distributed application by using the
	     Enterprise Template projects.
	
	  b. Set the Web locations to a web server by using the File Share connection.
	
	     To determine which access method you are using, in Visual Studio, click
	     Tools, and then click Options. In the left pane of the dialog box, click
	     Projects, click Web Settings, and then locate the Web Server connection
	     property. The default setting is File share, but you can also select
	     FrontPage Extensions.
	
	  c. Add the solution to source code control.
	
	  d. Select a Client project, and then check out the project.
	
	  e. Press F2 to rename the subproject, type a new name, and then press ENTER.
	
	  f. Right-click the Enterprise Template Project, and then click Check Out.
	
	  g. When you receive a warning about renaming the project, click Continue.
	
	  h. Check in all of the files that are listed in the Pending Checkins dialog
	     box.
	
	2. Follow these steps on computer 2:
	
	  a. Start the Visual Studio .NET IDE.
	
	  b. On the File menu, click Source Control, and then click "Open from Source
	     Code Control".
	
	  c. Locate the project that you created on computer 1 (step 1c).
	
	  d. Open the project to a shared universal naming convention (UNC) path
	     folder.
	
	  e. Each time that you receive a "not trusted" warning, click OK.
	
	  f. Note the warning that the renamed project is not available, and then click
	     OK.
	
	  g. Rename a Web project. Note that the project is renamed, however, the
	     project does not appear as checked out.
	
	  h. Check out the Enterprise Template Project file.
	
	  i. Rename a client project.
	
	  j. Check in the solution.
	
	     Notice that you receive multiple recurrent "Unspecified Error" messages.
	
	NOTE: If you rename a file in the .NET IDE, Visual SourceSafe does not rename the
	corresponding SourceSafe file.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q305516 INFO: SSAFE: Renames and Deletions Not Supported for Source Code
	  Control Through the Visual Studio .NET IDE
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSSSafe kbSSafeSearch 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
