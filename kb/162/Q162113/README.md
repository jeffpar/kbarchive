---
layout: page
title: "Q162113: PRB: Project Modification Not Reflected in Shadow Directory"
permalink: kb/162/Q162113/
---

## Q162113: PRB: Project Modification Not Reflected in Shadow Directory

	Article: Q162113
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
	
	SYMPTOMS
	========
	
	When you delete, share, or rename a project that is shadowed in Visual
	SourceSafe, the modification is not reflected in the shadow directory.
	
	RESOLUTION
	==========
	
	The following procedure rebuilds the shadow directory so that it accurately
	reflects the Visual SourceSafe database structure:
	
	1. Open or switch to the Visual SourceSafe Explorer and recursively undo all
	  checkouts for the shadowed project.
	
	2. On the Tools menu, click Options. On the General tab, set the "Check in
	  unchanged files" option to Check In. Close the Options dialog box.
	
	3. In the Windows Explorer, delete the shadow directory tree.
	
	4. Right-click the shadowed project and click Check Out. Select the Recursive
	  check box. (In version 5.0, click Advanced and clear the "Allow multiple
	  checkouts" check box). Click OK. Answer "Yes All" when prompted to create the
	  shadow directory.
	
	5. Right-click the shadowed project and click Check In. Select the Recursive
	  check box and click OK.
	
	NOTE: When you follow this procedure, if appropriate, you may choose additional
	options such as Remove Local Copy (during Check In) or OverRide Working
	Directories (during Check Out and Check In).
	
	STATUS
	======
	
	This behavior is by design. However, please note that renaming, deleting, or
	sharing a file within a shadowed project is immediately reflected within the
	shadow directory.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open or switch to the Visual SourceSafe Explorer. Create a Project named
	  Shadow that has a subproject named Shadow1. Add two files, one to Shadow and
	  the other to Shadow1.
	
	2. Close the Visual SourceSafe Explorer and open the Visual SourceSafe Admin
	  Utility. On the tools menu, click Options. Select the Shadow Folders tab
	  (Shadow Directories tab in Version 4.0) and set the shadow directory for
	  $/Shadow to C:\Shadow. Close the Admin Utility.
	
	3. Open the Visual SourceSafe Explorer and do a recursive check-out on $/Shadow.
	  Note that the shadow directory, C:\Shadow, contains the subproject and both
	  of the added files. Undo the checkout, and then rename the file in
	  $/Shadow/Shadow1. Note that this change is immediately reflected in the
	  Shadow directory C:\Shadow\Shadow1.
	
	4. Share the file from $/Shadow to $/Shadow/Shadow1. Note that this change is
	  also immediately reflected in C:\Shadow\Shadow1.
	
	5. Rename the project $/Shadow/Shadow1. Note that the shadow directory tree is
	  unaffected.
	
	6. Delete (but do not permanently destroy) the project $/Shadow/<renamed>.
	  Note that the shadow directory tree is unaffected. Right-click the $/Shadow
	  project, and choose Properties. Recover the deleted project from the Deleted
	  Items tab.
	
	7. Follow the procedure in the RESOLUTION section of this article. Note that the
	  shadow directory now accurately reflects the Visual SourceSafe project
	  structure.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
