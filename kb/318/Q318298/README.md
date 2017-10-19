---
layout: page
title: "Q318298: PRB: Cannot Add Project to Source Control in VS .NET IDE"
permalink: /kb/318/Q318298/
---

## Q318298: PRB: Cannot Add Project to Source Control in VS .NET IDE

	Article: Q318298
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 22-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the user creates a project, the user cannot add the project to source
	control and receives an error message that similar to the following:
	
	  "File F:\TEMP\a34\WindowsApplication1\~sakae4c77a101c14609.vbproj could not
	  be mapped to the SourceSafe project $/. Copy the file to F:\TEMP\a34?"
	
	NOTE: The file names differ in this error message according to the file names.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to the Visual SourceSafe version 6.0c. If you
	are an MSDN Universal subscriber, you can download this from the Subscriber
	Downloads section of the following MSDN Web site:
	
	  http://msdn.microsoft.com
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a Microsoft Visual C++ Active Template Library (ATL) project.
	
	2. Right-click the solution, and then click "Add Solution to Source Control" to
	  add the project to source control.
	
	3. Add a Microsoft Visual Basic project in the subdirectory of the solution.
	  When you are prompted, check out the solution. Notice that you receive the
	  following warning message:
	
	  The Project that you are attempting to add to source control may cause other
	  source control users to have difficulty opening this solution or getting
	  newer versions of it. To avoid this problem, add the project from a location
	  below the binding root (<path to the local solution>)of the other
	  source controlled projects in the solution.
	
	  Additionally, this warning message includes an option not to show this dialog
	  box again.
	
	  After this warning, you receive the error message that is listed in the
	  "Symptoms" section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
