---
layout: page
title: "Q317542: BUG: Cannot Unbind a Deleted and Destroyed VSS Project"
permalink: /kb/317/Q317542/
---

## Q317542: BUG: Cannot Unbind a Deleted and Destroyed VSS Project

{% raw %}

	Article: Q317542
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 17-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an integrated source control project is deleted and destroyed from a Visual
	SourceSafe database, if you open the solution in the Visual Studio .NET
	integrated development environment (IDE), you cannot unbind from the Visual
	SourceSafe database.
	
	RESOLUTION
	==========
	
	To unbind the project, follow these steps:
	
	1. In the Change Source Control dialog box, click Work Disconnected.
	
	2. On the File menu in Visual SourceSafe Explorer, point to Source Control, and
	  then click Change Source Control.
	
	3. Click Unbind.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a new project in Microsoft Visual Basic .NET.
	
	2. On the File menu, point to Source Control, and then click "Add to Source
	  Control" to add the solution to source control.
	
	3. Close the solution.
	
	4. In Visual SourceSafe Explorer, delete and destroy the project.
	
	5. Open the solution again in the Visual Studio .NET IDE.
	
	6. When you are prompted to search for the project, click No.
	
	7. Click Unbind.
	
	8. Open the solution again. Notice that the solution still appears to be
	  connected to the Visual SourceSafe database.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q305106 HOWTO: SSAFE - Reconnect a Project to Source Control in Visual Studio
	  .NET
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
