---
layout: page
title: "Q320638: SMS: Job Files May Back Up in the Scheduler.box Folder"
permalink: kb/320/Q320638/
---

## Q320638: SMS: Job Files May Back Up in the Scheduler.box Folder

	Article: Q320638
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Job files may back up in the SMS\Inboxes\Scheduler.box and the
	Inboxes\Replmgr.box\Ready folders on Systems Management Server (SMS) 2.0 parent
	and child sites. When this occurs, the Sched.log file may contain an entry that
	is similar to:
	
	  <JOB JYF3B7Z>~ Updating status of minijob "Inter Site Replication".~
	  Need to generate send request for minijob.~ Skipping minijob. Could not
	  retrieve the request ID
	
	CAUSE
	=====
	
	This behavior can occur if the required .req and .job token files are deleted
	from the SMS\Inboxes\Scheduler.box\UID folder on the SMS site server.
	
	You must not rename, modify, or delete these token files. SMS does not delete
	these files under typical circumstances.
	
	WORKAROUND
	==========
	
	To work around this behavior:
	
	1. Use a text editor to create new token .req and .job files.
	
	2. Use a text editor to create two empty text files named <nnnnnnnn>.job
	  and <nnnnnnnn>.req, where <nnnnnnnn> is a number that is higher
	  than the highest number in the file name of any files that are located in the
	  SMS\Inboxes\Schedule.box folder.
	
	3. Place these files in the SMS\Inboxes\Scheduler.box\UID folder.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
