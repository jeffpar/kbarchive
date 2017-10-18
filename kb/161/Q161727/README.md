---
layout: page
title: "Q161727: PRB: SCC API Error &quot;Project Created&quot; Occurs When Opening a PJX"
permalink: kb/161/Q161727/
---

## Q161727: PRB: SCC API Error &quot;Project Created&quot; Occurs When Opening a PJX

	Article: Q161727
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbvfp500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a project (.pjx) in Visual FoxPro 5.0, the following error message
	appears:
	
	  SCC API error "Project created" occurred. The project will be opened without
	  source control.
	
	After the project opens, no source control glyphs appear in the project window,
	and no source control options are available on the Visual FoxPro 5.0 menu.
	
	CAUSE
	=====
	
	You deleted the SourceSafe project that was associated with this .pjx project.
	
	RESOLUTION
	==========
	
	For example, the project "Tastrade.pjx" is under SourceSafe control in a project
	named $/FoxApps/Tastrade.
	
	If you did not select the "destroy permanently" checkbox when you deleted the
	Tastrade project, the integration with the .pjx can be restored to its previous
	state by following these steps:
	
	1. Close the project (.pjx).
	
	2. The Visual SourceSafe Explorer lists a project named $/FoxApps/Tastrade that
	  does not have any files in it. You may have to collapse and expand the Visual
	  SourceSafe tree view to see this project. Select the project. On the File
	  menu, choose Delete.
	
	  IMPORTANT: Ensure that the "destroy permanently" checkbox is selected.
	
	3. In the Visual SourceSafe Explorer, highlight the parent project of the
	  project that was linked to the .pjx (in this example select $/FoxApps). On
	  the File menu, choose Properties. The Deleted Items tab lists the deleted
	  Tastrade project. Click "Recover." The $/FoxApps/Tastrade appears in the
	  Visual SourceSafe Explorer.
	
	4. Finally, select the Tastrade.pjm file (for every .pjx, a .pjm file is created
	  by the integration) in the Visual SourceSafe Explorer and check it out.
	
	NOTE: If you open Tastrade.pjx in Visual FoxPro, it now shows all of the
	integration glyphs and the history of the files.
	
	If you selected the "destroy permanently" checkbox when you deleted the Tastrade
	project, you can add the .pjx back to SourceSafe, but you lose the history of
	all the files. To do this, type the following Visual FoxPro commands in the
	Command Window:
	
	     CLOSE ALL
	     USE Tastrade.pjx
	     REPLACE ALL sccdata WITH ""
	     USE
	     MODIFY PROJECT Tastrade
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Add a project (.pjx) to source control as described in the "Visual FoxPro
	  Developer's Guide," Chapter 29, pages 678 [ASCII 150] 680, under the heading
	  "Putting Projects Under Source Control."
	
	2. Close the project (.pjx).
	
	3. Start the Visual SourceSafe Explorer, and delete the project that is
	  associated with the project (.pjx).
	
	4. In Visual FoxPro 5.0, open the project (.pjx) and the error occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbvfp500 
	Technology        : kbVFPsearch kbSSafeSearch kbAudDeveloper kbVFP500 kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	
