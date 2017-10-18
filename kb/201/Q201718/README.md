---
layout: page
title: "Q201718: SMS: Insufficient Access Permissions Produce Generic Error Msg"
permalink: kb/201/Q201718/
---

## Q201718: SMS: Insufficient Access Permissions Produce Generic Error Msg

	Article: Q201718
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 17-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a Crystal Info for SMS report from the Systems Management Server
	Administrator Console, the report fails to run, and you receive the following
	error message:
	
	  Cannot open SQL server
	
	CAUSE
	=====
	
	The user account being used to run the report does not have appropriate NTFS
	access permissions to the folder in which the report is stored.
	
	WORKAROUND
	==========
	
	Either grant appropriate access permissions to the account being used to run the
	report, or use an account with the appropriate permissions. The user account
	that is used to create and run reports needs to have at least read, write, and
	execute permissions on the CINFO folder and subfolders.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	
	For additional information about potential errors running Systems Management
	Server reports, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q244959 Error Message Refreshing Report in SMS Administrator Console
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
