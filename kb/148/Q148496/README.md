---
layout: page
title: "Q148496: XCLN: Creating Shared Windows Roving Users"
permalink: kb/148/Q148496/
---

## Q148496: XCLN: Creating Shared Windows Roving Users

	Article: Q148496
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,4.0,5.0,97,98; winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup kbusage exc4 exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.5 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange administrators have the ability to support roving users
	running from a network installation of Windows 3.1 and 3.11. Roving users are
	individuals that are not tied to a specific machine. They need access to their
	Microsoft Exchange accounts regardless of their physical location on the
	network.
	
	MORE INFORMATION
	================
	
	Administrators can run the following steps to create a default profile that can
	be customized for each Microsoft Exchange Windows client user:
	
	1. The network administrator will need to create home directories on the network
	  for each user and assign logon scripts that will automatically connect those
	  users to their home directory.
	
	2. From the Microsoft Exchange Win16 client share point, run SETUP /a to create
	  a network installation of the Microsoft Exchange Win16 client.
	
	  NOTE: You must be logged in with Administrator privileges and be running the
	  same shared copy of Windows that the users will be running. This is because
	  the network installation will add files to the WINDOWS\SYSTEM directory that
	  are required by the Microsoft Exchange client.
	
	3. Run the Microsoft Exchange Setup Editor against this network client
	  installation share point to make any desired changes in the Setup Options a
	  user will see when running the client Setup Program. The Microsoft Exchange
	  Setup Editor can also be used to modify default Microsoft Exchange user
	  profile information. Save the changes you have made and exit the Setup
	  Editor. This will modify the SETUP.STF file in the client network
	  installation directory and create a file called DEFAULT.PRF if it does not
	  already exist.
	
	4. Each user should be configured to run Windows from the network.
	
	5. Each user should now run SETUP.EXE from the Microsoft Exchange Win16 client
	  network installation point. Select the Workstation installation option. This
	  will install the client so that it runs from the server. The Setup program
	  will now create the user's default profile, based on the settings in the
	  DEFAULT.PRF file in the client network installation share point. This default
	  profile will be created in the user's home directory on the server if the
	  user is set up to run Windows from this directory.
	
	6. Each user should now be able to move to any similarly configured machine,
	  running Windows from the network, and be able to run the Microsoft Exchange
	  client using the same profile.
	
	
	Additional query words: FAQ
	
	======================================================================
	Keywords          : kbsetup kbusage exc4 exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:2000,4.0,5.0,97,98; winnt:4.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
