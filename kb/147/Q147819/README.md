---
layout: page
title: "Q147819: Update Job Fails If Clients Logged On to Share"
permalink: kb/147/Q147819/
---

## Q147819: Update Job Fails If Clients Logged On to Share

	Article: Q147819
	Product(s): Microsoft Windows NT
	Version(s): 1.10
	Operating System(s): 
	Keyword(s): kbDespooler smsdespooler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A repeating job to update any kind of package distribution job will fail if
	there are clients logged on to the share. We currently have no mechanism for
	removing and keeping users off of shares while a share is being updated by
	Systems Management Server.
	
	CAUSE
	=====
	
	The job status remains in retry mode for a week until the job actually gets
	marked as having failed. Despooler is unable to copy new files to the server
	share because some of the files in the server share were in use by clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Systems Management Server 1.1.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS110
	Version           : 1.10
	
	=============================================================================
	
