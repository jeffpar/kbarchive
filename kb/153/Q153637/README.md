---
layout: page
title: "Q153637: Remove Package From Server Job Fails if Files Are in Use"
permalink: /kb/153/Q153637/
---

## Q153637: Remove Package From Server Job Fails if Files Are in Use

	Article: Q153637
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDespooler smsdespooler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a "Remove Package From Server Job" command, the Systems Management
	Server Despooler Service cannot delete files that are currently in use. The
	Systems Management Server Despooler keeps track of files that cannot be deleted,
	and it attempts to "deltree" the files at a later interval. If the distribution
	server is a NetWare server and the files are in use, the Systems Management
	Server Despooler incorrectly lists the file names. Therefore, the Despooler
	fails to completely remove the files from the NetWare distribution server.
	
	The Despool.log file displays a line similar to the following:
	
	  Failed to deltree [ASCII 226]O[ASCII 248]w[ASCII 244][ASCII 239]v, Win32
	  Error = 0
	
	Note the file name above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms remove package
	
	======================================================================
	Keywords          : kbnetwork kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
