---
layout: page
title: "Q266195: SMS 2.0  Packages Are Not Distributed to Child Sites"
permalink: kb/266/Q266195/
---

## Q266195: SMS 2.0  Packages Are Not Distributed to Child Sites

	Article: Q266195
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
	
	After you create a new package, you do not see the package sent to any child
	sites. Looking in Schedule.box\ToSend shows a backlog of files, and Sched.log
	shows an error that states:
	
	  Skipping minijob. Could not retrieve the request ID
	
	CAUSE
	=====
	
	This behavior can occur because the Sms\Inboxes\Schedule.box\Uid folder is empty
	or does not exist. The SMS\Inboxes\Schedule.box\Uid folder is expected to have
	only two files, the .req and .job files. If there are more than two files, the
	Scheduler component can also become confused about which job ID is to be used
	for the next job.
	
	RESOLUTION
	==========
	
	To resolve this behavior, you must open the Sms\Inboxes\Schedule.box\Uid folder
	and create two empty text files called <nnnnnnnn>.job and
	<nnnnnnnn>.req, where <nnnnnnnn> is the number in the filename,
	which is greater than any of the files' names that were already found in the
	directory SMS\Inboxes\Schedule.box.
	
	MORE INFORMATION
	================
	
	The following is an example of a log error message recorded in the Sched.log
	file when the behavior occurs:
	
	  Error. Could not give send request to scheduler. Possibly could not reach the
	  schedule box on the site server. Skipping minijob.
	
	Additional query words: prodsms sched log
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
