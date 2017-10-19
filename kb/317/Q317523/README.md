---
layout: page
title: "Q317523: PRB: &quot;Only One Database Connection at a Time Is Supported&quot; Error"
permalink: /kb/317/Q317523/
---

## Q317523: PRB: &quot;Only One Database Connection at a Time Is Supported&quot; Error

	Article: Q317523
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 18-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Architect Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Developer Edition 
	   - Microsoft Visual Studio.NET (2002), Academic Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to merge solution files that contain a project or projects that are
	under source code control, you may receive the following error message:
	
	  Only one database connection at a time is supported
	
	CAUSE
	=====
	
	This problem occurs because the projects in each solution are stored in
	different databases. Only one Visual SourceSafe database is supported in a
	solution. Even when you use the same database, this problem occurs if one
	database is identified with a Universal Naming Convention (UNC) path and the
	other database is identified with a regular file path.
	
	RESOLUTION
	==========
	
	To work around this behavior, use one of the following methods.
	
	Workaround 1
	------------
	
	Leave the project files in separate solution files.
	
	Workaround 2
	------------
	
	Move one solution into the same database as the other database when you merge the
	solutions. To do this, follow these steps:
	
	1. Open the first solution in Visual Studio .NET.
	
	2. On the File menu, point to Source Control, and then click Change Source
	  Control.
	
	3. In the Change Source Control dialog box, unbind the solution from its source
	  control database.
	
	4. Open the second solution in Visual Studio .NET.
	
	5. On the File menu, point to Open, and then click Project.
	
	6. Click "Add to Solution", and then open the first solution.
	
	7. Check in the project file that you just added. You are prompted to add this
	  project to the same database as the solution that it is being added to.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a new project in Visual Studio .NET.
	
	2. On the File menu in the Visual Studio .NET IDE, point to Source Control, and
	  then click "Add Solution to Source Control".
	
	3. Close the solution.
	
	4. Create another new project in Visual Studio .NET.
	
	5. Add the second solution to source control, and use a different Visual
	  SourceSafe database, or use the same database but specify a UNC path instead
	  of the file path to the database.
	
	6. On the File menu in the Visual Studio .NET IDE, point to Open, and then click
	  Project.
	
	7. In the Open Project dialog box, click "Add to Solution", open the solution
	  that you created in step 1, and then click Checkout.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q307467 HOW TO: Create an ASP.NET Application from Multiple Projects for Team
	  Development
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
