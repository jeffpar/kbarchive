---
layout: page
title: "Q153649: Dataloader Aborts Insertion of MIF After SQL Error"
permalink: /kb/153/Q153649/
---

## Q153649: Dataloader Aborts Insertion of MIF After SQL Error

	Article: Q153649
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbDataLoader smsgeneral smsdatabase smsdataloader kbArtTypeINF
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	On a busy site, the Systems Management Server Dataloader may become deadlocked
	with another Systems Management Server process. The following informational
	error from the SQL Server appears and the insertion of the MIF that was being
	processed at the time is aborted:
	
	  format insert error in csql->Execute:
	
	This results in partial information being left in the database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	
	Additional query words: prodsms alerter SQL
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbDataLoader smsgeneral smsdatabase smsdataloader kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
