---
layout: page
title: "Q250834: INFO: Create File List of Project at a Particular Time or Label"
permalink: kb/250/Q250834/
---

## Q250834: INFO: Create File List of Project at a Particular Time or Label

	Article: Q250834
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation _IK kbSSafe500 kbSSafe600 kbSSExplorer _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Obtaining a list of files that were in a project at a specific time is not
	directly supported by the Visual SourceSafe Explorer. The best way to obtain
	this information is to use the Visual SourceSafe command line; OLE Automation
	could also be used.
	
	MORE INFORMATION
	================
	
	For example, if you have a project called "$/Project1" and you want to list the
	files in it on 5/17/1999, then issue the following command from a DOS window:
	
	C:\>ss dir $/Project1 -vd5-17-99
	
	To get the same project at a label called "TestLabel", issue the following
	command from DOS window:
	
	C:\>ss dir $/Project1 -vlTestLabel
	
	REFERENCES
	==========
	
	Visual SourceSafe 6.0 Automation
	
	Additional information can be found in the Visual SourceSafe product
	documentation by searching for this title:
	
	- Directory (Command Line)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation _IK kbSSafe500 kbSSafe600 kbSSExplorer _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
