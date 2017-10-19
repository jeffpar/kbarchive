---
layout: page
title: "Q185869: Logon Scripts Fail to Process When Using Network Client 3.0"
permalink: /kb/185/Q185869/
---

## Q185869: Logon Scripts Fail to Process When Using Network Client 3.0

	Article: Q185869
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.0,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	For additional information regarding the Microsoft Network Client version 3.0,
	please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q135465
	  TITLE : README.TXT: Microsoft Network Client version 3.0
	
	SYMPTOMS
	========
	
	Logon scripts fail to run when using a Network Client 3.0 client.
	
	CAUSE
	=====
	
	By default, the Microsoft Network Client version 3.0 only logs on to the local
	workstation and not the domain. This causes the logon script to fail to process.
	
	RESOLUTION
	==========
	
	The client can be configured to be validated by the domain by using one of the
	following methods:
	
	- Edit the System.ini in the Net directory and change the lmlogon= from 0 to 1.
	  Add logondomain=<domainname>.
	
	- Modify the Autoexec.bat or type the following command from the prompt:
	
	  net logon <username> /domain:<domainname>
	
	After logging on to the domain, your logon script will process first, and then
	the following message appears:
	
	  The server \\<servername> successfully logged you on as <username>.
	  Your privilege level on this domain is <level>.
	  The command completed successfully.
	
	Additional query words: MS net dos
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : WinNT:3.0,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
