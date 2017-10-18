---
layout: page
title: "Q127733: SMTP: Err Msg: 134 Error Accessing SMTP Configuration File"
permalink: kb/127/Q127733/
---

## Q127733: SMTP: Err Msg: 134 Error Accessing SMTP Configuration File

	Article: Q127733
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add an additional postoffice to your configuration, the
	Microsoft Mail Gateway to SMTP may display the following error message in the
	Administrator program:
	
	  134 Error accessing SMTP Configuration File
	
	CAUSE
	=====
	
	The local postoffice records are created in the MAILDATA\SMTP\LOCAL.CFG file. If
	this file does not exist or is not available, or if the SMTP directory does not
	exist, users will get this error.
	
	RESOLUTION
	==========
	
	Check the rights to the SMTP subdirectory and ensure the file exists. If it does
	not exist, you can restore the LOCAL.CFG file from a backup of the postoffice,
	copy the file from the SMTP Gateway disk, or let the Administrator program
	re-create it by reconfiguring the SMTP gateway.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
