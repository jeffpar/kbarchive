---
layout: page
title: "Q139358: INFO: Readme.wri: Section 1, Software Installation Information"
permalink: kb/139/Q139358/
---

## Q139358: INFO: Readme.wri: Section 1, Software Installation Information

	Article: Q139358
	Product(s): Microsoft SourceSafe
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbVBp400
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives Section 1, Software Installation Information, of the Visual
	SourceSafe 4.0 Readme.wri file found in the main Visual SourceSafe directory.
	For more information about other sections of the Readme.wri file, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q139359 Readme.wri: Section 2, General Notes and Tips
	
	  Q139361 Readme.wri: Section 3, Issues and Considerations
	
	  Q139360 Readme.wri: Section 4, Documentation Notes
	
	  Q139362 Readme.wri: Section 5, New Features of Visual SourceSafe
	
	
	MORE INFORMATION
	================
	
	In a typical standalone Visual SourceSafe installation, an administrator
	installs Visual SourceSafe on a network server to which all users have access.
	The Server Setup is the only installation required. Nothing needs to be
	installed by individual users. Instead, all users can run Visual SourceSafe
	directly from the server.
	
	However, you must install the integration option directly on your own hard disk
	if you want to integrate Visual SourceSafe directly into the Integrated
	Development Environment (IDE) of Microsoft Visual Basic 4.0 (Enterprise and
	Professional Editions) or Microsoft Developer Studio, which includes Visual C++,
	Visual FORTRAN, and Visual Test. To integrate Visual SourceSafe with an IDE, the
	Visual SourceSafe server installation must be performed first. The IDE and the
	Visual SourceSafe client can then be installed in any order. See Section 1.2 for
	more information.
	
	If you have installed Visual SourceSafe 4.0 and need to perform an additional
	installation on the same computer, the SETUP program displays the installation
	maintenance program dialog box. This program enables you to install only those
	portions you need, repeat the most recent installation, or remove the previously
	installed Visual SourceSafe installation.
	
	Creating a Visual SourceSafe Installation on a Server
	-----------------------------------------------------
	
	If Visual SourceSafe has not been installed at your site, run the Setup.exe
	program on the Visual SourceSafe disk. Setup asks for the directory in which to
	install Visual SourceSafe. Choose a directory on your network, such as R:\Vss,
	that is accessible to everyone who will be using Visual SourceSafe. From the
	Setup options, choose the Server Setup option.
	
	After the Setup program is finished, you have a complete Visual SourceSafe
	installation on your network, ready to use.
	
	Using NETSETUP to Integrate Visual SourceSafe with Integrated
	-------------------------------------------------------------
	
	Development Environments
	------------------------
	
	After an administrator has created a Visual SourceSafe installation on the
	server, users can perform a client setup to install Visual SourceSafe directly
	on their own hard disks. This action integrates Visual SourceSafe with their
	personal copies of Integrated Development Environments (IDEs), including Visual
	Basic 4.0 (Enterprise and Professional editions) and/or Microsoft Developer
	Studio, which includes Visual C++, Visual Fortran, and Visual Test.
	
	You run the Netsetup.exe program from the directory in which the Visual
	SourceSafe server was installed. To perform a network client installation,
	specify a new directory on your computer's hard disk, such as C:\Vss, as the
	location of the Visual SourceSafe client.
	
	If you run Netsetup in an environment with an existing Visual SourceSafe client
	installation, use the installation maintenance program. This program gives you
	the choice of reinstalling the most recent installation or removing the
	previously installed components.
	
	After the Netsetup program is finished, you have a miniature Visual SourceSafe
	installation on your computer's hard disk. The executables are there, but they
	point to the main database on the server. In addition, your computer is
	configured to allow you to use Visual SourceSafe from directly inside Microsoft
	Visual Basic 4.0 or Microsoft Developer Studio.
	
	You might see a "File not found" error message during the netsetup procedure if
	the Visual SourceSafe server setup was installed by using the Custom setup
	option. For example, the administrator installing Visual SourceSafe might have
	chosen not to install certain non-essential files, such as the help system, the
	online version of the user's guide, or the integration macros. In these cases,
	you can ignore the message and continue with the netsetup. If any of the
	essential files, such as the Visual SourceSafe executable program or the
	database, are missing, contact your administrator.
	
	Using the Custom Setup Option
	-----------------------------
	
	When installing Visual SourceSafe to a server, you can choose the Custom setup
	option. This option is useful in many situations, such as the following:
	
	- You have limited disk space and want to save space by not installing certain
	  options, such as the online books or the integration macros.
	
	- You installed Visual SourceSafe but are unable to use it with Visual Basic
	  because you have not performed a client or netsetup installation. You can
	  integrate your installation with Visual Basic by using the Custom
	  installation option and clicking the checkbox for Visual Basic and Microsoft
	  Developer Studio Registration.
	
	- You want to have a private Visual SourceSafe database on your own hard disk.
	  You can install your own database by using the Custom installation option and
	  clicking the Create SourceSafe Database option.
	
	Upgrading a Previous SourceSafe Installation
	--------------------------------------------
	
	If you have an older version of SourceSafe on your server, use the Visual
	SourceSafe Server Setup to install Visual SourceSafe 4.0 directly on top of the
	existing SourceSafe installation. Visual SourceSafe creates its new directory
	structure, converts your database to the new format if necessary, and installs
	the new executables so that you can run Visual SourceSafe 4.0 with all your
	existing users, projects, and files intact.
	
	Notes about upgrading:
	
	a. Back up your SourceSafe database before upgrading. The installation process
	  converts your existing database into a new format. If there are problems
	  during this process, there is no way to return to your previous database
	  without a backup.
	
	b. Make sure all users exit SourceSafe before installing a new version.
	
	c. If users have copies of the SourceSafe executables on their computer's hard
	  disks, they need to use the Network Setup to copy the new SourceSafe over the
	  old, after the server setup is completed.
	
	d. The SourceSafe directory structure and filenames have changed for Visual
	  SourceSafe 4.0. For this reason, the icons in your Windows Program Manager
	  for SourceSafe 3.x will not work with Visual SourceSafe 4.0. New icons are
	  installed during the setup process, pointing to the correct new program
	  locations.
	
	The Installation Maintenance Program
	------------------------------------
	
	When you run the Setup program in a Visual SourceSafe 4.0 server environment with
	a current installation of Visual SourceSafe 4.0, you run the installation
	maintenance program. You can run the Setup program from the Setup directory,
	which is under the directory in which you installed the Visual SourceSafe
	server. This program provides the following choices when you run Setup in a
	server environment:
	
	1. Add/Remove: Click this choice to add or remove options from a list including
	  a Visual SourceSafe database, 16-bit or 32-bit versions, Visual Basic and
	  Microsoft C++ registration, Help files and online version of the User's
	  Guide, integration macros, conversion utilities, and the network client
	  setup.
	
	2. Reinstall: Click this choice to repeat the last installation of Visual
	  SourceSafe and restore missing files and settings.
	
	3. Remove All: Click this choice to remove all previously installed components.
	
	When you run SETUP in a Visual SourceSafe 4.0 client environment, your options
	are Reinstall and Remove All.
	
	After the Installation
	----------------------
	
	After Visual SourceSafe has been properly set up on the network for the first
	time, the Visual SourceSafe administrator should run the Visual SourceSafe Admin
	program to create a list of users. Add each user who will run Visual SourceSafe
	to the list. Whenever possible, users' Visual SourceSafe names should be the
	same as their Windows NT, Windows 95, or network names.
	
	Once users have been added, they can immediately begin running Visual SourceSafe
	from the server or from their computer's hard disk if they have performed a
	network client setup.
	
	Uninstalling Visual SourceSafe
	------------------------------
	
	To uninstall Visual SourceSafe (remove exising components or the Visual
	SourceSafe program and database itself), run the Setup program from the Setup
	directory, which is under the directory in which you installed the Visual
	SourceSafe server. This action displays the installation maintenance program.
	
	To remove specific components, click Add/Remove. The setup program displays the
	Maintenance Mode dialog box containing a list of options.
	
	To remove the entire Visual SourceSafe program, click Remove All. Then follow the
	directions on the screen.
	
	For the uninstall procedure to complete successfully, run the Setup program on
	the same platform you used to install Visual SourceSafe. For example, run the
	Setup program under Windows 3.1 to uninstall Visual SourceSafe if you installed
	Visual SourceSafe on a Windows 3.1 system; run the Setup program on Windows NT
	if you installed Visual SourceSafe on a Windows NT system.
	
	When you run the uninstall procedure, certain critical files are maintained to
	protect against accidental deletion. The \Data directory is preserved, and if
	users have been added to the installation, the \Users directories for users and
	files created by the Ssadmin program are also preserved. In addition, the Setup
	directory, the Srcsafe.ini file, the Users.txt file, and Mscreate.dir are
	preserved. All other files are deleted. If you run the uninstall procedure and
	find that you need to reinstall Visual SourceSafe, reinstall back to the same
	location. Only customizations to the Ss.ini files for the guest and admin users
	are lost.
	
	When you want to completely uninstall Visual SourceSafe, run the uninstall
	procedure. Then, from the MS-DOS shell, use the DELTREE command to delete the
	directory in which you installed Visual SourceSafe and all the directories
	remaining under it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbVBp400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
