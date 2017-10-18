---
layout: page
title: "Q141755: PC WSPlus: How to Set Up Schedule Distribution"
permalink: kb/141/Q141755/
---

## Q141755: PC WSPlus: How to Set Up Schedule Distribution

	Article: Q141755
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 1.0,1.0a,3.0b,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	- Microsoft Mail for Windows, versions 3.0b, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article is designed for the Schedule+ administrator and outlines the
	procedures necessary for setting up schedule distribution on a multiple
	postoffice network. If your Mail network has only one postoffice, you should
	refer to Chapter 2 of the Microsoft Schedule+ "Administrator's Guide." This
	chapter has the information for setting up schedule distribution on a single
	postoffice network. This article is a supplement to the Microsoft Schedule+
	"Administrator's Guide."
	
	This article explains the following parts of schedule distribution:
	
	- The Schedule+ Administrator program (ADMINSCH.EXE)
	
	- The Dynamic Postoffice Connection
	
	- The Schedule Distribution program (SCHDIST.EXE).
	
	Notes:
	
	- Schedule+ requires a local area network (LAN) or wide area network (WAN)
	  connection for a user to Open Other's Appointment Book on another postoffice
	  and for access privileges of Read Appointments and Tasks or higher with
	  Dynamic Postoffice Connection.
	
	- You can only run Schedule Distribution with the retail version of Microsoft
	  Schedule+. Windows for Workgroups Schedule+ and Microsoft Windows NT
	  Schedule+ do not allow the capability to share scheduling information with
	  other postoffices. Therefore, it does not come with the Schedule+ Admin
	  utility.
	
	  In order to run schedule distribution against a Windows for Workgroups or
	  Windows NT postoffice, the postoffice must be upgraded with the Microsoft
	  Mail Server Upgrade, part number 068-695V350.
	
	Setting Up the Schedule+ Admin Account
	--------------------------------------
	
	Schedule+ requires that there is an account on the postoffice for the Schedule+
	Admin. This account is different than the Mail administrator account. It must be
	created with the Microsoft Mail Administrator program (ADMIN.EXE) using the
	following procedure:
	
	1. Start the Microsoft Mail Administrator program (ADMIN.EXE) with the following
	  command line from the \MAILEXE directory:
	
	  admin.exe admin -ppassword -dx
	
	  where admin represents the Mail Administrator's account; password is the ADMIN
	  account's password, and x represents the drive letter of the postoffice you
	  want to administer.
	
	2. At the opening screen, Local Admin will be highlighted. Press the ENTER key.
	
	3. With Create highlighted, press the ENTER key.
	
	4. At the Mailbox Name prompt, type in "adminsch" (without the quotation marks)
	  to create a Schedule+ Administrator account. Press ENTER.
	
	5. At the Password prompt, you can either accept the default password, or type
	  in the password of your choice. Press ENTER.
	
	  Notes:
	
	   - PASSWORD is the default password for Microsoft Mail accounts unless you
	     have altered it. For more information refer to pages 69 and 101 of the
	     version 3.2 Microsoft Mail "Administrator's Guide," or pages 66 and 95 for
	     versions 3.0 and 3.0b.
	
	   - This password will be used to login to the Schedule+ Admin. Note this
	     password as you will be using it later in this process.
	
	6. Enter the Full Name for the Schedule+ Administrator (for example,
	  SchedulePlus Admin for My PO). Press ENTER.
	
	7. At the User Type prompt, press ENTER for user.
	
	8. Assign Delete, Send, Retrieve, and External user access privileges. Press
	  ENTER.
	
	9. Accept the default user folder privileges. Press ENTER.
	
	  NOTE: Folder privileges are not necessary for the adminsch account.
	
	10. Include the user in Directory Synchronization. Press ENTER.
	
	  NOTE: The ADMINSCH account must be included in Directory Synchronization
	  (Dir-Sync). It is recommended that you never login to this account in either
	  Mail or Schedule+ as a user, as this will interfere with the schedule
	  distribution process.
	
	11. Press ENTER to create the new user.
	
	12. In the Mail Administrator program (ADMIN.EXE), select External-Admin,
	  Export. Then select All.
	
	  NOTE: You can either export all as suggested above, or wait for Dir-Sync to
	  take place. Also from ADMIN.EXE, you can run a Config, Dir-Sync, Requestor,
	  Export, followed by running a Manual Dir-Sync cycle.
	
	  For more information on running a Manual Dir-Sync cycle, please refer to the
	  "Directory Synchronization (Dir-Sync)" document.
	
	13. Repeat steps 2 through 12 to create the adminsch account on each postoffice
	  that is to participate in Schedule Distribution.
	
	Installing the Schedule+ Admin Files
	------------------------------------
	
	In order to have your users exchange Schedule+ information with users on other
	postoffices, you must run the Install program (INSTALL.EXE) and the schedule
	distribution setup at least once on all of the postoffices that will be
	participating in schedule distribution. It is strongly recommended that you run
	the schedule distribution program (SCHDIST.EXE) on a different workstation than
	the one running Schedule+ Admin.
	
	NOTE: The following procedure is to install the Schedule+ Admin files only,
	because this is all that is necessary for the purpose of this article. To
	install the Schedule+ client files and program, run SETUP.EXE from Disk 2 -
	Program Setup of Microsoft Schedule+ for Windows.
	
	1. In File Manager, connect a drive (preferably M, if possible) to one of the
	  postoffices that is participating in Schedule Distribution.
	
	  NOTE: If you are running Microsoft Mail on a Novell network, make sure that
	  the postoffice is at the root of the mapped drive. The Novell MAP ROOT
	  command can be invoked to ensure this. If the postoffice is not at the root
	  of the mapped drive, the Schedule+ installation will not proceed.
	
	2. From Program Manager and from the File menu, choose Run. Place the Schedule+
	  disk labeled Disk 1- Network Install in the appropriate disk drive. In the
	  Run dialog box, type the path to the INSTALL.EXE file in the disk drive (for
	  example, a:\install.exe).
	
	3. From the Welcome screen, select Continue. Enter the proper registration
	  information, and continue until you reach the Installation Procedures dialog
	  box.
	
	4. At the Installation Procedures dialog box, select Schedule+ Administration
	  Program, and select Continue.
	
	5. Select Continue until you reach the Install Message dialog box.
	
	6. At the Install Message dialog box, specify the directory that you want the
	  Schedule+ Admin files to be stored (the default is C:\ADMINSCH).
	
	7. Continue through the Install Now dialog box to start the installation
	  procedure.
	
	8. Insert the Schedule+ program disks, as prompted.
	
	9. When you are notified that the installation has completed successfully,
	  select the OK button.
	
	  NOTE: The installation program will create a Schedule+ Admin icon for use in
	  Windows.
	
	THE SCHEDULE+ ADMIN PROGRAM (ADMINSCH.EXE)
	
	The Schedule+ Admin program provides easy to use controls to set up and maintain
	the Schedule+ system. With the Admin program, you can configure Schedule+ to
	share schedule information across the network and to manage schedule storage on
	the server. For the purpose of this article, managing schedule storage on the
	server will not be discussed. For more information on managing schedule storage
	on the server, please refer to pages 25-26 of the Microsoft Schedule+ for
	Windows "Administrator's Guide."
	
	Setting Up for Schedule Distribution with the Schedule+ Admin Program
	---------------------------------------------------------------------
	
	1. Start the Schedule+ Admin program. When you install this program from the
	  Network Install disk (disk 1), it creates a directory called ADMINSCH and
	  installs the SCHDIST.EXE, MVCAL.EXE, and ADMINSCH.EXE programs. Except for
	  the ADMINSCH.EXE program, all these programs run in MS-DOS.
	
	  Notes:
	
	   - You do not need to reinstall the Schedule+ Admin program for each
	     postoffice; the one program works for multiple postoffices.
	
	   - By default, the Schedule+ Admin program will use the Server Path and/ or
	     Server Drive statements in the [Microsoft Mail] section of the MSMAIL.INI
	     file. If no such statement exists, the postoffice is usually mapped to
	     drive M.
	
	     The Schedule+ Admin program looks for one of these settings. If you have
	     mapped a drive other than the M drive to the root of the postoffice, you
	     want to specify the following command line properties for the Schedule+
	     Admin:
	
	  adminsch /Dx /Ppassword
	
	     where x represents the drive letter of the postoffice you want to
	     administer, and password is the ADMINSCH account's password for that
	     drive.
	
	     The above command line properties can be added to the Schedule+ Admin icon
	     properties, or it can be run by choosing Run from the File menu in Program
	     Manager.
	
	2. From the Administration menu, choose Distribution Settings.
	
	3. Choose the Add Postoffice or Add Gateway button (this depends on where the
	  postoffice exists).
	
	  NOTE: Two conditions must be met before a postoffice will show up in the Add
	  Postoffice list:
	
	   - The postoffices must have a Schedule+ Admin account (ADMINSCH) that
	     participates in Directory Synchronization (Dir-Sync).
	
	   - The postoffices must be defined through External Admin in the Mail
	     Administrator program (ADMIN.EXE).
	
	     For more information on Adding and Modifying Direct Route External
	     Postoffices refer to pages 116-128 of the Microsoft Mail "Administrator's
	     Guide" version 3.2, or pages 107-112 for versions 3.0 and 3.0b.
	
	4. In the Postoffices list box, double-click the name of the postoffice you want
	  to add.
	
	  NOTE: If no postoffices appear in this list, then either the ADMINSCH account
	  created in Setting Up the Schedule+ Admin Account was not created correctly
	  or the ADMINSCH accounts are not participating in Dir-Sync.
	
	  In either case, follow the procedures for Setting Up the Schedule+ Admin
	  Account and start Setting Up for Schedule Distribution with the Schedule+
	  Admin Program again from step 1.
	
	5. In the Distribution Settings dialog box, select the new postoffice in the
	  Postoffices list. Then choose the Settings button.
	
	6. Specify the sending times for the new postoffice or accept the default times.
	
	7. Repeat steps 5 through 7 if there are still more postoffices you want to
	  participate in Schedule Distribution.
	
	8. Once all the postoffices have been registered, exit the Schedule+ Admin
	  program.
	
	9. From File Manager, disconnect drive M and connect to a different postoffice
	  that you want to configure for schedule distribution. This new postoffice
	  must be connected in File Manager as drive M.
	
	10. Repeat steps 1 through 9, as often as necessary.
	
	11. Once all the postoffices have been added, exit the Schedule+ Admin program.
	
	  NOTE: If this is not the first time you are trying to set up and run Schedule
	  Distribution, please do the following to help run and configure Schedule
	  Distribution:
	
	  a. On each postoffice, change to the MAILDATA\CAL directory.
	
	  b. Delete the following files:
	
	      - ADMIN.PRF
	
	      - Any *.POF files (please see note below)
	
	     NOTE: Please read the following paragraphs that lists the specific contents
	     of a .POF file and what will be lost when deleting a .POF file.
	
	     The Administrator Preference (ADMIN.PRF) file includes information on other
	     postoffices and the Default Sending Times. This file will be recreated the
	     first time you run the Adminsch program and re- register other
	     postoffices.
	
	     The 00000000.POF contains Free/Busy Times for users on the local
	     postoffice. The local postoffice is 00000000.POF. All external postoffices
	     will be 0000000n.POF, where n= >0. The 00000000.POF file will be
	     recreated when the first client logs into Schedule Plus, makes a change to
	     their schedule and logs out.
	
	     More importantly, the POF file will be empty at this point except for the
	     one user's schedule who logged in to create it. In order to get all users'
	     schedule information into the file, ALL users must log in and make changes
	     to their schedule. While this is bound to happen eventually, the file will
	     have incomplete information until the last user finally logs in and makes
	     some changes to their schedule.
	
	     The same holds true for resources. Someone must log into them and make a
	     change in order for the 00000000.POF file to be updated with the
	     resource's schedule.
	
	     POF files also contain flags specifying which accounts are resources, lists
	     of assistants as well as related options (including whether the assistant
	     should only receive meeting responses), and access rights information. All
	     of this will not be updated in the POF until the users have logged in to
	     Schedule Plus and a change is made.
	
	  c. Follow all steps in Setting Up the Schedule+ Admin Account and Setting Up
	     for Schedule Distribution with the Schedule+ Admin Program above.
	
	Dynamic Postoffice Connection
	-----------------------------
	
	Schedule+ can be configured through the Schedule+ Admin program so that, with the
	correct access privileges, users on one postoffice can read and make changes to
	the Appointment Books and Tasks lists of users on other postoffices. This
	process is called dynamic postoffice connection. Once dynamic postoffice
	connection is set up, Schedule+ automatically connects to other postoffices when
	users want to view the detailed schedules (anything other than Free/Busy Times)
	of users on other postoffices, even if the user is not attached or mapped to
	that other postoffice on his or her local workstation.
	
	Dynamic postoffice connection establishes an actual network connection between
	postoffices instead of sending Free/Busy message packets, so it allows users on
	one postoffice to look at and work with, depending on the access privileges on
	the schedule, the most current schedule information for users on other
	postoffices.
	
	Dynamic postoffice connection requires a LAN or WAN connection between the
	postoffices and will NOT work via X.25 or asynchronous (modem) connection.
	Network traffic may increase because every Schedule+ user can connect to
	multiple postoffices. To reduce this traffic, the schedule distribution program
	(SCHDIST.EXE) can be used to send updates of the Free/Busy information on the
	postoffice at least once a day, the more frequent the updates, the less likely
	that the users will be opening another user's appointment book, and the less
	network traffic created.
	
	Schedule+, by default, will check if the user is mapped or attached to the server
	that the other postoffice resides on. If the user is mapped or attached already,
	it will use that connection. If the user is not connected to the server the
	postoffice resides on, it will use the login specified in the Modify
	Distribution Frequency dialog box.
	
	NOTE: Before users can dynamically connect to other postoffices, they must have
	the proper network privileges on the other file servers that contain the other
	postoffices, or the user that is specified in the Modify Distribution Frequency
	dialog box must have the proper rights.
	
	Setting up Dynamic Postoffice Connection from the Schedule+ Admin Program
	-------------------------------------------------------------------------
	
	The steps below are necessary to ensure that Schedule+ Dynamic Connection has
	been configured properly for Novell NetWare, Microsoft LAN Manager, and Banyan
	VINES networks.
	
	1. From the Administration menu, choose Distribution Settings.
	
	2. Select the desired PO.
	
	3. Choose Settings.
	
	4. Make the following changes to the Modify Distribution Frequency dialog box:
	
	  For Novell NetWare:
	
	  Dynamic Connection Information
	
	  Network Path: Server\Volume:
	
	  Directory: <path to MAILDATA>
	
	  Notes:
	
	   - If Network Path points to the root of the MAILDATA directory, you do not
	     need to enter the Directory data. If Network Path does not point to the
	     MAILDATA directory, you must enter the directory path to that directory.
	
	   - The following password and user name are required only if user-level
	     security is being implemented on the Novell postoffice server:
	
	    Password: The password corresponding to the Username given below.
	
	    Username: An account created for guests to view the contents of a
	              user's calendar file from another postoffice server.
	
	  For Microsoft LAN Manager and Microsoft Windows NT:
	
	     Dynamic Connection Information
	
	     Network Path: \\Server\Share
	
	     Directory: <path to MAILDATA>
	
	  NOTE: If Network Path points to the root of the MAILDATA directory, you do not
	  to enter data. If Network Path does not point to the MAILDATA directory, you
	  must enter the directory path to that directory. For Banyan VINES:
	
	     Dynamic Connection Information
	
	     Network Path: File Svcs@Group@Org
	
	  NOTE: This is the Banyan VINES file service StreetTalk name that is set up by
	  the Network System Administrator when you build the server and load the
	  application software.
	
	     Directory: <path to MAILDATA>
	
	  Notes:
	
	   - If File Services points to the root of the MAILDATA directory, you do not
	     need to enter data. If File Services does not point to the MAILDATA
	     directory, you must enter the directory path to that directory.
	
	   - The password and user name below are only required if user-level security
	     is being implemented on the Banyan VINES postoffice server:
	
	    Password: The password corresponding to the Username given below.
	
	    Username: An account created for guests to view the contents of a
	              user's calendar file from another postoffice server.
	
	The Schedule Distribution Program (SCHDIST.EXE)
	-----------------------------------------------
	
	Schedule distribution is the process that sends users' Free/Busy Times and
	assistants' name (if designated), as well as resource information between
	postoffices at regular intervals. This information is sent as schedule
	distribution messages---specially formatted Mail messages that are sent to the
	Schedule+ administrator account (ADMINSCH) on the recipient postoffice.
	
	As a user changes his or her schedule, the updated resource, assistant, and
	Free/Busy information is updated in a .POF file in the \CAL subdirectory of the
	user's home postoffice. There is one .POF file for each postoffice participating
	in schedule distribution in the system; it contains the information for all
	users on that postoffice. At the regular intervals that you specify in the
	Schedule+ Admin program (ADMINSCH.EXE), SCHDIST.EXE takes a "snapshot" of the
	.POF file for each postoffice you have set it to exchange information with. It
	then compiles the information from that snapshot into a collection of schedule
	distribution or Mail messages to be sent by the External Mail program
	(EXTERNAL.EXE) to the other postoffices.
	
	The more frequently you run schedule distribution, the more accurate that the
	Free/Busy information will be. You can choose to run schedule distribution on a
	postoffice-by-postoffice basis, or it can be done on several postoffices at
	once.
	
	Because each user controls other users' access to his or her schedule (through
	the Set Access Privileges option), users who assign None as the default access
	privilege to their schedule (or .CAL file) do not have their schedule
	information distributed regardless of how you set up the schedule distribution.
	
	The schedule distribution program (SCHDIST.EXE) cannot work alone. It requires
	the Schedule+ Admin program to setup the schedule distribution times as well as
	the postoffices to which the schedules will be distributed. SCHDIST.EXE also
	requires the Message Transport Agent (EXTERNAL.EXE) to distribute the updates.
	
	NOTE: The schedule distribution program is responsible for updating Free/Busy
	information ONLY. Free/Busy information is viewed through the Planner area of
	Schedule+. To be able to Read Appointments and Tasks or above, the Dynamic
	Postoffice Connections must be used.
	
	Running SCHDIST.EXE as an Idle Process in Dispatch
	--------------------------------------------------
	
	Versions 1.0 and 1.0a of Microsoft Schedule+ for Windows use the Schedule
	Distribution (Schdist) program (SCHDIST.EXE) to distribute an user's Free/Busy
	Times to other postoffices. You can run the Schdist program as an idle process
	in the Dispatch program (DISPATCH.EXE).
	
	The Dispatch program carries out directory synchronization (Dir-Sync) requests on
	the network. The Dispatch program polls the postoffices to determine when a
	Dir-Sync event is scheduled to take place. When Dispatch is running, the
	EXTERNAL.EXE must also be running.
	
	Schdist takes advantage of Dispatch polling the postoffices, and runs as an idle
	process. Schdist runs while External is not active.
	
	The following examples show commands and batch files for using SCHDIST.EXE and
	EXTERNAL.EXE as idle processes in DISPATCH.EXE for two different situations:
	
	1. If you want Dispatch to contain the IdleProcessMinPeriod (-TL) and
	  IdleProcessMaxPeriod (-TU) parameters, use the following command line:
	
	  dispatch -dxx -i"<batchfile>.bat" -tln -tun -l<path\filename>
	
	  where -Dxx specifies the direct drives; -I specifies the idle program, and -L
	  specifies the log file path and filename. To have Schdist running as an idle
	  process, include SCHDIST.EXE in a batch file. For example:
	
	  dispatch -dmp -i"file.bat" -tl30 -tu60 -lc:\logs\mail.log
	
	  The FILE.BAT batch file would look like the following:
	
	  <path>schdist.exe -dxx -i1 -lc:\logs\schdist.txt
	  <path>external.exe -dxx -a -lc:\logs\external.txt %1
	
	NOTE: In this setup, the -TU time in the Dispatch command line is passed to the
	External command line. This parameter becomes the break relative (-BR) time that
	exits out of External and passes control back to Dispatch.
	
	If you are having problems running this batch file against Microsoft Mail for PC
	Networks postoffices with MS-DOS 5.0, refer to "Appendix A: Dispatch Cannot
	Spawn Batch File Without COMMAND.COM" section below for more information.
	
	1. If you want the batch file to control the time for exiting out of the idle
	  process, use the following command line:
	
	  dispatch -dxx -i"<batchfile>.bat" -l<path\filename>
	
	  For example:
	
	  dispatch -dmn -i"file.bat" -lc:\logs\mail.log
	
	  The FILE.BAT batch file would look like the following:
	
	  <path>schdist.exe -dxx -i1 -lc:\logs\schdist.txt
	  <path>external.exe -dxx -a -lc:\logs\external.txt -brdd:hh:mm
	
	  Notes:
	
	   - In this setup, the -BR time determines when External exits and passes
	     control back to Dispatch.
	
	   - You must remove the -A parameter in the External command line if you are
	     using a modem. You should only use <path> placeholder if the
	     SCHDIST.EXE and EXTERNAL.EXE files are not in the current directory. It is
	     best if you copy the following files to a directory on the dedicated
	     machine that will run this process (MS-DOS only):
	
	        DISPATCH.EXE       NSDA.EXE          REQMAIN.EXE
	        SRVMAIN.EXE        REBUILD.EXE       IMPORT.EXE
	        EXTERNAL.EXE       ASYNC.OVL         EXTERNAL.HLP
	        X25EICON.OVL       X25ATLAN.OVL      SCHDIST.EXE
	
	The schedule distribution program (SCHDIST.EXE) works with direct drives only.
	The workstation running schedule distribution program (SCHDIST.EXE) must be
	connected to the root of the \MAILDATA directory for each postoffice it is
	creating updates for. On a Novell network with the limitation of connecting to
	eight servers at a time, it may be necessary to have more than one workstation
	running the schedule distribution program.
	
	Another alternative to the Schedule Distribution Program (SCHDIST.EXE) is to use
	the Dynamically Connect to View Free/Busy Times option. This is an option in the
	Modify Distribution Settings dialog box shown on page 24 of the Schedule+
	"Administrator's Guide."
	
	Appendix A: Troubleshooting
	---------------------------
	
	Problem:
	
	  Cannot see other postoffices in the Schedule+ Administrator program.
	
	Resolution(s):
	
	a. Make sure that the other postoffice(s) have an adminsch account that is
	  participating in Directory Synchronization (whether you are using Dir-Sync or
	  not).
	
	b. Make sure that the postoffices are defined with the Mail Administrator
	  program (ADMIN.EXE) in External-Admin.
	
	Problem:
	
	  In the Schedule+ Administrator program Last Update Received is always NEVER.
	
	Resolution(s):
	
	  Change the Default Sending Times in the Distribution Settings dialog box from
	  Never.
	
	Problem:
	
	  SCHDIST Error: Could not process message
	
	Resolution(s):
	
	  This error occurs when SCHDIST.EXE is unable to access the ADMINSCH mailbox
	  for mail with "free and busy time" information to create or recreate .POF
	  files.
	
	  Use the following procedure to troubleshoot this issue:
	
	  1. Delete the following files in the CAL directory on the problem PO or all
	  POs:
	
	   - ADMIN.PRF
	
	   - Any *.POF files that may exist
	
	  The ADMIN.PRF file includes information on other postoffices and the Default
	  Sending Times.
	
	  2. On each PO that you have deleted the files, recreate the ADMIN.PRF file by
	  running the Schedule+ Admin program(ADMINSCH.EXE) and re-register the
	  external postoffices.
	
	  NOTE: The 00000000.POF contains Free/Busy Times for users on the local
	  postoffice. The local postoffice is 00000000.POF. All external postoffices
	  will be 0000000n.POF, where n= >0. These files will be re-created when you
	  run Schedule Distribution (Schdist).
	
	  3. Reset the ADMINSCH mailbox on the problem postoffice.
	
	
	  NOTE: ADMINSCH is the mailbox where the mail that contains "free and busy
	  time" information is put and retrieved by the Schdist program.
	
	  4. Make changes to the appointment book (CAL file) for the problem user(s).
	
	  5. Restart the Schedule Distribution program (SCHDIST.EXE) with at least the
	  command line switches of:
	
	  D<driverange> -V -L<filename>
	
	  For example:
	
	  schdist -dmp -v -lc:\schdist.txt
	
	  6. Restart External with at least the following command line switches of to
	  create log files that record all mail traffic into and out of the
	  postoffice:
	
	  -D<driverange> -V -L -MR -MS, where -MR and -MS
	
	  Notes:
	
	- This step does the actual delivery of mail between the POs.
	
	- The postoffice SENT.LOG, RECV.LOG, and SCHDIST.LOG files are valuable in
	  determining whether or not Free/Busy Time mail were exchanged between the
	  ADMINSCH accounts.
	
	  Other factors that have been associated with this error are:
	
	- Novell NetWare ownerless files
	
	- Network rights
	
	- Schedule Distribution across an SMTP or PROFS gateway
	
	- A dirty network
	
	Problem:
	
	  Cannot open Other's Appointment Book.
	
	Resolution(s):
	
	  Check all of the following:
	
	- For Novell networks, ensure that the proper rights are assigned for the user
	  in the Modify Distribution Frequency dialog box. The proper rights are Read,
	  Write, Create, Erase, Modify, and Filescan [RWCEMF].
	
	- Check to see if all the settings are correct.
	
	- Check with the user who's appointment book you are trying to open to see if
	  the proper access privileges have been assigned.
	
	- Check the External-Admin settings for the postoffice the user resides on. If
	  the external postoffice is via modem or X.25 then the other appointment book
	  cannot be accessed. Only Free/Busy Times in the Planner can be viewed.
	  Schedule+ does not work via asynchronous connections for access privileges
	  above Free/Busy Times.
	
	- Make sure that mail can be sent to and received by the user. The user's
	  mailbox (.MBG and .KEY), schedule file (.CAL), and/or message file (.MMF)
	  could be corrupt.
	
	Appendix B: Dispatch Cannot Spawn Batch File Without COMMAND.COM
	----------------------------------------------------------------
	
	Symptoms:
	
	  When the Dispatch program specifies a batch file with multiple executables as
	  the idle process and COMMAND.COM cannot be found, only the first executable
	  is performed; the others are ignored.
	
	Cause: The Dispatch program searches for COMMAND.COM after completing the first
	executable. The program returns to Dispatch from the idle process when it fails
	to locate COMMAND.COM. This can be seen when you run Dispatch > ERROR.TXT;
	the ERROR.TXT file records the error:
	
	  Invalid COMMAND.COM
	  Cannot start COMMAND, exiting
	
	This problem occurs only for certain versions of MS-DOS. The following table
	shows which versions cause Dispatch to fail to spawn the second batch file
	executable:
	
	  Dispatch version      MS-DOS version           Result
	----------------------------------------------------------------------
	  3.0                   3.3, 5.0, 6.0            Success in all cases
	
	  3.2                   3.3, 6.0                 Success if COMMAND.COM
	                                                 is in the current
	                                                 directory of focus
	
	  3.2                   5.0                      Failure
	
	Resolution
	
	  Ensure that a copy of the current version of COMMAND.COM is available in the
	  directory from which dispatch is executed. Also check your version of MS-DOS
	  against the above table.
	
	  NOTE: You can also check the following lines in your configuration files for
	  the External MTA:
	
	  SHELL= in CONFIG.SYS file
	  COMSPEC= in AUTOEXEC.BAT file
	  Network variables in the network login script for the MTA user.
	
	Appendix C: The Schedule Distribution Program (SCHDIST.EXE)
	-----------------------------------------------------------
	
	Command-Line Parameters:
	
	You can use the following command-line parameters when you run the schedule
	distribution program (SCHDIST.EXE) for versions 1.0 and 1.0a of Microsoft
	Schedule+ for Windows:
	
	Parameter     Description
	----------------------------------------------------------------------
	
	-Dxy         Specifies the drives to be processed, where x is the first
	             drive to be processed and y is the last.
	
	-In          Indicates the number of times to cycle through the specified
	             postoffices. If n is left blank, Schedule Distribution
	             runs until it is stopped manually.
	
	-L<path>     Tells the program to generate a log file in the path
	             specified.
	
	-O           Enables Free/Busy sharing with other applications.
	             Run Schedule Distribution with this option if you use
	             other applications that share Free/Busy information
	             with Schedule+.
	
	-V           Tells the program to shows more detail in its screen
	             and Log file output.
	
	Appendix D: Gateway to PROFS: Requirement for Free and Busy Times
	-----------------------------------------------------------------
	
	Symptoms
	
	  When you use version 3.4a.0041 of Microsoft Mail Gateway to PROFS, Free and
	  Busy Times are being sent from PROFS to Microsoft Mail for PC Networks,
	  (ms-csm to adminsch), but may not be viewable by the user in Microsoft
	  Schedule+ Planner view.
	
	Cause
	
	  You may have upgraded to version 3.2a of Mail for PC Networks. Mail for PC
	  Networks version 3.2a has a file called TRNSCHED.DLL dated 8-17-94 with a
	  size of 12,960 bytes.
	
	Resolution
	
	  The PROFS gateway requires TRNSCHED.DLL dated 3-16-94 with a size of 13,104
	  bytes. It is on Disk 1 of the Microsoft Mail Gateway to IBM PROFS and Office
	  Vision, version 3.4a.0041. Replace the 3.2a version with this version of the
	  TRNSCHED.DLL.
	
	Appendix E: Add Gateway Brings Up All Gateways
	----------------------------------------------
	
	In the Schedule+ Administration program, if you bring up the Add Gateways window
	from the Distribution Settings window, it will show all the gateways installed
	in the postoffice, even if there are no compatible scheduling programs on the
	other side of these gateways. Adding any of these gateways will enable SCHDIST
	to begin sending updates that the gateway does not understand. This may cause
	the gateway to start displaying error messages.
	
	This feature allows for future compatibility with foreign scheduling systems,
	such as IBM PROFS, without requiring an update of the Schedule+ Administration
	program. To determine if the gateway and Schedule+ are compatible, check with
	the manufacturer of the foreign scheduling system or with a Microsoft Mail
	Product Support Engineer.
	
	Appendix F: Do You Need the SCHDIST.EXE Update?
	-----------------------------------------------
	
	The Microsoft Software Library update, SCHDIST.EXE, contains SCHDIST.EXE that is
	a replacement for the SCHDIST.EXE file that is included with version 1.0a of
	Microsoft Schedule+ for Windows.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q113144 Schedule+ SCHDIST.EXE 1.0a.2 Update
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q96060 Directory Synchronization (Dir-Sync)
	
	For more information on running SCHDIST.EXE as an idle process in Dispatch and on
	SCHDIST.EXE, refer to Appendix B: The Schedule Distribution Program
	(SCHDIST.EXE) Command-Line Parameters, and see pages 12-15 of the Microsoft
	Schedule+ for Windows "Administrator's Guide."
	
	For more information on DISPATCH.EXE, see pages 14-16 of the Microsoft Schedule+
	for Windows "Administrator's Guide" and pages 287-307 of the Microsoft Mail
	version 3.2 "Administrator's Guide" or pages 257-265 of the Microsoft Mail
	version 3.0 or 3.0b "Administrator's Guide," and also the "Directory
	Synchronization (Dir-Sync)" document.
	
	For more information on EXTERNAL.EXE, see pages 13-17 of the Microsoft Schedule+
	for Windows "Administrator's Guide" and pages 227-285 of the Microsoft Mail
	version 3.2 "Administrator's Guide" or pages 199-245 of the Microsoft Mail
	version 3.0 or 3.0b "Administrator's Guide."
	
	
	Additional query words: kbhowto
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbZNotKeyword3 kbSchedule100 kbSchedule100a kbMail350 kbMail320 kbMail300b kbMail320a
	Version           : :1.0,1.0a,3.0b,3.2,3.2a,3.5
	
	=============================================================================
	
