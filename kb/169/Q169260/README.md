---
layout: page
title: "Q169260: HOWTO: No Command Line Equivalent for Some Web Features"
permalink: kb/169/Q169260/
---

## Q169260: HOWTO: No Command Line Equivalent for Some Web Features

	Article: Q169260
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are no command line equivalents for "Create Site Map" or "Check
	Hyperlinks". These features are only available through the Web menu in the
	Visual SourceSafe Explorer after you have designated a project as a Web
	Project.
	
	Deploy is the only command available in both the Visual SourceSafe Explorer and
	the Command Line.
	
	Syntax:
	
	  ss Deploy Project Path
	
	You must have the Read access right to use this command.
	
	MORE INFORMATION
	================
	
	To specify a project as a Web Project in Visual SourceSafe, do the following:
	
	1. From the SourceSafe Administrator, select Tools and then Options.
	
	2. Click the Web Projects tab. This tab contains five text fields. The first
	  field (called "This Project Represents a Web Site") and either or both of the
	  next two fields (called "URL" and "Virtual Root") must be filled in before
	  you can designate a project as a Web Project.
	
	  NOTE: For more information on how to designate a project as a Web Project, see
	  page 173 of the User's Guide for Visual SourceSafe 5.0.
	
	3. After you have specified a project as a Web project from within the
	  Administrator, restart the Visual SourceSafe Explorer. Now you will see the
	  Web glyph on the project you designated as a Web project.
	
	4. Select the project. The Deploy, Check Hyperlinks, and Create Site Map
	  commands are now active in the Web menu.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Issue type        : kbhowto
	
	=============================================================================
	
