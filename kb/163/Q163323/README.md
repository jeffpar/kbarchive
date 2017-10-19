---
layout: page
title: "Q163323: XCON: Mtacheck.log"
permalink: /kb/163/Q163323/
---

## Q163323: XCON: Mtacheck.log

	Article: Q163323
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mtacheck.log files are text files that show the results of running the
	Mtacheck.exe utility. The Mtacheck utility scans the internal database of the
	message transfer agent (MTA) and looks for objects that are damaged and may
	interfere with the queue processing. It places defective objects from the queues
	in files for you to examine later. In addition, the Mtacheck utility rebuilds
	the queues so the MTA can be restarted and return to processing.
	
	MORE INFORMATION
	================
	
	You can run the Mtacheck utility manually, but it also runs automatically when
	the Microsoft Exchange Message Transfer Agent service determines that the MTA
	was not shut down correctly. If the Mtacheck utility is run automatically,
	events are logged to the application event log and an Mtacheck.log file is
	generated in the Mtacheck.out directory from the Exchsrvr\Mtadata directory that
	contains the Db*.dat files that are used by the MTA (If you have used
	Performance Optimizer to move Mtadata files, there may be more than one Mtadata
	directory.)
	
	If you run the Mtacheck utility manually, no logging is performed unless you
	specify that it be performed on the command line. In addition, logs can be
	created in any location and with any name. In terms of logging, the automatic
	Mtacheck utility is the equivalent of running following at the command line (but
	an automatic run also logs events to the event logs):
	
	  mtacheck /v /f \exchsrvr\mtadata\mtacheck.out\mtacheck.log
	
	Interpreting Mtacheck Utility Output
	------------------------------------
	
	The Mtacheck utility examines each queue in the database. If it finds an error
	message, it reports the name of the queue, the type of error message, and the
	number of messages that are returned to the rebuilt queue. For example:
	
	  Queue 'xxxxxxx' required reconstruction
	   - corrupted queue file
	  23 messages recovered to the queue
	
	The Mtacheck utility examines the objects in the queues. If an object is in
	error, it removes the object from the queue and places it in a file in the
	Exchsrvr\Mtadata\Mtacheck.out directory. It reports the object ID, error type,
	queue name, and the MTS-ID of the corrupted message, if known.
	
	An MTS-ID is assigned to each message by its transport service and remains with
	the message to its destination, although gateways may assign additional
	identifiers. It consists of the originating server, the date and time the
	message was sent, and a unique hexadecimal identifier for the message. A sample
	Mtacheck log can include:
	
	  Object 300596 invalid
	   - missing object file
	  Object removed from queue 'xxxxxxx'
	  MTS-ID: c=US;a= ;p=Owen;l=Washington0196012020010800000CDE
	
	When the MTA finishes processing, one of following messages is displayed to
	describe the results:
	
	  Database clean, no errors detected
	
	  Database repaired, some data may have been lost
	
	  <number> queue(s) required repair out of <percent> detected
	  <number> object(s) damaged out of <percent> detected
	
	  Database has serious errors and cannot be reconstructed.
	
	  Some objects missing from the Boot Environment. Please reload the files from
	  the BOOTENV directory on the install CD.
	
	The boot environment message indicates that report templates and other objects
	that the MTA needs are missing and the MTA cannot generate them. These objects
	are included in the files in the Bootenv folder. After you install them, rerun
	the Mtacheck utility. When the process is complete, restart the MTA.
	
	WARNING: Copy only objects that are missing to the boot environment. If you
	replace existing objects, all of the messages in the MTA queues are deleted.
	
	Searching Message Logs by Message ID
	------------------------------------
	
	The Mtacheck utility also reports the message IDs of removed objects in its log
	if they can be determined. If message tracking is enabled, you can search the
	tracking log for the object by its message ID. If you determine the path of the
	bad message, it can lead you to the cause of the problem. You may need to search
	the logs of more than one site to find the complete path of the message.
	
	Additional query words: whitepaper logging section
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
