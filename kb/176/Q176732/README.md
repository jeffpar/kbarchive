---
layout: page
title: "Q176732: PRB: Read-Only Files in Shadow Folder Are Not Updated"
permalink: kb/176/Q176732/
---

## Q176732: PRB: Read-Only Files in Shadow Folder Are Not Updated

	Article: Q176732
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0
	Operating System(s): 
	Keyword(s): kbSSafe kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Files that are marked read-only in a shadow folder are not updated if the "Set
	read-only flag for all files" check box is not selected.
	
	CAUSE
	=====
	
	In the Visual SourceSafe Administrator, the "Set read-only flag for all files"
	check box is selected by default on the Shadow Folders tab under the
	Tools/Options menu. This allows Visual SourceSafe to mark files as read- only in
	the shadow folder. It also allows Visual SourceSafe to modify the contents of
	read-only files in the shadow directory when files are checked in.
	
	If the file in the shadow directory is marked read-only and the "Set read- only
	flag for all files" check box is not selected, the error "access to file
	<Shadow location>\<filename> denied" occurs and the contents of the
	file in the shadow directory are not updated.
	
	RESOLUTION
	==========
	
	Make sure that files in the shadow directory are not marked read-only if you are
	not using the "Set read-only flag for all files" flag.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project and add files, or use an existing project in Visual
	  SourceSafe.
	
	2. In the Visual SourceSafe Administrator (ssadmin.exe), on the Tools menu click
	  Options, click the Shadow Folders tab, and then set a shadow folder for the
	  project referred to in Step 1.
	
	3. Clear the "Set read-only flag for all files" check box.
	
	4. Make sure the shadow directory is populated (this should happen
	  automatically). You may have to do a get of the project files to the shadow
	  folder.
	
	5. Using the Windows Explorer or the attrib command, make the files in the
	  shadow directory read-only.
	
	6. Check out a files, make a change, and then check in a file in the project.
	  You will see the error "Access to file <Path to Shadow
	  Dir>\<filename> denied."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0
	Issue type        : kbprb
	
	=============================================================================
	
