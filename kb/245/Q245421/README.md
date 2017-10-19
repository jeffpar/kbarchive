---
layout: page
title: "Q245421: XCLN: Summary of Nickname Features in Different Outlook Versions"
permalink: /kb/245/Q245421/
---

## Q245421: XCLN: Summary of Nickname Features in Different Outlook Versions

	Article: Q245421
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Outlook, there is a feature called Nicknames (which can also be referred to
	as AutoNameCheck). Nicknames work differently in the different versions of
	Outlook. This article discusses those differences in addition to providing
	general information on nicknames.
	
	MORE INFORMATION
	================
	
	How to Create a Nickname File
	-----------------------------
	
	1. Start Microsoft Outlook.
	
	2. Open a new message.
	
	3. In the To field, type an ambiguous name. For example, if you have Franklin
	  Roosevelt and Theodore Roosevelt in your global address list, you can type
	  "roosevelt" (without the quotation marks).
	
	4. Press the TAB key to move the cursor out of the To field.
	
	5. With AutoNameCheck turned on, this name does not resolve, and you see a wavy
	  red line underneath what you typed in. Right-click the text in the To field,
	  and a sub-menu with possible matches appears. Click the one you want to
	  resolve the name to.
	
	You have just created a nickname file. The next time you type in this ambiguous
	name, it will resolve to the name that you selected from the list. When it
	resolves from the nickname file, it will have a green dashed underline (instead
	of a solid black underline). This is your indication that the name was resolved
	by the nickname file.
	
	What Is the Name of the Nickname File and Where Is It Stored?
	-------------------------------------------------------------
	
	The nickname file is given the same name as the profile that was used to log on
	to Outlook and is appended with a ".nick" extension. For example:
	
	  
	  +--------------------------------------------------+
	  | Profile name         | Nickname file name        | 
	  +--------------------------------------------------+
	  | MS Exchange Settings | MS Exchange Settings.nick | 
	  +--------------------------------------------------+
	  | TestUser             | TestUser.nick             | 
	  +--------------------------------------------------+
	  | John Smith           | John Smith.nick           | 
	  +--------------------------------------------------+
	
	The nickname file is stored in one of the following locations:
	
	  
	  +--------------------------------------------------------------------------------------------------------------------------+
	  | Operating system                          | Location                                                                     | 
	  +--------------------------------------------------------------------------------------------------------------------------+
	  | Microsoft Windows NT Server               | drive:\%SystemRoot%\Profiles\profile name\Application Data\Microsoft\Outlook | 
	  +--------------------------------------------------------------------------------------------------------------------------+
	  | Microsoft Windows NT Workstation          | drive:\%SystemRoot%\Profiles\profile name\Application Data\Microsoft\Outlook | 
	  +--------------------------------------------------------------------------------------------------------------------------+
	  | Microsoft Windows 95/Microsoft Windows 98 | drive:\%SystemRoot%\Application Data\Microsoft\Outlook                       | 
	  +--------------------------------------------------------------------------------------------------------------------------+
	  | Windows 95/Windows 98 with User Profiles  | drive:\%SystemRoot%\Profiles\profile name\Application Data\Microsoft\Outlook | 
	  +--------------------------------------------------------------------------------------------------------------------------+
	
	Nicknames in Outlook 97 and Outlook 98
	--------------------------------------
	
	When you create a nickname file in either Outlook 97 or Outlook 98, Outlook uses
	the naming convention and folder location mentioned in the preceding "What Is
	the Name of the Nickname File and Where Is It Stored?" section. When you create
	the nickname file, a registry key is created to point to this file and location.
	That registry key is:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Outlook\AutoNameCheck
	
	When you perform an action in either Outlook 97 or Outlook 98 that requires name
	resolution from a nickname file, Outlook looks to the registry key to find the
	file. If the registry key does not exist, it can't find a nickname file to use
	(or a nickname file doesn't exist) and the names do not resolve. A nickname file
	and its corresponding registry key must be created.
	
	You can only use one nickname file with Outlook 97 and Outlook 98, even though
	you may have multiple mail profiles that you use to log on to Outlook with. Only
	one file can be referenced by the registry key. Because the registry key is
	under HKEY_CURRENT_USER, it is used by the currently logged-on Microsoft Windows
	NT user for any mail profile that is used to log on to Outlook.
	
	Nicknames in Outlook 2000
	-------------------------
	
	When you create a nickname file in Outlook 2000, Outlook uses the naming
	convention and directory location mentioned in the "What Is the Name of the
	Nickname File and Where Is It Stored?" section. Unlike Outlook 97 and Outlook
	98, Outlook 2000 does not write a registry key.
	
	NOTE: The registry key may exist if you had Outlook 97 or Outlook 98 on the
	computer and upgraded to Outlook 2000.
	
	Because Outlook 2000 does not write a registry key, you can create a nickname
	file for each mail profile that is used to log on to Outlook (for the same
	Windows NT user). When you are logged on to Outlook 2000 and you perform an
	action that requires Outlook to use the nickname file for name resolution,
	Outlook searches the folder where the nickname files are stored and looks for a
	nickname file by the same name as the mail profile you are currently logged on
	with. If it does not find a file, the name is not resolved. A nickname file must
	be created.
	
	For example, a user logs on to a computer as John Smith (with a Windows NT
	profile name of JSmith). John has two mail profiles listed in the Mail tool in
	Control Panel, that are named MS Exchange Settings and Personal. John logs on to
	Outlook using each profile and uses the procedure outlined above to create a
	nickname file for each profile. In the C:\Winnt\Profiles\JSmith\Application
	Data\Microsoft\Outlook folder, John has two files: MS Exchange Settings.nick and
	Personal.nick. When John logs on to Outlook using the MS Exchange Settings
	profile and types in a nickname on the To line, Outlook searches the folder,
	finds the MS Exchange Settings.nick file, and resolves the name. This allows
	John to have different nicknames available in each profile, and those nicknames
	can only be resolved if they exist in the nickname file for the profile that he
	is currently logged on with. A mail profile can only have one nickname file
	associated with it.
	
	Nickname.exe Utility
	--------------------
	
	The Nickname.exe utility was created to allow you to remove entries from the
	nickname file. You may need to remove entries from this file because of
	corrupted entries or entries for addresses that are no longer valid.
	
	The Nickname.exe utility was originally written to read the registry key to find
	the nickname file. So, by design, this utility originally had the same
	limitations found in Outlook 97 and Outlook 98: it could only read from one
	nickname file, the file that the registry key pointed to.
	
	The utility was updated with the release of Outlook 2000. Because Outlook 2000
	does not use a registry key to find the nickname file but allows multiple
	nicknames files based on the user profile, the utility was updated to account
	for this new functionality.
	
	The updated utility reads from the registry key, if it exists. If the registry
	key does not exits, Nickname looks for a nickname file that has the same name as
	the profile that you are currently logged on with.
	
	To download the Nickname.exe file for Outlook 97 or Outlook 98, go to the
	following Microsoft Web site:
	
	  http://support.microsoft.com/support/downloads/dp4165.asp
	
	To download the updated Nickname.exe file for Outlook 97, Outlook 98, and Outlook
	2000, go to the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads/release.asp?ReleaseID=17743
	
	Related Knowledge Base Articles
	-------------------------------
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q164598 OL97: How to Clear the AutoNameCheck List
	
	  Q179997 OL98: (CW) How to Clear the AutoNameCheck List
	
	  Q198008 OL2000: (CW) How to Clear the AutoNameCheck List
	
	  Q242074 OL2000: Utility to Remove Corrupted Names in Nickname List
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98
	Issue type        : kbhowto
	
	=============================================================================
	
