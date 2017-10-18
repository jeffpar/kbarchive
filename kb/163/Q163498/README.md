---
layout: page
title: "Q163498: XCLN: Resource Kit Utility: How to Install and use Autofill.exe"
permalink: kb/163/Q163498/
---

## Q163498: XCLN: Resource Kit Utility: How to Install and use Autofill.exe

	Article: Q163498
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	Autofill.exe is a Resource Kit utility and is provided as is (ETS does not
	provide support for this utility).
	
	SUMMARY
	=======
	
	Autofill.exe, a Microsoft Exchange Resource Kit utility, can assist in resolving
	display names as you enter them in the Microsoft Exchange Client.
	
	Similar to the nickname functionality of the Microsoft Outlook Client, with this
	utility the Microsoft Exchange Client attempts to resolve names as they are
	typed in the client.
	
	MORE INFORMATION
	================
	
	Currently, this utility is available on Microsoft's Web site at the following
	location:
	
	  http://www.microsoft.com/msdownload/borkclient/07000.htm
	
	The download is a self-extracting zip (autofill.exe) that extracts the following
	2 files:
	
	  autofill.dll   55KB   8/13/96
	  setup.exe      27KB   8/13/96
	
	After unzipping the files into a test directory, go to a command prompt and from
	the directory where you downloaded the utility, type:
	
	  setup
	
	and press the Enter key. The following should be displayed:
	
	  Creating the file: C:\autofill\names.dat
	  Setting Reg for autofill to : 4.0;c:\autofill\autofill.dll;1
	
	Note: Do not manually create an Autofill directory or the setup program will
	fail. Also running setup from within windows (doubleclicking setup.exe) will
	prevent you from viewing the status (i.e. errors) of the setup.
	
	The setup process does the following:
	
	- Creates an Autofill directory.
	
	- Creates a Names.dat file in the autofill folder.
	
	- Copies Autofill.dll to the Autofill directory.
	
	- Updates the Windows 95 registry to load this dll.
	
	Note: In the BackOffice Resource Kit 2.0 setup, there is an option to install
	Client components locally. If the Local option is selected, the various client
	extensions for autofill are added and autofill is enabled.
	
	To demonstrate the autofill feature:
	
	1. Start the Microsoft Exchange Client.
	
	2. Compose a new message and type a username on the To: line and perform a check
	  names (the name should underline). For example, type:
	
	  John Doe
	
	3. Exit out of the newly composed message.
	
	4. Compose another new message and begin typing the same username as in step 1.
	
	As soon as you begin typing the username (in this case, the J) the username
	should expand to the full username John Doe.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : 4.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
