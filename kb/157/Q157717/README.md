---
layout: page
title: "Q157717: INFO: VSS 5.0 Readme: Sec. 2, General Notes and Tips"
permalink: kb/157/Q157717/
---

## Q157717: INFO: VSS 5.0 Readme: Sec. 2, General Notes and Tips

	Article: Q157717
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbsetup kbSSafe500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual SourceSafe Readme.wri file should be located in the SourceSafe root
	directory. It contains important information, some of which is not available in
	the printed documentation or the Help files. This article covers Section 2,
	GENERAL NOTES AND TIPS, of the Readme.wri file. Please see REFERENCES section
	for information on the other sections.
	
	The Readme.wri file includes:
	
	1.0  SOFTWARE INSTALLATION INFORMATION
	
	 1.1  (Administrator) Creating a Visual SourceSafe Installation on a
	      Server
	 1.2  (Each User) Using NETSETUP to Create a Personal Installation
	 1.3  Using the Custom Setup Option
	 1.4  Upgrading a Previous SourceSafe Installation
	 1.5  Using the Installation Maintenance Program
	 1.6  Uninstalling Visual SourceSafe
	 1.7  WININET and MFC DLLs
	 1.8  SourceSafe on RISC
	
	2.0  GENERAL NOTES AND TIPS
	
	 2.1  Back Up Your Visual SourceSafe Database, and run ANALYZE
	 2.2  Installing Two or More Visual SourceSafe Databases on One Computer
	 2.3. Loss of Network Connection Produces Numerical Error Message
	 2.4  Canceling a Client Setup
	 2.5  System Date/Time
	
	3.0  NEW FEATURES IN VISUAL SOURCESAFE 5.0
	
	 3.1  Archive Utility
	 3.2  Visual Merge
	 3.3  Project Diff
	 3.4  "Edit" Command
	 3.5 Open Databases3.6 Web Features
	 3.7 Exclusive Check Out
	
	4.0  NOTES FOR USERS OF VISUAL SOURCESAFE 4.0
	
	 4.1  No 16-bit Support
	 4.2  Get --> Get Latest Version
	 4.3  Results Display
	 4.4  Multiple Project Support in Visual Basic/Visual C++ Integration
	
	5.0  VISUAL SOURCESAFE HOME PAGE
	
	MORE INFORMATION
	================
	
	2.0  GENERAL NOTES AND TIPS
	---------------------------
	
	2.1 Back Up Your Visual SourceSafe Database, and run ANALYZE
	
	Before installing an upgrade to Visual SourceSafe, it is very advisable to back
	up your previous Visual SourceSafe database. The upgrade process may involve
	major data conversion, which is irreversible in the case of problems.
	
	Once Visual SourceSafe is installed, it is still advisable to back up your
	database on a very regular basis. Note that all Visual SourceSafe backups should
	be full backups, not incremental or differential.
	
	In addition to regular backups, it is advisable to run the ANALYZE program
	periodically, to check your Visual SourceSafe database for corruption. If
	corruption is found, the ANALYZE program can often be used to repair the
	problem. Updates to the ANALYZE tool are posted periodically to the Visual
	SourceSafe web site at:
	
	  http://www.msdn.microsoft.com/ssafe
	
	You may wish to check that site to see if there is a version of ANALYZE more
	recent than the one shipped with this product.
	
	2.2 Installing Two or More Visual SourceSafe Databases on One Computer
	
	The Visual SourceSafe installation was designed for one installation per
	computer. There might be occasions when you want to have two or more copies of
	Visual SourceSafe installed on your computer. This is difficult, however, since
	the second time you run SETUP to create a second server setup, the program goes
	into maintenance mode!
	
	The solution is the REGEDIT program in Windows NT or Windows 95. Go to the
	HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\MS SETUP (ACME)\TABLE FILES. You see two
	entries for Visual SourceSafe: SSADMIN.EXE, for the server installation from the
	CD-ROM, and SSEXP.EXE, for the network client setup. Delete these two entries
	and run SETUP again.
	
	2.3 Loss of Network Connection Produces Numerical Error Message
	
	If you are in the middle of a Visual SourceSafe session and lose your connection
	to a server over the network, the only message you see is a numerical message
	informing you of an unknown error. When you see, "unknown error - 20038," or
	something similar, you have lost your network connection. Restart Visual
	SourceSafe and continue your work.
	
	2.4 Canceling a Client Setup
	
	When you choose the Client Setup option to install Visual SourceSafe, you must
	type a path for the Visual SourceSafe server directory. If you click Cancel in
	the Database Location dialog box, setup displays the following message in error,
	"Microsoft Visual SourceSafe 5.0 Setup was completed successfully." Disregard
	this message: the setup was not completed. Although a directory tree was created
	on your hard disk for the client, you cannot connect with the database on the
	server.
	
	To correct this situation, edit the SRCSAFE.INI file in the local installation
	that you have just created. Add a line including the path to the SRCSAFE.INI
	file for the Visual SourceSafe database server in a #include statement. You can
	include a UNC path, for example:
	
	     #include \\SRCSERVR\PUBLIC\VSS\SRCSAFE.INI
	
	Alternatively, you can include the path to a mapped drive. For example:
	
	     #include R:\VSS\SRCSAFE.INI
	
	2.5 System Date/Time
	
	Visual SourceSafe uses the date/time which your local computer stores. If your
	computer is out of sync with another computer, unpredictable results may occur.
	For instance, you may check in a file after someone else, but SourceSafe may
	think your check-in happened first, because your system clock was off!
	
	The best solution for this problem is to synchronize your local date/time with
	the network on a regular basis. This will ensure that all users are in sync.
	
	REFERENCES
	==========
	
	For more information about other sections of the SourceSafe 5.0 Readme.wri file,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q157720 INFO: VSS 5.0 Readme: Sec. 1, Software Installation Information
	
	  Q157718 INFO: VSS 5.0 Readme: Sec. 3, New Features in Visual SourceSafe 5.0
	
	  Q157719Q157718Q157720 INFO: VSS 5.0 Readme: Sec. 4 & 5, Users of VSS
	  4.0/VSS Home Page
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : WINDOWS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
