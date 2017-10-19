---
layout: page
title: "Q115495: SMTP: Err Msg: 552 Error in Local Delivery"
permalink: /kb/115/Q115495/
---

## Q115495: SMTP: Err Msg: 552 Error in Local Delivery

	Article: Q115495
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
	
	Version 3.0 of the Microsoft Mail Gateway to SMTP sometimes encounters this
	error when it tries to put incoming mail into an MS Mail postoffice:
	
	  spawning SMTPPUT
	  ERROR SMTPPUT
	  [tx] 552 Error in local delivery
	
	CAUSE
	=====
	
	The process that puts incoming SMTP messages into the MS Mail postoffice--
	SMTPPUT--was unable to complete. The Gateway PC won't take responsibility for
	the incoming message.
	
	RESOLUTION
	==========
	
	To resolve a problem with SMTPPUT, check the files involved with putting mail
	into an MS Mail database. Check these files and directories to ensure that none
	have inappropriate attributes or are hidden, ownerless, locked open, or
	corrupt:
	
	- The GLB and all .GLB files
	
	- All directories under MAI and ATT
	
	- The P1 directory and all files beneath it
	
	NOTE: Use ATTRIB to check for hidden files. Under Novell NetWare, use the NDIR
	command to check for ownerless files.
	
	Additional query words: 3.00 ERRMSG SMTPPUT
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
