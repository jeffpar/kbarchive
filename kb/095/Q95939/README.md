---
layout: page
title: "Q95939: PC Setup: Installing PC Mail 3.0 on a Novell 3.11 Server"
permalink: /kb/095/Q95939/
---

## Q95939: PC Setup: Installing PC Mail 3.0 on a Novell 3.11 Server

	Article: Q95939
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps for installing Microsoft Mail version 3.0 for
	PC Networks.
	
	INSTALL MICROSOFT MAIL
	----------------------
	
	1. Install all needed software on the server.
	
	2. Set up Novell groups, access rights, and drive mappings.
	
	3. Use the Mail Administrator program (ADMIN.EXE) to set the default options and
	  create user mailboxes.
	
	4. Set up individual workstations.
	
	INSTALL ALL NEEDED SOFTWARE ON THE SERVER
	-----------------------------------------
	
	1. Log on to Novell as a Supervisor--not as a supervisor equivalent. Logging on
	  as a Supervisor causes all files in the Mail system to be stamped with
	  Supervisor ownership. This can reduce the future risk ownerless files might
	  pose to smooth operation of the mail system.
	
	  Decide what network (organization) and postoffice names you will use and
	  decide where you want to install the executable files (the MAILEXE
	  subdirectory) and the Mail database (the MAILDATA subdirectory). Make a note
	  of these; you will use this information while installing each set of disks.
	
	2. Run the INSTALL.EXE program from the Server Version - Disk 1 disk. Follow the
	  instructions, inserting disks as prompted, until the Mail server is
	  installed. For example:
	
	  Enter network type (M)Microsoft or (N)Novell > N
	  Enter postoffice name > SEATTLE1
	  Enter network name > XYZCORP
	  Enter location for the Microsoft Mail executable files
	  > f:\apps\mail\exe
	  Enter location for the Microsoft Mail data files
	  > f:\apps\mail\data
	
	  NOTE: You should always install the MS-DOS workstation even if all your users
	  will be running different workstation software. The MS-DOS client
	  installation copies files needed by other Microsoft Mail components. It may
	  also be helpful when you need to troubleshoot the Mail system.
	
	3. Run the INSTALL.EXE program from the MS-DOS-based Workstation Version - Disk
	  1 disk. Follow the instructions, inserting disks as prompted, until the
	  MS-DOS workstation client is installed. Give the same directories for the
	  executable files and the database as you used in the Server disk installation
	  in step 2 above. Continuing with the above example:
	
	  Enter drive, path to the Microsoft Mail executable files
	  > f:\apps\mail\exe
	  Enter drive, path to the Microsoft Mail database
	  > f:\apps\mail\data
	
	  NOTE: At the "Directory is not empty, continue (Y/N)?:" prompt, press Y to
	  continue.
	
	4. If you will be using the Windows or OS/2 Presentation Manager workstation
	  client, run the INSTALL.EXE program from the Windows-based and OS/2
	  Presentation Manager-Based Workstation Version - Disk 1 disk. Follow the
	  instructions, inserting disks as prompted, until the installation program
	  reports that it has finished. Continuing with the above example:
	
	  Type the name of your organization.
	  > The XYZ Corporation
	  Type the drive and path to the Microsoft Mail executable files.
	  > f:\apps\mail\exe
	
	5. If you will be accessing the Mail database on the Novell server from
	  connected Apple Macintoshes, you do not need to take any additional steps at
	  this time.
	
	SET UP NOVELL GROUPS, ACCESS RIGHTS, AND DRIVE MAPPINGS
	-------------------------------------------------------
	
	1. Create and add users to a Novell PC Mail group with the following trustee
	  rights (or give these rights to the group Everyone)
	
	  [ RWCEM ] ..\MAILDATA directory **
	  [ R F ] ..\MAILEXE directory
	
	  where:
	
	  R Read (open and read files)
	  W Write (open and write to the file)
	  C Create (create a directory)
	  E Erase (delete a directory or file)
	  M Modify (change the attributes or rename a directory or file)
	  F File Scan (see the filename when viewing the directory)
	
	  ** Macintosh and OS/2 clients need File Scan (F) rights to the entire database
	  (..\MAILDATA).
	
	  Special cases:
	
	   - You need [ RWCEMF ] rights to the MAILDATA\FOLDERS directories if you want
	     to be able to change folder sort orders from within any Microsoft Mail
	     MS-DOS client or a Microsoft Mail 2.1 Windows client.
	
	   - You need [ RWCEMF ] rights to the MAILDATA\KEY directory if any Microsoft
	     Mail 2.1 Windows clients will be accessing the Mail database.
	
	2. Add mapping statements to the system login script similar to the following,
	  but adjusted for your own configuration:
	
	        IF MEMBER OF "pcmail" THEN
	           MAP M: = Server_Name/SYS:APPS/MAILDATA
	           MAP INS S1: = Server_Name/SYS:APPS/MAILEXE
	        END
	
	3. Unless otherwise specified, all Mail executable programs for MS-DOS assume
	  that the current directory of drive M is the root of the database
	  (..\MAILDATA). If the database resides on another drive, add a -Dx switch to
	  the command line (where x is the alternate drive letter).
	
	  For example, use the following command if the current directory of drive R is
	  the root of the database:
	
	  admin -dr
	
	  CRITICAL NOTE: The CURRENT directory of the drive letter used must be the ROOT
	  of the database (..\MAILDATA).
	
	  For example, in the list below, if the directory on the left is the current
	  directory when you run a Mail program, the Mail program gives you the error
	  message shown on the right:
	
	     Current Directory         Error Message
	     ----------------------------------------------------------------
	
	     M:\APPS\MAIL              Could not find mail system database
	     M:\APPS\MAIL\EXE          Could not find mail system database
	     M:\APPS\MAIL\DATA\LOG     Could not find mail system database
	
	     M:\APPS\MAIL\DATA         (Correct directory--no error message)
	
	  You can verify that the root of the postoffice database is the current
	  directory of the drive by changing to that drive and running the MS-DOS DIR
	  command. If the Mail database is there, you will see directories named ATT,
	  GLB, MBG, and so forth.
	
	  Following are examples of the commands used to map to the root of the
	  postoffice database for Novell networks:
	
	  map m:=<Server_Name>/sys:apps\mail\data
	  map root r:=<Server_Name>/vol1:maildata
	
	  The Windows workstation software also assumes the database is in the current
	  directory of drive M unless told otherwise. It does not require that the
	  directory be the current directory, but it does require that you specify the
	  full path to the postoffice database. In Microsoft Mail 3.0, this is done in
	  the MSMAIL.INI file. You can find the MSMAIL.INI file in your Microsoft
	  Windows directory.
	
	  To specify the path to the postoffice database for Mail 3.0's Windows
	  workstation software, include a "ServerPath=" line in the [Microsoft Mail]
	  section of MSMAIL.INI. For example:
	
	     ----- MSMAIL.INI -----
	        [Microsoft Mail]
	        ServerPath=F:\apps\mail\data
	
	  NOTE: The system administrator can simplify Windows workstation installations
	  by using drive M as everyone's database mapping or by editing the MSMAIL.INI
	  file located in the MAILEXE directory on the server to include a standard
	  "ServerPath=" line.
	
	4. If necessary, you can get by without using any new mappings by hard coding
	  the path to the executable files by using a command at a command-line prompt
	  or in a batch file. This eliminates the need for a MAP INSert search path.
	  Two examples:
	
	     C:\>  F:\apps\mailexe\ADMIN
	     F:\APPS\MAILDATA\>  ..\mailexe\MAIL
	
	  From the MAILDATA directory, load the MS-DOS-based MAIL.EXE or ADMIN.EXE
	  program using the -D switch. This switch eliminates the need for a specific
	  drive mapping to the root of the database (..\MAILDATA). Two examples are:
	
	     F:\APPS\MAILDATA\>  ..\mailexe\ADMIN -Df
	     R:\GRPAPPS\MAIL\DATA\>  \grpapps\mail\exe\MAIL -Dr
	
	  Windows users run their executable files from the local hard disk drive so
	  they do not need the MAP INSert search path. The "ServerPath=" line replaces
	  most additional mappings needed to the Mail database.
	
	SET MAIL'S DEFAULT OPTIONS AND CREATE USER MAILBOXES
	----------------------------------------------------
	
	1. Load the Mail Administrator program for the first time by typing the
	  following at an MS-DOS prompt:
	
	  admin admin -ppassword
	
	  NOTE: The above command assumes you are using drive M and have a search path
	  to the Mail executable files.
	
	  If you have customized your setup, enter something similar to the following,
	  from the root of the database (adjusted for your own drive and path
	  settings):
	
	     F:\APPS\MAIL\DATA\> ..\exe\ADMIN admin -Ppassword -Df
	
	2. Once the Mail Administrator program has loaded, select Local-Admin, Options.
	  Look at each of the different options carefully to decide what settings you
	  want as the default for newly created users. For more details, select a menu
	  option and press the Help (F1) key.
	
	3. After you set your default options, select Local-Admin, Create to add users
	  to the mail system. When you have finished adding some users, exit the
	  Administrator program and set up a few workstations. Add the rest of your
	  users once you are sure everything is set up the way you want it.
	
	SET UP INDIVIDUAL WORKSTATIONS
	------------------------------
	
	MS-DOS Client
	-------------
	
	You do not need to take any additional steps to run the MS-DOS workstation, as
	long as the workstation has the appropriate rights to the executable files and
	database and can find them both through some form of mapping. You may, however,
	want to create a batch file or place the appropriate lines into a menu system.
	The following are some examples of how to load the MS-DOS client:
	
	  MAIL
	  MAIL mailbox
	  MAIL mailbox -Ppassword -Df
	
	  F:\APPS\MAILDATA\>   \apps\mailexe\MAIL george -Df
	
	  ----- MSMAIL.BAT -----
	     @Echo Off
	  CD R:\apps\mail\DATA
	  R:\apps\mail\EXE\MAIL %Mailbox% -Dr
	
	NOTE: For the above batch file to work, your mailbox names and Novell login names
	must match and a routine similar to the following must be in your system login
	script. You must also have set sufficient MS-DOS environment space to store the
	variable:
	
	     IF MEMBER OF "pcmail" THEN
	        DOS SET Mailbox="%LOGIN_NAME"
	     END
	
	Windows Client
	--------------
	
	In the "Install All Needed Software on the Server" section above, you installed
	the Windows client software to the server. Now you need to run the SETUP.EXE
	program from each Windows workstation. Mail's SETUP.EXE file will be in the Mail
	executable directory (..\MAILEXE). Running the SETUP.EXE program will copy
	selected files to the local workstation. It will also make the necessary changes
	to your Windows configuration.
	
	NOTE: Make sure the user has logged back in since you gave him or her rights to
	the mail system.
	
	To run the SETUP.EXE program, double-click it from File Manager or choose the
	File Run command.
	
	When you load the Windows client on a workstation for the first time, a
	Login=<Mailbox> line is added to the local MSMAIL.INI file. The Mailbox
	value will be the one used to bring up Mail on the workstation for the first
	time. For system administrators, this means the administrator should log into
	Mail the first time as the local user, and not as an administrator. Otherwise,
	the system administrator must edit the MSMAIL.INI file.
	
	If the root of the Mail database is not the current directory on drive M, you may
	need to add or modify the "ServerPath=" line in the [Microsoft Mail] group of
	the local MSMAIL.INI file.
	
	OS/2 Client
	-----------
	
	Except where noted below, the OS/2 client installation is the same as it is for
	the Windows client installation described above.
	
	NOTE: OS/2 clients require [ RWCEMF ] rights to the MAILDATA directory.
	
	If you are installing Mail on OS/2 version 1.2 or 1.3, run the PMSETUP.EXE
	program from the Novell server instead of the SETUP.EXE program. Verify that
	MSMAIL.INI and WIN.INI are in the local OS2\DLL directory.
	
	If you are installing Mail on OS/2 version 2.0, run the SETUP.EXE program from
	the Novell server by choosing the Program Manager File Run command. Verify that
	MSMAIL.INI and WIN.INI are located on the local workstation in the
	OS2\MDOS\WINOS2 directory.
	
	Macintosh Client
	----------------
	
	The following installation process assumes that you are able to mount your PC
	postoffice drive from the Macintosh on which you will be installing the client
	software.
	
	NOTE: Macintosh clients require [ RWCEMF ] rights to the MAILDATA directory.
	
	Insert the Apple Macintosh Workstation Version for PC Networks disk and copy the
	Microsoft Mail Notifier file to your active system Control Panel folder. Copy
	the Microsoft Mail file to any location on the hard drive or desktop. These are
	all the necessary files for the Macintosh Mail client.
	
	Mount the volume containing your PC postoffice and choose the Reshare The Drive
	At Startup Time and Save My Name And Password options for that volume.
	Double-click the Microsoft Mail icon to launch the Mail program. You will be
	presented with the following dialog box:
	
	  The Preference file could not be found. Where is your postoffice located?
	
	Choose the Find PO option and select the mounted volume containing your Mail
	database. Type your mailbox name and password to start Mail. Your network/mail
	preferences file is successfully created.
	
	Quit from the Mail program and restart your Macintosh. This initiates the notify
	portion of the Macintosh Mail client, which notifies you of new mail. The
	Macintosh Mail client is now installed.
	
	Additional query words: 3.00 mac client appletalk
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
