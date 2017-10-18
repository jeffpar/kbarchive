---
layout: page
title: "Q86101: PC Win: MSMAIL.INI Entries in [MMF]"
permalink: kb/086/Q86101/
---

## Q86101: PC Win: MSMAIL.INI Entries in [MMF]

	Article: Q86101
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists and explains all the entries in the Microsoft Mail for
	Windows private profile, MSMAIL.INI, that are contained in the [MMF] section.
	
	MORE INFORMATION
	================
	
	[MMF]
	-----
	
	Most entries in this section affect automatic compression of the Mail message
	file. By default, message files have the extension .MMF. When enabled, automatic
	compression uses idle time on your computer to recover disk space freed by
	deleting messages and return that space to the file system.
	
	AutoDisconnectInterval=<number of minutes>:
	
	This entry sets the amount of system idle time before a Mail file not stored
	locally is closed. Any system activity reopens a closed Mail file automatically.
	Closing Mail files that are stored on the Mail server ensures that they can be
	backed up when your system administrator backs up the Mail server. If your Mail
	file is stored locally, you should back it up using the Mail Backup command. If
	this entry is set to 0 (zero), your Mail file is closed only when you exit and
	sign out of Mail. This setting should be larger than the Secs_Till_Fast_Compress
	setting to give Mail time to compress the Mail file before it is closed.
	
	The default value is 60 minutes of system inactivity.
	
	CelemMax=<number>:
	
	This entry specifies the maximum number of messages Mail will allow to be placed
	in a folder. It is for debugging purposes only.
	
	The default value is 5400, which is the maximum in all cases.
	
	Kb_Free_Start_Compress=<number of kilobytes>:
	
	The message store manager's background compression algorithm will kick in when it
	detects at least this much recoverable space in your message file. Both this
	entry and Percent_Free_Start_Compress are always active; the first one to
	trigger starts compression.
	
	The default value is 300K.
	
	Kb_Free_Stop_Compress=<number of kilobytes>:
	
	The message store manager's background compression algorithm will shut off when
	there is less than this much recoverable space in your message file. This avoids
	extensive compression trying to recover the last little bit of free space. Both
	this entry and Percent_Free_Stop_Compress are always active; the last one to
	trigger stops compression.
	
	The default value is 100K.
	
	No_Compress=<0/1>:
	
	Set this entry to 1 to entirely disable background compression of the message
	store.
	
	The default value is 0 (background compression is enabled).
	
	Percent_Free_Start_Compress=<number>:
	
	Background compression will start when the amount of recoverable space rises
	above this percentage of the total file size. Both this entry and
	Kb_Free_Start_Compress are always active; the first one to trigger starts
	compression.
	
	The default value is 10 (ten percent).
	
	Percent_Free_Stop_Compress=<number>:
	
	Background compression will stop when the amount of recoverable space falls below
	this percentage of the total .MMF file size. Both this entry and
	Kb_Free_Stop_Compress are always active; the last one to trigger stops
	compression.
	
	The default value is 5 (5 percent).
	
	Secs_Till_Fast_Compress=<number of seconds>:
	
	The background compression algorithm has a "fast mode" and a "slow mode." It
	begins in slow mode, trying to avoid impacting system response time. After a
	number of seconds of system inactivity, defined by this entry, it will switch to
	fast mode. Any user activity will switch it back into slow mode.
	
	The default value is 600 seconds (ten minutes) of system inactivity.
	
	Additional query words: 3.00 3.00b 3.20 MMF
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : :3.0,3.0b,3.2
	
	=============================================================================
	
