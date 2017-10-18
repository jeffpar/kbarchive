---
layout: page
title: "Q167028: XCLN: Err Msg: The Properties for This Item Are Not Available"
permalink: kb/167/Q167028/
---

## Q167028: XCLN: Err Msg: The Properties for This Item Are Not Available

	Article: Q167028
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to get the properties of the Microsoft Exchange Client Inbox,
	you receive the following error message:
	
	  The properties for this item are not available.
	
	Note: You may be able to bring up the Exchange properties via the Mail and Fax
	icon in Control Panel even though right-clicking the inbox results in the above
	error message.
	
	CAUSE
	=====
	
	This problem occurs because the Mlshext.dll file is corrupted or missing from
	the Microsoft Exchange Client program directory.
	
	RESOLUTION
	==========
	
	To resolve this problem, copy the Mlshext.dll file from the Windows 95 disks
	using the Windows 95 Extract tool. The Mlshext.dll file is contained in the
	Microsoft Windows 95 client setup cabinet file, Exchng2.cab, or in the Windows
	95 setup cabinet file, Win95_06.cab. By default, the Microsoft Exchange Client
	is installed in the following directory, and that is where this file should be
	copied to:
	
	  C:\Program Files\Microsoft Exchange\
	
	
	For information about using the Extract tool, type "Extract" at a Windows 95
	command prompt, or see the following article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95
	Version           : 4.0
	
	=============================================================================
	
