---
layout: page
title: "Q192625: PRB: VC++ Shared Workspace File Loses Project Locations"
permalink: /kb/192/Q192625/
---

## Q192625: PRB: VC++ Shared Workspace File Loses Project Locations

{% raw %}

	Article: Q192625
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbSSafe500 kbSSafe600 kbVC500bug kbVC600bug kbFAQ kbDSupport kbGrpDSTools kbSsafe
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++.NET (2002) 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening a Visual C++ workspace file (.dsw), the following dialog box
	appears:
	
	  Browse for Project <project name>
	
	This dialog box shows the last known location for a project file (.dsp) in the
	workspace, and enables browsing for project files in other directories. This is
	normal behavior if a project file has been deleted or moved to another directory
	relative to the workspace file.
	
	However, the dialog box may also appear unexpectedly when the workspace file is
	shared; for example, by being checked into a source control system such as
	Microsoft SourceSafe.
	
	CAUSE
	=====
	
	The .dsw file normally contains the relative path of the .dsp file. However, the
	.dsw file stores the full path to the .dsp file when it exists in a directory
	tree outside of the .dsw file, such as on another drive.
	
	If two users of a source-controlled workspace check out a project to different
	locations, the .dsw file may be modified. Inserting a new project into the
	workspace or modifying dependencies will also rewrite the .dsw file, as will
	adding an ActiveX resource to a project. When the modified .dsw file is checked
	back in to source control, another user checking it out to a different path may
	experience this problem.
	
	RESOLUTION
	==========
	
	One of the following three workarounds may work in different build
	environments:
	
	- Remove the .dsw file from source control. Let each workstation maintain a
	  local copy of the .dsw file. Manually communicate workspace modifications to
	  all developers working with it.
	
	- Enforce a policy requiring workspaces and projects to be checked out to
	  identical file structures.
	
	- Permit .dsw modification and check-in from one workstation only. Users may
	  check out the .dsw file to other workstations.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	This problem can be a severe usability issue for developers using the Visual C++
	IDE, particularly for large teams. Both the .dsw and the .dsp files are plain
	text, and it is convenient to place both under source control so changes are
	propagated to an entire team.
	
	The .dsw file does not change until you add a new project, a dependency, or an
	ActiveX resource; however, once it is rewritten, this problem can surface. The
	workspace .opt file also holds the full path of the projects; this is a binary
	workstation-specific file and should not be placed under source control.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps simulate checking a .dsw file into a source control system:
	
	1. On one workstation, create a workspace in C:\proja with two projects, located
	  in C:\proja and C:\projb. In this example, the workspace is named Wksp.dsw;
	  the projects are named Proja.dsp and Projb.dsp.
	
	2. On a second workstation, copy the project directories from the first
	  workstation. Copy [1]c:\proja to [2]C:\proja, and from [1]C:\projb to
	  [2]d:\projb.
	
	3. Open Wksp.dsw on workstation 2. Note that it correctly displays the dialog
	  box to locate Projb.dsp.
	
	4. Close Wksp.dsw on workstation 2. Open Wksp.dsw in a text editor. Note that
	  the file paths have not changed from the original.
	
	5. Add a new project to Wksp.dsw on workstation 2, then close the workspace.
	  Again, open Wksp.dsw in a text editor. Note that the file paths have changed.
	
	6. Copy Wksp.dsw from the workstation 1 back to workstation 2, overwriting the
	  existing file in C:\proja.
	
	7. Open Wksp.dsw on workstation 1. Workstation 1 now displays the "Browse for
	  Project" dialog box for the .dsp file that is in C:\projb.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbSSafe500 kbSSafe600 kbVC500bug kbVC600bug kbFAQ kbDSupport kbGrpDSTools kbSsafe600FAQ 
	Technology        : kbVCsearch kbSSafeSearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbSSafe400 kbSSafe400a kbSSafe16bitSearch kbSSafe32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.0a,5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
