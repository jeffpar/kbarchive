---
layout: page
title: "Q130176: Project versus File Labeling in SourceSafe"
permalink: /kb/130/Q130176/
---

## Q130176: Project versus File Labeling in SourceSafe

{% raw %}

	Article: Q130176
	Product(s): Microsoft SourceSafe
	Version(s): 2.20 3.0x 3.10 |2.20 3.0x 3.10 |
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ability to label both projects and individual files from within SourceSafe
	gives the user a great deal of flexibility for source code control. The label
	option can reduce redundancy within a database and in some cases can help the
	user to better track projects.
	
	MORE INFORMATION
	================
	
	Many organizations track version numbers and build numbers for programs. Some
	users create a new project for each build or version while others label
	individual files. Neither approach is wrong, but it can limit your ability to
	fully tap the power of SourceSafe.
	
	File labels are best used for tracking the progress of an individual file
	independently from the version of the program that it is being used in. For
	example, Microsoft Windows uses the CTRL3DV2.DLL file for 3-D enhancements to
	various windows. The version of this file is important to many programs, and
	therefore the version on this file is of high importance. This is how file-level
	labels are best used. Tracking individual files (not necessarily all files
	though) helps during development and testing.
	
	Project-level labels are best used for tracking versions or builds of a program.
	By placing a label on the parent project of certain programs, all of the child
	projects and files inherently carry that label. Thus, one label on the parent is
	the same as putting a label on each individual file under that parent project.
	
	NOTE: Labels for the individual files within the project do not change if the
	individual file label is changed. This saves a lot of time for the user and
	reduces any errors from putting the wrong version label on a file or skipping a
	file that should have been labeled.
	
	By labeling the project, the user can reduce the number of projects that must be
	used to track the life of a program. Normally if a development team is working
	on version 5.0 of a program, there will be little use for version 1.0 of the
	program. If a separate project is used for each version, then the version 1.0
	project will remain unless it is deleted (along with the history), or just be
	left over in the system (taking up valuable disk space).
	
	If all of the parent projects have been labeled properly, then the development
	team has the ability to GET a previous version of a program, ROLLBACK all
	changes to the program, or SHARE-SEPARATE an old version of a program for
	parallel development or bug fixes. No extra space is being taken up by this, the
	number of excess projects is reduced, there is less risk of passing the 8191
	object limitation (no more than 8191 projects or files under a single
	subproject), and there is a more concise form of version/build level
	organization.
	
	Additional query words: ss3 vss vbwin 4.00 2.20 3.00 3.02 3.04 3.10
	
	======================================================================
	Keywords          :  
	Version           : 2.20 3.0x 3.10 |2.20 3.0x 3.10 |
	
	=============================================================================
	

{% endraw %}
