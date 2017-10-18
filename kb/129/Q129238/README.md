---
layout: page
title: "Q129238: XCLN: Err Msg: Could Not Log On to Exchange Address..."
permalink: kb/129/Q129238/
---

## Q129238: XCLN: Err Msg: Could Not Log On to Exchange Address...

	Article: Q129238
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Exchange on a Microsoft Windows 3.1 computer that is
	running Microsoft Workgroup Add-On for MS-DOS as its network redirector, the
	following error is generated when the user profile is being set up:
	
	  Could not log on to the Exchange address book server
	  Microsoft Exchange Client - 17402 - [810043FA]
	
	CAUSE
	=====
	
	Running the Microsoft Exchange Windows 3.x client on a Windows 3.1 machine using
	Microsoft Workgroup Add-On for MS-DOS is not supported.
	
	RESOLUTION
	==========
	
	Use the LAN Manager version 2.2c MS-DOS network redirector instead of the
	Workgroup add-on or use Windows for Workgroups version 3.11.
	
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : 4.0 5.0
	
	=============================================================================
	
