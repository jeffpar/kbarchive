---
layout: page
title: "Q127727: SMTP: Err Msg: The Following Recipients Could Not Be Reached"
permalink: /kb/127/Q127727/
---

## Q127727: SMTP: Err Msg: The Following Recipients Could Not Be Reached

	Article: Q127727
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user sends mail to SMTP recipients, the mail is returned almost
	immediately with an error:
	
	  The following recipients could not be reached...
	
	CAUSE
	=====
	
	The postoffice was installed on a PC/NFS volume on a UNIX server. The
	permissions for the postoffice files may not be set to 7/7/7, which means
	read/write/execute for owner/group/world.
	
	RESOLUTION
	==========
	
	Ensure that all postoffice files--in particular, the SMTP gateway mailbag
	file--are set to 7/7/7.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
