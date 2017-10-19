---
layout: page
title: "Q150419: PRB: &quot;Add Files to SourceSafe&quot; Add-in Menu Item is Disabled"
permalink: /kb/150/Q150419/
---

## Q150419: PRB: &quot;Add Files to SourceSafe&quot; Add-in Menu Item is Disabled

	Article: Q150419
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe600 kbVBp400
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "Add Files to SourceSafe..." command is disabled for projects which are
	already under Source Code Control. This is true even if you add a form, class,
	or module to your currently controlled project.
	
	STATUS
	======
	
	The "Add Files to SourceSafe..." command is enabled until after the project is
	saved (via the Save Project command in the File menu). It is only enabled if
	there are files in the project which are not already under Source Code Control.
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic, and open a Visual Basic project which is in Visual
	  SourceSafe via the "Open New SourceSafe Project" command in the Add-Ins,
	  SourceSafe menu.
	
	2. On the Add-Ins menu, click SourceSafe. Note the "Add Files to SourceSafe..."
	  command is disabled.
	
	3. Check out the .VBP (or .MAK) file for the project via the Tools menu.
	
	4. Insert a new form, module, or class to the project via the Insert menu.
	
	5. On the Add-Ins menu, click SourceSafe.
	
	  NOTE: The "Add Files to SourceSafe..." command is still disabled.
	
	Steps to Demonstrate Behavior
	-----------------------------
	
	1. Follow steps 1-5 from Steps to Reproduce Problem section above.
	
	2. On the File menu, click Save Project to save the project.
	
	3. When asked to "Save File As", save the new form, class, or module to your
	  local project working directory. When asked to "Add to SourceSafe," click the
	  Cancel button to prevent the file from being automatically added to
	  SourceSafe. At this point, the new form exists on your local machine, but
	  SourceSafe does not have the file(s).
	
	4. On the Add-Ins menu, click SourceSafe. Note the "Add Files to SourceSafe..."
	  command is now enabled. If you select this command, it displays the "Add to
	  SourceSafe" dialog box, displaying all forms, modules, and classes which are
	  not already under Source Code Control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe600 kbVBp400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
