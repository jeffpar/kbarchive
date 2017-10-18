---
layout: page
title: "Q320860: PRB: &quot;Operation Could Not Be Completed&quot; Err Msg"
permalink: kb/320/Q320860/
---

## Q320860: PRB: &quot;Operation Could Not Be Completed&quot; Err Msg

	Article: Q320860
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSSSafe kbdssupport
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Architect Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Developer Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can integrate a solution that is created by using Visual Studio .NET with
	Visual SourceSafe to implement source code control and to facilitate development
	in a team environment.
	
	When you integrate a Visual Studio .NET solution with Visual SourceSafe, a
	project is created that can be administered from Visual SourceSafe Explorer.
	However, if you delete this project, or if you delete and destroy this project
	in Visual SourceSafe Explorer while the project is checked out in the Visual
	Studio .NET integrated development environment (IDE), you receive the following
	error message when you try to check in the project:
	
	  The operation could not be completed
	
	Additionally, the corresponding .sln file is deleted from the user's hard disk,
	which may result in data loss.
	
	RESOLUTION
	==========
	
	If the project is deleted but is not destroyed, the project can be recovered
	from Visual SourceSafe Explorer. After recovery, you must check in the solution
	from the Visual Studio .NET IDE.
	
	If the project is deleted and destroyed, you must restore the .sln file from a
	backup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual SourceSafe.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Start Visual Studio .NET, and then create a blank solution.
	
	2. Follow these steps to place the solution under source code control:
	
	  a. In Solution Explorer, right-click the solution, and then click "Add
	     Solution to Source Control".
	
	  b. Log on to a Visual SourceSafe database.
	
	  c. Click OK to accept the default Visual SourceSafe project name and folder
	     structure, and then click Yes to create the project.
	
	3. In Solution Explorer, right-click the solution, and then click Check Out.
	
	4. In the Check Out dialog box, make sure that all of the items in the solution
	  hierarchy are selected, and then click Check Out.
	
	5. Start Visual SourceSafe Explorer, and then log on to the database that you
	  used in step 2b.
	
	6. In Visual SourceSafe Explorer, delete the project that you created in step
	  2c. Click Yes All in the resulting message dialog box, which states that the
	  solution is currently checked out. Note that the problem reproduces
	  regardless of whether you destroy the project permanently.
	
	7. In the Visual Studio .NET IDE, right-click the solution in Solution Explorer,
	  and then click Check In.
	
	8. In the Check In dialog box, make sure that all of the items in the solution
	  hierarchy are selected, and then click Check In.
	
	9. Click Yes All two times, and then click OK. Notice that you receive the error
	  message that is listed in the "Symptoms" section. Additionally, notice that
	  the solution still appears as being checked out in the Visual Studio .NET IDE
	  and that the .sln file has been deleted from the hard disk.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSSSafe kbdssupport 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
