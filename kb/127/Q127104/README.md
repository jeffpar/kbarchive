---
layout: page
title: "Q127104: HOWTO: Set Up Multiple SourceSafe Databases"
permalink: kb/127/Q127104/
---

## Q127104: HOWTO: Set Up Multiple SourceSafe Databases

	Article: Q127104
	Product(s): Microsoft SourceSafe
	Version(s): Win3.x:3.1,4.0,5.00; Winnt:3.1,4.0,5.0; Mac:3.1; Unix:3.1; MS-DOS:3.1,4.0,5.0;
	Operating System(s): 
	Keyword(s): kbSSafe
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, version 3.1 
	- Microsoft SourceSafe for Windows NT, version 3.1 
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft does not recommend that you set up multiple SourceSafe databases in
	versions of SourceSafe earlier than version 5.0. However, sometimes you may find
	that multiple SourceSafe databases are needed.
	
	NOTE: You cannot share files between multiple databases. You cannot move files
	between databases and still retain the history and differences. And you cannot
	merge separate databases.
	
	MORE INFORMATION
	================
	
	The printed documentation outlines three ways to implement multiple SourceSafe
	databases:
	
	- Use multiple installations of SourceSafe. This is the simplest method. But
	  the replication of the SourceSafe executables, and the multiple Ss.ini files
	  for each user will be difficult to maintain.
	
	- Use multiple Srcsafe.ini files. This is easier to maintain because fewer
	  files are replicated. It uses the environment variable SSDIR to find the file
	  Srcsafe.ini. Then looks for the "Data_Path" variable in that file to find out
	  the DATA directory that contains your files and projects. This method
	  requires that the MS-DOS SET command be executed before you enter Visual
	  SourceSafe.
	
	- Use multiple Data_Path settings. This method completely avoids redundant
	  files. It uses a SourceSafe feature that allows user added platform
	  specifiers. In MS-DOS, use the SET command as in this example:
	
	  SET SSINIENV = BOB
	
	  Then, in the srcsafe.ini file include something like this:
	
	  Data_Path (BOB) = X:\SS\DATA
	
	  X: is the mapping of the drive from the network, and SS\DATA is the location
	  of the data.
	
	  IMPORTANT NOTE: This environment variable is set in MS-DOS, so Windows will
	  accept it, but cannot change it. Therefore, it is possible to have multiple
	  MS-DOS sessions open with different SourceSafe databases, but you can't do
	  the same thing in the Windows platform. To accomplish this, open an MS-DOS
	  box, and change the SET SSINIENV appropriately. Then start the MS-DOS version
	  of SourceSafe in the MS-DOS box. You can do this as many times as your system
	  will support. An alternative for Windows users is to have multiple icons with
	  different command lines that indicate the platform specifiers. An example of
	  such a command line is:
	
	  X:\VSS\SSEXP.EXE /DBOB
	
	NOTE: The name of the current database is displayed in the Visual SourceSafe
	Explorer title bar. The database name can be assigned through the Visual
	SourceSafe Administrator [Tools][Options] General dialog box.
	
	NOTE: The information in this article applies to Visual SourceSafe 5.0 but is not
	necessary with the new "Open Database" feature. For more information about
	setting up multiple databases in Visual SourceSafe 5.0, please see section 4.4.
	in the following article in the Microsoft Knowledge Base:
	
	  Q157719 INFO: VSS 5.0 Readme: Sec. 4 & 5, Users of VSS 4.0/VSS Home Page
	
	REFERENCES
	==========
	
	SourceSafe "User Guide," version 3.1, Chapter 5
	
	Visual SourceSafe "User Guide," version 4.0, Chapter 8
	
	Visual SourceSafe "User Guide," version 5.0, Chapter 5, pages 179-182
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310 kbSSafe310DOS kbSSafe310NT
	Version           : Win3.x:3.1,4.0,5.00; Winnt:3.1,4.0,5.0; Mac:3.1; Unix:3.1; MS-DOS:3.1,4.0,5.0;
	Issue type        : kbhowto
	
	=============================================================================
	
