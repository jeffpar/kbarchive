---
layout: page
title: "Q86102: PC Win: MSMAIL.INI Entries in &#91;Providers&#93;"
permalink: /kb/086/Q86102/
---

## Q86102: PC Win: MSMAIL.INI Entries in &#91;Providers&#93;

	Article: Q86102
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists and explains all the entries in the Microsoft Mail for
	Windows private profile, MSMAIL.INI, that are contained in the [Providers]
	section.
	
	[Providers]
	
	Logon=<DLL name>
	----------------
	
	This entry identifies a single DLL that contains the logon and session management
	code for your mail system. It is often, but not necessarily, the same as the
	Transport and Name entries. You should enter the base name of the DLL, without
	the .DLL extension. You may prefix a path if the DLL is not in a directory on
	your MS-DOS path or in the Mail executable directory.
	
	The default value is MSSFS.
	
	Name=<DLL names>
	----------------
	
	This entry identifies one or more DLLs that contain functions required to browse
	system and personal user lists. One of the values is often, but not necessarily,
	the same as the Logon and Transport entries. You should enter base names of the
	DLLs, separated by blanks, without the .DLL extension. You may prefix a path if
	the DLLs are not in a directory on your MS-DOS path or in the Mail executable
	directory.
	
	The order of providers in this entry is significant. When Mail resolves ambiguous
	names typed into a message, if it finds an exact match in the first provider in
	the list, it will not go on to query the rest. Placing the personal address book
	provider first can save time in that process.
	
	The default value is MSSFS PABNSP.
	
	SharedFolders=<DLL name>
	------------------------
	
	This entry identifies a single DLL that contains functions required to read and
	write messages in Microsoft PC Mail shared folders. It is unlikely that any DLL
	other than MSSFS will have this functionality.
	
	The default value is MSSFS.
	
	Transport=<DLL name>
	--------------------
	
	This entry identifies a single DLL that contains the functions necessary to send
	and receive mail on your mail system. It is often, but not necessarily, the same
	as the Logon and Name entries. You should enter the base name of the DLL,
	without the .DLL extension. You may prefix a path if the DLL is not in a
	directory on your MS-DOS path or in the Mail executable directory.
	
	The default value is MSSFS.
	
	Additional query words: 3.00 3.00b 3.20 Providers
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
