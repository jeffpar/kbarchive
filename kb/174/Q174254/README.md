---
layout: page
title: "Q174254: XADM: GroupWise Users must Grant Access Rights to be Migrated"
permalink: kb/174/Q174254/
---

## Q174254: XADM: GroupWise Users must Grant Access Rights to be Migrated

	Article: Q174254
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	To migrate Novell GroupWise users, the Microsoft Exchange Migration Wizard
	requires that each user grant read and write access rights to Mail/Phone,
	Appointments, Notes, Tasks, and select Read Items Marked Private.
	
	MORE INFORMATION
	================
	
	If none of these access rights are selected, an error is detected and recorded
	in the Windows NT Server Event Viewer Application log. If partial access rights
	are granted (for example, read and write access to Mail/Phone and Appointments
	are granted, but no rights are granted to Notes and Tasks), the migration
	completes without reporting an error accessing Note and Task information. Only
	Mail/Phone and Appointment data is migrated.
	
	Due to GroupWise implementation issues, Exchange Server cannot detect and report
	on access rights to individual mail types.
	
	Additional query words: migwiz xbeta gwise
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
