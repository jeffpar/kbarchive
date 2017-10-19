---
layout: page
title: "Q183904: XCLN: How to Delete All MAPI Profiles for a User"
permalink: /kb/183/Q183904/
---

## Q183904: XCLN: How to Delete All MAPI Profiles for a User

	Article: Q183904
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; winnt:4.0,5.0,5.5; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes how to delete all the MAPI profiles defined for a Windows
	95 or Windows NT user. This may be required in situations where a large number
	of profiles have been set up by MAPI applications that have not deleted the
	profiles after the applications have been uninstalled.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	The location of the MAPI profiles varies, depending on the operating system being
	used.
	
	For Windows 95, the profiles are saved in the registry under the following key:
	
	  HKEY_CURRENT_USER\SOFTWARE\MICROSOFT
	  \WINDOWS MESSAGING SUBSYSTEM\PROFILES
	
	NOTE: The text of the preceding command has been wrapped for readability. The
	break in the first line is not necessary when you type this command at your
	command prompt.
	
	For Windows NT, the profiles are saved in the registry under the following key:
	
	  HKEY_CURRENT_USER\SOFTWARE\MICROSOFT\WINDOWS NT
	  \CURRENTVERSION\WINDOWS MESSAGING SUBSYSTEM\PROFILES
	
	NOTE: The text of the preceding command has been wrapped for readability. The
	break in the first line is not necessary when you type this command at your
	command prompt.
	
	To delete all MAPI profiles, delete the PROFILES registry subkey and recreate it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; winnt:4.0,5.0,5.5; :8.0,8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	
