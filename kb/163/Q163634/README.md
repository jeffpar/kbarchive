---
layout: page
title: "Q163634: XCLN: Can't Synchronize Microsoft Schedule+ File if Offline"
permalink: kb/163/Q163634/
---

## Q163634: XCLN: Can't Synchronize Microsoft Schedule+ File if Offline

	Article: Q163634
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:4.0,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to synchronize your local schedule file with the server file,
	you receive the following error message:
	
	  Your schedule may have been only partially synchronized. Try again later. An
	  unknown error occurred.
	
	CAUSE
	=====
	
	This error occurs when any of the following are true:
	
	- You start Microsoft Schedule+ while you are not connected to your network.
	
	  -or-
	
	- You start the Microsoft Exchange client while you are not connected to your
	  network.
	
	  -or-
	
	- You are experiencing network problems or problems with the Microsoft Exchange
	  Server.
	
	RESOLUTION
	==========
	
	To correct this problem if you are not logged on to the network, do the
	following in Microsoft Schedule+:
	
	1. On the File menu, click Exit and Log Off.
	
	2. Log on to your network.
	
	3. Start Microsoft Schedule+
	
	You can now synchronize the local file with the server file.
	
	NOTE: If you are not physically connected to a network, you must establish a
	persistent (async) connection before you attempt to start Microsoft Schedule+
	online. You can establish a persistent connection using Shivaremote for Windows
	3.1 or Windows for Workgroups 3.x, RNA for Windows 95 or RAS for Windows NT.
	Once you establish the remote connection,, start Microsoft Schedule+ and then
	synchronize the local file with the server file.
	
	If you are receiving this error because of network problems, contact your network
	administrator.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0,7.0
	Hardware          : x86
	
	=============================================================================
	
