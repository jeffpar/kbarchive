---
layout: page
title: "Q240072: Cannot Open Setup.log File Installing Terminal Server SP4"
permalink: /kb/240/Q240072/
---

## Q240072: Cannot Open Setup.log File Installing Terminal Server SP4

	Article: Q240072
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Service Pack 4 (SP4) for Windows NT Server 4.0,
	Terminal Server Edition, you may receive the following error message:
	
	  Service Pack Setup Error:
	  Service Pack Setup cannot open or modify your SETUP.LOG file.
	
	CAUSE
	=====
	
	This error message can occur if Update.exe in SP4 Setup cannot gain access to
	the %SystemRoot%\Repair\Setup.log file. The default location for this file is
	the C:\WTSRV\Repair folder.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Verify the existence of the Setup.log file in the %SystemRoot%\Repair folder.
	  If this file does not exist, you must perform an Upgrade installation of
	  Windows NT Server 4.0, Terminal Server Edition, to re-create the Setup.log
	  file.
	
	2. Verify that the account that you are using to install SP4 has access to the
	  Setup.log file. To do this, try to open the file with Notepad.exe. If you are
	  unable to open the Setup.log file, use Windows NT Explorer to change the
	  file-level permissions on the file. Grant the user account you are using
	  appropriate permissions to open and modify the file.
	
	3. Verify that the following lines are present in the Setup.log file:
	
	  [Files.WinNt]
	  \%SystemRoot%\system32\hal.dll = "halapic.dll","%11xxx%"
	
	  For example: \WTSRV\system32\hal.dll = "halapic.dll","14fbb")
	
	If these lines are not present or the path is incorrect, add the appropriate
	lines and make any necessary changes to the path to the Hal.dll file.
	
	Note that %SystemRoot% and %11xxx% are variables, and the values vary from one
	computer to another.
	
	
	MORE INFORMATION
	================
	
	For additional informationrelated topics, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	  Q215465 Installing Service Packs from Terminal Server Client Sessions
	
	Additional query words: WTS
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : :4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
