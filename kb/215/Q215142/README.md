---
layout: page
title: "Q215142: SMS: Errors in Status Messages 615, 616, 617, 618, 619 and 620."
permalink: /kb/215/Q215142/
---

## Q215142: SMS: Errors in Status Messages 615, 616, 617, 618, 619 and 620.

	Article: Q215142
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Systems Management Server version 2.0 server component receives a SQL
	error from the SQL Server, it logs the error to its log file. The component then
	reports the SQL error as a status message with an ID ranging from 615 to 620.
	This depends on whether the error is a "SQL Message" or "SQL Error", and what
	the "SQL Severity" of the error is.
	
	CAUSE
	=====
	
	These status messages are all interpreted as "Informational" when an SQL server
	problem occurs, therefore Systems Management Server will report these messages
	as Informational regardless of their severity.
	
	The Systems Management Server (SMS) administrator may not be aware of the
	problem, as it takes a lot of Informational messages for the component status
	summary threshold to change the component status to "Warning" or to "Error" in
	the Systems Management Server Administrator Console.
	
	Status messages 615, 616, 617, 618, 619 and 620 are all interpreted as
	"Informational" messages by Systems Management Server 2.0.
	
	Microsoft has confirmed this to be a problem in the Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Status messages 615 and 618 should remain Informational.
	Status messages 616 and 619 should be listed as Warnings.
	Status messages 617 and 620 should be listed as Errors.
	
	Additional query words: prodsms kbstasum
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
