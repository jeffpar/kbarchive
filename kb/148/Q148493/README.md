---
layout: page
title: "Q148493: XCLN: How to Change Location of Offline Address Book Files"
permalink: /kb/148/Q148493/
---

## Q148493: XCLN: How to Change Location of Offline Address Book Files

	Article: Q148493
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 24-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Client can download an Offline Address Book from the
	Microsoft Exchange Server. This Offline Address Book (OAB) can be used when the
	client is not connected to the server and is running offline.
	
	The location of the Offline Address Book is not configurable through the Exchange
	client. By default the Offline Address Book is kept in the Windows directory.
	The Microsoft Exchange Administrator can use the Microsoft Exchange Setup Editor
	to specify a new path for the Offline Address Book. This however needs to be
	done before the clients are installed.
	
	This article describes how to change the location of the Offline Address Book
	file on the client computer after the Exchange client has been installed.
	
	MORE INFORMATION
	================
	
	The path to the Offline Address Book is saved in the user's profile. In order to
	change the location of the Offline Address Book, a new profile will need to be
	created. The "Mail & Fax" applet in Control Panel, does not allow the
	location of the OAB to be specified when creating a new profile. To control
	where the OAB files will be placed, a new profile must be created using the
	Automatic Profile Generator (Newprof.exe).
	
	How to Create a New Profile by Using Newprof.exe
	------------------------------------------------
	
	Newprof.exe, the Automatic Profile Generator, reads a file (Default.prf) and
	creates a profile based on the settings in this file. One of the settings in
	this file specifies the location of the Offline Address Book.
	
	If the Automatic Profile Generator was used to create a profile when the client
	was installed, the Default.prf file should be present in the Windows directory
	on the client computer.
	
	1. If the Default.prf file is present, edit the file using a text editor such as
	  Notepad, and complete these steps:
	
	  a. In the [Service2] section, add this entry:
	
	     OfflineAddressBookPath= <path to the offline Address Book>
	
	     If this entry already exists, modify the path to be what you want.
	
	  b. In the [General] section, change the value of the ProfileName entry to be
	     the name that you want the new profile to have.
	
	  c. Save the file, and exit out of the text editor.
	
	2. If Default.prf is not present in the Windows directory, check the Microsoft
	  Exchange Client installation share point on the server that was used to
	  install the Microsoft Exchange client. If Default.prf does not exist in that
	  share, run the Microsoft Exchange Setup Editor against that share point. From
	  the File Menu, choose Set User Options to bring up the User Options settings.
	  Select the Home Server property page. Set the Offline Address Book Path on
	  this page. Click OK and then exit the Setup Editor. The file, Default.prf,
	  should now be created in the Microsoft Exchange Client directory on the
	  server. Edit this file and change the ProfileName entry to be name of the new
	  profile. Copy Default.prf to the Windows directory on the client computer
	  where you wish to create the new profile.
	
	3. On the client computer, open up an MS-DOS command prompt.
	
	4. Change to the directory where the Microsoft Exchange client is installed.
	
	5. Run Newprof.exe -s to bring up a window.
	
	6. Make sure that the Profile Descriptor File specified is Default.prf in the
	  Windows directory.
	
	7. Click the Execute button. The program should now create a new profile with
	  the name specified in the .prf file.
	
	8. Log into the Microsoft Exchange client with this new profile. The next time
	  the OAB is downloaded, it will be saved in the new location specified in the
	  .prf file used to create the profile.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
