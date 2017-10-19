---
layout: page
title: "Q85606: FAX: Error Returning Notification to User"
permalink: /kb/085/Q85606/
---

## Q85606: FAX: Error Returning Notification to User

	Article: Q85606
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Microsoft Mail Gateway to Fax cannot return notification to the
	Microsoft Mail user, the "Failure to return Sender the confirmation" error
	usually indicates a missing P1 directory in the mail database, or insufficient
	access rights for the user ID the gateway is logged in as.
	
	Check to make sure the P1 directory exists. If it does, check for access rights
	in the MAILDATA directory.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to FAX Administrator's Guide"
	
	Additional query words: 3.00 pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
