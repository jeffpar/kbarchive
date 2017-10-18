---
layout: page
title: "Q157720: INFO: VSS 5.0 Readme: Sec. 1, Software Installation Information"
permalink: kb/157/Q157720/
---

## Q157720: INFO: VSS 5.0 Readme: Sec. 1, Software Installation Information

	Article: Q157720
	Product(s): Microsoft SourceSafe
	Version(s): Win3.x:5.0
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
	the printed documentation or the Help files. This article covers Section 1,
	SOFTWARE INSTALLATION INFORMATION, of the readme.wri file. Please see REFERENCES
	below for more information on the other sections.
	
	MORE INFORMATION
	================
	
	The Readme.wri includes:
	
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
	
	1.0  SOFTWARE INSTALLATION INFORMATION
	--------------------------------------
	
	The first step in installing Visual SourceSafe is the Server Setup: the Visual
	SourceSafe administrator creates the SourceSafe database on a network server
	that all users have access to, and adds all users to the Visual SourceSafe user
	list. At this point, all users can begin running Visual SourceSafe directly from
	the server: no further installation is required.
	
	However, each user may wish to take a second step and do a personal Network
	Setup. This step improves performance and reduces network traffic, by copying
	the Visual SourceSafe executables to the user's hard drive. More important, this
	step registers Visual SourceSafe for direct integration into host environments
	such as Microsoft Visual Basic (Enterprise and Professional Editions, versions
	4.0 and above), Microsoft Visual C++ (versions 4.0 and above), Microsoft Access
	(requires the Office Developer Edition), Microsoft FrontPage (FrontPage '97 and
	above), Microsoft Visual J++ (all versions), Microsoft Internet Studio (all
	versions), and Microsoft Visual FoxPro (versions 5.0 and above). The Visual
	SourceSafe integration into these environments will not work until the user has
	done a network or client setup.
	
	The Visual SourceSafe Setup program can also be used to upgrade an existing
	Visual SourceSafe installation, or to perform maintenance (adding and removing
	components) on an existing installation.
	
	1.1 (Administrator) Creating a Visual SourceSafe Installation on a Server
	-------------------------------------------------------------------------
	
	The first step in creating a new Visual SourceSafe installation, or upgrading an
	existing installation, is taken by the Visual SourceSafe administrator. Run
	SETUP.EXE program on the Visual SourceSafe disk. SETUP asks for the directory in
	which to install Visual SourceSafe. Choose a directory on your network, such as
	R:\VSS, that is accessible to everyone who will be using Visual SourceSafe. From
	the Setup options, choose the Server Setup option.
	
	If you are creating a new Visual SourceSafe installation, an empty Visual
	SourceSafe database is created for you. Your next duty is to run the Visual
	SourceSafe Administrator's program and add all your users to the Visual
	SourceSafe user list. (The number of users that you can legally add to this list
	is based on the number of Visual SourceSafe licenses you have purchased.)
	
	If you are upgrading an existing Visual SourceSafe installation, see section 1.4
	below.
	
	After the successful completion of the Server Setup, your users are ready to
	begin running Visual SourceSafe, or to use NETSETUP to create their personal
	installations.
	
	1.2 (Each User) Using NETSETUP to Create a Personal Installation
	----------------------------------------------------------------
	
	After an administrator has created a Visual SourceSafe installation on the
	server, users can perform a network setup. This step copies the Visual
	SourceSafe executables to your hard disk, pointing back to the central database
	on the server. It also creates shortcuts in your Start Menu, making it easier to
	run Visual SourceSafe. Most importantly, the network setup registers Visual
	SourceSafe on your computer, enabling direct integration of Visual SourceSafe
	menus into Integrated Development Environments (IDEs) such as Microsoft Visual
	Basic (Enterprise and Professional Editions, versions 4.0 and above), Microsoft
	Visual C++ (versions 4.0 and above), Microsoft Access (requires the Office
	Developer Edition), Microsoft FrontPage (FrontPage '97 and above), Microsoft
	Visual J++ (all versions), Microsoft Internet Studio (all versions), and
	Microsoft Visual FoxPro (versions 5.0 and above).
	
	To perform a network setup, you do not need the Visual SourceSafe disk. Instead,
	go to the network location where the Visual SourceSafe server was installed by
	your administrator and run NETSETUP.EXE. Specify a new directory on your
	computer's hard disk, such as C:\VSS, as the location of the Visual SourceSafe
	client.
	
	After the successful completion of the Network Setup, you are ready to begin
	running Visual SourceSafe.
	
	An alternative to the network setup is the client setup. Run SETUP.EXE from the
	Visual SourceSafe disk, and choose "Client Setup" option. At the end of the
	Client setup, you will be prompted to enter the network location of Visual
	SourceSafe server installation created by your administrator. The end result of
	a Client Setup is exactly the same as the end result of a Network Setup,
	including registration for integration: however, the process is much slower,
	since it requires decompressing files from the disk. For this reason, NETSETUP
	is generally preferable.
	
	You might see a "File not found" error message during the NETSETUP procedure if
	the Visual SourceSafe server setup was installed by using the Custom setup
	option. For example, the administrator installing Visual SourceSafe might have
	chosen not to install certain non-essential files, such as the help system or
	the online version of the user's guide. In these cases, you can ignore the
	message and continue with the NETSETUP. If any of the essential files, such as
	the Visual SourceSafe executable program or the database, are missing, contact
	your administrator.
	
	1.3 Using the Custom Setup Option
	---------------------------------
	
	When installing Visual SourceSafe to a server, you can choose the Custom setup
	option. While not necessary for most users, this option is useful in
	circumstances such as the following:
	
	- You have limited disk space and want to save space by not installing certain
	  options, such as the online books or the conversion utilities.
	
	- You want to have the "Server" and "Network" portions of Visual SourceSafe
	  together in one installation. Custom Setup enables you to create the Visual
	  SourceSafe database (as Server Setup does), register for IDE host integration
	  (as network setup does), and copy the Visual SourceSafe executables (as both
	  setups do), all in one step.
	
	1.4 Upgrading a Previous SourceSafe Installation
	------------------------------------------------
	
	If you have an older version of SourceSafe on your server, use the Visual
	SourceSafe Server Setup to install Visual SourceSafe 5.0 directly on top of the
	existing SourceSafe installation. Visual SourceSafe creates its new directory
	structure, converts your database to the new format if necessary, and installs
	the new executables so that you can run Visual SourceSafe 5.0 with all your
	existing users, projects, and files intact.
	
	Notes about upgrading:
	
	1. Back up your SourceSafe database before upgrading. The installation process
	  converts your existing database into a new format: if there are problems
	  during this process, there is no way to return to your previous database
	  without a backup.
	
	2. Make sure all users exit SourceSafe before installing a new version.
	
	3. If users have copies of the SourceSafe executables on their computer's hard
	  disks, they need to use the Network Setup to copy the new SourceSafe over the
	  old, after the server setup is completed.
	
	1.5 The Installation Maintenance Program
	----------------------------------------
	
	When SETUP detects that you already have an installation of the most recent
	version of Visual SourceSafe, it goes into "maintenance mode." This mode is
	designed to allow you to add or remove components, or to uninstall Visual
	SourceSafe.
	
	The maintenance program provides following choices when you run SETUP in a server
	environment:
	
	- Add/Remove. Click this choice to add or remove options from a list such as a
	  Visual SourceSafe database, executable files, IDE registration, Help files
	  and the online version of the User's Guide, conversion utilities, and the
	  network client setup.
	
	- Reinstall. Click this choice to repeat the last installation of Visual
	  SourceSafe and restore missing files and settings.
	
	- Remove All. Click this choice to remove all previously installed components.
	
	When you run SETUP in a Visual SourceSafe client environment, your options are
	Reinstall and Remove All.
	
	1.6 Uninstalling Visual SourceSafe
	----------------------------------
	
	To uninstall Visual SourceSafe (remove existing components or the Visual
	SourceSafe program and database itself), run the SETUP program from the SETUP
	directory, which is under the directory in which you installed the Visual
	SourceSafe server. This action displays the installation maintenance program. To
	remove the entire Visual SourceSafe program, click Remove All. Then follow the
	directions on the screen.
	
	For the uninstall procedure to complete successfully, run the SETUP program on
	the same platform you used to install Visual SourceSafe. For example, run the
	SETUP program on Windows 95 to uninstall Visual SourceSafe if you installed
	Visual SourceSafe on a Windows 95 system; run the SETUP program on Windows NT if
	you installed Visual SourceSafe on a Windows NT system.
	
	When you run the uninstall procedure, certain critical files are maintained to
	protect against accidental deletion. The \DATA directory is preserved, and if
	users have been added to the installation, the \USERS directories for users and
	files created by the SSADMIN program are also preserved. In addition, the SETUP
	directory, the SRCSAFE.INI file, the USERS.TXT file, and MSCREATE.DIR are
	preserved. All other files are deleted. If you run the uninstall procedure and
	find that you need to reinstall Visual SourceSafe, reinstall back to the same
	location. Only customizations to the SS.INI files for the guest and admin users
	are lost.
	
	When you want to completely uninstall Visual SourceSafe, run the uninstall
	procedure. Then, from the command shell, use the DELTREE command to delete the
	directory in which you installed Visual SourceSafe and all the folders remaining
	under it.
	
	1.7 WININET and MFC DLLs
	------------------------
	
	Visual SourceSafe installs certain shared DLLs, such as MFC and WININET. When you
	install Visual SourceSafe, it may detect that you already have these files, and
	offer to overwrite them.
	
	In most cases, the correct answer is no. Visual SourceSafe may be attempting to
	install files that are older than the ones you have. Or, Visual SourceSafe may
	be installing the U.S. English version of the files, when you have the version
	that is properly localized for your country. If you overwrite your existing
	files with the Visual SourceSafe files, your existing applications may not work
	properly, or may start displaying in U.S. English.
	
	The only circumstance under which you should overwrite is if your copies of these
	files is out of date. Visual SourceSafe 5.0 ships with a copy of WININET.DLL
	that shipped with Internet Explorer 3.0, and with MFC DLLs from Visual C++
	version 4. If your files are older than these versions, you must allow Visual
	SourceSafe to install updated copies.
	
	1.8  SourceSafe on RISC
	-----------------------
	
	The Visual SourceSafe CD ships with versions for four different Windows NT
	platforms: Intel, Alpha, MIPS, and Power PC. SETUP does not install all four,
	however: SourceSafe is only installed for the machine that you are running SETUP
	on.
	
	Suppose, as an example, that you have some users on Intel and some on the Power
	PC platform. What you must do, as an administrator, is run SETUP from an Intel
	machine, and then run it again from a Power PC, choosing "Server Setup" both
	times. (SourceSafe will note the second time that you are installing over an
	existing version: do not worry, you will not lose any data!) Only after both
	installations will your users be able to run SourceSafe, NETSETUP, to their
	client machines on both platforms.
	
	REFERENCES
	==========
	
	For more information about other sections of the SourceSafe 5.0 Readme.wri file,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q157717 INFO: VSS 5.0 Readme: Sec. 2, General Notes and Tips
	
	  Q157718 INFO: VSS 5.0 Readme: Sec. 3, New Features in Visual SourceSafe 5.0
	
	  Q157719 INFO: VSS 5.0 Readme: Sec. 4 & 5, Users of VSS 4.0/VSS Home Page
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : Win3.x:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
