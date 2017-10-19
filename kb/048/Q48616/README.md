---
layout: page
title: "Q48616: Mac Wkst: Cannot Print to Local Printer When Using a NetModem"
permalink: /kb/048/Q48616/
---

## Q48616: Mac Wkst: Cannot Print to Local Printer When Using a NetModem

	Article: Q48616
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to print messages from Microsoft Mail to a printer connected over
	AppleTalk, the message may not print when Mail is accessed remotely through a
	Shiva NetModem.
	
	CAUSE
	=====
	
	This problem only occurs if the user and the printer are on the same side of the
	modem, and the Mail server is on the other side of the modem.
	
	AppleTalk can only use one serial port at a time. Because AppleTalk is currently
	channeled through the modem port (via the NetModem), those devices connected
	through the printer port (the normal AppleTalk channel) cannot be accessed.
	
	The inability to channel AppleTalk through both serial ports is a limitation of
	AppleTalk.
	
	WORKAROUND
	==========
	
	To print the message, do the following:
	
	1. Save the message on disk.
	
	2. Disconnect from the remote server.
	
	3. Restart your Macintosh.
	
	MORE INFORMATION
	================
	
	If you are using Microsoft Mail version 3.1 or later, you can move any messages
	to a locally stored folder, disconnect from the server, and then print the
	message while you are in an offline session.
	
	
	Additional query words: 3.00 LaserWriter
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
