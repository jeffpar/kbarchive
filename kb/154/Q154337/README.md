---
layout: page
title: "Q154337: XCON: MTA Fails to Start with 9405 Error Message"
permalink: /kb/154/Q154337/
---

## Q154337: XCON: MTA Fails to Start with 9405 Error Message

	Article: Q154337
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 S
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 5.0, 5.0 SP1, 5.0 SP2, 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange message transfer agent (MTA) fails to start. The
	following error message appears in the event log.
	
	  Error 9405 Source: MSExchangeMTA
	  Field Engineering
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate
	  Error: Base-MS Not initialised-Error=3909, Parm1=0,Parm2=0 [BASE MAIN BASE 1]
	  (16).
	
	  Event id: 9405
	  Description: An unexpected error has occurred which may cause the MTA to
	  terminate
	  Error: Fatal severity error - 3909 {BASE MAIN BASE 1] (16).
	
	When you attempt to run MTAcheck.exe from the Exchsrvr\bin subdirectory, the same
	error is reported.
	
	  Base-MS Not initialised-Error=3909,Parm1=0,Parm2=0
	  Fatal severity error - 3909.
	
	MORE INFORMATION
	================
	
	When the Microsoft Exchange MTA initializes it checks all the files in the
	\Exchsrvr\Mtadata subdirectory. The error message is reported when the files
	required to initialize the MTA are missing or corrupted. 3909 means "NO BASE
	RECORD IN SCT". These files can be sct.inp or .tpl files or other files in the
	Mtadata subdirectory (except the .dat files).
	
	RESOLUTION
	==========
	
	Replace the corrupted files from the Microsoft Exchange compact disc. It is safe
	to copy all the files to the MTADATA subdirectory except the .dat files. The
	files can be copied from the Exchange compact disc from the \Setup\I386\Mtadata
	subdirectory, OR from the Exchsrvr\Mtadata subdirectory of another server with a
	functional MTA. If you replace these files from a compact disc, remove the
	read-only attributes from the files. In any event, whether copying these files
	from a compact disc or from another Exchange server, the versions (service packs
	and/or MTA hotfixes) must match.
	
	
	
	Additional query words: SP2 mta crash down server
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange500SP1 kbExchange500SP2 kbExchange400SP1 kbExchange400SP2 kbExchange400SP3 kbExchange400SP4 kbExchange400SP5 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	
	=============================================================================
	
