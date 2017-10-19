---
layout: page
title: "Q318061: BUG: Reloading the Solution from Visual SourceSafe Changes the S"
permalink: /kb/318/Q318061/
---

## Q318061: BUG: Reloading the Solution from Visual SourceSafe Changes the S

	Article: Q318061
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Enterprise Architect Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Developer Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Studio .NET, when you reload the solution that contains multiple
	projects from Visual SourceSafe, the startup project may be changed.
	
	CAUSE
	=====
	
	This is in the environment code. When the solution is closed, the startup
	project is reset to NULL, which makes another project the startup project.
	
	RESOLUTION
	==========
	
	Set the startup project manually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use Visual Basic .NET to create a Web Service Project named MyWebService.
	  (Visual Basic .NET also creates the solution MyWebService.)
	
	2. Create a Web Application Project named MyWebApplication, and then add it to
	  the MyWebService solution.
	
	3. Set the project as the startup project, and then set the WebForm1.aspx as the
	  start page.
	
	4. Add this solution to Source Control.
	
	  NOTE: Microsoft recommends that you always allow addition of Web projects that
	  use File Share to have access to Source Control.
	
	5. To run the web form, press F5.
	
	6. Close both the solution and Microsoft Internet Explorer.
	
	7. Open the solution from Visual Source Control:
	
	On the File menu, click Source Control, and then click "Open From Source
	Control". (You must create a new folder named NewMyWebService for the reload
	process.)
	Note that the startup project is changed to the MyWebService project.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
