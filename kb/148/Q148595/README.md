---
layout: page
title: "Q148595: XCLN: Creating Roving Users on Win95 and WinNT"
permalink: kb/148/Q148595/
---

## Q148595: XCLN: Creating Roving Users on Win95 and WinNT

	Article: Q148595
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 20-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Administrators of Microsoft Exchange version 4.0 have the ability to support
	roving users running both the Microsoft Exchange Windows 95 and Windows NT
	clients. Roving users are individuals who are not tied to a specific computer.
	They need access to their Microsoft Exchange accounts regardless of their
	physical location on the network.
	
	MORE INFORMATION
	================
	
	For Microsoft Windows NT administrators to support roving users on Windows 95
	and Windows NT computers, MAPI profiles must be stored on a domain controller in
	a user's home domain, so that users can access them from anywhere in the
	organization. If your roving users will use computers in other domains, you must
	permit the roving users to log on to multiple domains, and those domains must
	trust the user's home domain.
	
	In addition, for Windows NT, administrators need to ensure that roving users have
	user rights on the Windows NT computers that they intend to use in the
	organization. If roving users do not have user rights, they will be unable to
	log on to those computers.
	
	To set up roving user support on Windows NT and Windows 95, the administrator
	must perform the following procedures on a Windows NT Server:
	
	1. Create a new Windows NT user profile for the roving user.
	
	2. Specify the path to the roving user's Windows NT or Windows 95 profile. It is
	  recommended that you store the profile in a shared user directory for
	  security reasons. The profile can also be stored in a shared public
	  directory.
	
	3. Permit the roving user to log on to a different trusted domain, if the user
	  will be using Windows NT or Windows 95 computers from more than one domain.
	
	Before Windows NT roving users use Microsoft Exchange for the first time, the
	administrator must verify that their copy of Microsoft Exchange points to the
	network directory where the user profile is located. If it does not, change the
	working directory.
	
	Before Windows 95 roving users use Microsoft Exchange for the first time, the
	administrator must enable multiple users to customize their preferences and
	desktop settings.
	
	NOTE: Windows 95 profiles can be stored on any type of server, including a Novell
	NetWare server.
	
	Creating a user profile for a Windows NT roving user
	----------------------------------------------------
	
	The following steps create a Per-User profile for Windows NT users.
	
	1. On the domain's primary domain controller, log on as a domain administrator
	  to the Windows NT Server computer. In the logon dialog box, be sure that the
	  Domain box displays the domain to which you want the account for the roving
	  user to belong.
	
	2. In the Administrative Tools group, choose User Profile Editor.
	
	3. From the File menu, choose New.
	
	4. Choose the list button next to the Permitted To Use Profile box.
	
	5. From the Names box, select the user account that will have permission to use
	  this profile or type in the name of a user in the Add Name box.
	
	6. Choose Add. The user account appears in the Add Name box.
	
	7. Choose OK.
	
	8. In the User Profile Editor dialog box, from the File menu choose Save As
	  File. The Save As dialog box appears.
	
	9. From the Save File As Type box, select Per-User Profile.
	
	10. In the Directories box, select the path for the profile. It is recommended
	  that you store the profile in a shared user directory for security reasons.
	  The profile can also be stored in a shared public directory.
	
	11. In the File Name box, enter a name for the profile and choose OK.
	
	12. Close the User Profile Editor dialog box.
	
	Specifying the path to a Windows NT or Windows 95 roving user's profile
	-----------------------------------------------------------------------
	
	1. In the Administrative Tools group, choose User Manager for Domains. The User
	  Manager dialog box appears.
	
	2. Double-click the user account for the roving user.
	
	3. Choose the Profile button.
	
	4. In the User Profile Path box, type the UNC path to the .USR file you created
	  in the last procedure. Include the name of the .USR file. This step should be
	  ignored for Windows 95 roving users.
	
	5. Under the Home Directory box, select the Connect To option and type the drive
	  letter and path to the home server where the roving user's profile is
	  located. In case of Windows 95 roving users, this directory will be empty
	  until after the user logs in and then logs out of the domain. At that time,
	  the user profile will be copied to the Server from the Windows 95
	  workstation.
	
	Permitting roving users to log into a different domain
	------------------------------------------------------
	
	1. In the Administrative Tools group, choose User Manager for Domains. The User
	  Manager dialog box appears.
	
	2. In the Policies menu, select User Rights.
	
	3. From the Right box, select Log On Locally.
	
	4. Check the Show Advanced Users Rights check box.
	
	5. Choose Add.
	
	6. In the List Names From box, select the domain to which you want to add your
	  roving user account.
	
	7. In the Names box, select the user account for the roving user.
	
	8. Choose Add. The user account appears in the Add Names box.
	
	9. Choose OK.
	
	10. In the User Rights Policy dialog box, choose OK.
	
	11. Close User Manager for Domains.
	
	Changing the working directory for Microsoft Exchange on Windows NT
	-------------------------------------------------------------------
	
	1. At the Microsoft Exchange client computer, in the Microsoft Exchange group,
	  select the Microsoft Exchange icon.
	
	2. From the File menu, choose Properties.
	
	3. In the Working Directory box on Windows NT 3.51 computers and the Start In
	  box on Windows NT 4.0 computers, type the path of the directory where the
	  roving user's profile is located.
	
	Enabling multiple users to personalize their settings on Windows 95
	-------------------------------------------------------------------
	
	1. At the Microsoft Exchange client computer, in the Control Panel, choose
	  Passwords. The Passwords dialog box appears.
	
	2. Choose the User Profiles property page.
	
	3. Select the second option which specifies that users can customize their
	  desktop settings. The first option under User Profile Settings is selected by
	  default. The second option is not required.
	
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbOSWinSearch kbOSWinNT351 kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbOSWinNTSearch kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; winnt:3.51,4.0
	
	=============================================================================
	
