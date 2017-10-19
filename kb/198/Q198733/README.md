---
layout: page
title: "Q198733: XADM: SA Logs Event ID 5007 with Message Tracking Enabled"
permalink: /kb/198/Q198733/
---

## Q198733: XADM: SA Logs Event ID 5007 with Message Tracking Enabled

	Article: Q198733
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The System Attendant (SA) may log the following event in the application for a
	brief period of time. The SA and the other Exchange Server services do not stop,
	and mail flow is unaffected.
	
	  Event ID 5007:
	  Category: General
	  Type: Error
	  An error occurred during the message tracking decode operation.
	  Function:ScWriteLog:ScWriteField. <<0xc0020021 - The process cannot
	  access the file because another process has locked a portion of the
	  file.>>
	
	While the SA logged the above Event ID 5007, the Internet Mail Service logs the
	following Event ID:
	
	  Event ID 3016:
	  Category: Message Transfer
	  Type: Warning
	  An error occurred while logging a message tracking record. This will not
	  affect message delivery. Verify that message tracking is configured
	  correctly.
	
	Finally, the Message Transfer Agent (MTA) may log the Event ID 2026.
	
	  Event ID 2026:
	  Type: Warning
	  An internal MTA error occurred. Contact Microsoft Product Support Services.
	  Unable to write to the message tracking log, error code (BASE XFER-IN 20 89)
	  (16)
	
	CAUSE
	=====
	
	Event ID 5007 indicates that the current message tracking log file was locked by
	another process. The System Attendant must be able to write to the current
	message tracking log file that is found in the Exchsrvr\Tracking.log file. The
	Event ID 3016 from the Internet Mail Service is logged because the Internet Mail
	Service is dependent on the System Attendant to actually write to the message
	tracking log file. The same is true for the MTA.
	
	The System Attendant will write to the message tracking log file when message
	tracking is enabled on any or all of the following:
	
	- Microsoft Exchange Information Store
	- Microsoft Exchange Message Transfer Agent
	- Microsoft Exchange Internet Mail Service
	
	The reason that the System Attendant cannot write to the message tracking log
	file is because some other process has the current log file opened and locked.
	
	WORKAROUND
	==========
	
	Determine what process has the message tracking log file open. Then have that
	process release the log file so that the System Attendant can successfully write
	to it.
	
	Processes that may lock the message tracking log file can include backup
	software. Another cause for the log file to be locked is that someone currently
	has the file open with an editor of some sort.
	
	MORE INFORMATION
	================
	
	To determine if the backup software being used is locking the message tracking
	log file, examine the backup software's own log to see if it records the times
	it backs up particular files. If the backup software logs such information, then
	compare the time that the backup software was backing up the mesage tracking log
	files to the time that the System Attendant logged Event ID 5007. If they are
	the same, the backup software is locking the message tracking log file and
	preventing the System Attendant from writing to the file.
	
	Additional query words: mad mad.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
