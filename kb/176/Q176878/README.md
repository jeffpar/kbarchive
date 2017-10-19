---
layout: page
title: "Q176878: PRB: Replacing Names.dat File Changes Long File Names"
permalink: /kb/176/Q176878/
---

## Q176878: PRB: Replacing Names.dat File Changes Long File Names

	Article: Q176878
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The spaces in file or project names that contain spaces are changed to
	underscore characters if the Names.Dat file is rebuilt using Analyze -F.
	
	RESOLUTION
	==========
	
	To get the space characters back into the affected file and project names, use
	the Rename command in Visual SourceSafe and retype the file or project name
	using spaces.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you create a file or project in Visual SourceSafe, Visual SourceSafe saves
	the entry in its database as a file pair. The file pair consists of an eight
	letter file name (for example, CDFAAAAA) called a log file, and an eight letter
	file name with a ".a" or ".b" extension (for example, CDFAAAAA.a) called a data
	file.
	
	The name of the file or project is stored in the log file. If the name contains
	spaces, Visual SourceSafe also stores the file name in the Names.dat file. The
	name of the file or project is stored differently in each place. It is stored in
	the Names.dat file with spaces, and it is stored in the log file with underscore
	characters in place of the spaces.
	
	When the Names.dat file is corrupted and you replace it using Analyze -F to
	rebuild it, Analyze rebuilds the Names.dat file using information stored in the
	log file. As a result, the rebuilt Names.dat file contains file names with
	underscores instead of spaces.
	
	Additional query words: underline under line
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
