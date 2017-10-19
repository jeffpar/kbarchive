---
layout: page
title: "Q100032: PC WSPlus: Free/Busy Times Are Not Received"
permalink: /kb/100/Q100032/
---

## Q100032: PC WSPlus: Free/Busy Times Are Not Received

	Article: Q100032
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Schedule Distribution (SCHDIST.EXE) among several Microsoft Mail
	for PC Networks postoffices from version 1.0 of Microsoft Schedule+ for Windows,
	the free and busy times from one or more postoffices will not transmit or be
	received by one or more postoffices.
	
	One or more postoffices participating in Schedule Distribution will never receive
	updates from other postoffices. For example, the following log file indicates
	that a message from RB/SMPO2 is generated; however, the line immediately
	following indicates a message received, but without a "From:" line.
	
	  [16:07:41] - <m:> RB/SMPO: Checking for schedule updates ...
	  [16:07:41] - Sending schedule update
	  [16:07:41] -          From: RB/SMPO
	  [16:07:41] -            To: RB/SMPO2
	  [16:07:41] -
	  [16:07:41] - <n:> RB/SMPO2: Checking for schedule updates ...
	  [16:07:42] - Sending schedule update
	  [16:07:42] -          From: RB/SMPO2
	  [16:07:42] -            To: RB/SMPO
	  [16:07:42] - Received schedule update
	  [16:07:42] -            To: RB/SMPO2
	  [16:07:42] -
	
	CAUSE
	=====
	
	When multiple postoffices have similar network and postoffice names, the
	Schedule Distribution program does not fully validate the entire
	Network/Postoffice/Mailbox name address to which the Free/Busy times are
	addressed. In the example above, RB/SMPO2 actually picks up the message meant
	for RB/SMPO and processes it without indicating an error message.
	
	RESOLUTION
	==========
	
	To resolve this problem, change either the network name or the postoffice name.
	For example, if you rename RB/SMPO to RB/SMPO1, Schedule Distribution will
	work.
	
	NOTE: This problem will also affect a mail user's Personal Address Book (PAB)
	making the old addresses (before the name/network change) invalid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 1.0 and 1.0a of
	Microsoft Schedule+ for Windows. This problem was corrected in SCHDIST.EXE
	version 1.0a.2. If you do not have version 1.0a.2 (or later), a self-extracting
	file is available for download.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Schdupd.exe now
	  (http://download.microsoft.com/download/splus10win/Update/1.0a.2/WIN/EN-US/Schdupd.exe)
	
	Schdupd.exe contains the following files:
	
	  Schdist.exe  (194,154 byte)
	  Readme.txt
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	SCHDIST.EXE version 1.0a.2 is also included with Application Note WA0902,
	Microsoft Schedule+ SCHDIST.EXE Version 1.0A.2 Update." You can have this
	Application Note mailed or faxed to you by contacting Microsoft Product Support
	Services.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : :1.0,1.0a
	
	=============================================================================
	
