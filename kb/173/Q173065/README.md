---
layout: page
title: "Q173065: PRB: Problems After Branching Integrated DevStudio Projects"
permalink: /kb/173/Q173065/
---

## Q173065: PRB: Problems After Branching Integrated DevStudio Projects

	Article: Q173065
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600 kbVC500 kbVC600 kbFAQ kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are working on a Developer Studio project (DSP) that is source code
	controlled (SCC), the SCC project has been branched, and you are working on the
	branched version of the DSP, the following occurs:
	
	1. SCC operations such as Check In and Check Out are carried out in the
	  original, not the branched, project.
	
	2. The working folder for the original SCC project is reset to the working
	  folder of the branched project.
	
	CAUSE
	=====
	
	1. The .DSP (Developer Studio Project) and .DSW (Developer Studio Workspace)
	  files contain a reference to the SCC project that they were initially added
	  to. When those files were branched in the SCC application and then opened in
	  Visual Studio, they still referenced the project they were added to, not the
	  project they were branched into.
	
	2. From the SCC standpoint the original project has been opened in a different
	  folder (subdirectory), so the working folder setting is updated to point to
	  the new location.
	
	RESOLUTION
	==========
	
	The first resolution will work with any SCC provider that integrates with
	DevStudio the second is specific to Visual SourceSafe.
	
	NOTE: Both .DSP and .DSW files are automatically generated with warnings not to
	edit them. At this time, however, this problem cannot be resolved without
	editing them manually.
	
	SYMPTOM 1
	
	Resolution 1
	------------
	
	The resolution here assumes that you have also added the workspace file (DSW) to
	source control. If this is not the case, ignore references to checking in and
	checking out the .DSW, otherwise the resolution is identical.
	
	1. Check In or Undo Check Out of all checked out files, and then close Developer
	  Studio.
	
	2. From the SCC branched project, recursively Get all the files into their
	  working directories. Do this in the SCC application itself (such as the
	  Visual SourceSafe Explorer), not Developer Studio.
	
	3. Check Out the .DSW and all .DSP files from the branched workspace. As in step
	  2, do this in the SCC application.
	
	4. Edit the .DSP file(s), and remove the following lines:
	
	        # PROP Scc_ProjName ""$/<project name>", <physical file name>"
	        # PROP Scc_LocalPath "."
	
	5. In the .DSW, remove the lines:
	
	        begin source code control
	        end source code control
	
	  and all lines between them.
	
	6. Save and Check In the .DSW and .DSP(s).
	
	7. Delete the <workspace>.OPT file from the working folder of the branched
	  project.
	
	8. Delete vssver.scc and mssccprj.scc also, if they exist.
	
	9. Restart Visual Studio and open the local copy of the branched .DSW.
	
	10. From the DevStudio IDE add the .DSW to source control, this time add it to
	  the branched project.
	
	  Answer Yes to the following message:
	
	  A Microsoft Developer Studio project with the same name already exists in the
	  selected source control project. Do you want to reconnect to the existing
	  project?
	
	11. From the DevStudio IDE, check out the .DSW.
	
	12. For each project (.DSP) in the workspace choose Project, Add to Source
	  Control, and then add the .DSP back to the corresponding branched SCC
	  project. Answer Yes when prompted as in step 10. Also, answer Yes when
	  prompted to check out the .DSP file.
	
	13. Check In the .DSW and all .DSP files.
	
	Resolution 2 (Visual SourceSafe specific)
	-----------------------------------------
	
	1. Check In or Undo Check Out of all checked out files, and then close Developer
	  Studio.
	
	2. Check Out the .DSW and all .DSP (if there are multiple projects in the
	  workspace) files from the branched project. Do this in the Visual SourceSafe
	  Explorer.
	
	3. Find the physical file names for the branched project(s) by using the SS
	  Physical command. Make note of these file names. For additional information
	  on finding physical file names, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q131447 HOWTO: Use PHYSICAL Command to Find SourceSafe Database File
	
	4. Edit the .DSP files. Look for all of the lines that look like:
	
	        # PROP Scc_ProjName ""$/<project name>", <physical file name>"
	
	  Change the project name and the physical file name to match the branched
	  project and its physical file name.
	
	5. Edit the .DSW file. Look for all of the lines that look like:
	
	        "$/<project name>", <physical file name>
	
	  There will be one line for each .DSP in the workspace, and an additional line
	  under the "Global:" section if the .DSW itself is source controlled. As in
	  step 4, change the project name and the physical file name to match the
	  branched project and its physical file name.
	
	6. Save and Check In the .DSW and .DSP(s).
	
	7. Delete the <workspace>.OPT file from the working folder of the branched
	  project.
	
	8. Delete the vssver.scc and mssccprj.scc, if they exist.
	
	9. Open the either the local or the Visual SourceSafe copy of the project.
	
	SYMPTOM 2:
	
	Resolution
	----------
	
	1. Open the original project by clicking File, Open Workspace, Source Control in
	  the DevStudio IDE. Select the original SCC project.
	
	2. The "Create local project.." dialog box appears. In the "Create a new project
	  in the folder:" field you will see the working folder of the branched
	  project. Change this to the working folder of the original project. Click OK
	  to exit this dialog box.
	
	3. In the Open Workspace dialog box, click Open to reset the working folder to
	  the correct location.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the following steps, the Developer Studio project that you use must
	be SCC controlled.
	
	1. In the SCC application, branch the original project into a new project.
	
	2. In Developer Studio, enlist in the branched SCC project by clicking File,
	  Open Workspace, Source Control in Developer Studio, and selecting the
	  branched SCC project.
	
	3. Check Out a file in Developer Studio. Note that in the SCC application, the
	  checked out file is in the original, not the branched project. After closing
	  the Developer Studio workspace, the working folder for the original SCC
	  project is located in the branched project.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by David de
	Groot, Microsoft Corporation
	
	
	Additional query words: share wrong incorrect
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 kbVC500 kbVC600 kbFAQ kbSsafe600FAQ 
	Technology        : kbVCsearch kbSSafeSearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbSSafe600 kbSSafe500 kbVC500Search
	Version           : WINDOWS:5.0,6.0; winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
