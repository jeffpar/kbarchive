---
layout: page
title: "Q157718: INFO: VSS 5.0 Readme: Sec. 3, New Features in Visual SourceSafe"
permalink: kb/157/Q157718/
---

## Q157718: INFO: VSS 5.0 Readme: Sec. 3, New Features in Visual SourceSafe

	Article: Q157718
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbSSafe400 kbSSafe500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual SourceSafe Readme.wri file should be located in the SourceSafe root
	directory. It contains important information, some of which is not available in
	the printed documentation or the Help files. This article covers Section 3, NEW
	FEATURES IN VISUAL SOURCESAFE 5.0. Please see REFERENCES below for more
	information on other sections.
	
	The Readme.wri file includes:
	
	1.0 SOFTWARE INSTALLATION INFORMATION
	
	  1.1 (Administrator) Creating a Visual SourceSafe Installation on a Server
	  1.2 (Each User) Using NETSETUP to Create a Personal Installation
	  1.3 Using the Custom Setup Option
	  1.4 Upgrading a Previous SourceSafe Installation
	  1.5 Using the Installation Maintenance Program
	  1.6 Uninstalling Visual SourceSafe
	  1.7 WININET and MFC DLLs
	  1.8 SourceSafe on RISC
	
	2.0 GENERAL NOTES AND TIPS
	
	  2.1 Back Up Your Visual SourceSafe Database, and run ANALYZE
	  2.2 Installing Two or More Visual SourceSafe Databases on One Computer
	  2.3. Loss of Network Connection Produces Numerical Error Message
	  2.4 Canceling a Client Setup
	  2.5 System Date/Time
	
	3.0 NEW FEATURES IN VISUAL SOURCESAFE 5.0
	
	  3.1 Archive Utility
	  3.2 Visual Merge
	  3.3 Project Diff
	  3.4 "Edit" Command
	  3.5 Open Databases
	  3.6 Web Features
	  3.7 Exclusive Check Out
	
	4.0 NOTES FOR USERS OF VISUAL SOURCESAFE 4.0
	
	  4.1 No 16-bit Support
	  4.2 Get --> Get Latest Version
	  4.3 Results Display
	  4.4 Multiple Project Support in Visual Basic/Visual C++ Integration
	
	5.0 VISUAL SOURCESAFE HOME PAGE
	
	MORE INFORMATION
	================
	
	3.0  NEW FEATURES IN VISUAL SOURCESAFE 5.0
	------------------------------------------
	
	Microsoft Visual SourceSafe 5.0 adds many new features. Some of the highlights
	include:
	
	3.1 Archive Utility
	
	The command-line utilities SSARC and SSRESTOR are the answers to the two most
	important features missing from SourceSafe 4.
	
	- How to get rid of old versions of my project (without destroying the whole
	  project)
	
	- How to move projects from one SourceSafe database to another (while
	  preserving histories)?
	
	Note that the archive utility requires administrator-level privileges to run. If
	you do not give the "ADMIN" user a SourceSafe password, any user can run the
	archive utility.
	
	3.2 Visual Merge
	
	When you merge a file (due to multiple checkouts, or after a branch), what if
	there is a conflict: more than one user edited the same line of code? In Visual
	SourceSafe 4.0, you had to edit a text file and look for greater- than and
	less-than markers. In 5.0, the visual merge gives you point-and- click control
	over the merging and conflict resolution process.
	
	3.3 Project Diff
	
	Click on a project, and then click "Difference." The dialog shows you the
	differences between your current project in SourceSafe, and your working
	directory: nothing new there. But inside the dialog, you can now Get, Check Out,
	Check In, Add, Delete, and Diff files. In other words, project diff is now a
	whole new interface, designed to give you a graphical way of reconciling
	SourceSafe with your local directory.
	
	3.4 "Edit" Command
	
	You can now double-click on a file in the SourceSafe Explorer to edit that file
	in your working directory instead of just viewing the file in SourceSafe.
	
	3.5 Open Databases
	
	Inside the SourceSafe Explorer, choose "Open SourceSafe Database" from the file
	menu to change your view to another SourceSafe database.
	
	3.6 Web Features
	
	The new "Web" menu adds features specifically designed to help users who use
	Visual SourceSafe to manage HTML and other Web files.
	
	3.7 Exclusive Check Out
	
	If you configure SourceSafe to allow multiple checkouts in the Admin program, a
	user can still designate a particular checkout as "exclusive." An exclusive
	checkout is represented by a red border around the icon in the SourceSafe
	Explorer.
	
	Note that when the administrator has disabled multiple checkouts, all checkouts
	are exclusive.
	
	REFERENCES
	==========
	
	For more information about other sections of the SourceSafe 5.0 Readme.wri file,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q157720 INFO: VSS 5.0 Readme: Sec. 1, Software Installation Information
	
	  Q157717 INFO: VSS 5.0 Readme: Sec. 2, General Notes and Tips
	
	  Q157719 INFO: VSS 5.0 Readme: Sec. 4 & 5, Users of VSS 4.0/VSS Home Page
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	
