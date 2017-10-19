---
layout: page
title: "Q147352: XCLN: Creating Default User Profiles"
permalink: /kb/147/Q147352/
---

## Q147352: XCLN: Creating Default User Profiles

	Article: Q147352
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are three ways user profiles can be automatically generated. The first and
	easiest way is for the administrator to create a single default profile to be
	used when a Microsoft Exchange client for Windows is installed. The second way
	is for the administrator to create several default profiles and tell the user
	which one to load after they install the Microsoft Exchange client for Windows.
	The third method is to manually edit a DEFAULT.PRF file for each user and have
	this file present in the WINDOWS directory or in the users home directory before
	installing the Microsoft Exchange Client.
	
	MORE INFORMATION
	================
	
	Using the Microsoft Exchange Setup Editor, the administrator can create a
	customized default profile, DEFAULT.PRF, in the client installation point. The
	Setup Editor can be used to customize both user options and Setup program
	options. The user options include choices ranging from the home server name to
	playing a sound when new items arrive. The Setup program options include choices
	like the client installation directory, the Microsoft Exchange components to
	install, and the Microsoft Exchange services to install.
	
	If a DEFAULT.PRF file exists in the installation point when the user installs the
	Microsoft Exchange client, it will be used to create the user profile. This
	means that the user might not have to enter any additional information when the
	Microsoft Exchange client is started for the first time. This is the easiest way
	for a user to install Microsoft Exchange.
	
	If the administrator wants to offer several different customized default
	profiles, they will need to run the Setup Editor to modify and save multiple
	DEFAULT.PRF files. Because the Setup Editor does not have to ability to use any
	other file name, the administrator will have to rename that file from the File
	Manager or a command prompt each time they save it. The administrator will need
	to keep the .PRF extension when renaming this file and they should not leave a
	DEFAULT.PRF or it will be used when the user performs the installation.
	
	If multiple customized profiles are offered, when the user has finished
	installing their Microsoft Exchange client, they can run NEWPROF.EXE.
	NEWPROF.EXE is the Automatic Profile Generator program and is installed in the
	directory in which the Microsoft Exchange client is installed. It can be run
	from the File Manager by clicking on NEWPROF.EXE and adding "-s
	<path\<filename>" to the command line. This specifies the custom
	profile that the administrator created above. The administrator will need to
	inform the user of that file's name and location since it will not be copied to
	the directory in which the user installed the Microsoft Exchange client.
	
	Once NEWPROF.EXE is running, the user will need to click the Browse button and
	locate the same file that was specified on the command line. Once they have done
	this and clicked OK, they will need to click on the Execute button to create the
	profile.
	
	If a DEFAULT.PRF file was created for each user, the user actually need to
	nothing but run setup. This process has no user intervention except for starting
	the install process. For this to work, the DEFAULT.PRF should be present in the
	Microsoft Windows directory and the Microsoft Exchange Server Name should have
	been indicated using the Microsoft Exchange Setup Editor. The administrator or
	the user can follow the steps below to specify the user's Microsoft Exchange
	account name in the DEFAULT.PRF file:
	
	1. Edit the DEFAULT.PRF file using a text editor, like Notepad.
	
	2. In the section titled [General] modify the following entry: ProfileName=
	  <account name>
	
	3. Save changes and exit the editor program.
	
	4. Ensure that this file is located in the users Microsoft Windows directory, or
	  their home directory if running in a shared Microsoft Windows environment.
	
	More information about NEWPROF.EXE command-line options can be found in Q145905.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
