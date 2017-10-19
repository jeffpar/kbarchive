---
layout: page
title: "Q109518: MAIL.WRI from Windows for Workgroups 3.11"
permalink: /kb/109/Q109518/
---

## Q109518: MAIL.WRI from Windows for Workgroups 3.11

	Article: Q109518
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.11 MAIL.WRI file.
	
	MORE INFORMATION
	================
	
	Additional Notes About Using Mail with Microsoft Windows for
	Workgroups Version 3.11
	____________________________________________________________________
	
	This document contains information about using Mail and administering
	the Workgroup Post Office (WGPO). For additional information about
	Microsoft Windows for Workgroups that does not pertain to Mail, see
	"Other Online Documents" at the end of this document.
	
	Using Write to View This Document
	
	To make this document easier to read, you can enlarge the Write
	window to its maximum size. To do so, click the Maximize button in
	the upper-right corner of the window. Or open the Control menu in the
	upper-left corner of the Write window (press ALT+SPACEBAR), and then
	choose the Maximize command.
	
	To move through the document, press PAGE UP or PAGE DOWN. Or click
	the arrows at the top and bottom of the scroll bar along the right
	side of the Write window.
	
	To print the document, choose Print from the File menu.
	
	For Help on using Write, press F1.
	
	To read other online documents, choose Open from the File menu.
	
	Contents
	This document contains information about the following topics:
	
	1.0  Using Mail
	    1.1  Frequency of Checking for New Mail and Sending Mail
	    1.2  Sending a Bitmap as an Attachment
	    1.3  Connecting to a Post Office on a Novell NetWare Server
	    1.4  Mail and Protocols
	    1.5  Setting Up Mail for Multiple Users on One Computer
	
	2.0  Managing the Mail System Files
	    2.1  Changes Made to Files When You Create a WGPO
	    2.2  Recreating the Mail Initialization Procedure
	    2.3  Backing Up the MSMAIL.MMF File
	    2.4  Backing Up the MSMAIL.INI File
	    2.5  Restoring the MSMAIL.INI File
	    2.6  Creating and Accessing Other Message Files
	
	3.0  Managing a Workgroup Post Office
	    3.1  Workgroup Post Office Share Names
	    3.2  Compressing Shared Folders
	    3.3  Postoffice Manager and the Post Office Administrator
	    3.4  Changes Made to Files When You Create a WGPO
	    3.5  Workgroup Post Office Must Be at the Root of Share
	         on Server
	    3.6  Setting Up a Post Office on Another Computer
	    3.7  Changing the Post Office Administrator
	    3.8  Changing the Name of Your Workgroup Post Office
	    3.9  Moving Your Workgroup Post Office
	    3.10 Removing Your Workgroup Post Office
	
	4.0  Using Mail with Other Message Systems
	
	5.0  Creating Schedule+ Resources
	
	6.0  Other Online Documents
	
	Microsoft and MS-DOS are registered trademarks and Windows is a
	trademark of Microsoft Corporation.
	
	AT&T Easylink is a service mark of American Telephone and Telegraph
	Company.
	AppleTalk is a registered trademark of Apple Computer, Inc.
	Banyan is a registered trademark of Banyan Systems, Inc.
	Dutch is a trademark of Bitstream, Inc.
	CompuServe is a registered trademark of CompuServe, Inc.
	Infonet is a registered trademark of Computer Sciences Corporation.
	Data General is a registered trademark of Data General Corporation.
	Da Vinci Systems is a trademark of Da Vinci Systems Corporation.
	All-In-1, DEC, and VMS are registered trademarks of Digital Equipment
	Corporation.
	IBM, OfficeVision, and PROFS are registered trademarks of
	International Business Machines Corporation.
	cc:Mail is a trademark of cc:Mail, Inc., a wholly owned subsidiary of
	Lotus Development Corporation.
	Lotus Notes is a registered trademark of Lotus Development Corporation
	Novell and NetWare are registered trademarks of Novell, Inc.
	Retix is a registered trademark of Retix.
	Soft-Switch is a trademark of Soft-Switch Inc.
	Unisys is a registered trademark of Unisys Corporation.
	UNIX is a registered trademark of UNIX Systems Laboratories.
	WANG is a registered trademark of Wang Laboratories.
	Paintbrush is a trademark of ZSoft Corporation.
	
	1.0 Using Mail
	
	This section discusses how to use Mail.
	
	1.1  Frequency of Checking for New Mail and Sending Mail
	
	The setting in the Options dialog box that determines how often Mail
	checks for new messages also determines how often Mail checks the
	Outbox for messages to submit to the post office. A message first
	waits in the Outbox for the amount of time specified, and then waits
	again for the same amount of time until Mail checks for new messages.
	For example, if you specified that Mail should check for new messages
	every three minutes, it can take up to six minutes before you receive
	new mail.
	
	If it takes longer than you expect to receive your messages, try
	specifying a lower value.
	
	1.2 Sending a Bitmap as an Attachment
	
	In a mail message, if you include a bitmap that was created with
	Paintbrush or another graphics application, the recipient may not be
	able to view the bitmap if he or she is using a display adapter that
	has a different resolution from yours.
	
	1.3  Connecting to a Post Office on a Novell NetWare Server
	
	When you connect to an existing WGPO by using Mail, Mail displays a
	network-share browser which enables you to select the network server
	and share on which the post office resides. For NetWare servers, you
	must have previously attached to the server. Then, in the Network
	Path box, you can specify the path to the post office directory.
	
	1.4  Mail and Protocols
	
	You must have the Microsoft Windows Network installed to use Mail to
	communicate by electronic mail with others in your workgroup. Mail is
	not dependent on any particular protocol.
	
	1.5  Setting Up Mail for Multiple Users on One Computer
	
	You can set up one computer so that more than one person can use Mail
	on it. A separate .MMF file will be maintained for each user on the
	Post Office computer. Note that there must be enough disk space
	available on the Post Office computer for all inboxes that are stored
	there.
	
	The setup steps should be followed by the Post Office administrator.
	For detailed information about the first four steps, refer to Chapter
	4, "Mail" and Appendix A, "Maintaining Mail" in the Microsoft
	Workgroup Add-On User's Guide.
	
	To set up a computer for multiple Mail users:
	
	1. Set up the Workgroup Post Office. The Post Office must be set up on a
	  different computer.
	
	2. Set up the accounts for each user, rather than having each user set up
	  his or her own account.
	
	3. Start Mail and logon using the mailbox name of the most frequent user.
	  The first account created is the default account name used when
	  starting Mail.
	
	4. In the Welcome to Mail dialog box, select Connect to An Existing
	  Postoffice.
	
	5. From the Mail menu, select Options.
	
	6. Select the Server button.
	
	7. In the Storage section, check the Postoffice check box, and then choose
	  OK.
	
	8. From the Mail menu, select Exit and Sign Out.
	
	  One user can now use Mail.
	
	9. Logon to Mail as each user, and repeat steps 5 through 8.
	
	Once setup is complete, anyone who has been added by the administrator can
	logon to Mail. The logon dialog box will display the mailbox name of the
	first account created, so other users will need to type their mailbox name.
	All users on the shared computer must Exit and Sign Out each time they
	leave Mail.
	
	2.0 Managing the Mail System Files
	
	Each user and the WGPO has two Mail system files:
	
	  The message file: MSMAIL.MMF
	
	  The Mail file: MSMAIL.INI
	
	The message file, MSMAIL.MMF, stores messages, message folders, and
	the Personal Address Book. This file is updated as messages are
	received.
	
	The Mail file, MSMAIL.INI, controls the way Mail works.
	
	Your MSMAIL.MMF and MSMAIL.INI files are located in the directory
	where you set up Windows for Workgroups (the default is C:\WINDOWS).
	
	When you create a WGPO or connect to a post office, these files are
	automatically modified as described below. You need to edit the Mail
	system files only when you want to change functionality or restore
	these files to a particular state. For example, if you set up a WGPO
	and then delete it, you need to modify your MSMAIL.INI file to
	connect to a different post office.
	
	2.1 Changes Made to Files When You Connect to a WGPO
	
	When you connect to a WGPO, the following occurs:
	
	  The following commands are added to the [Microsoft Mail] section
	  of your MSMAIL.INI file, which is in the Windows directory:
	
	     ServerPath=\\computername\sharename
	     Login=mailbox_name
	
	  A message file is created for you. The default name is MSMAIL.MMF.
	
	2.2 Recreating the Mail Initialization Procedure
	
	When you first run Mail, you are given the option to connect to an existing
	post office or create a new post office. After you make your selection, you
	cannot go back and change your selection. Use the following procedure if
	you chose to set up a new post office, and you did not want to.
	
	To reinitialize the Mail initialization procedure:
	
	1. Open the MSMAIL.INI file in an ASCII text editor, such as Notepad.
	
	2. Disable the ServerPath= and the login= lines by typing a semicolon (;)
	  at the beginning of each line.
	
	3. Add or edit the CustomInitHandler= line so that it appears as follows:
	
	     CustomInitHandler=WGPOMGR.DLL,10
	
	4. Run Mail. The initialization procedure begins.
	
	2.3  Backing Up the MSMAIL.MMF File
	
	Since the MSMAIL.MMF file contains all your messages, you should back
	it up regularly. For instructions on backing up and restoring the
	MSMAIL.MMF file, see the Microsoft Workgroup Add-On User's Guide.
	
	In some circumstances, Mail may encounter problems in the MSMAIL.MMF
	file and you will be asked if you want Mail to repair the file.  If
	you choose Yes, Mail makes a backup copy of the MSMAIL.MMF file in
	the Windows directory or in the directory specified by the MailTmp
	parameter in the MSMAIL.INI file. Each time the file is repaired, a
	new backup file is created. The first such backup file will be named
	MSMAIL.BAK, and subsequent backup files will be named MSMAIL.001,
	MSMAIL.002, and so on. You can delete these backup files.
	
	2.4  Backing Up the MSMAIL.INI File
	
	In general, you don't need to modify your MSMAIL.INI file; however,
	you might want to restore it to a given state or alter it so that you
	can change the way Mail works. If you do change your MSMAIL.INI file,
	you should make a backup first.
	
	Important: After altering the MSMAIL.INI file, you must restart Mail
	for the changes to take effect.
	
	To back up your MSMAIL.INI file:
	
	1. In the Main group, choose the File Manager icon.
	
	2. Select your MSMAIL.INI file. It is in the directory where you set up
	  Mail (the default is C:\WINDOWS).
	
	3. From the File menu, choose Copy.
	
	4. In the To box, type a name for your backup file?for example,
	  MSMAIL.OLD.
	
	5. Choose the OK button.
	
	To restore your MSMAIL.INI file, you can rename a backup copy, if you have
	one, or you can edit your existing MSMAIL.INI file. How you edit the file
	depends on whether you created a WGPO or connected to one.
	
	2.5 Restoring the MSMAIL.INI File
	
	To restore your MSMAIL.INI file after creating a WGPO:
	
	If you made a backup copy of your MSMAIL.INI file, rename it as
	MSMAIL.INI, and move it to the directory where you set up Mail (the
	default is C:\WINDOWS).
	
	If you don't have a backup copy, follow these steps:
	
	1. Remove the following lines from the [Custom Commands] section of your
	  MSMAIL.INI file:
	
	     WGPOMgr1=3.0;Mail;;13
	     WGPOMgr2=3.0;Mail;&Postoffice Manager...;14;
	     WGPOMGR.DLL;0;;Manage Workgroup Postoffice;MSMAIL.HLP;2870
	
	2. Remove the following lines from the [Microsoft Mail] section of the
	  MSMAIL.INI file:
	
	     ServerPath=drive:\directory
	     Login=mailbox_name
	
	2.6  Creating and Accessing Other Message Files
	
	You can create message files in addition to your primary message file by
	using the Backup command or the Export Folders command.
	
	To access these files, use the /f option to include the name of the file in
	the Mail command line, as follows:
	
	  msmail.exe  /f  filename
	
	Mail starts offline, and then opens the specified message file instead of
	your primary message file. To revert to your primary message file, start
	Mail without using the /f option.
	
	3.0 Managing a Workgroup Post Office
	
	3.1  Workgroup Post Office Share Names
	
	The share name defined for a WGPO should not be longer than eight
	characters, and must not include spaces.
	
	3.2 Compressing Shared Folders
	
	When compressing shared folders in the Postoffice Manager, the
	administrator should ensure that the shared folders are not being
	used by Mail users.
	
	3.3 Postoffice Manager and the Post Office Administrator
	
	Postoffice Manager is the program used by the post office
	administrator to administer the WGPO. By default, Postoffice Manager
	is installed on the computer of the person who creates the WGPO.
	
	3.4 Changes Made to Files When You Create a WGPO
	
	When you create a WGPO, the following occurs in the administrator account:
	
	  The WGPO directory is created in the specified location.
	
	  The following commands are added to the [Custom Commands]
	  section of the MSMAIL.INI file (which is in the Windows directory):
	
	     WGPOMgr1=3.0;Mail;;13
	     WGPOMgr2=3.0;Mail;&Postoffice Manager...;14;
	     WGPOMGR.DLL;0;;Manage Workgroup Postoffice;MSMAIL.HLP;2870
	
	  The Postoffice Manager command is added to the Mail menu on the
	  computer from which the WGPO was created. The commands appear only on
	  the Mail menu on this computer. To run Postoffice Manager on another
	  computer, you must add the commands to the MSMAIL.INI file on that
	  computer and delete them from the original computer.
	
	  The following commands are added to the [Microsoft Mail] section
	  of the MSMAIL.INI file:
	
	     ServerPath=drive:\directory
	     Login=mailbox_name
	
	  A message file is created for the administrator account. The
	  default filename is MSMAIL.MMF.
	
	3.5 Workgroup Post Office Must Be at the Root of Share on Server
	
	If you create a WGPO on a Microsoft Windows NT, LAN Manager, or
	similar network server, you must define a share on that server that
	has the WGPO directory as its root. When users run Mail to connect to
	a post office on the network, they can select only a post office that
	resides in the root of the share, not one in a subdirectory of the
	share.
	
	3.6  Setting Up a Post Office on Another Computer
	
	The WGPO can be set up on another computer across the network.
	For the following procedure, assume these conditions are true:
	
	  The post office is set up and administered from computer 1, a
	  Windows for Workgroups computer. The user on computer 1 is the post
	  office administrator. Postoffice Manager runs on computer 1.
	
	  The post office files are actually kept on computer 2, a computer
	  with server/sharing capabilities such as one running Windows for
	  Workgroups, Windows NT, LAN Manager, or Novell NetWare.
	
	NOTE: Novell servers require some special attention. Refer to the
	"Creating a WGPO on a Novell NetWare Server" section in this file.
	
	To set up a post office on another computer, the designated
	administrator of the WGPO should carry out the following procedure:
	
	1. On computer 1, from the Main group, start Mail.
	
	2. Choose Create A New Workgroup Postoffice.
	
	3. To connect to computer 2, choose the Network button.
	
	If computer 2 is running Windows for Workgroups, Windows NT, or is a LAN
	Manager server, type the server name and share name (\\server\share) where
	you want the post office created, and then choose the OK button. You must
	have access rights to the server and the share.
	
	If computer 2 is a Novell server, you must be logged onto the Novell server
	and have the correct permissions. Then, connect to the server and use one
	of these conventions:
	
	  server/share:directory
	  \\server\share\directory
	  remapped drive:\directory
	
	4. After the WGPO is established, check to ensure that it is shared
	  properly on computer 2.
	
	3.7 Changing the Post Office Administrator
	
	You can transfer WGPO administrator responsibilities from one person
	to another. In this procedure, the following conventions are used:
	
	  Admin1 is the current Post Office Administrator.
	  Admin2 will become the new Post Office Administrator.
	
	The following fields are required:
	
	  Name:
	  Mailbox:
	  Password: (You must know the passwords for Admin1 and Admin2.)
	
	To change administrators:
	
	1. Copy the MSMAIL.INI file from the WGPO computer to a floppy disk so
	  that you can use it later when establishing the Admin2 account.
	
	2. From Admin1's computer, sign on to Mail, select the Mail option, then
	  select Postoffice Manager.
	
	3. Select the Details option, and write down the required information for
	  Admin1 and Admin2 (obtain the passwords from the Administrators;
	  passwords don't appear in the details dialog box).
	
	4. Admin1 should delete the user account for Admin2 and edit the details
	  of the Admin1 account so that it matches the new Post Office
	  Administrator's account (Admin2).
	
	5. Open Admin1's MSMAIL.INI file in a text editor (such as Notepad) and
	  remove the following lines from the end of the [Custom Commands]
	  section:
	
	      WGPOMgr1=3.0;Mail;;13
	      WGPOMgr2=3.0;Mail;&Postoffice Manager...;14;
	      WGPOMGR.DLL;0;;ManageWorkgroup Postoffice;MSMAIL.HLP;2870
	
	6. Admin1 should exit and sign out of Mail.
	
	7. On Admin2's computer, open the MSMAIL.INI file that was copied to the
	  floppy disk. Using a text editor (such as Notepad) cut the following
	  lines from this file:
	
	      WGPOMgr1=3.0;Mail;;13
	      WGPOMgr2=3.0;Mail;&Postoffice Manager...;14;
	      WGPOMGR.DLL;0;;ManageWorkgroup Postoffice;MSMAIL.HLP;2870
	
	   Then, paste these lines into the [Custom Commands] section of
	   Admin2's MSMAIL.INI file (located in the Windows directory). Be sure
	   that these lines are the last lines in the [Custom Commands] section.
	
	8. Save the changes made to the MSMAIL.INI file, then start Mail.
	
	NOTE: A message may appear that states Mail was unable to find your .MMF
	file. A dialog box then appears that displays the .MMF file that was
	detected. Select the detected .MMF file and then choose the OK button.
	
	9. Open Mail and select the Mail option to verify that Postoffice
	  Administrator is now available on Admin2's computer.
	
	10.If necessary, create a user account for Admin1.
	
	3.8 Changing the Name of Your Workgroup Post Office
	
	Before you rename your WGPO, inform members of your workgroup that they
	will not be able to exchange messages until they reconnect to the renamed
	WGPO.
	
	To rename your WGPO:
	
	1. Ask all people in your workgroup to quit and sign out of Mail.
	
	2. In the Main group, choose the File Manager icon.
	
	3. Select the WGPO directory.
	
	4. On the toolbar, click the Share As button. Or choose Share As from the
	  Disk menu.
	
	5. In the Share Name box, type the new name for your WGPO, and then choose
	  the OK button.
	
	6. Edit the following line in the [Microsoft Mail] section of your
	  MSMAIL.INI file to reflect the new name of the WGPO:
	
	    ServerPath=drive:\directory
	    or
	    ServerPath=\\computername\sharename
	
	7. If your shared directory has a password, you need to delete or edit the
	  line specifying the password for the shared directory.
	
	8. Inform people in your workgroup of the new name, and ask them to edit
	  the following line in the [Microsoft Mail] section of their MSMAIL.INI
	  file to reflect the new name of the WGPO:
	
	     ServerPath=\\computername\sharename
	
	They may also need to delete or edit a line specifying a password for the
	shared directory.
	
	3.9 Moving Your Workgroup Post Office
	
	You may need to move your WGPO to a different directory?for example,
	if the computer on which you set up the WGPO runs out of disk space.
	Before you move your WGPO, inform people in your workgroup that they
	will not be able to exchange messages until they reconnect to the
	relocated post office.
	
	To move your WGPO:
	
	1. Ask all people in your workgroup to quit and sign out of Mail.
	
	2. In the Main group, choose the File Manager icon.
	
	3. Select the WGPO directory.
	
	4. From the File menu, choose Move.
	
	5. In the To box, type the new path for your WGPO, and then choose the OK
	  button.
	
	6. Share your WGPO.
	
	7. Edit the following line in the [Microsoft Mail] section of your
	  MSMAIL.INI file to reflect the new location of the WGPO:
	
	     ServerPath=drive:\directory
	     or
	     ServerPath=\\computername\sharename
	
	8. If your shared directory has a password, you need to delete or edit the
	  line specifying the password for the shared directory.
	
	9. Inform people in your workgroup of the new location for the WGPO, and
	  ask them to edit the following line in the [Microsoft Mail] section of
	  their MSMAIL.INI file to reflect the new location of the WGPO:
	
	    ServerPath=\\computername\sharename
	
	They may also need to delete or edit a line specifying a password for the
	shared directory.
	
	3.10 Removing Your Workgroup Post Office
	
	You may need to remove a WGPO that you have just created, and then
	re-create it. Before you remove your WGPO, inform people in your
	workgroup that they will not be able to exchange messages until they
	reconnect to a new post office.
	
	To delete your WGPO:
	
	1. In the Main group, choose the File Manager icon.
	
	2. Delete the WGPO directory.
	
	3. Delete the following lines from the [Custom Commands] section of your
	  MSMAIL.INI file:
	
	     WGPOMgr1=3.0;Mail;;13
	     WGPOMgr2=3.0;Mail;&Postoffice Manager...;14;
	       WGPOMGR.DLL;0;;Manage Workgroup Postoffice;MSMAIL.HLP;2870
	
	4.0 Using Mail with Other Message Systems
	
	To connect a workgroup post office to another workgroup post office,
	you must purchase Microsoft Mail Postoffice Upgrade for Windows for
	Workgroups for each post office. To connect to another message
	system, such as X.400 or SMTP, the Microsoft Mail Postoffice Upgrade
	is required, as well as the gateway software which enables the two
	message systems to exchange information.
	
	Each message system can connect to the workgroup post office by using
	one or more specific gateways. The following table is a partial list
	of the Microsoft gateways needed for various message systems. If you
	use one of the message systems listed in this table, you need to
	purchase the appropriate gateway.
	
	Additional gateways that use the Microsoft Mail File Format API may
	also be available. If you are interested in a message system or
	gateway that is not listed, contact your local Microsoft subsidiary.
	
	Message system               Gateway
	ARCOM 400 Swiss PTT          X.400
	AT&T a Easylink               X.400
	AT&T Mail                    X.400 or AT&T Gateway
	Atlas 400                    X.400 (NF mark from Afnor)
	Banyana Mail                 MHS or X.400
	Beyond Mail                  MHS
	cc:Mail                      X.400, MHS, SMTP, or Office Vision*
	CompuServe                   SMTP or MHS
	The Coordinator              MHS
	Data Generala CEO            X.400
	DaVincia                     MHS
	DECa All-In-1                X.400, PROFS, SNADS, or SMTP
	DEC VMSA Mail                X.400 or SNADS
	Dutcha PTT                   X.400
	Envoy 100/Gemdes             X.400
	Fax                          Fax
	Fischer International        X.400 or SNADS
	Gold 400 UK                  X.400
	Higgins                      MHS
	IBMA AS/400 Office           SNADS, or through PROFS Distribution
	                            Manager, if you have a VM host
	IBM System 36                PROFS/OV
	IBM CMS NOTES                PROFS
	IBM DISOSS                   SNADS
	IBM OfficeVision. MVS        SNADS, or through PROFS Distribution
	                            Manager, if you have a VM host
	IBM PROFS                    PROFS
	Infonet                      X.400
	Internet                     SMTP
	Lotus Notes                  MHS, or the MS Mail-Notes Gateway built by
	                            Phoenix Systems, distributed by Corporate
	                            Software
	Mail for AppleTalk           Microsoft Mail connection
	NCR Corporation              X.400, or in some cases, the AT&T Gateway
	Novell NetWare               MHS
	Retix                        X.400
	Soft-Switch Central          SNADS
	Sprint TeleMail              X.400
	Telebox 400 German PTT       X.400
	Touch                        X.400
	Unisys                       X.400
	UNIX SMTP                    SMTP (SMTP is a part of TCP/IP, not a part of
	                            Unix. You can also have SMTP origination to a
	                            VAX or IBM host.)
	UUCP                         SMTP (requires connectivity to an SMTP host,
	                            which acts as a router to UUCP)
	Verimation Memo              SNADS
	WANG Office                  MHS, X.400, or PROFS
	
	5.0  Creating Schedule+ Resources
	
	To create a Schedule+ resource (for a conference room, overhead
	projector, or other shared equipment), the Post Office Administrator
	must do the following:
	
	1. Create a Mail account for that resource by using the Postoffice Manager
	  command on the Mail menu.
	
	2. Exit and sign out of Mail.
	
	3. Sign in to Mail and Schedule+ by using the mailbox name and password
	  that correspond to the resource.
	
	4. From the Schedule+ Options menu, choose the General Options command.
	
	5. Select "This account is for a resource," and then choose the OK button.
	
	6. Quit Mail and Schedule+ by choosing Exit & Sign Out from the Schedule+
	  File menu.
	
	If you will be setting up resources from a computer that is used by another
	Mail account, this process will require you to sign in as multiple Mail
	users on the same computer. Resources do not receive mail, so in most cases
	there is no need to maintain separate message files for them. Therefore, if
	you are setting up resources on a computer that is used by only one other
	mail user (or no other mail users), set the passwords for all the accounts
	on that computer to be the same. You will be able to sign in as any of the
	accounts.
	
	6.0  Other Online Documents
	
	The following table describes other online documents that contain
	important information about Windows for Workgroups that is not
	included in the printed documentation or in Help:
	
	Document          Contains
	______________________________________________________________________
	
	SETUP.TXT - Information about problems that may occur when you set up
	           Windows for Workgroups.
	
	MAIL.WRI - Information about the MSMAIL.INI file and other Mail
	          administration information.
	
	PRINTERS.WRI - Information about specific printers and fonts.
	
	NETWORKS.WRI - Information about running Windows for Workgroups with
	              specific network configurations.
	
	README.WRI - Information about using Windows for Workgroups with the
	            Multimedia Extensions version 1.0, specific display-adapter
	            and system configurations, and MS-DOS?based applications, and
	            information that was unavailable when the documentation was
	            printed.
	
	SYSINI.WRI - Information about the settings in the SYSTEM.INI file.
	
	WININI.WRI - Information about the settings in the WIN.INI file.
	
	Additional query words: wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
