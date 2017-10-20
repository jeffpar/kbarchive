---
layout: page
title: "Q87622: PC WSPlus: Running Schedule+ for Windows 1.0 from the Network"
permalink: /kb/087/Q87622/
---

## Q87622: PC WSPlus: Running Schedule+ for Windows 1.0 from the Network

{% raw %}

	Article: Q87622
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	1.00
	WINDOWS
	kbnetwork kbtlc
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	This article is addressed to the network administrator and outlines the
	procedure for setting up Microsoft Schedule+ when Schedule+ is run from the
	network, and no Schedule+ files are stored locally on the users'
	workstations. The first section tells how to set up Schedule+ when
	Microsoft Windows and Schedule+ are run entirely from the network. The
	second section tells how to set up Schedule+ when Windows is run locally
	and Schedule+ is run from the network.
	
	NOTE: Schedule+ version 1.0 was not designed to be run directly from the
	network. Because the file I/O that normally occurs on the local workstation
	is being handled by the network, running Schedule+ from the network may
	decrease Schedule+'s performance.
	
	RUNNING WINDOWS AND SCHEDULE+ FROM THE NETWORK
	----------------------------------------------
	
	Definitions:
	
	- <WINSHARE> refers to the shared location of the network installation of
	  Windows.
	
	- <WINTEMP> refers to a temporary directory for a temporary installation
	  of Windows.
	
	- <MYDIR> refers to the user's network directory where the user stores
	  his or her own Windows files (this will include the *.INI and *.GRP files).
	
	INSTALLATION STEPS:
	
	To set up the Schedule+ 1.0 shared files
	
	1. Create the <WINTEMP> directory on the server or a local workstation,
	  and run "setup /n" (without the quotation marks) from the <WINSHARE>
	  directory to create a new installation of Windows in the <WINTEMP>
	  directory.
	
	2. Run Windows from <WINTEMP> Use the Windows File Manager to start Setup
	  by double-clicking SETUP.EXE on the Schedule+ Program Setup Disk #2.
	
	  During setup:
	
	  a. Choose Custom Setup.
	
	  b. When Setup prompts for the Schedule+ directory, type "WINSHARE" (without
	     the quotation marks) as the location. For example, type "L:\WINDOWS"
	     (without the quotation marks) if this is the location of the network
	     version of Windows.
	
	  c. When Setup asks if you want to install the Schedule+ Reminder program to
	     load automatically, choose the No button.
	
	  d. When Setup is complete and it asks if you want to Run Schedule+, Run
	     Demos, or Exit To Windows, choose Exit To Windows.
	
	  This process will install all the Schedule+ for Windows program files in the
	  same directory as Windows and create a clean SCHDPLUS.INI file.
	
	3. Set all files in <WINSHARE> to Read-Only. For Novell(R) networks, set
	  the files to Shareable and Read-Only.
	
	4. Copy SCHDPLUS.INI from <WINTEMP> to <WINSHARE>.
	
	5. Remove <WINTEMP> (including all files and the directory).
	
	To set up a user for Schedule+ 1.0
	
	1. Copy SCHDPLUS.INI from <WINSHARE>to <MYDIR>.
	
	2. In a group in the Windows Program Manager create a Microsoft Schedule+ 1.0
	  icon with the following properties:
	
	     Description:       Microsoft Schedule+
	     Command Line:      <WINSHARE>\SCHDPLUS.EXE
	     Working Directory: <WINSHARE>
	     Shortcut Key:      None
	     Run Minimized      Not checked
	
	3. Modify each user's WIN.INI file to include the following setting:
	
	     [Sounds]
	     SchdplusReminder=<WINSHARE>\MSREMIND.WAV,Schedule+ Reminders
	
	4. If a user wants to be automatically reminded of scheduling messages, create
	  an icon in the Startup group to start the file MSREMIND.EXE.
	
	5. Verify that the <WINSHARE> directory is in the MS-DOS search path for
	  each user.
	
	RUNNING WINDOWS LOCALLY AND SCHEDULE+ FROM THE NETWORK
	------------------------------------------------------
	
	Definitions:
	
	- <WINDIR> refers to an individual user's locally installed Windows
	  directory.
	
	- <SCHDPLUS> refers to the Microsoft Schedule+ directory on the network
	  server.
	
	INSTALLATION STEPS:
	
	To set up the Schedule+ 1.0 shared files and the first user
	
	1. Run Windows from the first user's workstation. Use the Windows File Manager
	  to start Setup by double-clicking SETUP.EXE on the Schedule+ Program Setup
	  Disk #2. During setup:
	
	  a. Choose Custom Setup.
	
	  b. When Setup prompts for the Schedule+ directory, type "SCHDPLUS" (without
	     the quotation marks) as the location. For example, type "L:\SCHEDULE"
	     (without the quotation marks) if this is the location of the
	     network-shared copy of Schedule+.
	
	  c. When Setup asks if you want to install the Schedule+ Reminder program to
	     load automatically, choose the No button.
	
	  d. When Setup is complete and it asks if you want to Run Schedule+, Run
	     Demos, or Exit To Windows, choose Exit To Windows.
	
	  This process will install all the Schedule+ program files and create a clean
	  SCHDPLUS.INI file.
	
	2. Copy the following files from the first user's workstation to
	  <SCHDPLUS>:
	
	     <WINDIR>\SCHDPLUS.INI
	     <WINDIR>\WINHELP.EXE
	     <WINDIR>\SYSTEM\SHELL.DLL
	     <WINDIR>\SYSTEM\COMMDLG.DLL
	
	     (Schedule+-specific DLL files:)
	
	     <WINDIR>\SYSTEM\NVCONN.DLL
	     <WINDIR>\SYSTEM\TRNSCHED.DLL
	     <WINDIR>\SYSTEM\PABNSP.DLL
	     <WINDIR>\SYSTEM\MAILMGR.DLL
	     <WINDIR>\SYSTEM\MAILSPL.EXE
	     <WINDIR>\SYSTEM\DEMILAYR.DLL
	     <WINDIR>\SYSTEM\AB.DLL
	     <WINDIR>\SYSTEM\STORE.DLL
	     <WINDIR>\SYSTEM\FRAMEWRK.DLL
	     <WINDIR>\SYSTEM\MSSFS.DLL
	
	3. Remove all the above "Schedule+-specific DLL files" from
	  <WINDIR>\SYSTEM.
	
	To set up additional users for Schedule+ 1.0
	
	1. Copy SCHDPLUS.INI from <SCHDPLUS> to <WINDIR>.
	
	2. In a group in the Windows Program Manager create a Microsoft Schedule+ 1.0
	  icon with the following properties:
	
	     Description:       Microsoft Schedule+
	     Command Line:      <SCHDPLUS>\SCHDPLUS.EXE
	     Working Directory: <SCHDPLUS>
	     Shortcut Key:      None
	     Run Minimized      Not checked
	
	3. Modify each user's WIN.INI file to include the following setting:
	
	     [Sounds]
	     SchdplusReminder=<SCHDPLUS>\MSREMIND.WAV,Schedule+ Reminders
	
	4. If a user wants to be automatically reminded of scheduling messages, create
	  an icon in the Startup group to start the file MSREMIND.EXE.
	
	5. Place the <SCHDPLUS> directory in the MS-DOS search path for each
	  user.
	
	  NOTE: If you are using Windows version 3.0, you must replace the following
	  file in your <WINDIR> directory with the copy found in the
	  <SCHDPLUS> directory for the Schedule+ Help to operate properly:
	
	     WINHELP.EXE   Windows 3.1 Help engine
	
	Additional query words: 1.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
