---
layout: page
title: "Q154470: BUG: Long File Name Working Directory Not Created"
permalink: kb/154/Q154470/
---

## Q154470: BUG: Long File Name Working Directory Not Created

	Article: Q154470
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbSSafe600bug
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user checks out a file, Visual SourceSafe prompts to create a working
	directory with the same name as the project structure. The user then points to a
	location on an operating system that can only handle 8.3-character filenames.
	When the user clicks the "Yes" button, the following message appears:
	
	  "Access to file .../SubProject" denied."
	
	CAUSE
	=====
	
	If there is no Working Directory explicitly set for a project in Visual
	SourceSafe and a user tries to checkout a file, Visual SourceSafe checks for a
	directory structure similar to the project structure in Visual SourceSafe. If
	the directory structure is not found, Visual SourceSafe attempts to create a
	directory structure similar to the project structure in Visual SourceSafe. When
	the 32-bit SourceSafe Explorer (WIN32\SSEXP.EXE) is run, Visual SourceSafe
	assumes that a Working Directory can be created with greater than 8.3
	characters. It does not detect whether the operating systems can handle
	8.3-character filenames.
	
	WORKAROUND
	==========
	
	Do one of the following:
	
	- When the "Directory ... SubProject not found , create?" dialog comes up, edit
	  the Working Directory in the "To:" TextBox to be an 8.3-character or less
	  subdirectory name.
	
	- Run WIN\SSEXP.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Using Windows NT or Windows 95 where the working directory is set to a shared
	directory on a Windows for WorkGroups computer is an example of a file system
	that cannot have directories or file names greater than the MS-DOS 8.3 naming
	convention.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbSSafe600bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbbug
	
	=============================================================================
	
