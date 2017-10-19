---
layout: page
title: "Q140055: Installing Office 95 using Systems Management Server"
permalink: /kb/140/Q140055/
---

## Q140055: Installing Office 95 using Systems Management Server

	Article: Q140055
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig kbPCM smsconfig smspcm
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server 1.1 can be used to automate the installation
	of Microsoft Office 95 to Windows 95 and Windows NT clients. Microsoft Office 95
	ships with a Package Definition File (PDF) for this purpose.
	
	NOTE: This PDF is not included on the Systems Management Server 1.1 CD-ROM.
	
	MORE INFORMATION
	================
	
	The information below is designed to supplement the information in Appendix D of
	the "Systems Management Server Administrator's Guide".
	
	Installing Office 95 via SMS is a 3 step process:
	
	1. Creating an Administrative Source Share for Office 95
	
	2. Creating and Distributing the Office 95 Package Using the PDF
	
	3. Installing on the Client Computers
	
	Creating the Administrative Installation Point
	----------------------------------------------
	
	To create the administrative installation point, you run SETUP.EXE from the
	physical media with the /a command line option. You need to run administrative
	Setup under Windows 95, Windows NT Workstation 3.51 (or later), or Windows NT
	Server 3.51 (or later).
	
	The administrative installation point must have at least 180 MB of disk space,
	and you (the administrator) must have read, write, delete, and create permission
	to this location. Because you will be distributing this using SMS, the SMS
	service account needs at least Read access. If your users will be running shared
	copies of Office 95 then they will also need read access to the source location
	in addition to the package shares that SMS will create. If your users will be
	running in a shared Windows environment, you need to run Setup in that same
	environment and you need Write and Create permissions to the Windows folders.
	
	Using the administrative mode of Setup, install all of the Office files from the
	CD or floppy disks to the administrative installation point. This consists of
	two primary folders which are created by Setup:
	
	1. \MSOFFICE - The main Office application files, such as Microsoft Word and
	  Microsoft Excel will be installed in this folder.
	
	2. \MSAPPS - Shared components, such as Art Gallery and Word Art, are installed
	  in this folder.
	
	NOTE: If you are already distributing 16-bit Office applications, do not install
	32-bit MSAPPS to the same directory as the 16-bit MSApps. Create a new
	directory.
	
	Administrative Installation
	---------------------------
	
	Before doing the administrative installation of Office, make sure:
	
	- Destination folders are empty. If a previous version of Office exists in the
	  destination folder, delete all of it or choose new folders.
	
	- Users sharing applications or running shared Windows from this server are
	  logged off.
	
	- Folders are locked to network user access during administrative installation.
	
	- Virus detection software is disabled.
	
	To install Office on the administrative installation point:
	
	1. Run SETUP.EXE from the CD-ROM or floppy disk with the command line switch
	  "/a". For example "SETUP.EXE /A". SETUP.EXE must be run from a workstation
	  with Write access to the server, not directly on the server itself.
	
	  NOTE: Double-clicking on SETUP.EXE in the File Manager (Windows NT) or
	  Explorer (Windows 95) does not work. You must use the Run command on the File
	  menu of Program Manager or File Manager (Windows NT), or the Run command in
	  the Start menu (Windows 95) to use the command line option "/a". If you
	  double-click on SETUP.EXE it performs a client installation.
	
	2. Follow the instructions on the screen.
	
	  NOTES:
	
	   - The organization name you enter is used for all client installations of
	     Office from this network location.
	
	   - When asked for the server and path for the shared applications folder,
	     enter the name in the same way that users will specify it when installing
	     Office. You can specify whether the server will be accessed by users with
	     a drive letter (for example, G:\) or a UNC path (for example,
	     "\\server\share"). If you select drive letter, users installing Office
	     must have that drive letter mapped to this folder before running Client
	     Setup.
	
	   - When Setup asks where you want the shared application files installed, the
	     option you select controls the choices your users have during client
	     Setup:
	
	      - Server: The shared application files remain on the server and run
	        remotely; the user doe not have a choice during client Setup.
	
	      - Local Hard Drive: The shared application files are copied to the user's
	        local hard drive; the user does not have a choice during client Setup.
	
	      - User's Choice: The user is asked to choose Server or Local Hard Drive
	        during client Setup.
	
	     This is not the same as shared applications supported by Program Group
	     Control.
	
	Setup then copies all files from the CD-ROM or floppy disks to the administrative
	installation point.
	
	After the installation is complete, share the two folders (\MSOFFICE and \MSAPPS)
	on the network, either creating a single share that contains both folders, or
	creating two separate shares, one for each folder.
	
	NOTE: There is no SMSPROXY directory for Office 95. It is not necessary to copy
	one to the MSOFFICE source directory.
	
	Creating the Office 95 Package
	------------------------------
	
	The PDF for Office 95 is located in the MSOFFICE directory after the
	administrative setup is complete. The file name is OFF95STD.PDF. To create the
	package do the following:
	
	1. Open the Packages Window in the SMS Administrator.
	
	2. From the File Menu, choose New. The Package Properties dialog box will
	  appear.
	
	3. Choose the Import button. The File Browser dialog box appears. Change
	  directory to the MSOFFICE directory which was created by the administrative
	  setup.
	
	4. In the File Name box, select the OFF95STD.PDF. Choose OK.
	
	5. Choose the Workstations button. The Setup Package For Workstations dialog box
	  appears.
	
	6. In the Source Directory Box, type the location of the MSOFFICE directory
	  created by the administrative setup, or use the browse button to find it.
	
	7. Choose the Close button.
	
	8. Choose the OK button to close the open dialog boxes.
	
	Distributing the Office 95 Package
	----------------------------------
	
	Before distributing Office 95, ensure that your Site server and your distribution
	servers have sufficient space for the Office 95 package. The site server may
	need space for up to five copies of the Office 95 package. SMS stores packages
	in the following locations:
	
	- The source directory created by the administrative setup. This may not be
	  located on the site server. 180 MB
	
	- Compressed copy of the package in SMS\SITE.SRV\SENDER.BOX\TOSEND. At most 180
	  MB, typically less.
	
	- Compressed copy of the package in SMS\SITE.SRV\DESPOOLR.BOX\STORE. At most
	  180 MB, typically less.
	
	- Temp directory in which the Despooler decompresses the package before placing
	  on distribution servers. 180 MB
	
	- If the site server is also a distribution server there is an uncompressed
	  package directory in the SMS_PGKx share. 180 MB.
	
	Each distribution server also needs 180 MB of hard drive space for the Office 95
	package.
	
	To distribute the Office 95 package do the following:
	
	1. Open the Jobs window in the SMS Administrator.
	
	2. From the File menu choose New. The Job Properties dialog box appears.
	
	3. Select "Run Command on Workstation" as the Job Type.
	
	4. Choose the Details button.
	
	5. Select the Office 95 package from the list.
	
	6. Select the Job Target
	
	7. In the Distribute Phase select the appropriate distribution servers.
	
	8. In the Run Phase select the appropriate command line from the package.
	
	  The following command lines will be available:
	
	  Compact
	  Typical
	  Complete
	  Workstation
	  Custom
	  Uninstall
	
	  The first 4 command lines are unattended. "Custom" and "Uninstall" require
	  user input.
	
	For further information about completing the Job Details dialog box, please see
	Chapter 11. Jobs of the "Systems Management Server Administrator's Guide."
	
	Installing Office 95 on Client Computers
	----------------------------------------
	
	To install Office 95 your users must run Package Command Manager and execute the
	supplied command line. If the users execute the 'Custom' command line, they see
	the Run From Network Server option in addition to the other installation
	options. This is the same as the 'Workstation' command line. If a user selects
	this option, the main Office application files are left on the server and run
	remotely.
	
	NOTE: When network users use the Run From Network Server option, Setup places
	approximately five megabytes of files in the user's main Office folder. For
	workarounds that can reduce this disk space usage, see chapter 8, Installing
	Microsoft Office in the "Microsoft Office for Windows 95 Resource Kit."
	
	For further information on specific Office 95 installation issues please see the
	OFREADME.TXT and the NETWORK.TXT files included on the Microsoft Office for
	Windows 95 CD-ROM and Disks.
	
	OFF95STD.PDF
	------------
	
	  [PDF]
	  Version=1.0
	
	  [Package Definition]
	  Product=Microsoft Office 95
	  Version=7.0
	  Comment=Microsoft Office 95 Standard
	  SetupVariations=Compact, Typical, Complete, Workstation, Custom, Uninstall
	
	  [Compact Setup]
	  CommandLine=setup.exe /Q1 /B2
	  CommandName=Compact
	  UserInputRequired=FALSE
	  SupportedPlatforms=Windows95, Windows NT 3.1 (x86)
	
	  [Typical Setup]
	  CommandLine=setup.exe /Q1 /B1
	  CommandName=Typical
	  UserInputRequired=FALSE
	  SupportedPlatforms=Windows95, Windows NT 3.1 (x86)
	
	  [Complete Setup]
	  CommandLine=setup.exe /Q1 /B3
	  CommandName=Complete
	  UserInputRequired=FALSE
	  SupportedPlatforms=Windows95, Windows NT 3.1 (x86)
	
	  [Workstation Setup]
	  CommandLine=setup.exe /Q1 /B4
	  CommandName=Workstation
	  UserInputRequired=FALSE
	  SupportedPlatforms=Windows95, Windows NT 3.1 (x86)
	
	  [Custom Setup]
	  CommandLine=setup.exe
	  CommandName=Custom
	  UserInputRequired=TRUE
	  SupportedPlatforms=Windows95, Windows NT 3.1 (x86)
	
	  [Uninstall Setup]
	  CommandLine=setup.exe /Q1 /U
	  CommandName=Uninstall
	  UserInputRequired=TRUE
	  SupportedPlatforms=Windows95, Windows NT 3.1 (x86)
	
	  [Setup Package for Inventory]
	  InventoryThisPackage=TRUE
	  Detection Rule Part 1=File 1
	  ;Detection Rule Part 2=AND
	  ;Detection Rule Part 3=File 2
	
	  [File 1]
	  FILE=MSOFFICE.EXE
	  COLLECT=FALSE
	  Checksum=
	  DATE=7, 20, 95
	  SIZE=365056
	  TIME=12, 00
	
	Additional query words: prodsms sms win95
	
	======================================================================
	Keywords          : kbnetwork kbConfig kbPCM smsconfig smspcm 
	Technology        : kbSMSSearch kbSMS110
	Version           : :1.1
	Issue type        : kbhowto
	
	=============================================================================
	
