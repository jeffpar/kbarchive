---
layout: page
title: "Q149389: XADM: Newprof Not Add Exchange Server Service to Profile"
permalink: kb/149/Q149389/
---

## Q149389: XADM: Newprof Not Add Exchange Server Service to Profile

	Article: Q149389
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Automatic Profile Generator program (Newprof.exe) the Microsoft
	Exchange Server Service is not added to the new profile created.
	
	If the Newprof.exe file is run with the -s option, you will receive the following
	message in the program window:
	
	  Unable to configure message service [Microsoft Exchange Server]
	  Deleting service [Microsoft Exchange Server]
	
	MORE INFORMATION
	================
	
	Newprof.exe reads information from a Profile Settings (.PRF) file. This file
	contains the settings to be added to the new profile.
	
	This file should have a section called [Service List] similar to the section
	shown below:
	
	  [Service List]
	  Service1 = Microsoft Exchange Client
	  Service2 = Microsoft Exchange Server
	  Service3 = Personal Address Book
	
	Find the entry name whose value is Microsoft Exchange Server. In the above
	example this entry has the name Service2.
	
	Go to the section with this name in the .PRF file. Change the value of the entry
	ConversionProhibited to TRUE. If this entry is not present add it.
	
	When you add the Microsoft Exchange Server service to the profile being created,
	Newprof.exe uses the ConversionProhibited entry in the .PRF file to determine
	whether or not to contact the Microsoft Exchange Server to validate the
	Microsoft Exchange Server mailbox to be used with the profile being created.
	
	If the value of the ConversionProhibited entry is TRUE, then the Microsoft
	Exchange Server Service is configured even if the server is unavailable or the
	mailbox does not exist in the Exchange Server Directory. If the value of the
	ConversionProhibited entry is FALSE, or the entry is not present, Newprof.exe
	tries to validate the mailbox against the Directory and deletes the service if
	it fails to logon to the server.
	
	In the above example, if the Newprof.exe program is run with the -s option the
	above error messages will be displayed in the program window:
	
	Additional query words: prf xcln Outlook OL20 OL98 OL97
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
