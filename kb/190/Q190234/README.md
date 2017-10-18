---
layout: page
title: "Q190234: PRB: How to Modify the Personal Directory for All New Users"
permalink: kb/190/Q190234/
---

## Q190234: PRB: How to Modify the Personal Directory for All New Users

	Article: Q190234
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry Key" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you save mail messages or attachments in Outlook 97 and Exchange Client,
	you are taken to the \personal directory in your profile directory, instead of
	to your home directory, as specified in User Manager.
	
	This is a problem when you want to centralize the user's personal data to a Home
	directory.
	
	CAUSE
	=====
	
	Outlook, Exchange Client, and many other applications have the following
	registry key hard-coded for the current directory:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\Current Version\ 
	  \Explorer\User Shell Folders\Personal
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	The default value is %USERPROFILE%\Personal, in the user's profile directory
	under the system root of the computer on which the user is currently logged. In
	the case of Terminal Server clients, this directory is the user's profile
	directory in the system root of the Terminal server.
	
	RESOLUTION
	==========
	
	Existing Users
	--------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	Users with Profile Already Configured
	-------------------------------------
	
	You must edit the registry for each user:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Select the following Registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	     \Explorer\User Shell Folders
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	1. Modify the following value with the appropriate directory path (to specify
	  the user's home directory, type "%HOMEDRIVE%%HOMEPATH%" (without the
	  quotation marks)):
	
	     Personal
	
	2. Quit Registry Editor.
	
	New Users
	---------
	
	To modify the default setting for all new users, modify the same registry setting
	in the %SYSTEMROOT%\Profiles\Default User\NTUSER.DAT:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Select the HKEY_USERS Window and click Registry - Load Hive.
	
	3. Open the following file:
	
	  %SYSTEMROOT%\Profiles\Default User\ntuser.dat
	
	4. When prompted for a Key Name, type "TEMP" (without the quotation marks).
	
	5. You will see a TEMP hive under HKEY_USERS. Select the following key:
	
	  TEMP\Software\Microsoft\Windows\CurrentVersion
	     \Explorer\User Shell Folders
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	1. Modify the following value with the appropriate directory path (to specify
	  the user's home directory, type "%HOMEDRIVE%%HOMEPATH%" (without the
	  quotation marks)):
	
	  Personal
	
	2. To unload Ntuser.dat from REGEDT32, highlight TEMP under HKEY_USERS and click
	  Registry - Unload Hive.
	
	3. Quit Registry Editor when finished.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following applications are known to use the "Personal" registry key to
	determine the user's current directory:
	
	Outlook 97, 98
	Exchange Client\Windows Messaging
	Microsoft Word 97
	Office 2000 ("My Documents" on the places bar)
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q178156 XCLN: How to Change the Default Directory Location
	
	For information about the procedures to modify Excel 97, see:
	
	  Q153543 XL: How to Change the Alternate Startup Folder (Directory)
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
