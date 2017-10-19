---
layout: page
title: "Q201394: PRB: Only Project Folders Restored from Archive"
permalink: /kb/201/Q201394/
---

## Q201394: PRB: Only Project Folders Restored from Archive

	Article: Q201394
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to restore an archive to a location other than where it was archived
	from causes the SSRESTOR utility to report
	
	  <project/file path> does not exist and the archive file contains only
	  version ranges
	
	and only the project structure of the archived files exists in Visual SourceSafe
	Explorer.
	
	CAUSE
	=====
	
	You tried to restore an archive that contains earlier versions of projects/files
	but not the latest versions.
	
	Visual SourceSafe uses Reverse Delta technology to store only the latest version
	of a file, along with the information to recreate older versions of the file
	when needed. When you archive using the -v switch option, you only archive the
	changes.
	
	RESOLUTION
	==========
	
	Archive and restore the remaining versions of the file or project prior to
	restoring the archive that contains the earlier versions. Use the rollback
	function if you only want the earlier versions saved to the new location.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Archiving with the -v switch is best used to remove old versions of files in
	order to recover disk space or to make the Show History command work more
	quickly (because it will have fewer versions to display). To move whole projects
	to different databases while preserving history, archive and restore the entire
	project.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Archive a file or files using the -v switch.
	
	2. Try restoring the archived files to a different Visual SourceSafe database.
	
	REFERENCES
	==========
	
	For more information about archiving and restoring projects/files, search using
	the keywords "archiving" and "restoring" in Visual SourceSafe Administration
	Help.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q176875 INFO: The Primary Functions of Ssarc.exe and Ssrestor.exe
	
	  Q176909 HOWTO: Move a VSS Database or Project to New Location
	
	Additional query words: kbDSupport archive restore version
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
