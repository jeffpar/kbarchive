---
layout: page
title: "Q126659: PC WRmt: Err Msg: Account Not Valid User of Message File"
permalink: kb/126/Q126659/
---

## Q126659: PC WRmt: Err Msg: Account Not Valid User of Message File

	Article: Q126659
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Microsoft Mail System Selector program to choose Microsoft Mail
	for PC Networks (MSMAIL) after you selected Microsoft Mail Remote for Windows,
	you may get the following error:
	
	  Account not valid user of message file
	
	As a result, you will not be able to log in to Mail.
	
	CAUSE
	=====
	
	The error occurs if the following entries are in any of the MSMAIL.INI files:
	
	  [Providers]
	  Name= PABNSP MSSFS FAXSTUB
	  Transport=FAXSTUB
	  Logon=FAXSTUB
	
	NOTE: For Mail for PC Networks, the section should read:
	
	  [Providers]
	  Name= PABNSP MSSFS
	  Transport= MSSFS
	  Logon= MSSFS
	
	RESOLUTION
	==========
	
	If you delete any reference to FAXSTUB in the MSMAIL.INI files and any instance
	of the file in the WINDOWS\MSMAIL\MSMAIL and the WINDOWS\MSMAIL\MSRMT
	directories, you will be able to log into Mail.
	
	Microsoft does not support using Microsoft At Work Fax, which ships with Windows
	for Workgroups version 3.11, with version 3.2 of Microsoft Mail for Windows.
	
	MORE INFORMATION
	================
	
	When you use the Selector program to change between MSMAIL and the Remote Mail
	clients, the program will read the MSMAIL.INI and look for files in the MSRMT
	and the MSMAIL directories under the WINDOWS directory. If any reference is made
	to the FAXSTUB.DLL in the NAME= line in the MSMAIL.INI, you will get the above
	error message.
	
	When you install Windows for Workgroups and the At-Work Fax, the FAXSTUB.DLL and
	FAXOPT.DLL files (from Windows for Workgroups) and the MSSFS.DLL file (from
	version 3.2 of Mail for PC Networks) will be loaded. The MSSFS.DLL is the Mail
	for PC Networks Shared File System transport file. The latest version of this
	file is 266,848 bytes in size and dated 2\24\95.
	
	For more information, please see the "Windows for Workgroups Resource Kit" pages
	6-82.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q115162 PC WFW: Microsoft At Work PC Fax with Mail 3.2 Windows Client
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
