---
layout: page
title: "Q318056: BUG: Shutdown When Config Manager Triggers Checkout of Solution"
permalink: /kb/318/Q318056/
---

## Q318056: BUG: Shutdown When Config Manager Triggers Checkout of Solution

{% raw %}

	Article: Q318056
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c 
	- Microsoft Visual Basic.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Configuration Manager triggers the checkout of a solution that is loading a
	new project, the program stops responding.
	
	This does not occur if you manually check out all of the projects in a solution.
	
	RESOLUTION
	==========
	
	Check out and update the project.
	
	To update the solution with the new project, in Solution Explorer, right-click
	the solution, and then click Check Out.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	This step-by-step procedure uses computer A and computer B to reproduce the
	behavior.
	
	1. Computer A: Create a new Visual Basic .NET Project and add a setup project to
	  the solution.
	
	2. Add the solution and projects to Source Code Control. To do this, in Solution
	  Explorer, right-click the project, and then click "Add solution to Source
	  Control".
	
	3. Computer B: Open the solution from source control:
	
	  On the File menu, click SourceSafe, click Open From Source control, browse to
	  the SourceSafe database, and then select the project that contains the
	  solution file. You must specify the local folder in which to put the project.
	
	4. Computer B: Add another project (such as a Class Library project) to the
	  solution, and when you receive the prompt to check out the solution, click
	  Check out.
	
	5. Computer B: After you add the project to the solution, check in all the
	  files. To do this, right-click the solution, and then click Check In.
	
	6. Computer A: On the Build menu, click Configuration Manager, and then toggle
	  any check box in the Build column. A Check Out for Edit dialog box appears.
	
	7. Check out the solution. When you are prompted about whether to add the new
	  project, click Yes.
	
	8. After the project has loaded, click Close on the Configuration Manager dialog
	  box.
	
	An unhandled exception causes Visual Studio .NET to shut down.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbVBNET kbSSafe600C
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
