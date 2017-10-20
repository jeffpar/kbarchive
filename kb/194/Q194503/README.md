---
layout: page
title: "Q194503: PRB: VFP6/VSS6 File Could Not Be Mapped to SourceSafe Project"
permalink: /kb/194/Q194503/
---

## Q194503: PRB: VFP6/VSS6 File Could Not Be Mapped to SourceSafe Project

{% raw %}

	Article: Q194503
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe600 kbvfp600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding a project to SourceSafe in the Visual FoxPro (VFP) integrated
	development environment (IDE) you receive the message:
	
	  File <filename> could not be mapped to the SourceSafe project
	  <project name>.
	
	NOTE: This article uses the term "pjx" to refer to the VFP project, and "project"
	to refer to a SourceSafe project.
	
	CAUSE
	=====
	
	The project (.pjx) contains a file that is not in the home directory (the one
	that contains the .pjx file) or a subdirectory underneath it. The relative path
	from the .pjx file is stored in the Name field of the PJX. (You need to USE the
	.pjx as a table in order to see this.)
	
	The SourceSafe integration returns the error when it cannot resolve this relative
	path to the .vbp file in its database.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q164684 "File or Project not Found" Adding Files via Integration
	
	RESOLUTION
	==========
	
	It is recommended that all files in the pjx be either in the home directory or
	in a subdirectory underneath it.
	
	Alternatively, you can create a project structure in SourceSafe that mirrors the
	directory structure on your hard drive before adding the pjx to SourceSafe.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a directory structure similar to:
	
	     C:\ 
	         projects\ 
	                   pjxhome\ 
	                   pjxother\ 
	
	2. In VFP create a project ("proj1.pjx") and save it in the pjxhome
	  subdirectory.
	
	3. With Proj1 project open, from the VFP project manager, select the Code Tab
	  and then the New button to create a new program that will be added to the
	  project. Save the program as program1.prg in the pjxother subdirectory.
	
	4. Add the pjx to SourceSafe, creating a new project to store the pjx. Make sure
	  program1.prg is selected in the "Add Files to Source Control" dialog box.
	
	RESULTS: You will receive the message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe600 kbvfp600 
	Technology        : kbVFPsearch kbSSafeSearch kbAudDeveloper kbVFP600 kbSSafe600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
