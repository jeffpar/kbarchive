---
layout: page
title: "Q153500: HOWTO: Recover Disk Space in Visual SourceSafe"
permalink: kb/153/Q153500/
---

## Q153500: HOWTO: Recover Disk Space in Visual SourceSafe

	Article: Q153500
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbOSWin95
	Last Modified: 06-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a file is deleted in Visual SourceSafe, the file is still held in the
	SourceSafe database; it is simply marked for deletion. The files marked for
	deletion are still taking up space on the disk and are still available to be
	recovered.
	
	MORE INFORMATION
	================
	
	There are several ways to recover disk space in Visual SourceSafe:
	
	- Select the Destroy Permanently check box when deleting a file to completely
	  remove it from the database.
	
	- Use the Visual SourceSafe Purge command from the Command window or from
	  within Visual SourceSafe Explorer.
	
	- Use Analyze.exe with the -c and -d switches. Do not use these switches
	  together. Run analyze twice, once with each switch . However, use this with
	  extreme caution. Note that this applies to versions of Analyze.exe dated
	  1/9/96 or later. If you have an earlier version, please see the following
	  article in the Microsoft Knowledge Base for further information:
	
	  Q190881 SAMPLE: Analyze6.exe Utility for Visual SourceSafe
	
	Step-by-Step Example
	--------------------
	
	Delete with the Destroy Permanently option:
	
	1. In SourceSafe Explorer, select the desired file or project, and press the
	  DELETE key.
	
	2. Select the Destroy Permanently check box, and click OK. The file or project
	  is no longer recoverable.
	
	Purge option:
	
	1. In SourceSafe Explorer, right-click the Project, and select the Properties
	  option.
	
	2. Select the Deleted Items tab. If any files are deleted in that project, the
	  Purge button will be available.
	
	Analyze -C option:
	
	1. First and foremost, back up the database. At the command line, change to the
	  \win32 directory where ANALYZE.EXE resides.
	
	2. Type Analyze <path to data directory> -C at the command line and allow
	  some time for this to run.
	
	NOTE: You may also want to run analyze with the -d switch as suggested in the
	Knowledge Base Article Q190881.
	
	NOTE: Be sure that there is plenty of free hard disk space, back up, and allow a
	lot of time with this method.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbOSWin95 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
