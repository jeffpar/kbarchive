---
layout: page
title: "Q156304: XCLN: Err Msg: The Set of Folders Could Not Be Opened"
permalink: kb/156/Q156304/
---

## Q156304: XCLN: Err Msg: The Set of Folders Could Not Be Opened

	Article: Q156304
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start the Microsoft Exchange client with a new profile in offline mode
	for the first time, the following error message appears:
	
	  The set of folders could not be opened. You must connect to your Microsoft
	  Exchange Server computer with the current profile before you can synchronize
	  your folders with your offline folder file.
	
	When you click OK, the Microsoft Exchange client opens, but any attempt to access
	your mailbox results in the same error message.
	
	The offline folder file (.OST) must be fully synchronized with the computer
	running Microsoft Exchange Server in online mode before it can be used offline.
	
	CAUSE
	=====
	
	This occurs when you use the Inbox Setup Wizard to create a profile and answer
	Yes to the Microsoft Exchange Server service question "Do you travel with this
	computer?" The result is that a default offline folder file is created in the
	system directory (that is, C:\WINDOWS\ EXCHANGE.OST for Windows or SYSTEM
	FOLDER, PREFERENCES, EXCHANGE PROFILES, OFFLINE FOLDERS for Macintosh operating
	systems) and the option "Choose the connection type when starting" is selected.
	
	When you start the Microsoft Exchange client using this profile, you are
	presented with the choice to connect or work offline. If you choose to work
	offline, and you have not yet synchronized the .OST file, the error message
	appears.
	
	WORKAROUND
	==========
	
	To resolve this problem:
	
	1. Start the Microsoft Exchange client using this profile and connect in online
	  mode to the computer running Microsoft Exchange Server by one of the
	  following methods:
	
	   - For both Windows and Macintosh users: Use the client on a computer that is
	     connected to the computer running Microsoft Exchange Server by a LAN.
	
	  -OR-
	
	   - For Windows users only: Establish a dial-up connection to the computer
	     running Microsoft Exchange Server prior to starting the Microsoft Exchange
	     client.
	
	2. On the Tools menu, click Synchronize and click All Folders. Allow the
	  synchronization of all folders to complete before proceding.
	
	3. Exit and log off and restart the Microsoft Exchange client in offline mode.
	
	MORE INFORMATION
	================
	
	You must log on to Windows 95 in order to access your offline folders. This
	might simply be the Windows login or a network client like the Client for
	Microsoft Networks login. Regardless, if you bypass this login (hitting Escape
	or selecting Cancel) then you will not have access to the Offline Folder File.
	
	Additional query words: exclnfaq
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500Mac kbExchange400Mac kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
