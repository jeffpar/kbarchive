---
layout: page
title: "Q158475: HOWTO: Find Missing Versions in the Project History Dialog Box"
permalink: /kb/158/Q158475/
---

## Q158475: HOWTO: Find Missing Versions in the Project History Dialog Box

	Article: Q158475
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When viewing the history dialog box for a file, some versions may appear to be
	missing. This article describes four scenarios that could cause this behavior.
	
	MORE INFORMATION
	================
	
	Whenever a file is modified in Visual SourceSafe (checked in, branched, labeled
	at the file level, etc.), a new log entry for that file is created. Each of
	these log entries is represented as a version in the history dialog box for the
	file. When viewing the history of a file, these version numbers are displayed in
	the left-most column of the window. Sometimes a version appears to be missing.
	The following four scenarios describe conditions that could cause this to
	happen:
	
	1. Older versions of Visual SourceSafe created a log entry for the Undo Check
	  Out command. By design, this log entry is ignored by the History of Project
	  dialog box. If you upgraded your database from an older version of
	  SourceSafe, files that were designated "Uncheckout" will display missing
	  version numbers. Visual SourceSafe versions 4.0 and higher do not create a
	  log entry for the Undo Check Out action.
	
	2. If you apply a label to a file, a log entry for that label is created. If you
	  delete the label (by reapplying the same label later, for example), the log
	  entry (and thus, a version) representing the label is removed. As a result,
	  the version will appear to be missing in the History of Project dialog box.
	
	3. Under some conditions, when you run the ANALYZE utility with the -f option, a
	  log entry (and thus, a version) is removed. ANALYZE will only do this if the
	  log entry is damaged beyond repair. If the damaged log entry represents a
	  label, the file itself will remain unchanged. However, if the log entry
	  represents a checked-in file, previous versions of the file may not be
	  recoverable.
	
	  NOTE: Under this scenario, if the log entry is damaged beyond repair, previous
	  versions of the file are unrecoverable anyway so it doesn't matter if ANALYZE
	  removes the log entry.
	
	4. If a file is checked in from a machine whose internal clock, when performing
	  the check in, is set to a time and date earlier than when the file was
	  originally added to SourceSafe, its version will not be displayed by the Show
	  History command in the Visual SourceSafe Explorer. In this scenario, the log
	  entry is created and the file differences are saved. The following eight-step
	  procedure describes how to reproduce the behavior described in this scenario.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Set up two machines that are connected to a common Visual SourceSafe database
	  on a server.
	
	2. Set the clock on machine number 1 to the current date and time.
	
	3. Set the clock on machine number 2 to a date and time three or more days
	  behind machine number 1. If a file is checked in from a machine whose
	  internal clock, when performing the check in, is set to a time and date
	  earlier than when the file was originally added to SourceSafe, its version
	  will not be displayed by the Show History command in the Visual SourceSafe
	  Explorer.
	
	4. Add a file to the database using the Visual SourceSafe Explorer on machine
	  number 1. View this file's history and note that there is one item displayed,
	  version 1.
	
	5. Check the file out from machine number 2, modify it, and check the file back
	  in.
	
	6. View the file's history from either machine number 1 or machine number 2. The
	  history still displays only one version.
	
	7. Check the file out from machine number 1, modify it, and check it back in.
	
	8. View the file's history from either machine number 1 or machine number 2. The
	  History now displays two versions, version 1 and version 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
