---
layout: page
title: "Q317649: PRB: Cannot Add Filenames Containing UTF-8 Characters to VSS SCC"
permalink: kb/317/Q317649/
---

## Q317649: PRB: Cannot Add Filenames Containing UTF-8 Characters to VSS SCC

	Article: Q317649
	Product(s): Microsoft SourceSafe
	Version(s): 6.0,6.0c
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 6.0, 6.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot add files that contain UTF-8 characters in the file name to Visual
	SourceSafe source code control.
	
	Although you can use file names that contain UTF-8 characters in Visual Studio
	.NET, you cannot add the files to SourceSafe source code control.
	
	RESOLUTION
	==========
	
	Rename the file by using characters from the code page that you used when you
	installed Visual SourceSafe.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Add a file that contains UTF-8 characters in its file name to a project in
	  your solution (press SHIFT+ALT+A).
	
	  Note that although a check mark appears next to the file, the file has not
	  been added to version control.
	
	2. Right-click the file, and then click Check In.
	
	3. On the Check In dialog box, click Check In.
	
	4. Click OK on both resulting error messages:
	
	  Invalid Filename: <your path/your file name>
	
	-and-
	
	  Unspecified error
	
	Additional query words: unicode
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe32bitSearch
	Version           : :6.0,6.0c
	Issue type        : kbprb
	
	=============================================================================
	
