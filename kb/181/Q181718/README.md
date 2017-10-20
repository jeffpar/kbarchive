---
layout: page
title: "Q181718: PRB: &quot;Error Updating the SourceSafe Database via DDCONVW.EXE&quot;"
permalink: /kb/181/Q181718/
---

## Q181718: PRB: &quot;Error Updating the SourceSafe Database via DDCONVW.EXE&quot;

{% raw %}

	Article: Q181718
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While installing Visual SourceSafe you receive this error message:
	
	  Error updating the SourceSafe database via DDCONVW.EXE, error code 0. Please
	  contact product support for more information.
	
	RESOLUTION
	==========
	
	In the folder where you chose to install SourceSafe, there is a WIN32 subfolder,
	which in turn contains the file Ddconv.exe. Running DDCONV <path to data
	directory> should complete the installation successfully.
	
	
	MORE INFORMATION
	================
	
	Updating the database is the final phase of the installation. All the components
	have been installed, including a DATA subfolder. DDCONVW updates the files in
	this subfolder to SourceSafe 5.0 format. If this fails during setup, it can be
	done manually with the Ddconv.exe program.
	
	Assuming that SourceSafe is installed in C:\program files\devstudio\vss follow
	these steps:
	
	1. Go to a DOS prompt.
	
	2. Change the directory path to:
	
	  C:\Program Files\Devstudio\Vss\Win32
	
	3. Run DDCONV ..\data
	
	REFERENCES
	==========
	
	Visual SourceSafe version 5.0 User's Guide, Appendix B.
	
	c) Microsoft Corporation 1998, All Rights Reserved. Contributions by David de
	Groot, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
