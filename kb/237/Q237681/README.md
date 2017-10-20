---
layout: page
title: "Q237681: PRB: Version not found Error in InterDev after rolling back a fi"
permalink: /kb/237/Q237681/
---

## Q237681: PRB: Version not found Error in InterDev after rolling back a fi

{% raw %}

	Article: Q237681
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:1.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe500 kbSSafe600 kbSSExplorer kbVisID100 kbVisID600 _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual InterDev, versions 1.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to get a file after executing a rollback in Visual SourceSafe(VSS),
	the following error may occur:
	
	  Unable to get file 'filename'. Server error: Visual Source Safe failure. A
	  "Version not found" error occurred while operating on file "SourceSafe file"
	  Verify that the file's permissions are correct and that you have write access
	  to the Visual Source Safe repository.
	
	CAUSE
	=====
	
	InterDev stores the Source Control information for files in the Server
	Extensions, including the current version of the file. When you execute a
	rollback in VSS, that version setting is not updated. When Visual Interdev tries
	to look for a file newer than what exists, the above error occurs.
	
	RESOLUTION
	==========
	
	Recalculate Resolution:
	
	1. Navigate to the \wwwroot\projectname\_vti_cnf directory.
	
	2. Find the file there with the same name as the one rolled back.
	
	3. Delete that file.
	
	4. Go into InterDev and select "Project | Web Project | Recalculate Links".
	
	Edit Resolution:
	
	1. Navigate to the \wwwroot\projectname\_vti_cnf directory.
	
	2. Find the file there with the same name as the one rolled back.
	
	3. Open it in Notepad or another text editor.
	
	4. Find the line "vti_sourcecontrolversion:SX|V3".
	
	5. Change the last number to be the correct version number that the file was
	  rolled back to.
	<A0> - If the file is now at version one, should look like:
	  "vti_sourcecontrolversion:SX|V1".
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Follow instructions below to rollback a web file that is under Source
	  Control.
	
	2. In InterDev, right click on the file and select "Get Latest Version".
	
	3. Error message appears.
	
	REFERENCES
	==========
	
	Additional information can be found in the Visual SourceSafe product
	documentation by searching for these titles:
	
	- How to Rollback to a Previous Version of a File
	
	Additional information can be found in the Visual InterDev product documentation
	by searching for these titles:
	
	- Updating Links
	
	Additional query words: vid server extensions
	
	======================================================================
	Keywords          : kbinterop kbSSafe500 kbSSafe600 kbSSExplorer kbVisID100 kbVisID600 _IK kbGrpDSSSafe 
	Technology        : kbVisIDsearch kbSSafeSearch kbAudDeveloper kbVisID100 kbVisID600 kbSSafe600 kbSSafe500
	Version           : WINDOWS:1.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
