---
layout: page
title: "Q138344: HOWTO: Set up a Shadow Dir in Visual SourceSafe Administrator"
permalink: kb/138/Q138344/
---

## Q138344: HOWTO: Set up a Shadow Dir in Visual SourceSafe Administrator

	Article: Q138344
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual SourceSafe gives the administrator the ability to configure the system
	for shadow directories. A shadow directory is a centralized directory on your
	network server that contains all the files in a project. The shadow directory
	contains a copy of the most recently checked-in version of each file in the
	project. Therefore, it serves as a centralized area to view and compile your
	source code.
	
	MORE INFORMATION
	================
	
	Setting up shadow directories in Visual SourceSafe is a multiple-step process.
	This article shows the SourceSafe administrator how to properly configure the
	system for a shadow directory.
	
	Step-by-Step Procedure
	----------------------
	
	1. Open the Visual SourceSafe Administrator.
	
	  a. On the Tools menu click Options.
	
	  b. Click the Shadow Directories tab.
	
	  c. Set the project to be shadowed. Use the Browse button if necessary.
	
	  d. Set the directory to which this project will be shadowed.
	
	  e. Set the shadow directory options in the "Files in Shadow Directory"
	     section.
	
	  f. Click OK to save these options.
	
	NOTE: Close the Visual SourceSafe Administrator and Explorer before proceeding to
	the next step, so changes will take effect.
	
	2. Go to the directory that you set in step 1.d. Delete all files from that
	  directory that are in the SourceSafe project that is to be shadowed to that
	  directory.
	
	  NOTE: If you are using Visual SourceSafe version 5.0 or later, you can skip
	  the next step.
	
	3. Go to the Visual SourceSafe Explorer.
	
	  a. Select the project that was shadowed in the Visual SourceSafe
	     Administrator.
	
	  b. Click the Get toolbar button. On the SourceSafe menu, click Get, or press
	     CTRL+G to bring up the Get dialog box.
	
	  c. Enter the directory to which the project was shadowed, and click OK.
	
	At this point, a copy of all of the files for the project will be placed in the
	shadow directory. Whenever the file is updated in Visual SourceSafe, the file
	will be updated in the shadow directory as well.
	
	REFERENCES
	==========
	
	Query using "Shadow Directories" in the Visual SourceSafe Help file.
	
	Query "Shadow" in the Visual SourceSafe Books Online.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q124529 HOWTO: Access SourceSafe Code From a Central Directory
	
	  Q142763 PRB: Path Problems on Client Installation of SourceSafe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
