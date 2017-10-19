---
layout: page
title: "Q155382: XCLN Win: Err Msg: The Set of Folders Could Not Be Opened"
permalink: /kb/155/Q155382/
---

## Q155382: XCLN Win: Err Msg: The Set of Folders Could Not Be Opened

	Article: Q155382
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start the Microsoft Exchange Windows 95 client or Microsoft Outlook,
	the following error message appears:
	
	  The set of folders could not be opened. You must connect to the Exchange
	  Server computer with the current profile before you can synchronize your
	  folders with your offline folder file.
	
	After you connect to the server using the current profile, you still receive this
	error every time you start the client after restarting the computer.
	
	CAUSE
	=====
	
	You are not logging on to Windows on startup.
	
	RESOLUTION
	==========
	
	When Starting Windows 95, instead of clicking Cancel at the logon prompt, log on
	to Windows with an account.
	
	MORE INFORMATION
	================
	
	You must log on to Windows 95 in order to access your offline folders. This
	might simply be the Windows login or a network client like the Client for
	Microsoft Networks login. Regardless, if you bypass this login (hitting Escape
	or selecting Cancel) then you will not have access to the Offline Folder File.
	
	With offline folders you can carry replicas of information that you would
	normally maintain on the server with you. Just as Microsoft Exchange does not
	allow anyone to log on to the server without domain validation, no one is
	allowed to access offline folders without logon validation through Windows 95.
	
	For more information about this issue when using OEM versions of Windows 95,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q141858 No Windows or Network Logon Dialog Box at Startup
	
	Additional query words: offline
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0,97
	
	=============================================================================
	
