---
layout: page
title: "Q198113: XCLN:How To Use IExpress To Generate Profiles for Users at Logon"
permalink: kb/198/Q198113/
---

## Q198113: XCLN:How To Use IExpress To Generate Profiles for Users at Logon

	Article: Q198113
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article explains the steps necessary to create an IExpress package
	containing the files necessary to generate a profile for each user who logs on
	to a computer.
	
	MORE INFORMATION
	================
	
	Creating profiles for each user logging on to a computer is a four-step process,
	which is explained in the following sections.
	
	Modifying the Outlook.prf File
	------------------------------
	
	Using a text editor such as Notepad, open the file Outlook.prf. Within this file
	locate the entry:
	
	     OverwriteProfile=
	
	This is located in Section 1 - Profile defaults, under the heading [General].
	Change the value from "Yes" to "No" (without quotation marks).
	
	Save changes to the file and close Notepad.
	
	Creating a User-Specific Profile with IExpress
	----------------------------------------------
	
	For additional information on generating user-specific profiles with IExpress,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q193114 XCLN: How To Generate A User-Specific Profile with IExpress and ODK
	
	Make this Package Accessible for All Users
	------------------------------------------
	
	There are three ways to make the file available to users:
	
	- Place it on a network location. This should be a location users have access
	  to after they log in to their computer.
	
	- Place the file on the computers' local hard drive and run it from there.
	
	- You may deploy this file to your user's computers using System Management
	  Software.
	
	Update the Registry on the Workstation
	--------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys and
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To update the registry on the workstation, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Select the following Registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
	
	3. From the Edit menu, point to New, and then click String Value.
	
	4. In the right pane, change the New Value #1 to UserLogin, and press Enter.
	  Double-click the UserLogin value.
	
	5. In the Edit String dialog box, for Value data, type in the full path name of
	  where you have placed your IExpress package as described in the "Creating a
	  User-Specific Profile with IExpress: section above, and then click OK.
	
	6. Quit Registry Editor.
	
	Each time a user logs on to the computer, a profile will be generated.
	
	For additional information on using IExpress and Outlook, please see the IExpress
	Deployment Kit for Outlook available on the Microsoft anonymous ftp server:
	
	  File Name: Odkidk98.exe
	  Location : ftp://ftp.microsoft.com/softlib/mslfiles/odkidk98.exe
	
	Additional query words: idk odkidk profgen newprof multiple runonce inf odk deploy
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:97,98
	Issue type        : kbhowto
	
	=============================================================================
	
