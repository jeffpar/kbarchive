---
layout: page
title: "Q237847: INFO: The Role of the PJM File in VSS and VFP Integration"
permalink: /kb/237/Q237847/
---

## Q237847: INFO: The Role of the PJM File in VSS and VFP Integration

	Article: Q237847
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe500 kbSSafe600 kbvfp kbvfp500 kbvfp500a kbvfp600 _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The .pjm file is the Project MetaFile used by Visual FoxPro (VFP) and Visual
	SourceSafe (VSS) integration. Understanding its usage can help you troubleshoot
	certain problems that may arise when using the integration.
	
	MORE INFORMATION
	================
	
	The initial limitation of enabling multi-user development of a VFP project is
	that the VFP project files (.pjx and .pjt) are binary files, and therefore
	cannot be simultaneously checked out by multiple users. To resolve this, the
	integration uses the .pjm file, which is a text file. Based on the information
	in the .pjm file, the integration generates local copies of the .pjx file and
	.pjt file for each user. It is important that the .pjm file be always checked
	out to all users.
	For the .pjm mechanism to work correctly, you should observe the following
	guidelines:
	
	- Do not add the .pjx or .pjt files to VSS.
	
	- Enable multiple checkouts in the VSS administrator.
	
	- Never check in the .pjm file.
	
	- When choosing "Join Source Control Project" inside VFP, you receive a message
	  that the .pjm is already checked out to another user. Choose Yes on this
	  message. (Note that this is an informational message, not an error.)
	
	If you do not follow these guidelines, you can encounter problems synchronizing
	the VFP project's (.pjx) contents when one user adds files to, or removes files
	from the .pjx and other users try to update their local copy of the .pjx.
	In chronological order, when you update the project list, the integration
	component:
	
	1. Generates a new local project file list (.pjm file).
	
	2. Checks in the new project file list (with the option set to keep the file
	  checked out).
	
	3. Merges the local and central project file lists if there are differences. If
	  a merge conflict occurs, VFP displays a dialog box to help you resolve it.
	
	4. Rebuilds the local VFP project (.pjx) file based on the merged project file
	  list.
	
	5. Gets local copies of files added to the project by other developers.
	
	6. Prompts you to get the latest versions of the project files.
	
	7. Refreshes the display in the Project Manager to reflect changes.
	
	To troubleshoot synchronizing changes to the project file list between users,
	test for success or failure of each step in turn. Assume that UserA has added or
	removed files and that UserB is synchronizing his/her local copy of the VFP
	project (.pjx).
	
	1. After updating the project list, UserA should open his/her local copy of the
	  .pjm file in a text editor, and make sure that the [Project Files] section
	  has been correctly updated. If not, the usual cause is that the .pjm file is
	  read-only.
	
	2. Compare the latest version of the .pjm file in VSS with UserA's local copy.
	  You can do this either by viewing it from within the VSS Explorer, or by
	  choosing "Show Project List Differences" from the Project, Source Control
	  menu. The files should be identical. If not, try checking the file in from
	  within the VSS Explorer, with the option for "Keep checked out" checked. Make
	  sure that you can successfully check the file in.
	
	3. UserB should repeat the test from step one.
	
	REFERENCES
	==========
	
	For additional information about Visual FoxPro and Visual SourceSafe
	integration, please see the following article(s) in the Microsoft Knowledge
	Base:
	
	  Q237843 HOWTO: Synchronize a Source Controlled VFP Project with Multiple
	  Developers
	
	  Q157636 HOWTO: Set Up Source Code Control with Visual SourceSafe
	
	Visual FoxPro Documentation, Programmer's Guide, Creating Enterprise Solutions,
	Developing in Teams
	
	Additional query words: .pjm .pjt .pjx metafile
	
	======================================================================
	Keywords          : kbinterop kbSSafe500 kbSSafe600 kbvfp kbvfp500 kbvfp500a kbvfp600 _IK kbGrpDSSSafe 
	Technology        : kbVFPsearch kbSSafeSearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
