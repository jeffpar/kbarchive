---
layout: page
title: "Q157214: XCON: Deleting a &quot;Bad&quot; Message from the MTA Queue"
permalink: kb/157/Q157214/
---

## Q157214: XCON: Deleting a &quot;Bad&quot; Message from the MTA Queue

	Article: Q157214
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot kbusage exc4 exc5 exc55
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a message becomes stuck in the Microsoft Exchange message transfer agent
	(MTA) queue, it may be necessary to delete the message in order to restore the
	operability of the MTA.
	
	MORE INFORMATION
	================
	
	When a message becomes stuck in the MTA queue, the Windows NT Application Event
	Log may display an event similar to the following:
	
	  2171/ExchangeMTA/Processing/An MTA database server error was encountered
	  while reading an attribute error code 2171 0x6
	  An MTA database server error was encountered while reading an attribute called
	  from XAPI Database error code 2171 object at fault 0600006b
	
	To delete the message and restore the operability of the MTA:
	
	1. Stop the MTA. There are two ways to do this:
	
	  In Control Panel Services, click Server Manager, click Computer, and then
	  click Services.
	
	  -OR-
	
	  Run the following command at an MS-DOS prompt:
	
	  "net stop msexchangemta" (without the quotation marks)
	
	2. Make a copy of the Mtadata directory. This will provide means for restoring
	  the directory in the event an incorrect file was removed. Microsoft support
	  engineers may request this directory if you call in for further assistance.
	
	3. After stopping the MTA service, open a command prompt. In the Exchsrvr\bin
	  directory, carry out the command for MTACHECK. The minimum command line
	  should be:
	
	  "mtacheck /v /f c:\mta.txt" (without the quotation marks)
	
	  The output file can be redirected to any drive with any file name. Verify that
	  the referenced .dat file in the event error exists in the mtacheck log. If
	  this is a .dat file in the MTA Work Queue, ensure that it does correspond to
	  that queue (0100002B).
	
	4. Note the "object at fault." This identifier points to a .dat file in the
	  "exchsrvr\mtadata" subdirectory. If the event log does not identify the
	  object at fault, it may be possible to identify the problem object by
	  correlating the time/date stamp of the message in the MTA queue with that of
	  a given .dat file. However, care must be exercised because there may be many
	  .dat files with the same time/date stamp. If there are multiple files with
	  the same time/date stamp, examination of the files with a text editor may
	  reveal the problem .dat file.
	
	5. Access the "bad" *.dat file, and then move or rename the file.
	
	6. Open the command prompt again and run the MTACHECK utility from an MS-DOS
	  prompt.
	
	7. Start the MTA.
	
	8. If the event errors still continue, or the MTA will not restart, call
	  Microsoft Technical Support for further assistance.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q282780 XCON: MTA Database Format and Structure
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	
