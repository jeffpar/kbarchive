---
layout: page
title: "Q180945: HOWTO: Disconnect a Project from Source Control"
permalink: /kb/180/Q180945/
---

## Q180945: HOWTO: Disconnect a Project from Source Control

{% raw %}

	Article: Q180945
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 03-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to disconnect a Visual C++ project from source
	control without removing the project from the source control database.
	
	MORE INFORMATION
	================
	
	The following steps give instructions on how to manually disconnect a Visual C++
	project from source control. We recommend that you do this only if you are
	experiencing extraordinary circumstances that you cannot work around. One such
	instance may be that you receive the error message:
	
	  Only one Database Connection is Supported at a time.
	
	To disconnect a Visual C++ 4.x project from source control:
	
	1. Close the workspace containing the project in Developer Studio.
	
	2. Delete the .mdp file for the workspace.
	
	3. Delete the Mssccprj.scc file in the same directory with the .mdp for the
	  workspace.
	
	To disconnect a Visual C++ 5.0 project from source control:
	
	WARNING: Editing the project (.dsp) and workspace (.dsw) files could render these
	files unreadable by Developer Studio. Edit these files only in the way
	prescribed in this article. Always make a backup of these files before editing
	them.
	
	1. If you have a workspace open containing the project in Developer Studio,
	  close the workspace.
	
	2. Open the workspace file (.dsw) in a text editor. Remove the following lines
	  and everything in between them: begin source code control end source code
	  control
	
	3. Save the workspace file.
	
	4. Open the project file (.dsp) in a text editor. Remove the two lines that
	  begin with the text below:
	
	  # PROP Scc_ProjName
	  # PROP Scc_LocalPath
	
	5. Save the project file.
	
	6. Delete the workspace options file (.opt).
	
	7. Delete the Visual SourceSafe data files, Mssccprj.scc and vssver.scc, if they
	  exist.
	
	8. Open the workspace containing the project in Developer Studio. The project
	  should no longer be under source control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbVCsearch kbVC400 kbSSafeSearch kbAudDeveloper kbVC500 kbVC32bitSearch kbSSafe600 kbSSafe500 kbVC500Search
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
