---
layout: page
title: "Q176239: XADM: DB Won't Start; Circular Logging Deleted Log File Too Soon"
permalink: /kb/176/Q176239/
---

## Q176239: XADM: DB Won't Start; Circular Logging Deleted Log File Too Soon

{% raw %}

	Article: Q176239
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage exc55
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With circular logging enabled, the database may not restart after an abnormal
	stop, and a JET_errFileNotFound error may be displayed numerically in any of the
	following forms:
	
	- -1811
	
	- 4294965485
	
	- 0xfffff8ed
	
	In the application event log, events 1120 and 5000 contain the hexadecimal
	version (0xfffff8ed) of the error.
	
	NOTE: Events 1120 and 5000 are generic database start errors; you must interpret
	the code in their descriptions to understand the exact reason that the database
	stopped responding.
	
	CAUSE
	=====
	
	This may be caused by a problem in the checkpoint file. If this is the case, and
	you delete the Edb.chk file, the database starts. However, pay close attention
	to the cautions listed in the "Resolution" section of this article before you
	delete the checkpoint file.
	
	If circular logging is enabled, Exchange Server deletes transaction log files as
	soon as all of the data in them has been written out to the main database files.
	This process is tracked by the checkpoint. The actual checkpoint that the
	database uses is held in memory, but it is frequently written out to the Edb.chk
	file.
	
	Another process may hold open the Edb.chk file, which prevents Exchange Server
	from updating the checkpoint file when the checkpoint advances. Applications
	such as virus scanners and backup programs may "steal" the checkpoint file
	temporarily. Exchange Server continues to function normally, and to update the
	checkpoint in memory, while it waits for the other process to release the
	Edb.chk file.
	
	If the Edb.chk file is locked against Exchange Server for more than a short
	period of time, the log file listed in it may be deleted before the Edb.chk file
	is updated. If the database stops suddenly, the checkpoint in memory is lost.
	When the database is restarted, it must rely on the checkpoint recorded in the
	Edb.chk file. Because the Edb.chk file points to a nonexistent transaction log
	file, the database does not start, and a JET_errFileNotFound error is displayed.
	
	RESOLUTION
	==========
	
	Remove the Edb.chk file, and then restart the database service.
	
	If the Edb.chk file is gone, Exchange Server scans through all the available log
	files, and then begins recovery using the first log file that it finds.
	
	Cautions
	--------
	
	Do not remove the Edb.chk file unless you know exactly why you need to remove it,
	and unless you know that you can safely remove it in your current circumstances.
	Removing the Edb.chk file in certain circumstances may irreparably damage the
	database. For additional information about the checkpoint, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q240145 XADM: How to Tell Which Transaction Log Files Can Be Safely Removed
	
	  Q237767 XADM: Making and Restoring Offline Backups
	
	If you are experiencing the conditions described here, and if all of the
	following statements are true, you can safely delete the Edb.chk file:
	
	- You have not moved, renamed, deleted, replaced, or otherwise tampered with
	  the database or transaction logs after the abnormal shutdown. For recovery to
	  succeed, the database and transaction logs must be in exactly the same state
	  that they were in when the database stopped.
	
	- If you ran the eseutil /r command against the database, and you used the /is
	  or /ds switches to run it. (The eseutil /r /is command is for the information
	  store, and the eseutil /r /ds command is for the directory service.)
	
	  If you omit the /is or /ds switches, the soft recovery assumes that the log
	  files are in the folder that you ran Eseutil from. If the log files are
	  elsewhere, as they usually are, soft recovery creates a new Edb.log file and
	  tries to recover against the wrong set of log files. You can still delete the
	  Edb.chk file after such an event, but the database still may not start, and
	  you may need to restore it from a backup.
	
	- You have circular logging enabled. If circular logging was disabled at the
	  time of the abnormal shutdown, none of the recommendations in this article
	  apply. If circular logging is disabled, transaction log files are not
	  automatically deleted when the checkpoint advances. This means that the cause
	  of the restart problem is different than the cause described here.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
