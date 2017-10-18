---
layout: page
title: "Q154400: PRB: Cannot Map File to the Project &quot;&#36;&quot; Message in Dev Studio"
permalink: kb/154/Q154400/
---

## Q154400: PRB: Cannot Map File to the Project &quot;&#36;&quot; Message in Dev Studio

	Article: Q154400
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding the files of a Visual C++ project to Source Code Control, you may
	get the error:
	
	  "Can't map file to the Project $"
	
	This may be caused by a corrupt .mdp file in Developer Studio.
	
	WORKAROUND
	==========
	
	One solution is to remove the .mdp file and reopen the project using the .mak
	file. The following will recreate the .mdp file:
	
	1. From the File menu, choose Open Workspace.
	
	2. Choose Makefiles (*.mak) from the list files of type ComboBox.
	
	3. Select the appropriate makefile, and choose OK.
	
	Add the project again. You should be able to see, select, and create projects in
	Visual SourceSafe from the Add SourceSafe Project dialog.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The .mdp file is a wrapper for the .mak file that contains Visual SourceSafe
	information about the project. Developer Studio can recreate this file, if
	needed.
	
	Also, if any of the files from your project did manage to get put into the $/
	project in Visual SourceSafe, they should be removed.
	
	Additional query words: visual c++
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
