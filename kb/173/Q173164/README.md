---
layout: page
title: "Q173164: PRB: Loading a Workspace Is Slow in Visual C++"
permalink: /kb/173/Q173164/
---

## Q173164: PRB: Loading a Workspace Is Slow in Visual C++

	Article: Q173164
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Developer Studio may appear to hang for 60 seconds or more when loading a
	workspace.
	
	MORE INFORMATION
	================
	
	Following are several known causes:
	
	1. You may have many nodes expanded in InfoView.
	
	  After loading the class information for a workspace, Developer Studio restores
	  the state of the InfoView pane to when you last saved the workspace. The more
	  nodes that are expanded in InfoView, the longer it takes to restore the
	  state. For optimal load time, collapse all of the nodes in InfoView, then
	  save the workspace.
	
	  This is not an issue in Visual C++, version 6.0, because HTML Help is used for
	  the Help engine rather than InfoView.
	
	
	2. You may have a corrupted workspace options file.
	
	  The workspace options file will have the same base name as your project with a
	  .OPT extension. This file does not contain the file lists or the build
	  options needed to successfully build your projects. You may safely delete
	  this file. If you find that you need to delete this file frequently, run a
	  disk analysis tool such as ScanDisk to test the surface of your disk for bad
	  sectors.
	
	3. You may have network or CD drive paths in your environment, Developer Studio
	  options, or project settings.
	
	  Windows NT
	  ----------
	
	  To edit paths from your environment in Windows NT, click the Start menu and
	  select Settings, Control Panel, and click the System icon. Select the
	  Environment tab. Note that there are two list boxes for environment
	  variables: System Variables and User Variables. Check both of these for any
	  network or CD drive paths.
	
	  Windows 95
	  ----------
	
	  To edit paths from your environment in Windows 95, use a text editor and open
	  the C:\autoexec.bat file.
	
	  The environment variables you are most interested in are PATH, INCLUDE, and
	  LIB. These contain the executable, include file, and library search paths
	  respectively.
	
	  Remove all paths that point to locations on your network or your CD-ROM
	  drive.
	
	  Developer Studio Options
	  ------------------------
	
	  To edit paths in your Developer Studio options, from the Tools menu, select
	  Options. Select the Directories tab. In the "Show directories for" list,
	  cycle through each of the four sets of paths--executable, include, library,
	  and source--and remove all paths that point to locations on your network or
	  your CD-ROM drive.
	
	  Project Settings
	  ----------------
	
	  To edit the paths in your project settings, from the Project menu, choose
	  Settings. Select the C++ tab. Select "Preprocessor" from the Category drop-
	  down list. Under "Additional include directories," remove all paths that
	  point to locations on your network or your CD-ROM drive. Select the Link tab.
	  Select "Input" from the Category drop-down list. Under "Additional include
	  directories," remove all paths that point to locations on your network or
	  your CD-ROM drive.
	
	  Save your projects and try again. If the problem persists, it may be that you
	  created a new configuration based on a configuration that did have an include
	  or library search path in the project settings that pointed to a location on
	  your network or your CD-ROM drive. In this case, Developer Studio saves the
	  options that the configuration was created with so that if you choose to
	  click the Reset button on the Project Settings dialog box, the project
	  settings will be reset to the options with which the configuration was
	  created. There are two ways to modify this:
	
	   - Delete all such configurations and recreate them.
	
	   - Use a text editor to modify the project file (.DSP) directly. This option
	     is dangerous and may render the project file unusable in certain
	     circumstances.
	
	4. The size of the .NCB is dependent on the number and size of your classes. It
	  is regenerated when you open your workspace. You may delete this file and see
	  if there is any improvement in load time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
