---
layout: page
title: "Q152879: Schedule+ 7.0 is Unable to Write to Schedule+ 1.0 CAL"
permalink: /kb/152/Q152879/
---

## Q152879: Schedule+ 7.0 is Unable to Write to Schedule+ 1.0 CAL

	Article: Q152879
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Schedule+ on Microsoft Mail for PC Networks, with mixed
	Microsoft Schedule+ 1.0 and Microsoft Schedule+ 7.0 users, you might have
	interoperability issues in which a Microsoft Schedule+ 7.0 user can only open a
	Microsoft Schedule+ 1.0 CAL file as Read Only. In this mixed environment, you
	can no longer have unattended resources like conference rooms and must manually
	handle meeting requests for these resources.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the Service Pack applied, you will be able to write from Microsoft
	Schedule+ 7.0 into a Microsoft Schedule+ 1.0 file for single-instance
	appointments and meetings. Writing contacts, tasks, or recurring appointments
	will still fail.
	
	For more information about Schedule+ 1.0 and 7.0 interoperability, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q153753 Schedule+ 1.0 and 7.0 Interoperability in MS Mail
	
	
	Additional query words: 4.00 7.00
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0; winnt:4.0
	
	=============================================================================
	
