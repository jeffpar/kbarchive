---
layout: page
title: "Q169356: XCLN: Exchange Client Roving User Support"
permalink: /kb/169/Q169356/
---

## Q169356: XCLN: Exchange Client Roving User Support

	Article: Q169356
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up roving users in Microsoft Exchange Server.
	It also explains how to define the Exchange Server user profiles for roving
	users. A roving user is defined as a user who needs to access his or her
	Exchange account from different workstations, without any loss of mail.
	
	Roving user support is limited to similar operating systems. In other words, a
	user set up to be a roving user on Windows 3.x, will only be able to access mail
	from other Windows 3.x workstations. Similarly users set up on Windows 95 will
	only be able to move to other Windows 95 computers and Windows NT users can only
	move to other Windows NT computers. A user setup as a roving user on Windows 3.x
	cannot move to a Windows 95 computer and still retain the Exchange profile.
	However, once a profile has been setup for the user on each of the platforms,
	then the user will be able to move to any computer and still have access to his/
	her Exchange profile.
	
	MORE INFORMATION
	================
	
	Roving User Support for Windows 3.1 and Windows for Workgroups 3.11
	-------------------------------------------------------------------
	
	Windows running off the network.
	
	1. Work with your network administrator to create home directories on the
	  network for each user.
	
	2. Work with your network administrator to create Windows NT logon scripts that
	  will automatically connect users to their home directory on a network share
	  when they logon to a Windows NT Domain.
	
	3. Assign these logon scripts to users.
	
	4. From the Win16 Exchange client share point, run Setup /a to create a network
	  installation of the Win16 client.
	
	  NOTE: You must be logged in with Administrator privilege and must be running
	  the same shared copy of Windows that the users will be running. This is
	  because the Network installation, will add files to the Windows System
	  directory that are required by the Exchange client.
	
	5. Run the Microsoft Exchange Setup Editor against this network client
	  installation share point, to make any desired changes in the Setup Options a
	  user will see when running the client Setup Program. The Setup Editor can
	  also be used to modify default Exchange user profile information. Save the
	  changes you have made and exit the Setup Editor. This will modify the
	  Setup.stf file in the client network installation directory and create a file
	  called DEFAULT.PRF if it does not already exist.
	
	6. Each user should be configured to run Windows from the network.
	
	7. Each user should now run Setup.exe from the Win16 Exchange client network
	  installation point. Select the Workstation installation option. This will
	  install the client so that it runs from the server. The Setup program will
	  now create the user's default profile, based on the settings in the
	  Default.prf file in the client network installation share point. This default
	  profile will be created in the user's home directory on the server, if the
	  user is setup to run Windows from this directory.
	
	8. Each user should now be able to move any to similarly configured computer,
	  running Windows from the network, and be able to run the Exchange client
	  using the same profile.
	
	Windows running on the local computer.
	
	1. Work with your network administrator to create home directories on the
	  network for each user.
	
	2. Work with your network administrator to create Windows NT logon scripts that
	  will automatically connect users to their home directory on a network share
	  when they log on to a Windows NT Domain.
	
	3. Assign these logon scripts to users.
	
	4. From the Microsoft Exchange Client CD, run the Setup.exe program to install
	  all the client share points on the a server on the network, from which users
	  will be able to connect to and run the client Setup.exe program.
	
	5. Run the Microsoft Exchange Setup Editor against the Win16 client share point
	  on the server. Make any desired changes to modify the Setup Options a user
	  will see when running the client Setup Program. The Setup Editor can also be
	  used to modify default Exchange user profile information. Save the changes
	  you have made and exit the Setup Editor. This will modify the Exchng.stf file
	  in the client installation directory on the server and create a file called
	  Default.prf if it does not already exist.
	
	6. On each client computer, modify the Win.ini file by adding the following line
	  to the [MAPI] section:
	
	        ProfileDirectory16=H:
	    
	
	  where H: is the path to the user's home directory.
	
	  CAUTION: Adding a backslash (\) at the end of H: could cause the profile
	  generation to fail.
	
	7. Each user should now run Setup.exe from the Win16 Exchange client network
	  installation point. The Setup program will create the user's default profile,
	  based on the settings in the DEFAULT.PRF file in the client installation
	  share point. This default profile will be created in the directory specified
	  in the ProfileDirectory16 settings in the Win.ini. If this setting does not
	  exist, the profile will be created in the local Windows directory and the
	  user will not be able to access this profile from another computer.
	
	8. Each user should now be able to move any to similarly configured computer,
	  with the same ProfileDirectory16 setting in the Win.ini file, and be able to
	  run the Exchange client without having to re-create the Exchange client
	  profile.
	
	Roving User Support for MS-DOS
	------------------------------
	
	1. Work with your network administrator to create home directories on the
	  network for each user.
	
	2. Work with your network administrator to create Windows NT logon scripts that
	  will automatically connect users to their home directory on a network share
	  when they logon to a Windows NT Domain.
	
	3. Assign these logon scripts to users.
	
	4. Run the MS-DOS Exchange Client Setup program and select the Shared
	  installation option.
	
	5. Update each user's Windows NT logon scripts with the following lines:
	
	        SET  EXCHANGE = H:\ 
	
	        SET RPC_BINDING_ORDER = ncalrpc, ncacn_np, ncacn_tcp, ncacn_spx,
	        netbios
	    
	
	  where H:\ is the path the users home directory on the network. Depending on
	  the protocols installed on your network, you can modify the RPC Binding
	  Order.
	
	6. Each user now logs on to the Windows NT domain and then connects to the share
	  point where the MS-DOS Exchange Client has been by the Administrator.
	
	7. Each user should now run Setup.exe to install the MS-DOS Client, selecting
	  the Workstation installation option. At the end of the setup program, when
	  prompted to modify the Atuoexec.bat file, the user should select the option
	  NOT to modify the Autoexec.bat as this information will conflict with that in
	  the user's logon script.
	
	8. Each user should now be able to go to any workstation, connect to the share
	  point containing the network installation of the MS-DOS Exchange client and
	  run Exchange.exe to bring up the MS-DOS Exchange client. The user's mail will
	  always be on the server-based store because the MS-DOS client does not permit
	  local .pst files.
	
	Roving User Support for Windows NT and Windows 95
	-------------------------------------------------
	
	In order to support roving users on Windows NT or Windows 95 computers, MAPI
	profiles must be stored on a domain controller in a user's home domain so users
	can access them from anywhere in your organization. If your roving users will
	use computers in other domains, you must permit the roving users to log on to
	multiple domains, and those domains must trust the user's home domain.
	
	In addition, for Windows NT, you should work with your network administrator to
	make sure that your roving users have user rights on the Windows NT computers
	they intend to use in your organization. If your roving users do not have user
	rights, they will be unable to log on to the computers they want to use.
	
	To set up roving user support on Windows NT and Windows 95, the administrator
	must perform the following procedures on a Windows NT Server computer:
	
	- Create a Windows NT user profile (.USR file) for the Windows NT roving user.
	  For Windows 95 roving users, a user profile (.USR file) does not need to be
	  created. Specify the path to the roving user's Windows NT or Windows 95
	  profile. It is recommended that you store the profile in a shared user
	  directory for security reasons. The profile can also be stored in a shared
	  public directory. Permit the roving user to log on to a different trusted
	  domain (if the user will be using Windows NT or Windows 95 computers from
	  more than one domain).
	
	Before Windows NT roving users use Microsoft Exchange for the first time, they
	must:
	
	- Verify that their copy of Microsoft Exchange points to the network directory
	  where the user profile is located. If it does not, change the working
	  directory.
	
	Before Windows 95 roving users use Microsoft Exchange for the first time, they
	must:
	
	- Enable multiple users to customize their preferences and desktop settings.
	
	NOTE: Windows 95 profiles can be stored on any type of server, including a Novell
	NetWare server.
	
	To create a user profile for a Windows NT roving user:
	
	1. On your domain's primary domain controller, log on as a domain administrator
	  to the Windows NT Server computer. In the logon dialog box, be sure that the
	  Domain box displays the domain to which you want the account for the roving
	  user to belong.
	
	2. In the Administrative Tools group, choose User Profile Editor.
	
	3. On the File menu, click New.
	
	4. Click the button next to the Permitted To Use Profile box.
	
	5. In the Names box, select the user account which will have permission to use
	  this profile or type in the name of a user in the Add Name box.
	
	6. Click Add. The user account appears in the Add Name box.
	
	7. Click OK.
	
	8. In the User Profile Editor dialog box, on the File menu, click Save As File.
	  The Save As dialog box appears.
	
	9. In the Save File As Type box, select Per-User Profile.
	
	10. In the Directories box, select the path for the profile. It is recommended
	  that you store the profile in a shared user directory for security reasons.
	  The profile can also be stored in a shared public directory.
	
	11. In the File Name box, type a name for the profile and click OK.
	
	12. Close the User Profile Editor dialog box.
	
	To specify the path to a Windows NT or Windows 95 roving user's profile:
	
	1. In the Administrative Tools group, select User Manager for Domains. The User
	  Manager dialog box appears.
	
	2. Double-click the user account for the roving user.
	
	3. Click Profile.
	
	4. In the User Profile Path box, type the UNC path to the .usr file you created
	  in the last procedure. This steps needs to be done only for Windows NT roving
	  users.
	
	5. In the Home Directory box, click Connect To and type the drive letter and
	  path to the home server where the roving user's profile is located.
	
	To permit a Windows NT or Windows 95 roving user to log on to a different
	domain:
	
	1. In the Administrative Tools group, select User Manager for Domains. The User
	  Manager dialog box appears.
	
	2. On the Policies menu, click User Rights.
	
	3. In the "Right" box, select Log On Locally.
	
	4. Select the Show Advanced Users Rights check box and then click Add.
	
	5. In the List Names From box, select the domain to which you want to add your
	  roving user account.
	
	6. In the Names box, select the user account for the roving user, and then click
	  Add. The user account appears in the Add Names box.
	
	7. Click OK.
	
	8. In the User Rights Policy dialog box, click OK.
	
	9. Close User Manager for Domains.
	
	To change the working directory for Exchange Server on Windows NT
	
	1. At the Microsoft Exchange client computer, in the Microsoft Exchange group,
	  select the Microsoft Exchange icon.
	
	2. On the File menu, click Properties.
	
	3. In the Working Directory box, type the path of the directory where the roving
	  user's profile is located.
	
	To enable multiple users to personalize their settings on Windows 95:
	
	1. At the Microsoft Exchange client computer, in Control Panel, click Passwords.
	  The Passwords dialog box appears.
	
	2. Click User Profiles.
	
	3. Select the second option, which specifies that users can customize their
	  desktop settings. The first option under User Profile Settings is selected by
	  default. The second option is not required.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
