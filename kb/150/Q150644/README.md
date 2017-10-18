---
layout: page
title: "Q150644: INFO: Quotes Required in Command Line for Names with Spaces"
permalink: kb/150/Q150644/
---

## Q150644: INFO: Quotes Required in Command Line for Names with Spaces

	Article: Q150644
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using SourceSafe Command Line commands, such as SS CD or SS CP, to set the
	current project, you need to use quotation marks (" ") around a project name
	that contains a space. The quotation marks must surround the entire project path
	name or switch.
	
	MORE INFORMATION
	================
	
	Failure to enclose the project name in quotation marks results in the following
	error message:
	
	  You may only specify one project for this command
	
	Follow this example for any SourceSafe command line command that contains a
	space.
	
	Step-by-Step Example
	--------------------
	
	From the Command prompt or MS-DOS session:
	
	1. Change to the Root ($/) project:
	
	  SS CP $/
	
	  NOTE: SourceSafe returns: Current Project is $/.
	
	2. Create a project named First Project from the Root:
	
	  SS CREATE "First Project"
	
	  (Note the quotation marks around the project name.)
	
	  NOTE: This command without the quotes, that is SS CREATE First Project, will
	  create two projects, one named First and the other Projects.
	
	3. Change to the new project:
	
	  SS CP "$/First Project"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
