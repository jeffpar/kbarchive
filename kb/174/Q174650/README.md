---
layout: page
title: "Q174650: PRB: VBG Files Do Not Appear to Work with Visual SourceSafe"
permalink: /kb/174/Q174650/
---

## Q174650: PRB: VBG Files Do Not Appear to Work with Visual SourceSafe

{% raw %}

	Article: Q174650
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe500 kbSSafe600 kbVBp500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Visual Basic group file (.vbg) that contains multiple,
	source-code controlled Visual Basic Projects (.vbp), only one .vbp appears to be
	under Visual SourceSafe control.
	
	CAUSE
	=====
	
	You have enabled the option to get the latest version of all the files when
	opening the project, but Visual Basic is not able to perform the get latest
	version on multiple projects simultaneously.
	
	RESOLUTION
	==========
	
	Disable the option "Get latest checked-in versions of files when opening a VB
	project" as follows:
	
	1. On the Tools menu, select SourceSafe and then select Options.
	
	2. Change the setting to "No" or "Ask".
	
	This change may have wider implications for the functionality of the Visual
	SourceSafe integration, which should be taken into account. It is only mentioned
	here as a resolution to the specific problem described in this article.
	
	-or-
	
	All .vbp's that do not show as being source controlled must be removed from and
	then added back to the .vbg. Visual SourceSafe integration then works with all
	the .vbp's.
	
	NOTE: In either case, to be sure you have the most recent copies of the project
	files in your working folder, you must do "Get Latest Version..." for each
	project in the group.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic project (.vbp), save it as "Project1" and add it to
	  Visual SourceSafe through the Visual Basic menus (that is, One the Tools
	  menu, select Visual SourceSafe and then select Add Project to SourceSafe.)
	
	2. From the File menu, choose Add Project and then add a new project. This will
	  create a Project Group (.vbg) file.
	
	3. Save the new .vbp as "Project2" and add it to Visual SourceSafe as in step 1.
	
	4. Exit Visual Basic, and save the .vbg as "Group1" file when prompted.
	
	5. Restart Visual Basic and open Group1.vbg - note that the Project Explorer's
	  glyphs indicate that one .vbp is source controlled, while the other is not.
	  The project that is not source controlled normally has a glyph indicating
	  that it is read-only.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe500 kbSSafe600 kbVBp500 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbZNotKeyword3 kbSSafe600 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
