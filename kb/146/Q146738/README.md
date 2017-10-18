---
layout: page
title: "Q146738: XFOR: Forcing a Dirsync Cycle on the Exchange Server"
permalink: kb/146/Q146738/
---

## Q146738: XFOR: Forcing a Dirsync Cycle on the Exchange Server

	Article: Q146738
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server can act as the directory synchronization (dirsync)
	server for Microsoft Mail for PC Networks. It can also act as a dirsync
	requestor. This article explains the steps to take if a T1 or T2 cycle is
	required.
	
	MORE INFORMATION
	================
	
	The first thing you need to do is add the following registry entry on the
	Exchange Server:
	
	1. On the Exchange Server, run REGEDT32.EXE.
	
	2. Under the subtree HKEY_LOCAL_MACHINE go to the following subkey:
	
	     \System\CurrentControlSet\Services\MSExchangeDX
	
	3. From the Edit menu, choose Add Value.
	
	4. Type PauseKicksDX as the Value Name.
	
	5. Enter REG_DWORD as the Data Type.
	
	6. Choose OK.
	
	7. Type 1 (number one) as the data, verify HEX is selected in the Radix field.
	
	The parameter above has the function of triggering a T1 or T2 cycle. If the
	Exchange Server is configured as a Requestor then a T1 cycle is triggered. If
	the Exchange Server is configured as the dirsync server then a T2 cycle is
	triggered.
	
	Once the above registry entry is entered to trigger, assuming that your dirsync
	server or Requestor is configured in the Exchange Server Admin program, you can
	force a T1 or T2 cycle by doing the following:
	
	1. Run Control Panel on the Exchange Server, and choose Services.
	
	2. Select the Microsoft Exchange Directory Synchronization Service.
	
	3. Select the Pause button and answer Yes.
	
	  The following message appears:
	
	  [STOP] "Could not pause the Microsoft Exchange Directory Synchronization
	  service on <ServerName>. Error 2140: An internal Windows NT error
	  occurred."
	
	  This is a good message. You have triggered either a T1 or T2 cycle, depending
	  on whether the Exchange Server is the Directory Synchronization Requestor or
	  the Server, respectively.
	
	DEFINITIONS AND REFERENCES
	--------------------------
	
	T1 is the process that occurs when a Requestor assembles a message to the dirsync
	server with updates of the Requestor's address list.
	
	T2 is the process that occurs when the dirsync server takes all the updates from
	all requestors, makes the necessary address changes and sends a message to all
	the requestors with the updated information.
	
	Directory synchronization is outlined in Chapter 14 "Synchronizing Directories
	with other Systems" in the Administrators Guide (RC2).
	
	T1 and T2 are explained in greater detail in the "Directory Synchronization
	(Dir-Sync)" document. For more information about how to obtain this document,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	Additional query words: faq dir-sync dirsynch
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
