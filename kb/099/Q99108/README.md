---
layout: page
title: "Q99108: Windows for Workgroups Mail Issues"
permalink: /kb/099/Q99108/
---

## Q99108: Windows for Workgroups Mail Issues

	Article: Q99108
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses several of the most common issues and procedures for
	setting up and using Windows for Workgroups Mail.
	
	This article is divided into the following topics:
	
	- "Re-creating the Mail Initialization Procedure" describes the steps you
	  should use in case errors occur when you initialize Mail for the first time.
	  These procedures are useful if you incorrectly specify the option of
	  connecting to an existing postoffice or becoming the Workgroup Postoffice
	  (WGPO).
	
	- "Setting up a Postoffice Across the Network" describes the steps for setting
	  up and administering a postoffice on one machine while placing the WGPO on
	  another machine. This section includes postoffice naming conventions and
	  troubleshooting steps.
	
	- "Creating a WGPO on a Novell NetWare Server" corrects a documentation error
	  in the "Windows for Workgroups Mail User's Guide" and provides additional
	  information needed to successfully set up a Novell NetWare Postoffice.
	
	- "Moving a WGPO from One Machine to Another" describes steps for moving a WGPO
	  to a new server without transferring WGPO administration responsibilities.
	
	- "Changing the WGPO Administrator" describes steps for transferring WGPO
	  administration and management responsibilities from one person to another.
	
	- "Allowing Multiple Users to Log On to Windows for Workgroups Mail on the Same
	  Machine" explains how to set up one machine for multiple postoffice accounts.
	
	- "Removing a Mail User and Installing a New User on a WFWG Machine" describes
	  steps for removing a Windows for Workgroups Mail and Schedule+ user from a
	  WFWG machine and adding a new user to that machine, without reinstalling
	  Windows for Workgroups.
	
	- "Set Access Privileges or Open Other's Appt. Book Options
	  Unavailable/Disabled" explains why these options are unavailable.
	
	NOTE: There may be situations in which your needs exceed the capabilities of
	Windows for Workgroups Mail, even with the procedures outlined below. If that is
	the case, you may want to consider upgrading to Microsoft Mail version 3.0, or
	higher.
	
	RE-CREATING THE MAIL INITIALIZATION PROCEDURE
	---------------------------------------------
	
	When you first run Windows for Workgroups Mail, you are given the option to
	connect to an existing postoffice or create a new postoffice. After you make
	your selection, you cannot go back and change your selection.
	
	Steps to Reinitialize Mail
	--------------------------
	
	If you want to change your initial selection, you must use the following steps to
	reinitialize Mail so that you can select the option you want.
	
	1. Open the MSMAIL.INI file in an ASCII text editor, such as Microsoft Windows
	  Notepad.
	
	2. Disable the ServerPath= and the login= lines by typing a semicolon (;) at the
	  beginning of each line.
	
	3. Add or edit the CustomInitHandler= line so that it appears as follows:
	
	  CustomInitHandler=WGPOMGR.DLL,10
	
	4. Run Mail. The initialization procedure begins.
	
	How Mail Initialization Works
	-----------------------------
	
	The initialization procedure is defined for Mail in the MSMAIL.INI file on the
	CustomInitHandler= line. This setting is defined as:
	
	  CustomInitHandler=WGPOMGR.DLL,<procedure #>
	
	When you run Mail, it checks for the existence of the CustomInitHandler= line in
	the MSMAIL.INI file. If this line exists, Mail attempts to execute the procedure
	defined by this parameter setting. If the execution fails because the
	dynamic-link library (DLL) file WGPOMGR.DLL cannot be found or the procedure is
	undefined, Mail continues without reporting an error.
	
	The procedure, located in WGPOMGR.DLL, displays the Connect Or Create dialog box
	to allow you to either connect to an existing remote postoffice or create a new
	Workgroup Postoffice.
	
	- If you choose the Cancel button, WGPOMGR.DLL closes Mail.
	
	- If you choose the OK button, WGPOMGR.DLL removes the CustomInitHandler= line
	  from the MSMAIL.INI file and returns to Mail, automatically signing you in to
	  the postoffice.
	
	SETTING UP A POSTOFFICE ACROSS THE NETWORK
	------------------------------------------
	
	With Windows for Workgroups Mail, the Workgroup Postoffice can be set up from one
	computer to another computer across the network.
	
	For the example below, assume the following conditions are true:
	
	- The postoffice is set up and administered from machine 1.
	
	- The postoffice files are actually kept on machine 2.
	
	  NOTE: The user on machine 1 is the Postoffice Manager, but the postoffice
	  files are stored on machine 2
	
	- Machine 1 is a Windows for Workgroups machine.
	
	- Machine 2 is a machine with server/sharing capabilities, such as a Windows
	  for Workgroups machine, a LAN Manager 2.1 server, or a Novell server.
	
	  NOTE: Novell servers require some special attention. Refer to the "Creating a
	  WGPO on a Novell NetWare Server" section in this article.
	
	Steps to Connect to Other Machines
	----------------------------------
	
	After Windows for Workgroups Setup is complete on machine 1, the designated
	administrator of the Workgroup Postoffice should take the following steps:
	
	1. On machine 1, from the Main group, start Workgroups Mail.
	
	2. Choose Create A New Workgroup Postoffice.
	
	3. To connect to machine 2, choose the Network button.
	
	  If Machine 2 is a Windows for Workgroups machine or a LAN Manager 2.1 server,
	  type the server name and share name (that is, <\\server\share>) where
	  you want the postoffice created, then choose OK.
	
	  NOTE: You must have access rights to the server and the share.
	
	  If machine 2 is a Novell server, you must be logged onto the Novell server and
	  have the correct permissions. Then, you should connect to the server and use
	  one of these conventions:
	
	  server/share:directory
	  \\server\share\directory
	  remapped drive:\directory
	
	  For more information about the Novell naming conventions, check your Novell
	  NetWare documentation. For more information about Windows for Workgroups
	  naming conventions, see the "Windows for Workgroups Server, Share, and Mail
	  Naming Conventions" section in this article.
	
	  NOTE: Do not use the double-backslash convention mentioned above on Novell
	  NetWare 4.x servers. If you do, you receive the following error message when
	  you try to connect to the mail server:
	
	  Mail could not connect to your mail server.
	
	  If you remove one of the backslashes, you do not encounter this error message.
	
	4. After the Workgroup Postoffice is established, check to ensure that the
	  postoffice is shared properly on machine 2.
	
	Postoffice Naming Conventions
	-----------------------------
	
	The following name length limitations exist in Microsoft Windows for Workgroups
	Mail:
	
	  Server Name:                15 characters (including spaces)
	  Share Name:                 12 characters (including spaces)
	  Workgroup Postoffice Share:  8 characters
	
	Windows for Workgroups Mail clients cannot connect to a Workgroup Postoffice if
	the share name contains more than eight characters, or if the Workgroup
	Postoffice server name or share name contains any spaces.
	
	For example, the following are examples of invalid Workgroups Postoffice server
	or share names:
	
	  \\ser ver\wgpo
	  \\server\wg po
	  \\server\post office
	
	The following is a valid Workgroups Postoffice server or share name:
	
	  \\server\wgpo
	
	NOTE: Microsoft recommends that the share name "WGPO" be used for consistency
	across all Workgroup Postoffices.
	
	Resolving Local Postoffice Connection Problems
	----------------------------------------------
	
	If a Windows for Workgroups mail administrator sets up the Workgroup Postoffice
	(WGPO) on another workgroup user's machine, that other user cannot connect to
	the postoffice and receives one of the following error messages:
	
	  The selected network path cannot be found
	
	-or-
	
	  This operation is not supported on this machine
	
	For example, if the mail administrator, working at a machine named "Admin",
	creates the WGPO on a machine called "machine1," the user of machine1 is unable
	to connect to the WGPO. To work around this problem, you must manually edit or
	create a new MSMAIL.INI file for machine1.
	
	NOTE: Windows for Workgroups Mail defaults to uniform naming conventions (UNC) to
	specify the location of the postoffice. UNC cannot be used to connect a user to
	a share on his/her local machine. Browsing for the WGPO share on the local
	machine results in the "not supported" error message. Manually typing in the UNC
	name of the share (<machinename>\WGPO) results in the path not being
	found, as does typing in the local path (F:\WGPO).
	
	Workaround
	----------
	
	1. Copy the MSMAIL.INI file from a machine that is already connected to the
	  WGPO.
	
	2. Edit the MSMAIL.INI file for machine1 as follows:
	
	  a. Change the ServerPath= statement to reflect the local path.
	
	  b. Change the login= statement to reflect the machine1 mailbox (as set up by
	     the Mail Administrator).
	
	  c. Copy the newly edited MSMAIL.INI file to the WINDOWS directory on
	     machine1.
	
	  Note that you can use the Mail Administrator's MSMAIL.INI file as the source
	  for the MSMAIL.INI file for machine1. If you use this file, be sure to remove
	  all references to the WGPOMGR.DLL file.
	
	CREATING A WGPO ON A NOVELL NETWARE SERVER
	------------------------------------------
	
	Appendix B of the "Windows for Workgroups Mail User's Guide" for version 3.1
	describes how to create a Workgroup Postoffice (WGPO) on a Novell NetWare
	server. Step 7 of the instructions directs the user to create the WGPO by
	following the steps explained in Chapter 5 of the "User's Guide."
	
	The last step in Chapter 5 is to share the newly created WGPO. This step should
	NOT be done since the postoffice will be on a NetWare server. If the user
	attempts to share the WGPO directory on the NetWare server, the following error
	message is displayed:
	
	  You can only share resources that are on your computer. If you are trying to
	  share a printer, make sure that it is a local printer and that the TEMP
	  directory is on a local drive.
	
	Sharing the NetWare postoffice is not necessary because connections to the WGPO
	are made with the ServerPath= entry in the MSMAIL.INI, which reflects the
	appropriate NetWare Workgroup Postoffice location.
	
	Sharing a redirected, network drive is not possible in Windows for Workgroups.
	
	MOVING A WGPO FROM ONE MACHINE TO ANOTHER
	-----------------------------------------
	
	If you need to transfer a WGPO from one server to another and you don't want to
	transfer your administrator responsibilities, follow these steps:
	
	1. Be sure that you have full access to the share where the WGPO will be moved.
	
	2. Use File Manager to move the WGPO to its new location; be sure to move all
	  subdirectories.
	
	3. For each user and the WGPO Administrator, open the MSMAIL.INI file in a text
	  editor (such as Notepad), and change the ServerPath= line so that it points
	  to the new server. For example:
	
	  ServerPath=c:\windows\wgpo
	
	4. Save your changes, and restart the system.
	
	The WGPO administrator should be able to administer the postoffice an all users
	should be able to connect to the WGPO as they did before.
	
	CHANGING THE WGPO ADMINISTRATOR
	-------------------------------
	
	This section describes the procedure for transferring WGPO administrator
	responsibilities from one person to another. In this procedure, the following
	conventions are used:
	
	- Admin1 is the current Postoffice Administrator.
	
	- Admin2 will become the new Postoffice Administrator.
	
	The following fields are required:
	
	  Name:
	  Mailbox:
	  Password: (You must know the passwords for Admin1 and Admin2.)
	
	Steps to Change Administrators
	------------------------------
	
	1. Copy the MSMAIL.INI file from the WGPO machine to a floppy disk so that you
	  can use it later when establishing the Admin2 account.
	
	2. From Admin1's machine, sign on to Mail, select the Mail option, then select
	  Postoffice Manager.
	
	3. Select the Details option, and write down the required information for Admin1
	  and Admin2 (obtain the passwords from the Administrators; passwords don't
	  appear in the details dialog box).
	
	4. If Admin1 no longer needs a mail account, delete the user account for Admin2
	  and edit the details of the Admin1 account so that it matches the new
	  Postoffice Administrator's account (Admin2).
	
	5. Open Admin1's MSMAIL.INI file in a text editor (such as Notepad) and remove
	  the following lines:
	
	      WGPOMgr1=3.0;Mail;;13
	      WGPOMgr2=3.0;Mail;&Postoffice Manager...;14;WGPOMGR.DLL;0;;Manage
	         Workgroup Postoffice;MSMAIL.HLP;2870
	
	  NOTE: These two lines are the last two lines of the [Custom Commands] section.
	
	6. Admin1 should exit and sign out of Mail.
	
	7. On Admin2's machine, open the MSMAIL.INI file that was copied to the floppy
	  disk. Using a text editor (such as Windows Notepad), cut the following lines
	  from this file:
	
	      WGPOMgr1=3.0;Mail;;13
	      WGPOMgr2=3.0;Mail;&Postoffice Manager...;14;WGPOMGR.DLL;0;;Manage
	         Workgroup Postoffice;MSMAIL.HLP;2870
	
	  Then, paste these two lines into the [Custom Commands] section of Admin2's
	  MSMAIL.INI file (located in the Windows for Workgroups or Windows directory).
	  Be sure that these lines are the last two lines in the [Custom Commands]
	  section.
	
	8. Save the changes made to the MSMAIL.INI file, then start Mail.
	
	  NOTE: A message may appear that states Mail was unable to find your .MMF file.
	  A dialog box that displays the .MMF file that was detected then appears.
	  Select the .MMF and choose OK to select the .MMF file found on the hard disk
	  drive.
	
	9. Open Mail and select the Mail option to verify the Postoffice Administrator
	  option is now available on Admin2's machine.
	
	10. If necessary, create a user account for Admin1.
	
	ALLOWING MULTIPLE USERS TO LOG ON TO WFWG MAIL ON THE SAME MACHINE
	------------------------------------------------------------------
	
	You can set up Windows for Workgroups Mail so that multiple users can log on with
	individual Mail files.
	
	Steps to Establish Multiple Users
	---------------------------------
	
	1. Set up the Workgroup Postoffice. This cannot be done on the machine that will
	  be used by multiple users.
	
	2. Start Windows for Workgroups Mail on the machine that multiple users will be
	  using, log on to the remote Postoffice, and then exit and sign out of Mail.
	  This creates an MSMAIL.INI file.
	
	3. Open the MSMAIL.INI file in a text editor (such as Notepad), and under the
	  [Microsoft Mail] section change the line
	
	       Noserveroptions=1
	
	  to:
	
	       Noserveroptions=0
	
	  This allows you to select the Server option in Mail.
	
	4. Start Mail again and choose the Options menu.
	
	5. From the Mail menu, select the Server option and change the MMF path in the
	  File box from
	
	  C:\WINDOWS\MSMAIL.MMF
	
	  to
	
	  C:\WINDOWS\<Mailbox Name>.MMF
	
	  where <Mailbox Name> is the name of the user who logged in.
	
	6. Choose OK. This renames the MSMAIL.MMF file to the Mailbox Name with an .MMF
	  extension.
	
	7. To add another user, rename the MSMAIL.INI file and log on to the mail server
	  with the new user's name. Then, exit and sign out of Mail and follow steps 2
	  through 7. Repeat for as many users as necessary.
	
	NOTE: The last account that you create is the default account name to use when
	starting Mail.
	
	
	REMOVING A MAIL USER AND INSTALLING A NEW USER ON A WFWG MACHINE
	----------------------------------------------------------------
	
	The postoffice administrator may need to remove and recreate Mail and Schedule+
	accounts on a machine if that machine is used by a different person than the
	person for whom Mail and Schedule were first configured.
	
	Use the following steps to remove a user from a machine and then add a new user,
	without having to remove and reinstall Windows for Workgroups:
	
	1. To remove the old user from the Mail, start Mail and select the Postoffice
	  Manager option. Select the name of the user to be deleted, and then choose
	  Remove User.
	
	2. To add the new employee's account, select Add User and then set up the
	  mailbox information for the new user. Choose OK to save your entries.
	
	3. On the machine containing the old user's Mail and Schedule+ files, start File
	  Manager, making sure that neither Mail nor Schedule+ are running, and delete
	  the following files from the \Windows directory:
	
	  MSMAIL.MMF
	  MSMAIL.INI
	  SCHDPLUS.INI
	  <login>.CAL.<=== where <login> is the old user's login name
	
	4. Start Mail from the icon on the user's machine.
	
	5. You should receive a message asking if you want to connect to an existing
	  postoffice or create a new postoffice. Select the connect to an existing
	  postoffice option.
	
	6. From the Network Disk Resources dialog box, select the postoffice server and
	  share; for example, "\\server\wgpo" (without the quotation marks).
	
	7. You should receive a message asking if you have an account on the postoffice.
	  Respond Yes if you have set up the user's account as described in step 2.
	
	8. When the Mail Sign In screen is displayed, sign in to Mail. When the Mail
	  screen appears, exit Mail.
	
	9. To make the necessary changes for the user's Schedule+ account, have each
	  user's on the Postoffice (except the user you are removing and the user you
	  are setting up) perform these steps:
	
	  a. Log in to Schedule+.
	
	  b. Make a change of some type.
	
	  c. Exit Schedule+
	
	  d. Restart Schedule+, and then exit a second time.
	
	  This updates each existing user's .CAL file on the server (except the user you
	  are removing from the system).
	
	10. To set up Schedule+ for the new user, you need to delete the old user's .CAL
	  file from the postoffice's CAL subdirectory. These files have a numerical
	  filename and a .CAL extension; for example, "00000003.CAL." To determine
	  which .CAL file to delete, look at the file dates. All of the .CAL files
	  except the old user's .CAL file should have the current day's date because
	  step 9 updated them.
	
	  Delete the .CAL file that has a noncurrent date.
	
	11. Log in to Schedule+ using the new user's Mail login name and password.
	
	SET ACCESS PRIVILEGES OR OPEN OTHER'S APPT. BOOK OPTIONS UNAVAILABLE/DISABLED
	-----------------------------------------------------------------------------
	
	When you run Schedule+ with Microsoft Windows for Workgroups version 3.11 while
	using Microsoft At Work PC Fax, you cannot choose Set Access Privileges from the
	Options menu or Open Other's Appt. Book from the File menu (both options are
	unavailable [dimmed]). No error messages appear, and both Mail and Schedule+
	seem to work correctly.
	
	If you select the FAX Only option when setting up Microsoft At Work PC Fax
	instead of the FAX And Email option, Mail works correctly only if it was set up
	before the At Work PC Fax software. However, Mail runs Schedule+ offline only,
	disabling any of the online options in Schedule+.
	
	When the FAX Only option is selected, the transport entry in the SCHDPLUS.INI
	file is changed to the following value:
	
	  ScheduleTransport=TRNOFF
	
	To activate the Set Access Privileges option, change the line to read as
	follows:
	
	  ScheduleTransport=TRNSCHED.DLL
	
	When you restart Schedule+ after making this change, the offline calendar file
	updates the server's copy of the calendar file, and you can then use the Set
	Access Privileges, Open Other's Appt. Book, Work Online, and Work Offline menu
	options.
	
	REFERENCES
	==========
	
	"Microsoft Windows for Workgroups Mail User's Guide," for version 3.1, Appendix
	B
	
	"Microsoft Windows for Workgroups Resource Kit" for version 3.1
	
	Additional query words: 3.1 3.10 wfwg post office novell LANmanager limit schedule setup
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
