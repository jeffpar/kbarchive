---
layout: page
title: "Q318885: BUG: Cannot Check In Files After You Change Web Access Method"
permalink: /kb/318/Q318885/
---

## Q318885: BUG: Cannot Check In Files After You Change Web Access Method

	Article: Q318885
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbFrontPage kbDSupport kbGrpDSSSafe
	Last Modified: 19-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Enterprise Architect Edition 
	   - FrontPage 2000 Server Extensions from Microsoft 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change your Web access method from File Share to Front Page, you
	cannot check in the project from the Visual Studio .NET integrated development
	environment (IDE).
	
	CAUSE
	=====
	
	This problem occurs because of a bug in FrontPage 2000 Server Extensions that
	does not forward your domain information correctly to the Visual SourceSafe
	database.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Follow these steps to disable anonymous browsing on the Web site in question:
	
	  a. Open Microsoft Internet Information Services (IIS).
	
	  b. Right-click the Web site, and then click Properties.
	
	  c. Click the Directory Security tab, and then click Edit in the "Anonymous
	     Access and Authentication Control" section.
	
	  d. Click to clear the Anonymous Access check box.
	
	     NOTE: If you need anonymous Web browsing, disable write permissions
	     instead.
	
	2. Log on to the Visual SourceSafe database, and then manually check in the
	  files.
	
	3. On the Project menu in the Visual Studio .NET IDE, click Web Project, and
	  then click Recalculate Links. Notice that the files show that they are
	  checked in.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When FrontPage 2000 Server Extensions check out the file to write the connection
	information, FrontPage 2000 Server Extensions drops the domain information from
	your user ID. Therefore, although the project shows that it is checked out by
	User, the conflict occurs because the IDE properly uses Domain\User when you try
	to check in the project.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a Microsoft ASP.NET Web application in Microsoft Visual Basic .NET.
	  Make sure that you use File Share access for the Web access method.
	
	2. Add the solution to source control. This must be the same database that the
	  FrontPage 2000 Server Extensions are pointed to.
	
	3. On the File menu, point to Source Control, and then click Change Source
	  Control to unbind the solution and the project from source control.
	
	4. Right-click the project, and then click Properties.
	
	5. Click Web Settings, and then click to select the FrontPage check box.
	
	6. Save and close the solution.
	
	7. Open Microsoft Internet Information Services (IIS), and then follow these
	  steps to add the Web site to source control:
	
	  a. Right-click the Web site, and then click Properties.
	
	  b. Click the Server Extensions tab.
	
	  c. Click Use External from the drop-down list box, and then add the project
	     to the same location that you added the project to in step 2.
	
	8. Open the solution again in the Visual Studio .NET IDE. Notice that you cannot
	  check in the files.
	
	Additional query words: checkin checkout
	
	======================================================================
	Keywords          : kbFrontPage kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
